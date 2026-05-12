import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meta = {
  title: "Navigation/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Collapsible list of sections. Backed by Base UI; supports single or multi-open via openMultiple.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Dolores UI?</AccordionTrigger>
        <AccordionContent>
          A design system for Next.js apps built on Base UI and Tailwind.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it themable?</AccordionTrigger>
        <AccordionContent>
          Yes. Toggle the `dark` class on the root to switch palettes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>
          Run <code>pnpm dlx shadcn@latest add accordion</code> in your project root.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion openMultiple defaultValue={["item-1", "item-2"]} className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>Performance</AccordionTrigger>
        <AccordionContent>
          Tree-shaken components and zero runtime JS for primitives.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accessibility</AccordionTrigger>
        <AccordionContent>
          Keyboard nav, ARIA, and focus rings are wired up by default.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Bundle size</AccordionTrigger>
        <AccordionContent>
          Average component weighs less than 1KB gzipped of runtime code.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Accordion className="w-96">
      <AccordionItem value="faq-1">
        <AccordionTrigger>Toggle me</AccordionTrigger>
        <AccordionContent>I am the revealed content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle me/i });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  },
};
