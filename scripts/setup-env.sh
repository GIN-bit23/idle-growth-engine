#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[1/4] Checking Node.js"
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install Node 20+ first."
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "Node.js version must be >= 20. Current: $(node -v)"
  exit 1
fi

echo "[2/4] Installing npm dependencies"
npm install

echo "[3/4] Installing VS Code extensions (if 'code' CLI is available)"
if command -v code >/dev/null 2>&1; then
  code --install-extension dbaeumer.vscode-eslint --force
  code --install-extension esbenp.prettier-vscode --force
  code --install-extension msjsdiag.vscode-react-native --force
  code --install-extension yoavbls.pretty-ts-errors --force
else
  echo "'code' command not found. Open VS Code and install recommended extensions manually."
fi

echo "[4/4] Environment setup complete"
echo "Run: npm run start"
