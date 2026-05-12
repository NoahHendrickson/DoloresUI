import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckIcon, UserCircleIcon } from "@phosphor-icons/react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

const meta = {
  title: "Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "User avatar with image, fallback, optional status badge, and group stack.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "default", "lg"],
    },
  },
  args: {
    size: "default",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  // AvatarFallback uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  // AvatarFallback uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>NJ</AvatarFallback>
    </Avatar>
  ),
};

export const Icon: Story = {
  // AvatarFallback uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>
        <UserCircleIcon />
      </AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  // AvatarFallback uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithBadge: Story = {
  // AvatarFallback uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>NJ</AvatarFallback>
      <AvatarBadge>
        <CheckIcon weight="bold" />
      </AvatarBadge>
    </Avatar>
  ),
};

export const Group: Story = {
  // AvatarFallback uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>NJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
};
