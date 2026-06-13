#!/usr/bin/env bash
set -euo pipefail

printf 'This stores your OpenAI API key in macOS Keychain under service openai_api_key.\n'
printf 'The key will not be written to this repo and will not be printed.\n\n'
read -rsp 'Paste OpenAI API key: ' OPENAI_KEY
printf '\n'
if [[ -z "${OPENAI_KEY}" ]]; then
  echo 'No key provided. Aborting.' >&2
  exit 1
fi
security add-generic-password -a "$USER" -s openai_api_key -w "$OPENAI_KEY" -U
unset OPENAI_KEY
echo 'OpenAI API key stored in macOS Keychain as service openai_api_key.'
