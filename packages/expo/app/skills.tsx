import { Platform, ScrollView, StyleSheet, Text, View, type ViewStyle } from "react-native";

import { BrandIcon } from "../src/components/BrandIcon";
import { skillSections } from "../src/content/skills";
import { colors } from "../src/theme/colors";

const LOGO_SIZE = 44;

export default function SkillsPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.panel}>
        {skillSections.map((section) => (
          <View key={section.title}>
            <Text style={styles.heading}>{section.title}</Text>
            <View style={styles.grid}>
              {section.badges.map((skill) => (
                <View key={skill.label} style={[styles.tile, skill.highlighted && styles.tileHighlighted]}>
                  <View style={[styles.logo, !skill.highlighted && muted]}>
                    {skill.icon ? (
                      <BrandIcon name={skill.icon} size={LOGO_SIZE} />
                    ) : (
                      <View style={styles.monogram}>
                        <Text style={styles.monogramText}>{skill.label.charAt(0)}</Text>
                      </View>
                    )}
                  </View>
                  <Text numberOfLines={2} style={[styles.caption, skill.highlighted && styles.captionHighlighted]}>
                    {skill.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Skills that aren't highlighted keep their logo but fade it back; on web it also drops to gray.
const muted: ViewStyle = {
  opacity: 0.45,
  ...(Platform.OS === "web" ? ({ filter: "grayscale(1)" } as ViewStyle) : null),
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  panel: {
    width: "100%",
    maxWidth: 1040,
    alignSelf: "center",
    flexGrow: 1,
    gap: 36,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.heading,
  },
  grid: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  // Three tiles fit across a 375px phone with the page gutters.
  tile: {
    width: 100,
    alignItems: "center",
    gap: 10,
    paddingTop: 18,
    paddingBottom: 14,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "transparent",
  },
  tileHighlighted: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  monogram: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceMuted,
  },
  monogramText: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.heading,
  },
  caption: {
    fontSize: 13,
    lineHeight: 17,
    fontWeight: "600",
    textAlign: "center",
    color: colors.textMuted,
  },
  captionHighlighted: {
    color: colors.heading,
  },
});
