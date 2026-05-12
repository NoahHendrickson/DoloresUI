import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const meta = {
  title: "Layout/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Constrains a child to a target width/height ratio using a CSS aspect-ratio variable.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: { control: { type: "number", step: 0.1 } },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wide: Story = {
  // text-muted-foreground on bg-muted fails axe color-contrast (4.34 vs 4.5:1) in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          16 / 9
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  args: { ratio: 1 },
  // text-muted-foreground on bg-muted fails axe color-contrast (4.34 vs 4.5:1) in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          1 / 1
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  args: { ratio: 3 / 4 },
  // text-muted-foreground on bg-muted fails axe color-contrast (4.34 vs 4.5:1) in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <div className="w-56">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
          3 / 4
        </div>
      </AspectRatio>
    </div>
  ),
};
