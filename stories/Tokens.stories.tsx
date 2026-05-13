import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { cn } from "@/lib/utils";

type Token = { name: string; varName: string; pair?: string };
type Group = { title: string; description?: string; tokens: Token[] };

type TypeToken = {
  name: string;
  className: string;
  varName: string;
  px: string;
};

const typeTokens: TypeToken[] = [
  { name: "caption", className: "text-caption", varName: "--text-caption", px: "14px / 20px" },
  { name: "body", className: "text-body", varName: "--text-body", px: "16px / 24px" },
  { name: "lead", className: "text-lead", varName: "--text-lead", px: "18px / 28px" },
  { name: "heading", className: "text-heading", varName: "--text-heading", px: "24px / 32px" },
];

const groups: Group[] = [
  {
    title: "Surfaces",
    description: "Page, card, and popover backgrounds with their text foregrounds.",
    tokens: [
      { name: "background", varName: "--background", pair: "foreground" },
      { name: "foreground", varName: "--foreground" },
      { name: "card", varName: "--card", pair: "card-foreground" },
      { name: "card-foreground", varName: "--card-foreground" },
      { name: "popover", varName: "--popover", pair: "popover-foreground" },
      { name: "popover-foreground", varName: "--popover-foreground" },
      { name: "muted", varName: "--muted", pair: "muted-foreground" },
      { name: "muted-foreground", varName: "--muted-foreground" },
    ],
  },
  {
    title: "Intent",
    tokens: [
      { name: "primary", varName: "--primary", pair: "primary-foreground" },
      { name: "primary-foreground", varName: "--primary-foreground" },
      { name: "secondary", varName: "--secondary", pair: "secondary-foreground" },
      { name: "secondary-foreground", varName: "--secondary-foreground" },
      { name: "accent", varName: "--accent", pair: "accent-foreground" },
      { name: "accent-foreground", varName: "--accent-foreground" },
    ],
  },
  {
    title: "Brand",
    description: "DoloresUI brand orange (#F47709).",
    tokens: [
      { name: "brand", varName: "--brand", pair: "brand-foreground" },
      { name: "brand-foreground", varName: "--brand-foreground" },
    ],
  },
  {
    title: "Status",
    description: "Semantic intents for inline messaging and badges.",
    tokens: [
      { name: "destructive", varName: "--destructive", pair: "destructive-foreground" },
      { name: "destructive-foreground", varName: "--destructive-foreground" },
      { name: "success", varName: "--success", pair: "success-foreground" },
      { name: "success-foreground", varName: "--success-foreground" },
      { name: "warning", varName: "--warning", pair: "warning-foreground" },
      { name: "warning-foreground", varName: "--warning-foreground" },
      { name: "info", varName: "--info", pair: "info-foreground" },
      { name: "info-foreground", varName: "--info-foreground" },
    ],
  },
  {
    title: "Form & focus",
    tokens: [
      { name: "border", varName: "--border" },
      { name: "input", varName: "--input" },
      { name: "ring", varName: "--ring" },
    ],
  },
  {
    title: "Charts",
    description: "Series colors for ChartContainer-based visualizations.",
    tokens: [
      { name: "chart-1", varName: "--chart-1" },
      { name: "chart-2", varName: "--chart-2" },
      { name: "chart-3", varName: "--chart-3" },
      { name: "chart-4", varName: "--chart-4" },
      { name: "chart-5", varName: "--chart-5" },
    ],
  },
  {
    title: "Sidebar",
    tokens: [
      { name: "sidebar", varName: "--sidebar", pair: "sidebar-foreground" },
      { name: "sidebar-foreground", varName: "--sidebar-foreground" },
      { name: "sidebar-primary", varName: "--sidebar-primary", pair: "sidebar-primary-foreground" },
      { name: "sidebar-primary-foreground", varName: "--sidebar-primary-foreground" },
      { name: "sidebar-accent", varName: "--sidebar-accent", pair: "sidebar-accent-foreground" },
      { name: "sidebar-accent-foreground", varName: "--sidebar-accent-foreground" },
      { name: "sidebar-border", varName: "--sidebar-border" },
      { name: "sidebar-ring", varName: "--sidebar-ring" },
    ],
  },
];

