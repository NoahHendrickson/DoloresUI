import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, waitFor } from "storybook/test";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Overlays/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Hover-triggered preview card backed by Base UI's PreviewCard. Great for link previews.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: { control: "boolean" },
    openDelay: { control: "number" },
    closeDelay: { control: "number" },
  },
  args: {
    defaultOpen: false,
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<Button variant="link">@dolores</Button>} />
      <HoverCardContent>
        <div className="flex flex-col gap-1.5">
          <div className="font-medium">@dolores</div>
          <p className="text-muted-foreground">
            Design-system maintainer. Building shadcn primitives on Base UI.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Open: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger render={<Button variant="link">@noey</Button>} />
      <HoverCardContent>
        <div className="flex flex-col gap-1.5">
          <div className="font-medium">@noey</div>
          <p className="text-muted-foreground">Building DoloresUI.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Interaction: Story = {
  render: () => (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger render={<Button variant="link">@hover</Button>} />
      <HoverCardContent>
        <div className="font-medium">Preview card</div>
      </HoverCardContent>
    </HoverCard>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /@hover/i });
    await userEvent.hover(trigger);
    await waitFor(async () => {
      const card = await within(document.body).findByText(/preview card/i);
      await expect(card).toBeInTheDocument();
    });
  },
};
