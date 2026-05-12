import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const meta = {
  title: "Primitives/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Label primitive for form controls. Auto-dims when paired with disabled peer/group controls.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text" },
    children: { control: "text" },
  },
  args: {
    children: "Email address",
    htmlFor: "email",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="email-input">Email</Label>
      <Input id="email-input" type="email" placeholder="name@example.com" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <Label htmlFor="terms" className="cursor-pointer">
      <Checkbox id="terms" />
      Accept terms and conditions
    </Label>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="disabled-input">Username</Label>
      <Input id="disabled-input" disabled placeholder="Disabled" />
    </div>
  ),
};
