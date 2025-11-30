"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button
        isIconOnly
        onPress={() => setTheme(current === "light" ? "dark" : "light")}
        aria-pressed={current === "light"}
        className="px-3 py-1 rounded-full"
        aria-label="Toggle Theme"
      >
        {current === "light" ? (
          <Moon className="fill-black" />
        ) : (
          <Sun className="fill-yellow-500" />
        )}
      </Button>
    </div>
  );
}
