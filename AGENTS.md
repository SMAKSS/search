# Agent Instructions

## Project overview

- Package: @smakss/search
- Source code lives in src/ and package tests live in test/ (Search also keeps unit tests beside its source).
- The Vite playground in playground/ imports this package through the pnpm workspace.
- Build output in dist/ is generated and must not be committed.

## Working conventions

- Use the pinned pnpm version from package.json and prefer pnpm scripts.
- Preserve the documented public API, ESM and CommonJS exports, and both declaration entrypoints.
- Keep security behavior and runtime requirements aligned with Readme.md. Add regression coverage and update docs when behavior changes.
- Keep playground examples representative of the published package API; do not import private source paths.
- Do not change package versions or publish releases unless explicitly requested.

## Useful commands

- pnpm install
- pnpm test
- pnpm typecheck
- pnpm lint
- pnpm format:check
- pnpm audit
- pnpm run dev:playground
- pnpm run build:playground
