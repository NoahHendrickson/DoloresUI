import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, waitFor } from "storybook/test";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Hover-triggered tooltip backed by Base UI. Wrap stories in TooltipProvider.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: { control: "boolean" },
  },
  args: {
    defaultOpen: false,
  },
  decorators: [
    (Story) => (
      <TooltipProvider delay={0}>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
};

export const Open: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger render={<Button variant="outline">Hover</Button>} />
      <TooltipContent>Helpful hint</TooltipContent>
    </Tooltip>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>Hover interaction</TooltipContent>
    </Tooltip>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /hover me/i });
    await userEvent.hover(trigger);
    trigger.focus();
    await waitFor(async () => {
      const tooltip = await within(document.body).findByText(/hover interaction/i);
      await expect(tooltip).toBeInTheDocument();
    });
  },
};
