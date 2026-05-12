import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { CaretDownIcon } from "@phosphor-icons/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Navigation/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Unstyled disclosure primitive. Bring your own trigger and content; Collapsible handles state and ARIA wiring.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72 space-y-2">
      <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
        <span className="text-sm font-medium">noah@dolores.ui</span>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Toggle">
              <CaretDownIcon />
            </Button>
          }
        />
      </div>
      <CollapsibleContent className="space-y-1 rounded-md border p-3 text-sm text-muted-foreground">
        <div>Workspaces: 3</div>
        <div>Last seen: 2 minutes ago</div>
        <div>Plan: Pro</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-72 space-y-2">
      <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
        <span className="text-sm font-medium">Advanced options</span>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Toggle">
              <CaretDownIcon />
            </Button>
          }
        />
      </div>
      <CollapsibleContent className="space-y-1 rounded-md border p-3 text-sm text-muted-foreground">
        <div>Verbose logging enabled.</div>
        <div>Telemetry: off</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Collapsible className="w-72 space-y-2">
      <CollapsibleTrigger
        render={<Button variant="outline">Show details</Button>}
      />
      <CollapsibleContent className="rounded-md border p-3 text-sm">
        Hidden details revealed.
      </CollapsibleContent>
    </Collapsible>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /show details/i });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  },
};
