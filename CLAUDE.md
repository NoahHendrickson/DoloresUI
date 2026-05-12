@AGENTS.md

## Quick commands

- `pnpm dev` — Next.js showcase at http://localhost:3000
- `pnpm storybook` — component catalog + MCP at http://localhost:6006
- `pnpm test` — vitest play-functions + axe in headless Chromium
- `pnpm build` — Next.js production build (runs TypeScript checker)
- `pnpm build-storybook` — static Storybook to `storybook-static/`

## Verification expectation

Before claiming a UI change is done: `pnpm test` must pass and `pnpm build` must compile. Vitest doesn't run TypeScript — `pnpm build` does.
