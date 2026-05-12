import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Slider } from "@/components/ui/slider";

const meta = {
  title: "Primitives/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Slider primitive backed by Base UI. Supports single or range (multi-thumb) values.",
      },
    },
    // Base UI's Slider renders a hidden <input type="range"> that does not receive
    // aria-label/aria-labelledby from the Root, so axe's "label" rule flags it. The
    // visual thumb has a proper ARIA name; mark as 'todo' to surface in the panel.
    a11y: { test: "todo" },
  },
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    onValueChange: { action: "changed" },
  },
  args: {
    "aria-label": "Value",
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    onValueChange: fn(),
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: [50] },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Range: Story = {
  args: { defaultValue: [25, 75] },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Stepped: Story = {
  args: { defaultValue: [40], step: 10 },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: { defaultValue: [30], disabled: true },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: { defaultValue: [60], orientation: "vertical" },
  decorators: [
    (Story) => (
      <div className="h-48">
        <Story />
      </div>
    ),
  ],
};
