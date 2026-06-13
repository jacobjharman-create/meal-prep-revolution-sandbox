<?php
declare(strict_types=1);

const MPR_ADMIN_SALT_FALLBACK = '841df338ae7f63c9d4766c08fcc4bca7';
const MPR_ADMIN_HASH_FALLBACK = 'fb0fa5ed51c6ce57a248f422f0c3677a7372f78001fda4f744488c31092be1c9';
const MPR_SESSION_COOKIE = 'mpr_admin_session';
const MPR_SESSION_TTL = 43200;

function mpr_json_response(int $status, array $payload): void {
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store');
  echo json_encode($payload, JSON_UNESCAPED_SLASHES);
  exit;
}

function mpr_data_dir(): string {
  $dir = dirname(__DIR__) . '/data';
  if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
  }
  $guard = $dir . '/.htaccess';
  if (!is_file($guard)) {
    file_put_contents($guard, "Require all denied\n");
  }
  return $dir;
}

function mpr_data_path(string $file): string {
  return mpr_data_dir() . '/' . basename($file);
}

function mpr_read_json(string $file, mixed $fallback): mixed {
  $path = mpr_data_path($file);
  if (!is_readable($path)) return $fallback;
  $json = json_decode((string) file_get_contents($path), true);
  return $json === null ? $fallback : $json;
}

function mpr_write_json(string $file, mixed $value): void {
  $path = mpr_data_path($file);
  $tmp = $path . '.tmp';
  file_put_contents($tmp, json_encode($value, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
  rename($tmp, $path);
}

function mpr_body(): array {
  $raw = file_get_contents('php://input') ?: '';
  $body = json_decode($raw, true);
  return is_array($body) ? $body : [];
}

function mpr_text(mixed $value, int $max = 500): string {
  $value = trim((string) $value);
  $value = preg_replace('/\s+/', ' ', $value) ?? '';
  return function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
}

function mpr_money(mixed $value): float {
  return round(max(0, (float) $value), 2);
}

function mpr_now(): string {
  return gmdate('c');
}

function mpr_order_id(): string {
  return 'MPR-' . gmdate('mdHis') . '-' . strtoupper(substr(bin2hex(random_bytes(3)), 0, 5));
}

function mpr_checkout_url(): string {
  $catalog = mpr_catalog();
  return getenv('MPR_SQUARE_CHECKOUT_URL') ?: ($catalog['checkout']['url'] ?? 'https://ordermealpreprevolution.square.site/');
}

function mpr_catalog(): array {
  $path = dirname(__DIR__) . '/catalog.json';
  if (!is_readable($path)) return [];
  $catalog = json_decode((string) file_get_contents($path), true);
  return is_array($catalog) ? $catalog : [];
}

function mpr_is_local_preview(): bool {
  $host = $_SERVER['HTTP_HOST'] ?? '';
  $isLocal = $host === '' || preg_match('/^(127\.0\.0\.1|localhost|\[?::1\]?)(:|$)/', $host) === 1;
  return $isLocal && (($_GET['preview'] ?? '') === '1');
}

function mpr_admin_salt(): string {
  return getenv('MPR_ADMIN_PASSCODE_SALT') ?: MPR_ADMIN_SALT_FALLBACK;
}

function mpr_admin_hash(): string {
  return getenv('MPR_ADMIN_PASSCODE_HASH') ?: MPR_ADMIN_HASH_FALLBACK;
}

function mpr_valid_passcode(string $passcode): bool {
  $hash = hash('sha256', mpr_admin_salt() . ':' . $passcode);
  return hash_equals(mpr_admin_hash(), $hash);
}

function mpr_create_admin_session(): string {
  $token = bin2hex(random_bytes(32));
  $sessions = mpr_read_json('admin-sessions.json', []);
  $now = time();
  $sessions = array_filter($sessions, fn ($session) => (int) ($session['expires_at'] ?? 0) > $now);
  $sessions[$token] = [
    'created_at' => $now,
    'expires_at' => $now + MPR_SESSION_TTL,
  ];
  mpr_write_json('admin-sessions.json', $sessions);
  setcookie(MPR_SESSION_COOKIE, $token, [
    'expires' => $now + MPR_SESSION_TTL,
    'path' => '/',
    'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
    'httponly' => true,
    'samesite' => 'Lax',
  ]);
  return $token;
}

function mpr_admin_authenticated(): bool {
  if (mpr_is_local_preview()) return true;
  $token = $_COOKIE[MPR_SESSION_COOKIE] ?? '';
  if ($token === '') return false;
  $sessions = mpr_read_json('admin-sessions.json', []);
  return isset($sessions[$token]) && (int) ($sessions[$token]['expires_at'] ?? 0) > time();
}

function mpr_require_admin(): void {
  if (!mpr_admin_authenticated()) {
    mpr_json_response(401, ['error' => 'Admin authentication required.']);
  }
}

function mpr_clear_admin_session(): void {
  $token = $_COOKIE[MPR_SESSION_COOKIE] ?? '';
  $sessions = mpr_read_json('admin-sessions.json', []);
  if ($token !== '' && isset($sessions[$token])) {
    unset($sessions[$token]);
    mpr_write_json('admin-sessions.json', $sessions);
  }
  setcookie(MPR_SESSION_COOKIE, '', [
    'expires' => time() - 3600,
    'path' => '/',
    'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
    'httponly' => true,
    'samesite' => 'Lax',
  ]);
}

function mpr_orders(): array {
  return mpr_read_json('orders.json', []);
}

function mpr_save_orders(array $orders): void {
  mpr_write_json('orders.json', array_values($orders));
}

function mpr_ops(): array {
  return mpr_read_json('ops.json', []);
}

function mpr_save_ops(array $ops): void {
  mpr_write_json('ops.json', $ops);
}

function mpr_customers(): array {
  return mpr_read_json('customers.json', []);
}

function mpr_save_customers(array $customers): void {
  mpr_write_json('customers.json', $customers);
}

function mpr_customer_key(array $customer): string {
  $phone = preg_replace('/\D+/', '', (string) ($customer['phone'] ?? ''));
  if ($phone !== '') return 'phone:' . $phone;
  $email = strtolower(trim((string) ($customer['email'] ?? '')));
  if ($email !== '') return 'email:' . $email;
  return 'name:' . strtolower(preg_replace('/[^a-z0-9]+/i', '-', (string) ($customer['name'] ?? 'guest')));
}

function mpr_find_order_index(array $orders, string $id): int {
  foreach ($orders as $index => $order) {
    if (($order['id'] ?? '') === $id) return $index;
  }
  return -1;
}

function mpr_order_summary(array $order): array {
  return [
    'id' => $order['id'] ?? '',
    'status' => $order['status'] ?? 'New',
    'payment_status' => $order['payment_status'] ?? 'Pending checkout',
    'customer' => $order['customer'] ?? [],
    'fulfillment' => $order['fulfillment'] ?? [],
    'total_meals' => $order['total_meals'] ?? 0,
    'estimated_total' => $order['estimated_total'] ?? 0,
    'line_items' => $order['line_items'] ?? [],
    'cart' => $order['cart'] ?? [],
    'created_at' => $order['created_at'] ?? '',
    'updated_at' => $order['updated_at'] ?? '',
    'checkout_url' => $order['checkout_url'] ?? mpr_checkout_url(),
    'recurring_frequency' => $order['recurring_frequency'] ?? '',
    'checkout_started_at' => $order['checkout_started_at'] ?? '',
    'checkout_wallet' => $order['checkout_wallet'] ?? '',
  ];
}
