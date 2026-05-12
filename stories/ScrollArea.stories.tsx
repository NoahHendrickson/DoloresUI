import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Layout/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Styled scrollable region backed by Base UI. Custom thumb appears on overflow.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 40 }).map((_, i) => `Tag ${i + 1}`);

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-64 w-56 rounded-lg ring-1 ring-foreground/10">
      <div className="p-3">
        <div className="mb-2 text-sm font-medium">Tags</div>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="py-1.5 text-sm text-muted-foreground">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const LongProse: Story = {
  render: () => (
    <ScrollArea className="h-56 w-80 rounded-lg ring-1 ring-foreground/10 p-4">
      <h3 className="mb-2 font-medium">Release notes</h3>
      <p className="mb-3 text-sm text-muted-foreground">
        Dolores UI 0.2 ships a redesigned tokens layer, a new resizable primitive,
        and improved keyboard focus rings across every form control.
      </p>
      <p className="mb-3 text-sm text-muted-foreground">
        We also rebuilt the sidebar from the ground up using Base UI&apos;s
        composable APIs, and added a new ItemGroup primitive for dense list
        layouts.
      </p>
      <p className="mb-3 text-sm text-muted-foreground">
        Theming has been simplified to a single CSS layer with semantic tokens,
        so dark mode just works once `dark` is applied to the root.
      </p>
      <p className="text-sm text-muted-foreground">
        Upgrade with `pnpm dlx shadcn@latest add` and your existing components
        will pick up the new tokens automatically.
      </p>
    </ScrollArea>
  ),
};
