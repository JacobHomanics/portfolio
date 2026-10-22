import { Link } from "expo-router";
import { Platform, StyleSheet, Text, useWindowDimensions, View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "../theme/colors";

/** Matches the top nav: at this width and up the message and button sit centered. */
const DESKTOP_BREAKPOINT = 640;

/**
 * Sits below the page content in the root layout, so pages keep their own scrolling and
 * nothing is hidden behind it.
 */
export function BottomBanner() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isDesktop = width >= DESKTOP_BREAKPOINT;

  return (
    <View accessibilityLabel="Availability" role="region" style={[styles.bar, { paddingBottom: insets.bottom }]}>
      <View style={[styles.row, isDesktop && styles.rowCentered]}>
        <Text numberOfLines={1} style={styles.message}>
          Let's connect!
        </Text>
        <View style={styles.actions}>
          <Link href="/contact" style={[styles.button, pointer]}>
            <Text style={styles.buttonText}>Contact</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const pointer: ViewStyle | null = Platform.OS === "web" ? ({ cursor: "pointer" } as ViewStyle) : null;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.link,
  },
  row: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    gap: 12,
  },
  rowCentered: {
    justifyContent: "center",
    gap: 20,
  },
  message: {
    flexShrink: 1,
    fontSize: 16,
    fontWeight: "600",
    color: colors.surface,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.link,
  },
});
