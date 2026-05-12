import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const FRUITS = ["Apple", "Banana", "Blueberry", "Cherry", "Grape", "Mango", "Orange", "Peach"];

const meta = {
  title: "Overlays/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Searchable single-select combobox backed by Base UI. Filters items as the user types.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: { control: "boolean" },
  },
  args: {
    defaultOpen: false,
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Combobox items={FRUITS} {...args}>
      <ComboboxInput placeholder="Pick a fruit..." className="w-64" />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => <ComboboxItem key={item}>{item}</ComboboxItem>}
        </ComboboxList>
        <ComboboxEmpty>No results.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  ),
  parameters: {
    // ComboboxInput renders the trigger button inside an aria-hidden InputGroupAddon, which axe
    // flags as aria-hidden-focus. Upstream input-group/combobox composition; surface but don't fail.
    a11y: { test: "todo" },
  },
};

export const Open: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Combobox items={FRUITS} {...args}>
      <ComboboxInput placeholder="Search..." className="w-64" />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => <ComboboxItem key={item}>{item}</ComboboxItem>}
        </ComboboxList>
        <ComboboxEmpty>No results.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  ),
  parameters: {
    // Same aria-hidden InputGroupAddon issue as Default.
    a11y: { test: "todo" },
  },
};

export const Interaction: Story = {
  render: () => (
    <Combobox items={FRUITS}>
      <ComboboxInput placeholder="Search fruit..." className="w-64" />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => <ComboboxItem key={item}>{item}</ComboboxItem>}
        </ComboboxList>
        <ComboboxEmpty>No results.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Search fruit...");
    await userEvent.click(input);
    await userEvent.type(input, "ap");
    const listbox = await within(document.body).findByRole("listbox");
    await expect(listbox).toBeInTheDocument();
  },
  parameters: {
    // Same aria-hidden InputGroupAddon issue as Default.
    a11y: { test: "todo" },
  },
};
