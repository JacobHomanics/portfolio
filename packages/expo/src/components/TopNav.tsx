import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, useWindowDimensions, View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { profile } from "../content/profile";
import { colors } from "../theme/colors";
import { Logo } from "./Logo";

/** Below this width the inline links collapse into a hamburger menu. */
const COMPACT_BREAKPOINT = 640;

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
] as const;

export function TopNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const onSkills = pathname === "/skills";
  const onProjects = pathname === "/projects";
  const { width } = useWindowDimensions();
  const compact = width < COMPACT_BREAKPOINT;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, compact]);

  return (
    <View accessibilityLabel="Primary" role="navigation" style={[styles.bar, { paddingTop: insets.top }]}>
      <View style={[styles.row, compact && styles.rowCompact]}>
        <Link href="/" asChild>
          <Pressable style={StyleSheet.flatten([styles.brand, pointer])}>
            <Logo size={28} />
            <Text numberOfLines={1} style={styles.brandText}>
              {profile.name}
            </Text>
          </Pressable>
        </Link>
        {compact ? (
          <View style={styles.actions}>
            <Link href="/" accessibilityLabel="Home" style={[styles.home, pointer]}>
              <Ionicons name="home" size={18} color={colors.heading} />
            </Link>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={menuOpen ? "Close menu" : "Open menu"}
              accessibilityState={{ expanded: menuOpen }}
              onPress={() => setMenuOpen(open => !open)}
              style={StyleSheet.flatten([styles.menuButton, menuOpen && styles.navLinkActive, pointer])}
            >
              <Ionicons name={menuOpen ? "close" : "menu"} size={24} color={colors.heading} />
            </Pressable>
          </View>
        ) : (
          <View style={styles.actions}>
            <Link
              href="/projects"
              accessibilityState={{ selected: onProjects }}
              style={[styles.navLink, onProjects && styles.navLinkActive, pointer]}
            >
              <Text style={styles.navLinkText}>Projects</Text>
            </Link>
            <Link
              href="/skills"
              accessibilityState={{ selected: onSkills }}
              style={[styles.navLink, onSkills && styles.navLinkActive, pointer]}
            >
              <Text style={styles.navLinkText}>Skills</Text>
            </Link>
            <Link href="/" accessibilityLabel="Home" style={[styles.home, pointer]}>
              <Ionicons name="home" size={18} color={colors.heading} />
            </Link>
          </View>
        )}
      </View>
      {compact && menuOpen ? (
        <View style={styles.menu}>
          {navItems.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                accessibilityState={{ selected: active }}
                style={[styles.menuLink, active && styles.navLinkActive, pointer]}
              >
                <Text style={styles.menuLinkText}>{item.label}</Text>
              </Link>
            );
          })}
        </View>
      ) : null}
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
  rowCompact: {
    paddingHorizontal: 16,
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
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 4,
  },
  menuLink: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
  },
  menuLinkText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.heading,
  },
  navLinkText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.heading,
  },
});
