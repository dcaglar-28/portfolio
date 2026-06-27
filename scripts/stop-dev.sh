#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

echo "Stopping port 3000..."
lsof -ti :3000 | xargs kill -9 2>/dev/null || true

# Orphan Next.js dev/start for this project
pkill -f "portfolio.*next dev" 2>/dev/null || true
pkill -f "portfolio.*next start" 2>/dev/null || true
pkill -f "Downloads/portfolio/node_modules/.bin/next" 2>/dev/null || true

sleep 0.5
if lsof -ti :3000 >/dev/null 2>&1; then
  echo "Warning: port 3000 still in use. Run: lsof -ti :3000 | xargs kill -9"
else
  echo "Port 3000 is free."
fi

echo "Done. Run: npm run dev:clean"
