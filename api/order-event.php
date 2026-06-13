<?php
declare(strict_types=1);

require __DIR__ . '/lib.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
  mpr_json_response(405, ['error' => 'POST required.']);
}

$body = mpr_body();
$id = mpr_text($body['request_id'] ?? '', 80);
if ($id === '') {
  mpr_json_response(422, ['error' => 'Order id is required.']);
}

$orders = mpr_orders();
$index = mpr_find_order_index($orders, $id);
if ($index < 0) {
  mpr_json_response(404, ['error' => 'Order not found.']);
}

$event = mpr_text($body['event'] ?? '', 80);
$allowedEvents = ['checkout_started', 'recurring_selected'];
if (!in_array($event, $allowedEvents, true)) {
  mpr_json_response(422, ['error' => 'Unsupported order event.']);
}

$now = mpr_now();
$order = $orders[$index];
$entry = [
  'event' => $event,
  'at' => $now,
];

if ($event === 'checkout_started') {
  $wallet = mpr_text($body['wallet'] ?? '', 80);
  $order['checkout_started_at'] = $now;
  $order['checkout_wallet'] = $wallet;
  $entry['wallet'] = $wallet;
}

if ($event === 'recurring_selected') {
  $frequency = mpr_text($body['frequency'] ?? '', 80);
  $order['recurring_frequency'] = $frequency;
  $entry['frequency'] = $frequency;

  $customers = mpr_customers();
  $customerKey = mpr_customer_key(is_array($order['customer'] ?? null) ? $order['customer'] : []);
  if (isset($customers[$customerKey])) {
    $customers[$customerKey]['recurring_frequency'] = $frequency;
    $customers[$customerKey]['recurring_selected_at'] = $now;
    mpr_save_customers($customers);
  }
}

$order['events'] = array_slice(array_merge((array) ($order['events'] ?? []), [$entry]), -40);
$order['updated_at'] = $now;
$orders[$index] = $order;
mpr_save_orders($orders);

mpr_json_response(200, [
  'ok' => true,
  'request_id' => $id,
  'event' => $event,
]);
