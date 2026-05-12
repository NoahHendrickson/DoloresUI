"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const next = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
    >
      {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
