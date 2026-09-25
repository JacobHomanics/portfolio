import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import type { ColorSchemePreference } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";

function iconName(preference: ColorSchemePreference): keyof typeof Ionicons.glyphMap {
  switch (preference) {
    case "system":
      return "phone-portrait-outline";
    case "light":
      return "sunny-outline";
    case "dark":
      return "moon-outline";
  }
}

function label(preference: ColorSchemePreference) {
  switch (preference) {
    case "system":
      return "Theme set to system. Switch to light mode.";
    case "light":
      return "Theme set to light. Switch to dark mode.";
    case "dark":
      return "Theme set to dark. Switch to system theme.";
  }
}

export function ThemeToggle() {
  const { colors, colorSchemePreference, toggleColorScheme } = useAppTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label(colorSchemePreference)}
      onPress={toggleColorScheme}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
      }}
    >
      <Ionicons name={iconName(colorSchemePreference)} size={22} color={colors.text} />
    </Pressable>
  );
}
