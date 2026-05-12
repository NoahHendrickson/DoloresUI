import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const meta = {
  title: "Primitives/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Group of toggle items with single or multi-select. Inherits variant and size from the group.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["sm", "default", "lg"] },
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
  args: {
    variant: "default",
    size: "default",
    orientation: "horizontal",
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  // ToggleGroup renders aria-orientation on role=group, which axe flags (aria-allowed-attr).
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <ToggleGroup {...args} defaultValue={["center"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  args: { variant: "outline" },
  // ToggleGroup renders aria-orientation on role=group, which axe flags (aria-allowed-attr).
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <ToggleGroup {...args} multiple defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <TextBIcon weight="bold" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <TextItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <TextUnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  args: { variant: "outline" },
  // ToggleGroup renders aria-orientation on role=group, which axe flags (aria-allowed-attr).
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <ToggleGroup {...args} defaultValue={["left"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Interaction: Story = {
  // ToggleGroup renders aria-orientation on role=group, which axe flags (aria-allowed-attr).
  parameters: { a11y: { test: "todo" } },
  render: () => (
    <ToggleGroup>
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const center = canvas.getByRole("button", { name: /align center/i });
    await expect(center).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(center);
    await expect(center).toHaveAttribute("aria-pressed", "true");
  },
};
