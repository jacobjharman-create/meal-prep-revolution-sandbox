#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

function argValue(name, fallback = undefined) {
  const prefix = `${name}=`;
  const hit = process.argv.slice(2).find((arg) => arg === name || arg.startsWith(prefix));
  if (!hit) return fallback;
  if (hit === name) return true;
  return hit.slice(prefix.length);
}

function getKeyFromKeychain() {
  try {
    return execFileSync('security', ['find-generic-password', '-a', process.env.USER || '', '-s', 'openai_api_key', '-w'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

async function getPrompt() {
  const promptFile = argValue('--prompt-file');
  const prompt = argValue('--prompt');
  if (promptFile) return readFile(promptFile, 'utf8');
  if (prompt) return prompt;
  const stdin = await new Promise((resolve) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => { data += chunk; });
    process.stdin.on('end', () => resolve(data));
  });
  return String(stdin).trim();
}

const apiKey = process.env.OPENAI_API_KEY || getKeyFromKeychain();
if (!apiKey) {
  console.error('Missing OpenAI API key. Run: ./scripts/setup-openai-image-key.sh');
  process.exit(1);
}

const prompt = (await getPrompt()).trim();
if (!prompt) {
  console.error('Missing prompt. Use --prompt="...", --prompt-file=path, or pipe text via stdin.');
  process.exit(1);
}

const out = argValue('--out', 'output/gpt-image-2/image.png');
const size = argValue('--size', '1024x1024');
const quality = argValue('--quality', 'high');
const outputFormat = argValue('--format', 'png');
const model = argValue('--model', 'gpt-image-2');

const body = {
  model,
  prompt,
  size,
  quality,
  output_format: outputFormat,
};

const response = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const json = await response.json().catch(() => ({}));
if (!response.ok) {
  console.error(JSON.stringify(json, null, 2));
  process.exit(1);
}

const image = json?.data?.[0];
let bytes;
if (image?.b64_json) {
  bytes = Buffer.from(image.b64_json, 'base64');
} else if (image?.url) {
  const imageResponse = await fetch(image.url);
  if (!imageResponse.ok) {
    console.error(`Image URL fetch failed: ${imageResponse.status} ${imageResponse.statusText}`);
    process.exit(1);
  }
  bytes = Buffer.from(await imageResponse.arrayBuffer());
} else {
  console.error(`No image payload found: ${JSON.stringify(json, null, 2)}`);
  process.exit(1);
}

const outPath = path.resolve(out);
await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, bytes);
console.log(outPath);
