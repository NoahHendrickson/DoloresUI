"use client";

import { IconContext } from "@phosphor-icons/react/dist/lib/context";
import { ThemeProvider } from "next-themes";

const phosphorDefaults = { weight: "duotone" as const };

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <IconContext.Provider value={phosphorDefaults}>{children}</IconContext.Provider>
    </ThemeProvider>
  );
}
