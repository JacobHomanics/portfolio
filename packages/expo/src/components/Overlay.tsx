import type { ReactNode } from "react";
import { useEffect } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";

export function Overlay({ children, placement }: { children: ReactNode; placement: "center" | "sheet" }) {
  const navigation = useNavigation();
  const desktop = useIsDesktopWeb();
  const { colors } = useAppTheme();
  const dismiss = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  useEffect(() => {
    if (Platform.OS !== "web" || typeof window === "undefined") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigation]);

  if (Platform.OS !== "web") {
    return <View style={[styles.native, { backgroundColor: colors.surface }]}>{children}</View>;
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
});
