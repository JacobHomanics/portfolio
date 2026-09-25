"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const themes = ["system", "light", "dark"] as const;

type ThemeChoice = (typeof themes)[number];

const themeOptions: Record<ThemeChoice, { label: string; Icon: typeof SunIcon }> = {
  system: { label: "Device theme", Icon: ComputerDesktopIcon },
  light: { label: "Light mode", Icon: SunIcon },
  dark: { label: "Dark mode", Icon: MoonIcon },
};

const isThemeChoice = (value: string | undefined): value is ThemeChoice => themes.includes(value as ThemeChoice);

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme: ThemeChoice = isThemeChoice(theme) ? theme : "system";
  const { label, Icon } = themeOptions[currentTheme];

  const handleToggle = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className={`btn btn-ghost btn-sm px-2 ${className ?? ""}`}
      aria-label={`${label}. Switch theme`}
      title={label}
      onClick={handleToggle}
      disabled={!mounted}
    >
      {mounted ? <Icon className="h-6 w-6" /> : <span className="h-6 w-6" />}
    </button>
  );
};
