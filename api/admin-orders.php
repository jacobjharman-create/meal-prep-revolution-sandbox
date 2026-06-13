<?php
declare(strict_types=1);

require __DIR__ . '/lib.php';

function admin_format_time(string $iso): string {
  $timestamp = strtotime($iso) ?: time();
  return gmdate('g:i A', $timestamp);
}

function admin_ensure_ops(array &$ops, array $order): array {
  $id = (string) ($order['id'] ?? '');
  $existing = is_array($ops[$id] ?? null) ? $ops[$id] : [];
  $ops[$id] = [
    'station' => mpr_text($existing['station'] ?? 'Unassigned', 80),
    'priority' => (bool) ($existing['priority'] ?? false),
    'paid' => (bool) ($existing['paid'] ?? (($order['payment_status'] ?? '') === 'Paid')),
    'note' => mpr_text($existing['note'] ?? '', 1000),
    'history' => array_values(array_slice((array) ($existing['history'] ?? ['Ticket imported ' . admin_format_time($order['created_at'] ?? mpr_now())]), -20)),
  ];
  return $ops[$id];
}

function admin_customer_followups(array $customers): array {
  $rows = [];
  foreach ($customers as $customer) {
    if (!is_array($customer)) continue;
    $recurring = mpr_text($customer['recurring_frequency'] ?? '', 80);
    $orderCount = (int) ($customer['order_count'] ?? 0);
    $lastMeals = (int) ($customer['last_total_meals'] ?? 0);
    $lifetimeValue = mpr_money($customer['lifetime_value'] ?? 0);
    $priority = 0;
    $reason = 'New customer';
    $nextAction = 'Thank them after handoff';

    if ($recurring !== '') {
      $priority = 100;
      $reason = 'Recurring requested';
      $nextAction = 'Confirm cadence and preferred meals';
    } elseif ($orderCount > 1) {
      $priority = 70;
      $reason = 'Returning customer';
      $nextAction = 'Send reorder reminder';
    } elseif ($lastMeals >= 12) {
      $priority = 45;
      $reason = 'Large first order';
      $nextAction = 'Ask if they want this repeated';
    }

    $rows[] = [
      'name' => mpr_text($customer['name'] ?? 'Customer', 120),
      'contact' => mpr_text($customer['phone'] ?? $customer['email'] ?? '', 160),
      'contact_preference' => mpr_text($customer['contact_preference'] ?? 'text', 40),
      'reason' => $reason,
      'next_action' => $nextAction,
      'recurring_frequency' => $recurring,
      'last_order_id' => mpr_text($customer['last_order_id'] ?? '', 80),
      'last_order_at' => mpr_text($customer['last_order_at'] ?? '', 80),
      'last_total_meals' => $lastMeals,
      'last_estimated_total' => mpr_money($customer['last_estimated_total'] ?? 0),
      'order_count' => $orderCount,
      'lifetime_meals' => (int) ($customer['lifetime_meals'] ?? 0),
      'lifetime_value' => $lifetimeValue,
      'priority' => $priority + min(25, (int) floor($lifetimeValue / 100)),
    ];
  }

  usort($rows, fn ($a, $b) =>
    ($b['priority'] <=> $a['priority'])
    ?: strcmp((string) ($b['last_order_at'] ?? ''), (string) ($a['last_order_at'] ?? ''))
  );

  return array_slice($rows, 0, 12);
}

function admin_payload(array $orders, array $ops): array {
  foreach ($orders as $order) {
    admin_ensure_ops($ops, $order);
  }
  mpr_save_ops($ops);
  $customers = mpr_customers();
  $recurring = array_filter($customers, fn ($customer) => trim((string) ($customer['recurring_frequency'] ?? '')) !== '');
  $returning = array_filter($customers, fn ($customer) => (int) ($customer['order_count'] ?? 0) > 1);
  return [
    'orders' => array_map('mpr_order_summary', $orders),
    'opsState' => $ops,
    'customerInsights' => [
      'total_customers' => count($customers),
      'returning_customers' => count($returning),
      'recurring_interested' => count($recurring),
      'lifetime_meals' => array_sum(array_map(fn ($customer) => (int) ($customer['lifetime_meals'] ?? 0), $customers)),
    ],
    'customerFollowups' => admin_customer_followups($customers),
    'source' => 'server',
    'updated_at' => mpr_now(),
  ];
}

