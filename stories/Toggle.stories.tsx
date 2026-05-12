import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { TextBIcon, StarIcon } from "@phosphor-icons/react";
import { Toggle } from "@/components/ui/toggle";

const meta = {
  title: "Primitives/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Two-state pressable control backed by Base UI. Supports default and outline variants and three sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["sm", "default", "lg"] },
    pressed: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    variant: "default",
    size: "default",
    pressed: false,
    disabled: false,
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Bold">
      <TextBIcon weight="bold" />
    </Toggle>
  ),
};

export const Pressed: Story = {
  args: { pressed: true },
  render: (args) => (
    <Toggle {...args} aria-label="Favorite">
      <StarIcon weight="fill" />
    </Toggle>
  ),
};

export const Outline: Story = {
  args: { variant: "outline" },
  render: (args) => (
    <Toggle {...args} aria-label="Favorite">
      <StarIcon />
      Favorite
    </Toggle>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Toggle {...args} aria-label="Bold">
      <TextBIcon weight="bold" />
    </Toggle>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Toggle aria-label="Bold">
      <TextBIcon weight="bold" />
    </Toggle>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("button", { name: /bold/i });
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
  },
};
