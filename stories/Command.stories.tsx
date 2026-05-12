import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  CalendarIcon,
  GearIcon,
  PersonIcon,
  SmileyIcon,
} from "@phosphor-icons/react";

const meta = {
  title: "Overlays/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Searchable command palette backed by cmdk. Compose Input, List, Group, Item, and Separator.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="w-80 rounded-lg ring-1 ring-foreground/10">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            Calendar
          </CommandItem>
          <CommandItem>
            <SmileyIcon />
            Search emoji
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <PersonIcon />
            Profile
            <CommandShortcut>{"⌘P"}</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon />
            Settings
            <CommandShortcut>{"⌘S"}</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    // cmdk renders CommandList as role="listbox" but CommandSeparator gets role="separator",
    // which axe rejects as a non-allowed child of listbox. Surface but don't fail.
    a11y: { test: "todo" },
  },
};

export const Open: Story = {
  render: () => (
    <Command className="w-80 rounded-lg ring-1 ring-foreground/10">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Files">
          <CommandItem>README.md</CommandItem>
          <CommandItem>package.json</CommandItem>
          <CommandItem>tsconfig.json</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Command className="w-80 rounded-lg ring-1 ring-foreground/10">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Items">
          <CommandItem>Apple</CommandItem>
          <CommandItem>Banana</CommandItem>
          <CommandItem>Cherry</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Search...");
    await userEvent.type(input, "ban");
    const item = await canvas.findByText("Banana");
    await expect(item).toBeInTheDocument();
  },
};