function admin_add_history(array &$ops, string $id, string $message): void {
  $entry = trim($message . ' ' . admin_format_time(mpr_now()));
  $ops[$id]['history'] = array_values(array_slice(array_merge((array) ($ops[$id]['history'] ?? []), [$entry]), -20));
}

function admin_demo_order(string $id, string $name, string $type, string $date, string $window, string $status, int $meals, float $total, string $protein, string $carb, array $vegetables, string $sauce): array {
  $groups = [
    ['id' => 'protein', 'label' => 'Protein', 'selected' => [$protein]],
    ['id' => 'grain', 'label' => 'Grain', 'selected' => [$carb]],
    ['id' => 'vegetables', 'label' => 'Vegetables', 'selected' => $vegetables],
    ['id' => 'sauce', 'label' => 'Sauce', 'selected' => [$sauce]],
  ];
  return [
    'id' => $id,
    'status' => $status,
    'payment_status' => $status === 'New' ? 'Pending checkout' : 'Paid',
    'checkout_url' => mpr_checkout_url(),
    'created_at' => mpr_now(),
    'updated_at' => mpr_now(),
    'customer' => [
      'name' => $name,
      'phone' => '7145550100',
      'email' => '',
      'fulfillment' => $type,
      'date' => $date,
      'window' => $window,
      'notes' => '',
      'allergies' => $id === 'MPR-DEMO-102' ? 'No dairy.' : '',
      'contact_preference' => 'text',
      'address' => [
        'street' => $type === 'delivery' ? '10176 Adams Ave' : '',
        'unit' => '',
        'city' => $type === 'delivery' ? 'Huntington Beach' : '',
      ],
    ],
    'fulfillment' => [
      'type' => $type,
      'date' => $date,
      'window' => $window,
      'notes' => '',
      'allergies' => $id === 'MPR-DEMO-102' ? 'No dairy.' : '',
      'address' => [
        'street' => $type === 'delivery' ? '10176 Adams Ave' : '',
        'unit' => '',
        'city' => $type === 'delivery' ? 'Huntington Beach' : '',
      ],
      'contact_preference' => 'text',
    ],
    'total_meals' => $meals,
    'estimated_total' => $total,
    'line_items' => [[
      'sku' => 'mpr-demo-custom-meal',
      'name' => 'medium custom meal build',
      'quantity' => $meals,
      'unit_price' => round($total / $meals, 2),
      'line_total' => $total,
      'summary' => $protein . ' + ' . $carb . ' + ' . implode(' + ', $vegetables) . ' + ' . $sauce,
      'builder_groups' => $groups,
    ]],
    'cart' => [[
      'title' => 'medium custom meal build',
      'quantity' => $meals,
      'unitPrice' => round($total / $meals, 2),
      'total' => $total,
      'summary' => $protein . ' + ' . $carb . ' + ' . implode(' + ', $vegetables) . ' + ' . $sauce,
      'groups' => array_map(fn ($group) => [
        'label' => $group['label'],
        'selected' => array_map(fn ($name) => ['name' => $name], $group['selected']),
      ], $groups),
    ]],
    'events' => [['event' => 'demo_imported', 'at' => mpr_now()]],
  ];
}

mpr_require_admin();

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$orders = mpr_orders();
$ops = mpr_ops();

if ($method === 'GET') {
  mpr_json_response(200, admin_payload($orders, $ops));
}

if ($method !== 'POST') {
  mpr_json_response(405, ['error' => 'Unsupported method.']);
}

$body = mpr_body();
$action = mpr_text($body['action'] ?? '', 80);

