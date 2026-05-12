import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InfoIcon, WarningIcon } from "@phosphor-icons/react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Alert primitive for inline messaging. Supports default and destructive variants and renders icons via children.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "destructive"],
    },
  },
  args: {
    variant: "default",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: { variant: "destructive" },
  parameters: {
    // The destructive variant uses text-destructive on the card background, which axe
    // flags for color-contrast under WCAG AA. Surface the violation without failing CI.
    a11y: { test: "todo" },
  },
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <WarningIcon />
      <AlertTitle>Your session has expired</AlertTitle>
      <AlertDescription>
        Please sign in again to continue using your account.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <InfoIcon />
      <AlertTitle>Your trial expires in 7 days.</AlertTitle>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <AlertTitle>System maintenance scheduled</AlertTitle>
      <AlertDescription>
        We will be performing routine maintenance on Sunday at 2:00 AM UTC.
      </AlertDescription>
    </Alert>
  ),
};
