import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, fn } from "storybook/test";
import { Textarea } from "@/components/ui/textarea";

const meta = {
  title: "Primitives/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Multi-line text input with auto field-sizing. Supports aria-invalid for error states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
    rows: { control: "number" },
    onChange: { action: "changed" },
  },
  args: {
    placeholder: "Type your message here...",
    disabled: false,
    onChange: fn(),
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithValue: Story = {
  args: { defaultValue: "The quick brown fox jumps over the lazy dog." },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Cannot edit this." },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "Too short" },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Interaction: Story = {
  args: { placeholder: "Type here", "aria-label": "Message" },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", { name: /message/i });
    await userEvent.type(textarea, "hello world");
    await expect(args.onChange).toHaveBeenCalled();
    await expect(textarea).toHaveValue("hello world");
  },
};
