"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ComputerDesktopIcon, DevicePhoneMobileIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const themes = ["system", "light", "dark"] as const;

type ThemeChoice = (typeof themes)[number];

const themeOptions: Record<Exclude<ThemeChoice, "system">, { label: string; Icon: typeof SunIcon }> = {
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
  const label = currentTheme === "system" ? "Device theme" : themeOptions[currentTheme].label;
  const Icon = currentTheme === "system" ? null : themeOptions[currentTheme].Icon;

  const handleToggle = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className={`btn btn-sm btn-circle bg-primary text-primary-content hover:bg-secondary border-0 ${className ?? ""}`}
      aria-label={`${label}. Switch theme`}
      title={label}
      onClick={handleToggle}
      disabled={!mounted}
    >
      {mounted && Icon ? <Icon className="h-6 w-6" /> : null}
      {mounted && !Icon ? (
        <>
          <DevicePhoneMobileIcon className="h-6 w-6 lg:hidden" />
          <ComputerDesktopIcon className="hidden h-6 w-6 lg:block" />
        </>
      ) : null}
      {mounted ? null : <span className="h-6 w-6" />}
    </button>
  );
};
