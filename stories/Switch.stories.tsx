import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, fn } from "storybook/test";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Primitives/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Switch primitive backed by Base UI. Two sizes: 'default' and 'sm'.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    onCheckedChange: { action: "changed" },
  },
  args: {
    "aria-label": "Switch",
    size: "default",
    disabled: false,
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const WithLabel: Story = {
  render: (args) => (
    <Label htmlFor="airplane-mode" className="cursor-pointer">
      <Switch id="airplane-mode" {...args} />
      Airplane mode
    </Label>
  ),
};

export const Interaction: Story = {
  args: { "aria-label": "Toggle switch" },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole("switch", { name: /toggle switch/i });
    await userEvent.click(sw);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true, expect.anything());
  },
};
