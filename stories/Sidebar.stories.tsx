import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const meta = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Application sidebar with header, content, footer, and grouped menus. Must be wrapped in a SidebarProvider.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const nav = [
  { title: "Home", icon: HouseIcon, badge: null, active: true },
  { title: "Projects", icon: FolderIcon, badge: "12", active: false },
  { title: "Calendar", icon: CalendarIcon, badge: null, active: false },
  { title: "Analytics", icon: ChartBarIcon, badge: null, active: false },
] as const;

const settings = [
  { title: "Account", icon: UserCircleIcon },
  { title: "Notifications", icon: BellIcon },
  { title: "Settings", icon: GearIcon },
] as const;

function DemoApp() {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-semibold">
              A
            </div>
            <div className="text-sm font-medium">Acme Inc</div>
          </div>
          <SidebarInput placeholder="Search" />
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge ? (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    ) : null}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settings.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <UserCircleIcon />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-medium">noah@dolores.ui</span>
                  <span className="text-xs text-muted-foreground">Pro plan</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-3">
          <SidebarTrigger />
          <span className="text-sm font-medium">Dashboard</span>
        </header>
        <div className="flex-1 p-6">
          <h2 className="mb-2 text-lg font-medium">Welcome back</h2>
          <p className="text-sm text-muted-foreground">
            You have 3 new comments and 1 pending review.
          </p>
        </div>
      </SidebarInset>
    </>
  );
}

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <DemoApp />
    </SidebarProvider>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <DemoApp />
    </SidebarProvider>
  ),
};

export const Floating: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <MagnifyingGlassIcon className="size-4" />
            <span className="text-sm font-medium">Search anything</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-3">
          <SidebarTrigger />
          <span className="text-sm font-medium">Floating variant</span>
        </header>
        <div className="flex-1 p-6 text-sm text-muted-foreground">
          The sidebar lifts off the surface with rounded corners and a ring.
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
};
