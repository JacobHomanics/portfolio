import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { useMemo } from "react";
import { StatusBar } from "expo-status-bar";

import { useAppTheme } from "@/hooks/useAppTheme";
import { rootLinking } from "@/navigation/linking";
import { RootStack } from "@/navigation/RootStack";
import type { RootStackParamList } from "@/navigation/types";

export function RootNavigator() {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const { colors, isDark } = useAppTheme();

  const navigationTheme = useMemo(() => {
    const base = isDark ? DarkTheme : DefaultTheme;
    return {
      ...base,
      dark: isDark,
      colors: {
        ...base.colors,
        primary: colors.brand,
        background: colors.background,
        card: colors.surface,
        text: colors.text,
        border: colors.border,
        notification: colors.danger,
      },
    };
  }, [colors, isDark]);

  return (
    <NavigationContainer ref={navigationRef} linking={rootLinking} theme={navigationTheme}>
      <RootStack />
      <StatusBar style={colors.statusBarStyle} />
    </NavigationContainer>
  );
}
