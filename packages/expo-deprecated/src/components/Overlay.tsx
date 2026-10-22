import { Ionicons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";

export function Overlay({
  children,
  placement,
  showClose = false,
}: {
  children: ReactNode;
  placement: "center" | "sheet";
  showClose?: boolean;
}) {
  const navigation = useNavigation();
  const desktop = useIsDesktopWeb();
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();
  const dismiss = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  const closeButton = showClose ? (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Close"
      onPress={dismiss}
      style={[
        styles.close,
        {
          top: Platform.OS === "web" ? 12 : Math.max(insets.top, 12),
          backgroundColor: colors.secondary,
        },
      ]}
    >
      <Ionicons name="close" size={22} color={colors.text} />
    </Pressable>
  ) : null;

  useEffect(() => {
    if (Platform.OS !== "web" || typeof window === "undefined") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigation]);

  if (Platform.OS !== "web") {
    return (
      <View style={[styles.native, { backgroundColor: colors.surface }]}>
        {closeButton}
        {children}
      </View>
    );
  }

  const anchoredBottom = placement === "sheet" && !desktop;

  return (
    <View style={styles.backdrop}>
      <Pressable accessibilityLabel="Dismiss" onPress={dismiss} style={StyleSheet.absoluteFill} />
      <View
        style={[
          anchoredBottom ? styles.sheet : styles.dialog,
          { backgroundColor: colors.surface },
        ]}
      >
        {closeButton}
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  native: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  dialog: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 16,
    padding: 24,
    gap: 16,
    zIndex: 1,
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    gap: 16,
    zIndex: 1,
  },
  close: {
    position: "absolute",
    right: 12,
    zIndex: 2,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
