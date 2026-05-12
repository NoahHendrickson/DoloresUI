import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MagnifyingGlassIcon, EyeIcon, AtIcon, ArrowRightIcon } from "@phosphor-icons/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const meta = {
  title: "Primitives/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "InputGroup composes an input or textarea with leading/trailing addons (icons, text, buttons).",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup>
        <InputGroupAddon>
          <MagnifyingGlassIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." aria-label="Search" />
      </InputGroup>
    </div>
  ),
};

export const WithTrailingButton: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup>
        <InputGroupInput type="password" placeholder="Password" aria-label="Password" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Show password">
            <EyeIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithPrefixText: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" aria-label="Website" />
      </InputGroup>
    </div>
  ),
};

export const WithLeadingAndTrailing: Story = {
  render: () => (
    <div className="w-96">
      <InputGroup>
        <InputGroupAddon>
          <AtIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="username" aria-label="Username" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Submit">
            <ArrowRightIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div className="w-96">
      <InputGroup>
        <InputGroupTextarea placeholder="Type a message..." aria-label="Message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="ml-auto text-xs">0 / 200</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup>
        <InputGroupAddon>
          <MagnifyingGlassIcon />
        </InputGroupAddon>
        <InputGroupInput disabled placeholder="Disabled" aria-label="Disabled" />
      </InputGroup>
    </div>
  ),
};
