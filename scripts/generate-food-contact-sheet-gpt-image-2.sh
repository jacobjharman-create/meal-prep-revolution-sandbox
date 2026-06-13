#!/usr/bin/env bash
set -euo pipefail
PROMPT_FILE="${1:-prompts/food-picker-contact-sheet.txt}"
OUT="${2:-output/gpt-image-2/food-picker-contact-sheet.png}"
node scripts/gpt-image-2-generate.mjs \
  --prompt-file="$PROMPT_FILE" \
  --out="$OUT" \
  --size=1024x2048 \
  --quality=high \
  --format=png
