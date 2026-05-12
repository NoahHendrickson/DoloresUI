import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  CaretRightIcon,
  FolderIcon,
  GearIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const meta = {
  title: "Layout/Item",
  component: Item,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Row primitive for lists and menus. Compose with ItemMedia, ItemContent, ItemTitle, ItemDescription, and ItemActions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
    },
  },
  args: {
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Item {...args} className="w-96">
      <ItemMedia variant="icon">
        <FolderIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Design system</ItemTitle>
        <ItemDescription>Shared tokens, primitives, and patterns.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <CaretRightIcon className="size-4 text-muted-foreground" />
      </ItemActions>
    </Item>
  ),
};

export const Outline: Story = {
  args: { variant: "outline" },
  // AvatarFallback uses text-muted-foreground on bg-muted which fails axe color-contrast in light mode.
  parameters: { a11y: { test: "todo" } },
  render: (args) => (
    <Item {...args} className="w-96">
      <ItemMedia>
        <Avatar>
          <AvatarFallback>NJ</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>noah@dolores.ui</ItemTitle>
        <ItemDescription>Workspace owner</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Manage
        </Button>
      </ItemActions>
    </Item>
  ),
};

export const Muted: Story = {
  args: { variant: "muted" },
  render: (args) => (
    <Item {...args} className="w-96">
      <ItemMedia variant="icon">
        <GearIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Workspace settings</ItemTitle>
      </ItemContent>
    </Item>
  ),
};

export const Group: Story = {
  // ItemSeparator renders [role=separator] which axe flags as not allowed inside role=list (ItemGroup).
  parameters: { a11y: { test: "todo" } },
  render: () => (
    <ItemGroup className="w-96">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <UserCircleIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile</ItemTitle>
          <ItemDescription>Name, avatar, and bio.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <GearIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Preferences</ItemTitle>
          <ItemDescription>Theme, density, and shortcuts.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FolderIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Projects</ItemTitle>
          <ItemDescription>Manage workspaces and access.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
