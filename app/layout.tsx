import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoloresUI",
  description: "shadcn + Base UI design system",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable, "font-sans antialiased")}
      suppressHydrationWarning
    >
      <body className="min-h-svh bg-background text-foreground">{children}</body>
    </html>
  );
}
