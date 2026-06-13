<?php
declare(strict_types=1);

require __DIR__ . '/lib.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
  mpr_json_response(405, ['error' => 'POST required.']);
}

$body = mpr_body();
$customerInput = is_array($body['customer'] ?? null) ? $body['customer'] : [];
$fulfillmentInput = is_array($body['fulfillment'] ?? null) ? $body['fulfillment'] : [];
$lineItemsInput = is_array($body['line_items'] ?? null) ? $body['line_items'] : [];
$cartInput = is_array($body['cart'] ?? null) ? $body['cart'] : [];

$addressInput = is_array($fulfillmentInput['address'] ?? null)
  ? $fulfillmentInput['address']
  : (is_array($customerInput['address'] ?? null) ? $customerInput['address'] : []);

$customer = [
  'name' => mpr_text($customerInput['name'] ?? '', 120),
  'phone' => mpr_text($customerInput['phone'] ?? '', 40),
  'email' => strtolower(mpr_text($customerInput['email'] ?? '', 160)),
  'fulfillment' => mpr_text($customerInput['fulfillment'] ?? $fulfillmentInput['type'] ?? 'pickup', 40),
  'date' => mpr_text($customerInput['date'] ?? $fulfillmentInput['date'] ?? '', 40),
  'window' => mpr_text($customerInput['window'] ?? $fulfillmentInput['window'] ?? '', 40),
  'notes' => mpr_text($customerInput['notes'] ?? $fulfillmentInput['notes'] ?? '', 1000),
  'allergies' => mpr_text($customerInput['allergies'] ?? $fulfillmentInput['allergies'] ?? '', 500),
  'contact_preference' => mpr_text($customerInput['contact_preference'] ?? 'text', 40),
  'address' => [
    'street' => mpr_text($addressInput['street'] ?? '', 180),
    'unit' => mpr_text($addressInput['unit'] ?? '', 80),
    'city' => mpr_text($addressInput['city'] ?? '', 120),
  ],
];

$fulfillmentType = in_array($customer['fulfillment'], ['pickup', 'delivery'], true) ? $customer['fulfillment'] : 'pickup';
$customer['fulfillment'] = $fulfillmentType;

if ($customer['name'] === '') {
  mpr_json_response(422, ['error' => 'Customer name is required.']);
}

if ($customer['phone'] === '' && $customer['email'] === '') {
  mpr_json_response(422, ['error' => 'A phone or email is required.']);
}

if ($fulfillmentType === 'delivery' && ($customer['address']['street'] === '' || $customer['address']['city'] === '')) {
  mpr_json_response(422, ['error' => 'Delivery street and city are required.']);
}

if (!$lineItemsInput) {
  mpr_json_response(422, ['error' => 'At least one meal line item is required.']);
}

$lineItems = [];
$totalMeals = 0;
$estimatedTotal = 0.0;

foreach ($lineItemsInput as $item) {
  if (!is_array($item)) continue;
  $quantity = max(1, (int) ($item['quantity'] ?? 0));
  $unitPrice = mpr_money($item['unit_price'] ?? $item['unitPrice'] ?? 0);
  $lineTotal = mpr_money($item['line_total'] ?? $item['total'] ?? ($unitPrice * $quantity));
  $groups = [];
  foreach ((array) ($item['builder_groups'] ?? $item['groups'] ?? []) as $group) {
    if (!is_array($group)) continue;
    $groups[] = [
      'id' => mpr_text($group['id'] ?? '', 80),
      'label' => mpr_text($group['label'] ?? '', 120),
      'selected' => array_values(array_filter(array_map(fn ($selection) => mpr_text(is_array($selection) ? ($selection['name'] ?? '') : $selection, 120), (array) ($group['selected'] ?? [])))),
    ];
  }
  $lineItems[] = [
    'sku' => mpr_text($item['sku'] ?? '', 120),
    'name' => mpr_text($item['name'] ?? $item['title'] ?? 'Custom meal build', 180),
    'quantity' => $quantity,
    'unit_price' => $unitPrice,
    'line_total' => $lineTotal,
    'reorder_key' => mpr_text($item['reorder_key'] ?? $item['key'] ?? '', 500),
    'preview_image' => mpr_text($item['preview_image'] ?? $item['previewImage'] ?? '', 500),
    'summary' => mpr_text($item['summary'] ?? $item['compactDescription'] ?? '', 1000),
    'builder_groups' => $groups,
  ];
  $totalMeals += $quantity;
  $estimatedTotal += $lineTotal;
}

