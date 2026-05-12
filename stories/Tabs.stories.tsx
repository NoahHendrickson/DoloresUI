import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tabbed content navigation backed by Base UI. Supports horizontal and vertical orientations and a line variant.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Summary of your workspace activity over the last 30 days.
      </TabsContent>
      <TabsContent value="analytics">
        Conversion funnels, retention cohorts, and feature usage.
      </TabsContent>
      <TabsContent value="reports">
        Scheduled exports and saved queries appear here.
      </TabsContent>
    </Tabs>
  ),
};

export const LineVariant: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabsList variant="line">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">Update your display name and avatar.</TabsContent>
      <TabsContent value="account">Manage your sign-in methods.</TabsContent>
      <TabsContent value="billing">View invoices and update payment.</TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <Tabs {...args} defaultValue="general" className="w-96">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
      </TabsList>
      <TabsContent value="general">Workspace name and default region.</TabsContent>
      <TabsContent value="members">Invite teammates and manage roles.</TabsContent>
      <TabsContent value="api">Generate and rotate API keys.</TabsContent>
    </Tabs>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview panel content.</TabsContent>
      <TabsContent value="analytics">Analytics panel content.</TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const analyticsTab = canvas.getByRole("tab", { name: /analytics/i });
    await userEvent.click(analyticsTab);
    await expect(analyticsTab).toHaveAttribute("aria-selected", "true");
    const panel = await canvas.findByText(/analytics panel content/i);
    await expect(panel).toBeVisible();
  },
};
