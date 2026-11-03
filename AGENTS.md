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
- Use Conventional Commit messages; semantic-release derives versions and release notes from them.
- semantic-release publishes release-worthy changes to npm from the default branch. Do not change versions manually or publish outside that workflow unless explicitly requested.

## Useful commands

- pnpm install
- pnpm test
- pnpm typecheck
- pnpm lint
- pnpm format:check
- pnpm audit
- pnpm run dev:playground
- pnpm run build:playground
