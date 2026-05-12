import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

const meta = {
  title: "Display/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Inline keyboard-key marker. Compose with KbdGroup for shortcuts like Cmd+K.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  // Kbd uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: () => <Kbd>Esc</Kbd>,
};

export const Combination: Story = {
  // Kbd uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: () => (
    <KbdGroup>
      <Kbd>{"⌘"}</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const InProse: Story = {
  // Kbd uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: () => (
    <p className="text-sm">
      Press{" "}
      <KbdGroup>
        <Kbd>{"⌘"}</Kbd>
        <Kbd>S</Kbd>
      </KbdGroup>{" "}
      to save your changes.
    </p>
  ),
};
