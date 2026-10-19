import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { profile } from "../src/content/profile";
import { colors } from "../src/theme/colors";

const DESKTOP_BREAKPOINT = 900;

export default function HomePage() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= DESKTOP_BREAKPOINT;

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
        {isDesktop ? null : photo}
        <View style={[styles.copy, isDesktop && styles.copyDesktop]}>
          <Text style={[styles.message, isDesktop && styles.textLeft]}>{profile.name}</Text>
          <Text style={[styles.title, isDesktop && styles.textLeft]}>{profile.headline}</Text>
          <Text style={[styles.about, isDesktop && styles.textLeft]}>
            Software Engineer with 10+ years of experience maintaining an app serving 800+ users and 5 design
            partners, launching products generating $300k+ in revenue, building an open-source framework funded
            by a $60k grant, creating interactive experiences showcased at pharmaceutical conferences, and
            contributed to a platform that rewarded 250+ open-source developers. Looking for product development?
            Let's connect!
          </Text>
        </View>
        {isDesktop ? photo : null}
      </View>
    </ScrollView>
  );
}

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
  photo: {
    width: 320,
    height: 384,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  photoDesktop: {
    marginBottom: 0,
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
  textLeft: {
    textAlign: "left",
  },
});
