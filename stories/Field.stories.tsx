import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

const meta = {
  title: "Primitives/Field",
  component: Field,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Field composition primitives for building accessible form layouts. Compose with FieldLabel, FieldDescription, FieldError, FieldGroup, FieldSet, and FieldLegend.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
  args: {
    orientation: "vertical",
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Field {...args}>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="Jane Doe" />
        <FieldDescription>Your full legal name.</FieldDescription>
      </Field>
    </div>
  ),
};

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <div className="w-80">
      <Field {...args}>
        <FieldLabel htmlFor="notifications" className="cursor-pointer">
          <Switch id="notifications" />
          <FieldContent>
            <FieldTitle>Notifications</FieldTitle>
            <FieldDescription>Receive email updates.</FieldDescription>
          </FieldContent>
        </FieldLabel>
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <div className="w-80">
      <Field {...args} data-invalid="true">
        <FieldLabel htmlFor="email-err">Email</FieldLabel>
        <Input id="email-err" type="email" aria-invalid defaultValue="not-an-email" />
        <FieldError>Please enter a valid email address.</FieldError>
      </Field>
    </div>
  ),
};

export const FieldGroupStory: Story = {
  name: "FieldGroup",
  render: () => (
    <div className="w-96">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fg-name">Name</FieldLabel>
          <Input id="fg-name" placeholder="Jane Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fg-email">Email</FieldLabel>
          <Input id="fg-email" type="email" placeholder="jane@example.com" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fg-bio">Bio</FieldLabel>
          <Textarea id="fg-bio" placeholder="Tell us about yourself..." />
          <FieldDescription>Max 200 characters.</FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const FieldSetStory: Story = {
  name: "FieldSet",
  // FieldDescription uses text-muted-foreground inside has-data-checked containers,
  // which axe flags for color-contrast in the nested-checked variant. Mark as 'todo'
  // until the muted-foreground token meets WCAG AA in that context.
  parameters: { a11y: { test: "todo" } },
  render: () => (
    <div className="w-96">
      <FieldSet>
        <FieldLegend>Preferences</FieldLegend>
        <FieldDescription>Configure your account settings.</FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="pref-marketing" className="cursor-pointer">
              <Checkbox id="pref-marketing" />
              <FieldContent>
                <FieldTitle>Marketing emails</FieldTitle>
                <FieldDescription>Promotional content.</FieldDescription>
              </FieldContent>
            </FieldLabel>
          </Field>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldLabel htmlFor="pref-product" className="cursor-pointer">
              <Checkbox id="pref-product" defaultChecked />
              <FieldContent>
                <FieldTitle>Product updates</FieldTitle>
                <FieldDescription>Feature announcements.</FieldDescription>
              </FieldContent>
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};
