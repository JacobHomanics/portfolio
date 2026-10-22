import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Platform, ScrollView, StyleSheet, Text, useWindowDimensions, View, type ViewStyle } from "react-native";

import { profile } from "../src/content/profile";
import { colors } from "../src/theme/colors";

const DESKTOP_BREAKPOINT = 900;
const RESUME_URL = "/Jacob_Homanics_Resume.pdf";
/** Half the Resume button's height, so it straddles the photo's bottom edge on phones. */
const RESUME_OVERHANG = 17;

export default function HomePage() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= DESKTOP_BREAKPOINT;

  const resumeButton = (
    <Link href={RESUME_URL} rel="noopener noreferrer" target="_blank" style={[styles.resume, pointer]}>
      <Ionicons name="document-text-outline" size={16} color={colors.surface} />
      <Text style={styles.resumeText}>Resume</Text>
    </Link>
  );

  const photo = (
    <Image
      source={profile.photo}
      style={[styles.photo, isDesktop && styles.photoDesktop]}
      accessibilityLabel={profile.name}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.hero, isDesktop && styles.heroDesktop]}>
        {isDesktop ? null : (
          <View style={styles.photoFrame}>
            {photo}
            <View style={styles.resumeOverlay}>{resumeButton}</View>
          </View>
        )}
        <View style={[styles.copy, isDesktop && styles.copyDesktop]}>
          <View style={styles.nameRow}>
            <Text style={[styles.message, isDesktop && styles.textLeft]}>{profile.name}</Text>
            {isDesktop ? resumeButton : null}
          </View>
          <Text style={[styles.title, isDesktop && styles.textLeft]}>{profile.headline}</Text>
          <Text style={[styles.about, isDesktop && styles.textLeft]}>
            AI-Empowered Software Engineer with 10+ years of experience taking products from 0 to 1. Skilled at working with fast-moving startups and small teams, making product decisions, and adapting to evolving business needs. Stay at the forefront of emerging technologies, including AI, to build innovative, scalable solutions.
          </Text>
          <View style={[styles.actions, isDesktop && styles.actionsDesktop]}>
            <Link href="/projects" style={[styles.action, styles.actionOutline, pointer]}>
              <Text style={[styles.actionText, styles.actionOutlineText]}>Projects</Text>
            </Link>
            <Link href="/skills" style={[styles.action, styles.actionOutline, pointer]}>
              <Text style={[styles.actionText, styles.actionOutlineText]}>Skills</Text>
            </Link>
            <Link href="/contact" style={[styles.action, pointer]}>
              <Text style={styles.actionText}>Contact</Text>
            </Link>
          </View>
        </View>
        {isDesktop ? photo : null}
      </View>
    </ScrollView>
  );
}

const pointer: ViewStyle | null = Platform.OS === "web" ? ({ cursor: "pointer" } as ViewStyle) : null;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  hero: {
    width: "100%",
    maxWidth: 960,
    alignItems: "center",
  },
  heroDesktop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 48,
  },
  copy: {
    alignItems: "center",
  },
  copyDesktop: {
    flex: 1,
    alignItems: "flex-start",
  },
  // The overlay hangs half its height below the photo, so the frame's margin covers that too.
  photoFrame: {
    marginBottom: 24 + RESUME_OVERHANG,
  },
  resumeOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -RESUME_OVERHANG,
    alignItems: "center",
  },
  photo: {
    width: 166,
    height: 200,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  photoDesktop: {
    width: 320,
    height: 384,
  },
  nameRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  resume: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.link,
    ...(Platform.OS === "web" ? { display: "flex" as const } : null),
  },
  resumeText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.surface,
  },
  message: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    color: colors.heading,
  },
  title: {
    marginTop: 10,
    maxWidth: 560,
    fontSize: 16,
    lineHeight: 24,
    color: colors.textMuted,
    textAlign: "center",
  },
  about: {
    marginTop: 20,
    maxWidth: 640,
    fontSize: 16,
    lineHeight: 26,
    color: colors.text,
    textAlign: "center",
  },
  actions: {
    marginTop: 28,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  actionsDesktop: {
    justifyContent: "flex-start",
  },
  action: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.link,
    backgroundColor: colors.link,
    ...(Platform.OS === "web" ? { display: "flex" as const } : null),
  },
  actionOutline: {
    backgroundColor: "transparent",
  },
  actionText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.surface,
  },
  actionOutlineText: {
    color: colors.link,
  },
  textLeft: {
    textAlign: "left",
  },
});
