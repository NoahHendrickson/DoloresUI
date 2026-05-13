import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "../app/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

if (typeof document !== "undefined") {
  document.documentElement.classList.add(
    geistSans.variable,
    geistMono.variable,
    "font-sans"
  );
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    a11y: { test: "error" },
    backgrounds: { disable: true },
    docs: { toc: true },
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
      parentSelector: "html",
    }),
    (Story) => (
      <div className="bg-background text-foreground p-6">
        <Story />
      </div>
    ),
  ],
};

export default preview;
