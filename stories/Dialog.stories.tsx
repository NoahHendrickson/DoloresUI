import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal dialog overlay backed by Base UI. Composes Trigger, Content, Header, Body, Title, Description, and Footer.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: { control: "boolean" },
    modal: { control: "boolean" },
  },
  args: {
    defaultOpen: false,
    modal: true,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger render={<Button>Open dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>This is a dialog description.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="dialog-default-name">Label</Label>
            <Input id="dialog-default-name" placeholder="Placeholder" />
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutBody: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger render={<Button>Open dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to newsletter</DialogTitle>
          <DialogDescription>
            Get product updates delivered to your inbox monthly.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Maybe later</Button>} />
          <Button>Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button>Open dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>This is an interactive dialog.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /open dialog/i });
    await userEvent.click(trigger);
    const dialog = await within(document.body).findByRole("dialog");
    await expect(dialog).toBeInTheDocument();
  },
};
