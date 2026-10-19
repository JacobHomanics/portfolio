import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { profile } from "../content/profile";
import { colors } from "../theme/colors";
import { Logo } from "./Logo";

export function TopNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const onContactCard = pathname === "/contact-card";
  const onContact = pathname === "/contact";
  const onSkills = pathname === "/skills";

  return (
    <View accessibilityLabel="Primary" role="navigation" style={[styles.bar, { paddingTop: insets.top }]}>
      <View style={styles.row}>
        <Link href="/" asChild>
          <Pressable style={StyleSheet.flatten([styles.brand, pointer])}>
            <Logo size={28} />
            <Text numberOfLines={1} style={styles.brandText}>
              {profile.name}
            </Text>
          </Pressable>
        </Link>
        <View style={styles.actions}>
          <Link
            href="/skills"
            accessibilityState={{ selected: onSkills }}
            style={[styles.navLink, onSkills && styles.navLinkActive, pointer]}
          >
            <Text style={styles.navLinkText}>Skills</Text>
          </Link>
          <Link
            href="/contact"
            accessibilityState={{ selected: onContact }}
            style={[styles.contact, onContact && styles.contactActive, pointer]}
          >
            <Text style={[styles.contactText, onContact && styles.contactTextActive]}>Contact</Text>
          </Link>
          {onContactCard ? (
            <Link href="/" accessibilityLabel="Home" style={[styles.home, pointer]}>
              <Ionicons name="home" size={18} color={colors.heading} />
            </Link>
          ) : null}
        </View>
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
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  home: {
    width: 36,
    height: 36,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted,
    ...(Platform.OS === "web" ? { display: "flex" as const } : null),
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexShrink: 1,
    minWidth: 0,
  },
  brandText: {
    flexShrink: 1,
    fontSize: 17,
    fontWeight: "600",
    color: colors.heading,
  },
  navLink: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  navLinkActive: {
    backgroundColor: colors.surfaceMuted,
  },
  navLinkText: {
    fontSize: 16,
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
