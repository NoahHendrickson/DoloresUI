import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spinner } from "@/components/ui/spinner";

const meta = {
  title: "Display/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Loading spinner with built-in role=status and aria-label. Size via Tailwind classes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Large: Story = {
  render: () => <Spinner className="size-8" />,
};

export const InlineWithText: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm">
      <Spinner />
      <span>Saving changes…</span>
    </div>
  ),
};