function Swatch({ token }: { token: Token }) {
  const fg = token.pair ? `var(--${token.pair})` : undefined;
  return (
    <div className="flex items-stretch gap-3">
      <div
        aria-hidden
        className="size-12 shrink-0 rounded-md border border-border shadow-xs"
        style={{ background: `var(${token.varName})`, color: fg }}
      >
        {fg ? (
          <span className="flex h-full items-center justify-center text-base font-semibold">
            Aa
          </span>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <code className="truncate font-mono text-sm">{token.name}</code>
        <code className="truncate font-mono text-xs text-muted-foreground">
          {token.varName}
        </code>
      </div>
    </div>
  );
}

function Section({ group }: { group: Group }) {
  return (
    <section className="flex flex-col gap-3">
      <header>
        <h3 className="text-sm font-medium">{group.title}</h3>
        {group.description ? (
          <p className="text-xs text-muted-foreground">{group.description}</p>
        ) : null}
      </header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {group.tokens.map((t) => (
          <Swatch key={t.name} token={t} />
        ))}
      </div>
    </section>
  );
}

function TypeRow({ token }: { token: TypeToken }) {
  return (
    <div className="grid grid-cols-[10rem_1fr] items-baseline gap-4 border-b border-border py-3 last:border-b-0">
      <div className="flex flex-col">
        <code className="font-mono text-sm">{token.name}</code>
        <code className="font-mono text-xs text-muted-foreground">{token.varName}</code>
        <span className="font-mono text-xs text-muted-foreground">{token.px}</span>
      </div>
      <p className={cn(token.className, "text-foreground")}>
        The quick brown fox jumps over the lazy dog
      </p>
    </div>
  );
}

function TypographySection() {
  return (
    <section className="flex flex-col gap-3">
      <header>
        <h3 className="text-sm font-medium">Typography</h3>
        <p className="text-xs text-muted-foreground">
          Semantic font-size tokens with paired line-heights. Apply via Tailwind utilities like
          <code className="mx-1 font-mono">text-body</code> or
          <code className="mx-1 font-mono">text-heading</code>.
        </p>
      </header>
      <div className="flex flex-col">
        {typeTokens.map((t) => (
          <TypeRow key={t.name} token={t} />
        ))}
      </div>
    </section>
  );
}

function TokenGrid() {
  return (
    <div className="flex flex-col gap-8">
      <TypographySection />
      {groups.map((g) => (
        <Section key={g.title} group={g} />
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Foundation/Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Color and typography tokens defined in `app/globals.css` under `@theme inline`. Colors come from `:root` and `.dark`; type sizes are semantic (`caption`, `body`, `lead`, `heading`). The toolbar sun/moon switches `Light` and `Dark`; `SideBySide` shows both at once.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
  parameters: { backgrounds: { default: "light" } },
  render: () => (
    <div className="bg-background text-foreground p-8">
      <TokenGrid />
    </div>
  ),
};

export const Dark: Story = {
  parameters: { backgrounds: { default: "dark" } },
  render: () => (
    <div className="dark bg-background text-foreground p-8">
      <TokenGrid />
    </div>
  ),
};

export const SideBySide: Story = {
  render: () => (
    <div className="grid min-h-svh grid-cols-1 lg:grid-cols-2">
      <div className={cn("bg-background text-foreground p-8")}>
        <h2 className="mb-6 text-xs font-mono uppercase tracking-wide text-muted-foreground">
          Light
        </h2>
        <TokenGrid />
      </div>
      <div className={cn("dark bg-background text-foreground p-8")}>
        <h2 className="mb-6 text-xs font-mono uppercase tracking-wide text-muted-foreground">
          Dark
        </h2>
        <TokenGrid />
      </div>
    </div>
  ),
};
