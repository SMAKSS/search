# Copilot Instructions

Follow AGENTS.md and the repository's existing patterns.

- Use pnpm 12.17.0 and the scripts declared in package.json.
- Keep library source in src/ and regression tests with the existing test files.
- Preserve ESM and CommonJS runtime exports and their matching TypeScript declarations.
- Preserve the documented security defaults and Node.js runtime requirement.
- Keep the Vite playground importing the workspace package, not private source files.
- Update Readme.md when changing the public API or user-facing behavior.
- Keep generated output in dist/; do not commit build artifacts or publish a release.

Helpful commands:
- pnpm test
- pnpm typecheck
- pnpm lint
- pnpm format:check
- pnpm audit
- pnpm run dev:playground

