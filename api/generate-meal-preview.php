<?php
declare(strict_types=1);

set_time_limit(180);
ini_set('default_socket_timeout', '180');
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const DEFAULT_MEAL_GENERATION_SIZE = '1296x816';
const DEFAULT_MEAL_PREVIEW_SIZE = '768x480';
const DEFAULT_JPEG_COMPRESSION = 82;

function env_paths(): array {
  return [
    'api' => __DIR__ . '/.env',
    'api_secret' => __DIR__ . '/mpr-secrets.env',
    'site_root' => dirname(__DIR__) . '/.env',
    'site_root_secret' => dirname(__DIR__) . '/mpr-secrets.env',
    'parent' => dirname(__DIR__, 2) . '/.env',
    'parent_secret' => dirname(__DIR__, 2) . '/mpr-secrets.env',
  ];
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

function json_response(int $status, array $payload): void {
  http_response_code($status);
  echo json_encode($payload, JSON_UNESCAPED_SLASHES);
  exit;
}

function env_value(string $key): string {
  $value = getenv($key);
  if (is_string($value) && trim($value) !== '') return trim($value);
  if (isset($_SERVER[$key]) && trim((string) $_SERVER[$key]) !== '') return trim((string) $_SERVER[$key]);

  foreach (env_paths() as $envPath) {
    if (!is_readable($envPath)) continue;

    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
    foreach ($lines as $line) {
      $line = trim($line);
      if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) continue;
      [$name, $raw] = explode('=', $line, 2);
      if (trim($name) !== $key) continue;
      return trim(trim($raw), "\"'");
    }
  }

  return '';
}

function config_diagnostics(string $key): array {
  $envValue = getenv($key);
  $serverValue = $_SERVER[$key] ?? '';
  $files = [];

  foreach (env_paths() as $label => $envPath) {
    $hasKey = false;
    if (is_readable($envPath)) {
      $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
      foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) continue;
        [$name] = explode('=', $line, 2);
        if (trim($name) === $key) {
          $hasKey = true;
          break;
        }
      }
    }

    $files[] = [
      'location' => $label,
      'readable' => is_readable($envPath),
      'has_openai_key' => $hasKey,
    ];
  }

  return [
    'configured' => env_value($key) !== '',
    'environment_variable' => is_string($envValue) && trim($envValue) !== '',
    'server_variable' => trim((string) $serverValue) !== '',
    'files' => $files,
  ];
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['config_check'])) {
  json_response(200, config_diagnostics('OPENAI_API_KEY'));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Use POST.']);
  exit;
}

function openai_api_key(): string {
  $apiKey = env_value('OPENAI_API_KEY');
  if ($apiKey !== '') return $apiKey;

  if (PHP_OS_FAMILY !== 'Darwin') return '';

  $user = getenv('USER') ?: get_current_user();
  $command = 'security find-generic-password -a ' . escapeshellarg($user) . ' -s openai_api_key -w 2>/dev/null';
  $keychainValue = shell_exec($command);
  return is_string($keychainValue) ? trim($keychainValue) : '';
}

function clean_text(string $value, int $max = 80): string {
  $value = preg_replace('/[^a-zA-Z0-9 ,&+\/\-]/', '', $value) ?? '';
  $value = preg_replace('/\s+/', ' ', trim($value)) ?? '';
  return substr($value, 0, $max);
}

function normalized_image_size(string $value, string $fallback, int $minimumPixels = 0): array {
  $value = strtolower(trim($value));
  if (!preg_match('/^(\d{3,4})x(\d{3,4})$/', $value, $matches)) {
    $value = $fallback;
    preg_match('/^(\d+)x(\d+)$/', $value, $matches);
  }

  $width = (int) $matches[1];
  $height = (int) $matches[2];
  $ratio = $height > 0 ? $width / $height : 0;
  $isValid = $width >= 256
    && $height >= 256
    && ($width * $height) >= $minimumPixels
    && $width <= 1536
    && $height <= 1536
    && $width % 16 === 0
    && $height % 16 === 0
    && $ratio >= (1 / 3)
    && $ratio <= 3;

  if (!$isValid) {
    [$width, $height] = array_map('intval', explode('x', $fallback, 2));
  }

  return [
    'size' => "{$width}x{$height}",
    'width' => $width,
    'height' => $height,
  ];
}

