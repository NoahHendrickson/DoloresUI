import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, fn } from "storybook/test";
import { Input } from "@/components/ui/input";

const meta = {
  title: "Primitives/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Input primitive backed by Base UI. Supports standard HTML input types plus aria-invalid for error states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url", "file"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
    onChange: { action: "changed" },
  },
  args: {
    type: "text",
    placeholder: "Enter text...",
    disabled: false,
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export const Email: Story = {
  args: { type: "email", placeholder: "name@example.com" },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export const Password: Story = {
  args: { type: "password", placeholder: "Password" },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "not-an-email" },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export const Interaction: Story = {
  args: { placeholder: "Type here", "aria-label": "Text input" },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: /text input/i });
    await userEvent.type(input, "hello");
    await expect(args.onChange).toHaveBeenCalled();
    await expect(input).toHaveValue("hello");
  },
};
