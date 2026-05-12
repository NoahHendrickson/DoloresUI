<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# DoloresUI agent instructions

This repo ships a **Storybook MCP server** at `http://localhost:6006/mcp` (started by `pnpm storybook`).

**Before authoring or modifying any UI component:**
1. Call the Storybook MCP tools to discover what exists (`list-all-documentation`, `get-documentation`, `preview-stories`).
2. Inspect the props/variants of any shadcn primitive in `components/ui/` via the MCP component tools.
3. Use the MCP tools to scaffold and preview new stories instead of writing them by hand.

## Conventions

- **Theme tokens** live in `app/globals.css` under `@theme inline` and `.dark`. Never hardcode hex/oklch values — use Tailwind utilities like `bg-background`, `text-foreground`, `border-border`.
- **Icons** come from `@phosphor-icons/react` (server-safe import: `@phosphor-icons/react/dist/ssr`). Do not introduce `lucide-react` or any other icon set.
- **Fonts**: Geist Sans / Geist Mono. In `app/` use the `geist` npm package. In `.storybook/preview.tsx` use `next/font/google` Geist (because the `geist` package's local-font import isn't shimmed in Vite).
- **Primitives**: shadcn components in `components/ui/*` are backed by **Base UI** (`@base-ui/react`), not Radix.
- **Stories** live in `stories/<PascalCase>.stories.tsx`. Every story file must use `tags: ['autodocs']`, set rich `argTypes`, and include at least one story with a `play()` function asserting behavior.

## Verification

Run `pnpm test` to execute play-function + a11y assertions before declaring work complete. Run `pnpm build` to verify Next.js + TypeScript compile.