if (!$lineItems) {
  mpr_json_response(422, ['error' => 'At least one valid meal line item is required.']);
}

$safeCart = [];
foreach ($cartInput as $item) {
  if (!is_array($item)) continue;
  $safeCart[] = [
    'title' => mpr_text($item['title'] ?? $item['name'] ?? 'Custom meal build', 180),
    'quantity' => max(1, (int) ($item['quantity'] ?? 1)),
    'unitPrice' => mpr_money($item['unitPrice'] ?? $item['unit_price'] ?? 0),
    'total' => mpr_money($item['total'] ?? 0),
    'summary' => mpr_text($item['summary'] ?? $item['compactDescription'] ?? $item['description'] ?? '', 1000),
    'groups' => is_array($item['groups'] ?? null) ? $item['groups'] : [],
  ];
}

$id = mpr_text($body['request_id'] ?? '', 80);
if (!preg_match('/^MPR-[A-Z0-9-]{5,}$/', $id)) {
  $id = mpr_order_id();
}

$now = mpr_now();
$checkoutUrl = mpr_checkout_url();
$order = [
  'id' => $id,
  'status' => 'New',
  'payment_status' => 'Pending checkout',
  'checkout_url' => $checkoutUrl,
  'catalog_version' => mpr_text($body['catalog_version'] ?? '', 80),
  'customer' => $customer,
  'fulfillment' => [
    'type' => $fulfillmentType,
    'date' => $customer['date'],
    'window' => $customer['window'],
    'notes' => $customer['notes'],
    'allergies' => $customer['allergies'],
    'address' => $customer['address'],
    'contact_preference' => $customer['contact_preference'],
  ],
  'total_meals' => $totalMeals,
  'estimated_total' => mpr_money($estimatedTotal),
  'line_items' => $lineItems,
  'cart' => $safeCart,
  'events' => [
    ['event' => 'order_created', 'at' => $now],
  ],
  'created_at' => mpr_text($body['created_at'] ?? $now, 80),
  'updated_at' => $now,
];

$orders = mpr_orders();
$existingIndex = mpr_find_order_index($orders, $id);
$isNewOrder = $existingIndex < 0;

if ($isNewOrder) {
  array_unshift($orders, $order);
} else {
  $order['events'] = array_merge((array) ($orders[$existingIndex]['events'] ?? []), $order['events']);
  $order['created_at'] = $orders[$existingIndex]['created_at'] ?? $order['created_at'];
  $orders[$existingIndex] = $order;
}
mpr_save_orders($orders);

$customers = mpr_customers();
$customerKey = mpr_customer_key($customer);
$existingCustomer = is_array($customers[$customerKey] ?? null) ? $customers[$customerKey] : [];
$customers[$customerKey] = [
  'key' => $customerKey,
  'name' => $customer['name'],
  'phone' => $customer['phone'],
  'email' => $customer['email'],
  'contact_preference' => $customer['contact_preference'],
  'first_seen_at' => $existingCustomer['first_seen_at'] ?? $now,
  'last_order_id' => $id,
  'last_order_at' => $now,
  'last_fulfillment' => $fulfillmentType,
  'last_total_meals' => $totalMeals,
  'last_estimated_total' => mpr_money($estimatedTotal),
  'order_count' => ($isNewOrder ? (int) ($existingCustomer['order_count'] ?? 0) + 1 : (int) ($existingCustomer['order_count'] ?? 1)),
  'lifetime_meals' => ($isNewOrder ? (int) ($existingCustomer['lifetime_meals'] ?? 0) + $totalMeals : (int) ($existingCustomer['lifetime_meals'] ?? $totalMeals)),
  'lifetime_value' => ($isNewOrder ? mpr_money(($existingCustomer['lifetime_value'] ?? 0) + $estimatedTotal) : mpr_money($existingCustomer['lifetime_value'] ?? $estimatedTotal)),
];
mpr_save_customers($customers);

mpr_json_response($isNewOrder ? 201 : 200, [
  'stored' => true,
  'server_backed' => true,
  'request_id' => $id,
  'checkout_url' => $checkoutUrl,
  'payment_status' => $order['payment_status'],
  'recurring_prompt' => true,
]);
