import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, fn } from "storybook/test";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Primitives/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "RadioGroup primitive backed by Base UI. Compose with RadioGroupItem children.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    onValueChange: { action: "changed" },
  },
  args: {
    disabled: false,
    onValueChange: fn(),
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="comfortable" aria-label="Density" className="w-60">
      <Label htmlFor="r1" className="cursor-pointer">
        <RadioGroupItem value="default" id="r1" />
        Default
      </Label>
      <Label htmlFor="r2" className="cursor-pointer">
        <RadioGroupItem value="comfortable" id="r2" />
        Comfortable
      </Label>
      <Label htmlFor="r3" className="cursor-pointer">
        <RadioGroupItem value="compact" id="r3" />
        Compact
      </Label>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <RadioGroup {...args} defaultValue="a" aria-label="Option" className="w-60">
      <Label htmlFor="d1" className="cursor-pointer">
        <RadioGroupItem value="a" id="d1" />
        Option A
      </Label>
      <Label htmlFor="d2" className="cursor-pointer">
        <RadioGroupItem value="b" id="d2" />
        Option B
      </Label>
    </RadioGroup>
  ),
};

export const Interaction: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="Plan" className="w-60">
      <Label htmlFor="i1" className="cursor-pointer">
        <RadioGroupItem value="free" id="i1" />
        Free
      </Label>
      <Label htmlFor="i2" className="cursor-pointer">
        <RadioGroupItem value="pro" id="i2" />
        Pro
      </Label>
    </RadioGroup>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const proRadio = canvas.getByRole("radio", { name: /pro/i });
    await userEvent.click(proRadio);
    await expect(args.onValueChange).toHaveBeenCalledWith("pro", expect.anything());
  },
};
