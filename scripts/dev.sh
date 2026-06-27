#!/usr/bin/env bash
# Run the dev server in your own terminal — avoids Cursor background task timeouts.
set -euo pipefail
cd "$(dirname "$0")/.."

sh scripts/stop-dev.sh

if [[ "${1:-}" == "--clean" ]]; then
  echo "Removing .next cache..."
  rm -rf .next
fi

if lsof -ti :3000 >/dev/null 2>&1; then
  echo "Error: port 3000 is still in use. Stop other dev servers first."
  exit 1
fi

echo "Starting Next.js at http://localhost:3000"
exec npx next dev -p 3000
