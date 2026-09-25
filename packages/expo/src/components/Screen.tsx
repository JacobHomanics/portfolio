import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { ReactNode } from "react";
import { Pressable, ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
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
  const route = useRoute();
  const navigation = useNavigation();
  const bottom = desktop || !footerInset ? Math.max(insets.bottom, 24) : SOCIAL_BAR_HEIGHT + insets.bottom + 24;
  const showBack =
    !desktop && route.name !== "home" && route.name !== "card" && navigation.canGoBack();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={[styles.content, { paddingBottom: bottom }]}
    >
      <View style={styles.column}>
        {showBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="chevron-back" size={24} color={colors.text} />
          </Pressable>
        ) : null}
        {children}
      </View>
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
  back: {
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
