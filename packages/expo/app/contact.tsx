import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Platform, ScrollView, StyleSheet, Text, useWindowDimensions, View, type ViewStyle } from "react-native";

import { contactLinks } from "../src/content/contactLinks";
import { colors } from "../src/theme/colors";

const DESKTOP_BREAKPOINT = 900;

function opensInNewTab(url: string) {
  return url.startsWith("https://") && !url.startsWith("https://wa.me/");
}

export default function ContactPage() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= DESKTOP_BREAKPOINT;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.panel, isDesktop && styles.panelDesktop]}>
        <Text accessibilityRole="header" style={[styles.headline, isDesktop && styles.headlineDesktop]}>
          Let's create something exceptional together.
        </Text>
        <View style={[styles.card, isDesktop && styles.cardDesktop]}>
          <View style={styles.socials}>
            {contactLinks.map(link => {
              const external = opensInNewTab(link.url);
              return (
                <Link
                  key={link.label}
                  href={link.url}
                  rel={external ? "noopener noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                  style={[styles.social, pointer]}
                >
                  <Ionicons name={link.icon} size={16} color={link.color} />
                  <Text style={styles.socialLabel}>{link.label}</Text>
                </Link>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const pointer: ViewStyle | null = Platform.OS === "web" ? ({ cursor: "pointer" } as ViewStyle) : null;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  panel: {
    width: "100%",
    maxWidth: 1040,
    alignSelf: "center",
    gap: 36,
  },
  panelDesktop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 64,
  },
  headline: {
    flexShrink: 1,
    maxWidth: 520,
    fontSize: 40,
    lineHeight: 46,
    fontWeight: "600",
    letterSpacing: -0.8,
    color: colors.heading,
  },
  headlineDesktop: {
    fontSize: 56,
    lineHeight: 62,
  },
  socials: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    ...(Platform.OS === "web" ? { display: "flex" as const } : null),
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  socialLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.heading,
  },
  card: {
    width: "100%",
    maxWidth: 440,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 28,
    paddingVertical: 32,
    gap: 8,
  },
  cardDesktop: {
    width: 420,
  },
});
