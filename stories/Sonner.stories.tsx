import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Feedback/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Sonner Toaster, themed to match the design system. Trigger notifications via the toast() function imported from 'sonner'.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => toast("Hello from Sonner")}>Show toast</Button>
      <Toaster />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline"
        onClick={() => toast.success("Profile saved successfully")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("New version available")}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Your storage is almost full")}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Failed to sync changes")}
      >
        Error
      </Button>
      <Toaster />
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={() =>
          toast("Event scheduled", {
            description: "Tuesday, May 12 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => toast("Event cancelled"),
            },
          })
        }
      >
        Show with action
      </Button>
      <Toaster />
    </div>
  ),
};

export const Interaction: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => toast("Hello from Sonner")}>Show toast</Button>
      <Toaster />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /show toast/i });
    await userEvent.click(button);
    await expect(
      await within(document.body).findByText(/hello from sonner/i)
    ).toBeInTheDocument();
  },
};
