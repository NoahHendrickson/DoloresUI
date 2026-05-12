import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const meta = {
  title: "Overlays/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Top-level navigation menu backed by Base UI. Each trigger opens a content panel of links.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1 p-1">
              <li>
                <NavigationMenuLink href="#introduction">Introduction</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#installation">Installation</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#theming">Theming</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1 p-1">
              <li>
                <NavigationMenuLink href="#button">Button</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#dialog">Dialog</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#popover">Popover</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#docs">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const Open: Story = {
  render: () => (
    <NavigationMenu defaultValue="getting-started">
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1 p-1">
              <li>
                <NavigationMenuLink href="#introduction">Introduction</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#installation">Installation</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#docs">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: {
    // Base UI's NavigationMenu portal renders focus-guard spans with tabindex=0 + aria-hidden,
    // which axe flags via aria-hidden-focus. Upstream behavior; surface but don't fail.
    a11y: { test: "todo" },
  },
};

export const Interaction: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1 p-1">
              <li>
                <NavigationMenuLink href="#guides">Guides</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#api">API</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /resources/i });
    await userEvent.click(trigger);
    const link = await within(document.body).findByRole("link", { name: /guides/i });
    await expect(link).toBeInTheDocument();
  },
  parameters: {
    // After click, Base UI inserts focus-guard spans that axe flags via aria-hidden-focus.
    a11y: { test: "todo" },
  },
};
