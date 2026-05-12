import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select";

const meta = {
  title: "Primitives/NativeSelect",
  component: NativeSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Native <select> element styled to match the design system. Useful for mobile-first form scenarios.",
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
    "aria-invalid": { control: "boolean" },
    onChange: { action: "changed" },
  },
  args: {
    "aria-label": "Select",
    size: "default",
    disabled: false,
    onChange: fn(),
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Small: Story = {
  args: { size: "sm" },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="s">S</NativeSelectOption>
      <NativeSelectOption value="m">M</NativeSelectOption>
      <NativeSelectOption value="l">L</NativeSelectOption>
    </NativeSelect>
  ),
};

export const WithGroups: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOptGroup label="North America">
        <NativeSelectOption value="est">Eastern</NativeSelectOption>
        <NativeSelectOption value="pst">Pacific</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="gmt">GMT</NativeSelectOption>
        <NativeSelectOption value="cet">CET</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="a">Option A</NativeSelectOption>
      <NativeSelectOption value="b">Option B</NativeSelectOption>
    </NativeSelect>
  ),
};
