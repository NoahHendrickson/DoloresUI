import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckIcon, SparkleIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Small label for status, counts, or category. Supports six visual variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
  },
  args: {
    children: "Badge",
    variant: "default",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Failed" } };
export const Outline: Story = { args: { variant: "outline", children: "Outline" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Ghost" } };
export const Link: Story = { args: { variant: "link", children: "Link" } };

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <CheckIcon weight="bold" />
        Verified
      </>
    ),
    variant: "secondary",
  },
};

export const Counter: Story = {
  args: {
    children: "12",
    variant: "default",
  },
};

export const Sparkle: Story = {
  args: {
    children: (
      <>
        <SparkleIcon weight="fill" />
        New
      </>
    ),
    variant: "outline",
  },
};
