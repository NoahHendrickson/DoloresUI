import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, fn } from "storybook/test";
import { HeartIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button primitive backed by Base UI. Supports six visual variants and four sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Delete" } };
export const Outline: Story = { args: { variant: "outline", children: "Outline" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Ghost" } };
export const Link: Story = { args: { variant: "link", children: "Link" } };

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <HeartIcon weight="fill" />
        Like
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: { size: "icon", "aria-label": "Next", children: <ArrowRightIcon /> },
};

export const Disabled: Story = { args: { disabled: true, children: "Disabled" } };

export const Interaction: Story = {
  args: { children: "Click me" },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: /click me/i });
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
