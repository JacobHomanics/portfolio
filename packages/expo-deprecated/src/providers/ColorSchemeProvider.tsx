import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Appearance, Platform, useColorScheme as useSystemColorScheme } from "react-native";

import {
  appThemeColors,
  nextColorSchemePreference,
  resolveColorScheme,
  type ColorSchemePreference,
  type ResolvedColorScheme,
} from "@/constants/theme";

const COLOR_SCHEME_STORAGE_KEY = "portfolio:colorScheme";

function isStoredColorSchemePreference(value: string | null): value is ColorSchemePreference {
  return value === "system" || value === "light" || value === "dark";
}

type ColorSchemeContextValue = {
  colorSchemePreference: ColorSchemePreference;
  colorScheme: ResolvedColorScheme;
  colors: ReturnType<typeof appThemeColors>;
  isDark: boolean;
  toggleColorScheme: () => void;
};

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null);

export function ColorSchemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useSystemColorScheme();
  const [colorSchemePreference, setColorSchemePreference] = useState<ColorSchemePreference>("system");

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      const stored = await AsyncStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
      if (cancelled) return;
      if (isStoredColorSchemePreference(stored)) {
        setColorSchemePreference(stored);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (Platform.OS === "web") return;
    Appearance.setColorScheme(colorSchemePreference === "system" ? "unspecified" : colorSchemePreference);
  }, [colorSchemePreference]);

  const colorScheme = useMemo(
    () => resolveColorScheme(colorSchemePreference, systemScheme),
    [colorSchemePreference, systemScheme],
  );

  const colors = useMemo(() => appThemeColors(colorScheme), [colorScheme]);

  useEffect(() => {
    if (Platform.OS !== "web" || typeof document === "undefined") return;
    document.body.style.backgroundColor = colors.background;
    document.documentElement.style.backgroundColor = colors.background;
  }, [colors.background]);

  const toggleColorScheme = useCallback(() => {
    setColorSchemePreference(current => {
      const next = nextColorSchemePreference(current);
      void AsyncStorage.setItem(COLOR_SCHEME_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(
    (): ColorSchemeContextValue => ({
      colorSchemePreference,
      colorScheme,
      colors,
      isDark: colorScheme === "dark",
      toggleColorScheme,
    }),
    [colorScheme, colorSchemePreference, colors, toggleColorScheme],
  );

  return <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>;
}

export function useColorSchemeContext(): ColorSchemeContextValue {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw new Error("useColorSchemeContext requires ColorSchemeProvider");
  }
  return context;
}
