import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Layout/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Visual divider rendered as a hairline. Supports horizontal and vertical orientations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-72 space-y-3">
      <div className="text-sm font-medium">Workspace</div>
      <Separator {...args} />
      <div className="text-sm text-muted-foreground">
        Manage members, billing, and integrations.
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-10 items-center gap-3 text-sm">
      <span>Docs</span>
      <Separator {...args} />
      <span>API</span>
      <Separator {...args} />
      <span>Community</span>
    </div>
  ),
};
