import type { ColorSchemeName } from "react-native";

export type ColorSchemePreference = "system" | "light" | "dark";
export type ResolvedColorScheme = "light" | "dark";

export const COLOR_SCHEME_CYCLE: readonly ColorSchemePreference[] = ["system", "light", "dark"];

export function resolveColorScheme(
  preference: ColorSchemePreference,
  systemScheme: ColorSchemeName | null | undefined,
): ResolvedColorScheme {
  if (preference === "system") {
    return systemScheme === "dark" ? "dark" : "light";
  }
  return preference;
}

export function nextColorSchemePreference(current: ColorSchemePreference): ColorSchemePreference {
  const index = COLOR_SCHEME_CYCLE.indexOf(current);
  const nextIndex = index === -1 ? 0 : (index + 1) % COLOR_SCHEME_CYCLE.length;
  return COLOR_SCHEME_CYCLE[nextIndex]!;
}

export type AppThemeColors = {
  background: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  text: string;
  textMuted: string;
  brand: string;
  onBrand: string;
  secondary: string;
  onSecondary: string;
  danger: string;
  handle: string;
  shadow: string;
  statusBarStyle: "light" | "dark";
};

const LIGHT_THEME: AppThemeColors = {
  background: "#CAF0F8",
  surface: "#ffffff",
  surfaceMuted: "rgba(144, 224, 239, 0.4)",
  border: "#90E0EF",
  text: "#212638",
  textMuted: "#3d4a63",
  brand: "#00B4D8",
  onBrand: "#212638",
  secondary: "#90E0EF",
  onSecondary: "#212638",
  danger: "#FF8863",
  handle: "#90E0EF",
  shadow: "rgba(33, 38, 56, 0.12)",
  statusBarStyle: "dark",
};

const DARK_THEME: AppThemeColors = {
  background: "#84A7A1",
  surface: "#2E8A99",
  surfaceMuted: "rgba(31, 110, 140, 0.55)",
  border: "#1F6E8C",
  text: "#F9FBFF",
  textMuted: "#d5e4ea",
  brand: "#0E2954",
  onBrand: "#F9FBFF",
  secondary: "#1F6E8C",
  onSecondary: "#F9FBFF",
  danger: "#FF8863",
  handle: "#84A7A1",
  shadow: "rgba(0, 0, 0, 0.28)",
  statusBarStyle: "light",
};

export function appThemeColors(colorScheme: ResolvedColorScheme): AppThemeColors {
  return colorScheme === "dark" ? DARK_THEME : LIGHT_THEME;
}
