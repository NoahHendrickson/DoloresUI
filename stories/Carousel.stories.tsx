import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  { title: "Atlas", subtitle: "Discover" },
  { title: "Beacon", subtitle: "Navigate" },
  { title: "Citadel", subtitle: "Defend" },
  { title: "Dunes", subtitle: "Explore" },
  { title: "Echo", subtitle: "Resonate" },
];

const meta = {
  title: "Layout/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Carousel powered by embla-carousel-react. Supports horizontal and vertical orientations.",
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
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <Carousel {...args} className="w-full max-w-xs" opts={{ align: "start" }}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-3xl font-semibold">{slide.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {slide.subtitle}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <Carousel
      {...args}
      className="w-full max-w-xs"
      opts={{ align: "start" }}
    >
      <CarouselContent className="-mt-1 h-[300px]">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <Card>
              <CardContent className="flex h-32 items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-xl font-semibold">{slide.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {slide.subtitle}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleVisible: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <Carousel
      {...args}
      className="w-full max-w-md"
      opts={{ align: "start" }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold">{slide.title}</div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
