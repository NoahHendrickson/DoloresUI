import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FolderIcon, MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Display/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Empty-state container with optional icon media, title, description, and action content.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty className="w-96 border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Create your first project to start collaborating with your team.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon data-icon="inline-start" />
          New project
        </Button>
      </EmptyContent>
    </Empty>
  ),
};

export const NoResults: Story = {
  render: () => (
    <Empty className="w-96 border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <MagnifyingGlassIcon />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your filters or searching with different keywords.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Empty className="w-80 border border-dashed">
      <EmptyHeader>
        <EmptyTitle>Inbox zero</EmptyTitle>
        <EmptyDescription>You&apos;re all caught up.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};
