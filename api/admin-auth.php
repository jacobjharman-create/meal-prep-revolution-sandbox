<?php
declare(strict_types=1);

require __DIR__ . '/lib.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
  mpr_json_response(200, [
    'authenticated' => mpr_admin_authenticated(),
    'preview' => mpr_is_local_preview(),
  ]);
}

if ($method === 'POST') {
  if (mpr_is_local_preview()) {
    mpr_json_response(200, ['authenticated' => true, 'preview' => true]);
  }

  $body = mpr_body();
  $passcode = (string) ($body['passcode'] ?? '');
  if ($passcode === '' || !mpr_valid_passcode($passcode)) {
    mpr_json_response(401, ['error' => 'That passcode did not match.']);
  }

  mpr_create_admin_session();
  mpr_json_response(200, ['authenticated' => true]);
}

if ($method === 'DELETE') {
  mpr_clear_admin_session();
  mpr_json_response(200, ['authenticated' => false]);
}

mpr_json_response(405, ['error' => 'Unsupported method.']);