if ($action === 'seed_demo_day') {
  $today = gmdate('Y-m-d');
  $tomorrow = gmdate('Y-m-d', strtotime('+1 day'));
  $orders = [
    admin_demo_order('MPR-DEMO-101', 'Sarah Martinez', 'pickup', $today, 'morning', 'In prep', 18, 224.5, 'Chicken', 'Jasmine Rice', ['Broccoli', 'Peppers'], 'Chimichurri'),
    admin_demo_order('MPR-DEMO-102', 'Trevor Blake', 'delivery', $today, 'midday', 'New', 12, 156, 'Steak', 'Potatoes', ['Green Beans'], 'Garlic Aioli'),
    admin_demo_order('MPR-DEMO-103', 'HB Training Club', 'pickup', $today, 'evening', 'Ready', 32, 416, 'Salmon', 'Quinoa', ['Asparagus'], 'Lemon Herb'),
    admin_demo_order('MPR-DEMO-104', 'Jessica Lee', 'delivery', $tomorrow, 'morning', 'New', 10, 105, 'Eggs', 'Potatoes', ['Peppers'], 'Salsa'),
  ];
  $ops = [
    'MPR-DEMO-101' => ['station' => 'Grill', 'priority' => true, 'paid' => true, 'note' => 'Sauce on side for 6 meals.', 'history' => ['Demo ticket imported', 'Station set to Grill']],
    'MPR-DEMO-102' => ['station' => 'Unassigned', 'priority' => false, 'paid' => false, 'note' => 'Confirm gate code before delivery.', 'history' => ['Demo ticket imported']],
    'MPR-DEMO-103' => ['station' => 'Packout', 'priority' => false, 'paid' => true, 'note' => 'Group order. Label bags by athlete.', 'history' => ['Demo ticket imported', 'Status moved to Ready']],
    'MPR-DEMO-104' => ['station' => 'Cold line', 'priority' => false, 'paid' => true, 'note' => '', 'history' => ['Demo ticket imported']],
  ];
  mpr_save_orders($orders);
  mpr_save_ops($ops);
  mpr_json_response(200, admin_payload($orders, $ops));
}

if ($action === 'clear_fulfilled') {
  $orders = array_values(array_filter($orders, fn ($order) => ($order['status'] ?? '') !== 'Fulfilled'));
  $orderIds = array_fill_keys(array_map(fn ($order) => $order['id'] ?? '', $orders), true);
  $ops = array_filter($ops, fn ($id) => isset($orderIds[$id]), ARRAY_FILTER_USE_KEY);
  mpr_save_orders($orders);
  mpr_save_ops($ops);
  mpr_json_response(200, admin_payload($orders, $ops));
}

if ($action === 'update_ticket') {
  $id = mpr_text($body['id'] ?? '', 80);
  $field = mpr_text($body['field'] ?? '', 80);
  $index = mpr_find_order_index($orders, $id);
  if ($index < 0) {
    mpr_json_response(404, ['error' => 'Ticket not found.']);
  }

  $order = $orders[$index];
  admin_ensure_ops($ops, $order);
  $value = $body['value'] ?? '';

  if ($field === 'status') {
    $next = mpr_text($value, 80);
    if (!in_array($next, ['New', 'In prep', 'Ready', 'Fulfilled'], true)) {
      mpr_json_response(422, ['error' => 'Unsupported status.']);
    }
    $order['status'] = $next;
    $order['updated_at'] = mpr_now();
    admin_add_history($ops, $id, 'Status moved to ' . $next);
  } elseif ($field === 'station') {
    $station = mpr_text($value, 80);
    $ops[$id]['station'] = $station;
    admin_add_history($ops, $id, 'Station set to ' . $station);
  } elseif ($field === 'priority') {
    $ops[$id]['priority'] = (bool) $value;
    admin_add_history($ops, $id, $ops[$id]['priority'] ? 'Priority flagged' : 'Priority removed');
  } elseif ($field === 'paid') {
    $ops[$id]['paid'] = (bool) $value;
    $order['payment_status'] = $ops[$id]['paid'] ? 'Paid' : 'Pending checkout';
    $order['updated_at'] = mpr_now();
    admin_add_history($ops, $id, $ops[$id]['paid'] ? 'Payment marked' : 'Payment unmarked');
  } elseif ($field === 'note') {
    $ops[$id]['note'] = mpr_text($value, 1000);
  } else {
    mpr_json_response(422, ['error' => 'Unsupported ticket field.']);
  }

  $orders[$index] = $order;
  mpr_save_orders($orders);
  mpr_save_ops($ops);
  mpr_json_response(200, admin_payload($orders, $ops));
}

mpr_json_response(422, ['error' => 'Unsupported action.']);
