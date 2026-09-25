import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SOCIAL_BAR_HEIGHT } from "@/components/SocialBar";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";

export function Screen({
  children,
  footerInset = true,
}: {
  children: ReactNode;
  footerInset?: boolean;
}) {
  const desktop = useIsDesktopWeb();
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();
  const bottom = desktop || !footerInset ? Math.max(insets.bottom, 24) : SOCIAL_BAR_HEIGHT + insets.bottom + 24;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={[styles.content, { paddingBottom: bottom }]}
    >
      <View style={styles.column}>{children}</View>
    </ScrollView>
  );
}

export function screenColumn(): StyleProp<ViewStyle> {
  return styles.column;
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    padding: 16,
    gap: 24,
  },
  column: {
    width: "100%",
    maxWidth: 960,
    alignItems: "center",
    gap: 24,
  },
});
