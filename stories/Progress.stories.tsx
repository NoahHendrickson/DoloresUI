import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

const meta = {
  title: "Display/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Determinate or indeterminate progress bar backed by Base UI. Compose with ProgressLabel and ProgressValue for the header row.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
  args: {
    value: 60,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <Progress {...args} aria-label="Upload progress" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: { value: 45 },
  render: (args) => (
    <div className="w-72">
      <Progress {...args}>
        <ProgressLabel>Uploading…</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
};

export const Complete: Story = {
  args: { value: 100 },
  render: (args) => (
    <div className="w-72">
      <Progress {...args}>
        <ProgressLabel>Synced</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
};

export const Indeterminate: Story = {
  args: { value: null },
  render: (args) => (
    <div className="w-72">
      <Progress {...args}>
        <ProgressLabel>Loading…</ProgressLabel>
      </Progress>
    </div>
  ),
};
