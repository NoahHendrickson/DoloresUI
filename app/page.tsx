import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  GithubLogoIcon,
  HeartIcon,
  LightningIcon,
  PaletteIcon,
  StackIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const stack = [
  { label: "Next.js 16", icon: LightningIcon },
  { label: "Tailwind v4", icon: PaletteIcon },
  { label: "shadcn / Base UI", icon: StackIcon },
  { label: "Storybook 10", icon: BookOpenIcon },
];

const features = [
  {
    title: "Light & dark, by class",
    body: "Theme switching with `next-themes` writes `.dark` on `<html>` — Storybook mirrors via `withThemeByClassName`.",
  },
  {
    title: "A11y on by default",
    body: "Every story runs through axe via `@storybook/addon-a11y` in error mode. Failing variants are surfaced, not hidden.",
  },
  {
    title: "Interaction tests",
    body: "Story `play()` functions execute as Vitest specs in headless Chromium via `@storybook/addon-vitest`.",
  },
  {
    title: "Editable Controls",
    body: "Every component has an autodocs page with controls bound to its TypeScript prop types — tweak and re-render inline.",
  },
  {
    title: "MCP for AI agents",
    body: "Storybook serves a Model Context Protocol endpoint at `/mcp` so agents can list, preview, and scaffold stories.",
  },
  {
    title: "Geist + Phosphor",
    body: "Geist Sans/Mono via `geist`, every icon via `@phosphor-icons/react`. No `lucide-react` anywhere.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-5xl flex-col gap-12 px-6 py-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HeartIcon weight="duotone" size={24} className="text-primary" />
          <span className="font-mono text-sm tracking-tight">DoloresUI</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            render={
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noreferrer noopener"
              />
            }
          >
            <BookOpenIcon weight="duotone" />
            shadcn docs
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="GitHub"
            render={
              <a
                href="https://github.com/shadcn-ui/ui"
                target="_blank"
                rel="noreferrer noopener"
              />
            }
          >
            <GithubLogoIcon weight="duotone" />
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <section className="flex flex-col gap-6">
        <Badge variant="outline" className="self-start gap-1.5">
          <CheckCircleIcon weight="fill" />
          215 / 215 stories passing
        </Badge>
        <h1 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
          A design system for shadcn (Base UI), Tailwind v4, and Storybook 10.
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          DoloresUI is an opinionated scaffold: every shadcn primitive is
          installed, every component has a story with editable controls, axe
          accessibility runs on each render, and an MCP server exposes the
          whole catalog to agents.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            render={
              <a
                href="http://localhost:6006"
                target="_blank"
                rel="noreferrer noopener"
              />
            }
          >
            Open Storybook
            <ArrowRightIcon weight="duotone" />
          </Button>
          <Button
            variant="outline"
            render={
              <a
                href="https://ui.shadcn.com/docs/components"
                target="_blank"
                rel="noreferrer noopener"
              />
            }
          >
            Browse components
          </Button>
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map(({ label, icon: Icon }) => (
            <Badge key={label} variant="secondary" className="gap-1.5 py-1">
              <Icon weight="duotone" />
              {label}
            </Badge>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
              <CardDescription>{f.body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Add a component</CardTitle>
          <CardDescription>
            shadcn CLI is wired to the Base UI registry. New components land in
            <code className="mx-1 rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              components/ui/
            </code>
            with Phosphor icons.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-md bg-muted p-4 font-mono text-sm">
            <code>{`pnpm dlx shadcn@latest add <component>`}</code>
          </pre>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            size="sm"
            render={
              <a
                href="https://ui.shadcn.com/docs/cli"
                target="_blank"
                rel="noreferrer noopener"
              />
            }
          >
            CLI reference
            <ArrowRightIcon weight="duotone" />
          </Button>
        </CardFooter>
      </Card>

      <footer className="text-center text-xs text-muted-foreground">
        Built with shadcn, Base UI, Tailwind v4, Geist, and Phosphor.
      </footer>
    </main>
  );
}
