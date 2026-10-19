import { Link, usePathname } from "expo-router";
import { Platform, StyleSheet, Text, View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { profile } from "../content/profile";
import { colors } from "../theme/colors";

export function TopNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const onContact = pathname === "/contact";

  return (
    <View accessibilityLabel="Primary" role="navigation" style={[styles.bar, { paddingTop: insets.top }]}>
      <View style={styles.row}>
        <Link href="/" style={[styles.brand, pointer]}>
          <Text style={styles.brandText}>{profile.name}</Text>
        </Link>
        <Link
          href="/contact"
          accessibilityState={{ selected: onContact }}
          style={[styles.contact, onContact && styles.contactActive, pointer]}
        >
          <Text style={[styles.contactText, onContact && styles.contactTextActive]}>Contact</Text>
        </Link>
      </View>
    </View>
  );
}

const pointer: ViewStyle | null = Platform.OS === "web" ? ({ cursor: "pointer" } as ViewStyle) : null;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  row: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    gap: 16,
  },
  brand: {
    flexShrink: 1,
  },
  brandText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.heading,
  },
  contact: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.link,
  },
  contactActive: {
    backgroundColor: colors.surfaceMuted,
  },
  contactText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.surface,
  },
  contactTextActive: {
    color: colors.heading,
  },
});
