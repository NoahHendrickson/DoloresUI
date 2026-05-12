import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BellIcon, GearIcon } from "@phosphor-icons/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Layout/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Container surface for grouped content. Compose with CardHeader, CardTitle, CardDescription, CardContent, CardFooter, and CardAction.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
  args: {
    size: "default",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Acme Inc</CardTitle>
        <CardDescription>Manage your workspace settings and members.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          You currently have 12 active projects across 3 environments.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Upgrade to Pro</CardTitle>
        <CardDescription>Unlock unlimited workspaces and priority support.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cancel anytime. Billed monthly at $19 per seat.</p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Maybe later</Button>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label="Settings">
            <GearIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <BellIcon className="size-4 text-muted-foreground" />
          <span>Push notifications are enabled.</span>
        </div>
      </CardContent>
    </Card>
  ),
};

export const Small: Story = {
  args: { size: "sm" },
  render: (args) => (
    <Card {...args} className="w-72">
      <CardHeader>
        <CardTitle>Compact card</CardTitle>
        <CardDescription>Tighter padding and smaller title.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Useful for dense dashboards.</p>
      </CardContent>
    </Card>
  ),
};
