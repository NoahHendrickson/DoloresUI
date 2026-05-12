import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CopyIcon,
  PencilIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Layout/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Groups buttons (and inputs) into a connected control with shared borders. Supports horizontal or vertical orientations.",
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">
        <CaretLeftIcon data-icon="inline-start" />
        Prev
      </Button>
      <Button variant="outline">
        Next
        <CaretRightIcon data-icon="inline-end" />
      </Button>
    </ButtonGroup>
  ),
};

export const IconButtons: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="icon" aria-label="Edit">
        <PencilIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Copy">
        <CopyIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Delete">
        <TrashIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const Alignment: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="icon" aria-label="Align left">
        <TextAlignLeftIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align center">
        <TextAlignCenterIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align right">
        <TextAlignRightIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>https://</ButtonGroupText>
      <Button variant="outline">dolores.ui</Button>
    </ButtonGroup>
  ),
};

export const WithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Save</Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon" aria-label="More">
        <CaretRightIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};