function normalized_compression(string $value): int {
  $compression = (int) $value;
  if ($compression <= 0) return DEFAULT_JPEG_COMPRESSION;
  return min(92, max(50, $compression));
}

function optimized_jpeg_bytes(string $bytes, int $targetWidth, int $targetHeight, int $compression): string {
  if (!function_exists('imagecreatefromstring')) return $bytes;

  $source = @imagecreatefromstring($bytes);
  if (!$source) return $bytes;

  $sourceWidth = imagesx($source);
  $sourceHeight = imagesy($source);
  if ($sourceWidth <= 0 || $sourceHeight <= 0) {
    imagedestroy($source);
    return $bytes;
  }

  $sourceRatio = $sourceWidth / $sourceHeight;
  $targetRatio = $targetWidth / $targetHeight;
  if ($sourceRatio > $targetRatio) {
    $cropHeight = $sourceHeight;
    $cropWidth = (int) round($sourceHeight * $targetRatio);
    $cropX = (int) floor(($sourceWidth - $cropWidth) / 2);
    $cropY = 0;
  } else {
    $cropWidth = $sourceWidth;
    $cropHeight = (int) round($sourceWidth / $targetRatio);
    $cropX = 0;
    $cropY = (int) floor(($sourceHeight - $cropHeight) / 2);
  }

  $target = imagecreatetruecolor($targetWidth, $targetHeight);
  imagecopyresampled($target, $source, 0, 0, $cropX, $cropY, $targetWidth, $targetHeight, $cropWidth, $cropHeight);

  ob_start();
  imagejpeg($target, null, $compression);
  $optimized = ob_get_clean();
  imagedestroy($source);
  imagedestroy($target);

  return is_string($optimized) && $optimized !== '' ? $optimized : $bytes;
}

$raw = file_get_contents('php://input') ?: '';
$request = json_decode($raw, true);
if (!is_array($request)) {
  json_response(400, ['error' => 'Invalid JSON.']);
}

$components = $request['components'] ?? [];
if (!is_array($components) || count($components) < 1) {
  json_response(400, ['error' => 'Missing meal components.']);
}

$ingredientLines = [];
foreach (array_slice($components, 0, 10) as $component) {
  if (!is_array($component)) continue;
  $group = clean_text((string) ($component['groupLabel'] ?? $component['group'] ?? 'Ingredient'), 32);
  $label = clean_text((string) ($component['label'] ?? ''), 52);
  if ($label === '') continue;
  $ingredientLines[] = "{$group}: {$label}";
}

if (!$ingredientLines) {
  json_response(400, ['error' => 'No usable meal components.']);
}

$mealType = clean_text((string) ($request['meal_type'] ?? 'meal prep entree'), 40);
$portion = clean_text((string) ($request['portion'] ?? 'custom'), 24);
$apiKey = openai_api_key();
if ($apiKey === '') {
  json_response(503, ['error' => 'AI meal preview is not configured on this server.']);
}

$prompt = implode(' ', [
  "Create one realistic, delicious food photograph of a finished {$portion} {$mealType}.",
  'Use these exact ingredients as the visible meal composition: ' . implode('; ', $ingredientLines) . '.',
  'The meal may be beautifully plated or arranged inside a clean black plastic meal prep container.',
  'Make it look fresh, appetizing, premium, and naturally photographed with real food texture, depth of field, and soft directional light.',
  'No logo, no text, no label, no badge, no packaging, no graphic design, no collage, no separated ingredient tiles, no menu, no hands, no utensils.',
  'The final image should look like an actual meal photo, not a layout or illustration.',
]);

