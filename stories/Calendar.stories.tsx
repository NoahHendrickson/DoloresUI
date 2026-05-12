import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

const meta = {
  title: "Forms/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Calendar built on react-day-picker v10. Supports single, range, and multiple selection modes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "range", "multiple"],
    },
    showOutsideDays: { control: "boolean" },
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
    },
  },
  args: {
    showOutsideDays: true,
    captionLayout: "label",
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

function SingleCalendar(args: React.ComponentProps<typeof Calendar>) {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 4, 11)
  );
  return (
    <Calendar
      {...args}
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  );
}

function RangeCalendar(args: React.ComponentProps<typeof Calendar>) {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 4, 8),
    to: new Date(2026, 4, 16),
  });
  return (
    <Calendar
      {...args}
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-lg border"
    />
  );
}

function MultipleCalendar(args: React.ComponentProps<typeof Calendar>) {
  const [dates, setDates] = React.useState<Date[] | undefined>([
    new Date(2026, 4, 4),
    new Date(2026, 4, 11),
    new Date(2026, 4, 18),
  ]);
  return (
    <Calendar
      {...args}
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-lg border"
    />
  );
}

export const Single: Story = {
  render: (args) => <SingleCalendar {...args} />,
};

export const Range: Story = {
  render: (args) => <RangeCalendar {...args} />,
};

export const Multiple: Story = {
  render: (args) => <MultipleCalendar {...args} />,
};

export const DropdownCaption: Story = {
  args: { captionLayout: "dropdown" },
  render: (args) => <SingleCalendar {...args} />,
};

export const HideOutsideDays: Story = {
  args: { showOutsideDays: false },
  render: (args) => <SingleCalendar {...args} />,
};