$generationSpec = normalized_image_size(env_value('OPENAI_MEAL_GENERATION_SIZE'), DEFAULT_MEAL_GENERATION_SIZE, 1048576);
$previewSpec = normalized_image_size(env_value('OPENAI_MEAL_PREVIEW_SIZE'), DEFAULT_MEAL_PREVIEW_SIZE);
$imageQuality = env_value('OPENAI_IMAGE_QUALITY') ?: 'medium';
$jpegCompression = normalized_compression(env_value('OPENAI_IMAGE_COMPRESSION'));
$hashInput = strtolower($prompt) . "|generation={$generationSpec['size']}|preview={$previewSpec['size']}|quality={$imageQuality}|compression={$jpegCompression}|format=jpeg";
$hash = substr(hash('sha256', $hashInput), 0, 28);
$outDir = dirname(__DIR__) . '/generated/meal-previews';
$outFile = "{$outDir}/{$hash}.jpg";
$publicUrl = "generated/meal-previews/{$hash}.jpg";

if (is_file($outFile)) {
  json_response(200, [
    'image_url' => $publicUrl,
    'cached' => true,
    'generated_at' => gmdate('c', filemtime($outFile) ?: time()),
  ]);
}

if (!is_dir($outDir) && !mkdir($outDir, 0755, true)) {
  json_response(500, ['error' => 'Could not create meal preview directory.']);
}

$body = json_encode([
  'model' => env_value('OPENAI_IMAGE_MODEL') ?: 'gpt-image-2',
  'prompt' => $prompt,
  'size' => $generationSpec['size'],
  'quality' => $imageQuality,
  'output_format' => 'jpeg',
  'output_compression' => $jpegCompression,
], JSON_UNESCAPED_SLASHES);

$headers = [
  'Authorization: Bearer ' . $apiKey,
  'Content-Type: application/json',
];

if (function_exists('curl_init')) {
  $ch = curl_init('https://api.openai.com/v1/images/generations');
  curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_POSTFIELDS => $body,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 170,
  ]);
  $responseBody = curl_exec($ch);
  $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
  $curlError = curl_error($ch);
  if ($responseBody === false) {
    json_response(502, ['error' => 'Image generation request failed.', 'detail' => $curlError]);
  }
} else {
  $context = stream_context_create([
    'http' => [
      'method' => 'POST',
      'header' => implode("\r\n", $headers),
      'content' => $body,
      'timeout' => 170,
      'ignore_errors' => true,
    ],
  ]);
  $responseBody = file_get_contents('https://api.openai.com/v1/images/generations', false, $context);
  $statusLine = $http_response_header[0] ?? 'HTTP/1.1 500';
  preg_match('/\s(\d{3})\s/', $statusLine, $matches);
  $status = (int) ($matches[1] ?? 500);
}

$json = json_decode((string) $responseBody, true);
if ($status < 200 || $status >= 300 || !is_array($json)) {
  json_response(502, [
    'error' => 'AI meal preview generation failed.',
    'status' => $status,
    'detail' => is_array($json) ? ($json['error']['message'] ?? 'OpenAI error') : 'Invalid response',
  ]);
}

$image = $json['data'][0] ?? null;
$bytes = null;
if (is_array($image) && isset($image['b64_json'])) {
  $bytes = base64_decode((string) $image['b64_json'], true);
} elseif (is_array($image) && isset($image['url'])) {
  $bytes = file_get_contents((string) $image['url']);
}

if (!is_string($bytes) || $bytes === '') {
  json_response(502, ['error' => 'No image payload returned.']);
}

$bytes = optimized_jpeg_bytes($bytes, $previewSpec['width'], $previewSpec['height'], $jpegCompression);

if (file_put_contents($outFile, $bytes) === false) {
  json_response(500, ['error' => 'Could not save generated image.']);
}

json_response(200, [
  'image_url' => $publicUrl,
  'generation_size' => $generationSpec['size'],
  'preview_size' => $previewSpec['size'],
  'cached' => false,
  'generated_at' => gmdate('c'),
]);
