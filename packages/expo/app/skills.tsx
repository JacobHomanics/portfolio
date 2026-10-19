import { ScrollView, StyleSheet, Text, View } from "react-native";

import { skillSections } from "../src/content/skills";
import { colors } from "../src/theme/colors";

export default function SkillsPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.panel}>
        {skillSections.map((section) => (
          <View key={section.title}>
            <Text style={styles.heading}>{section.title}</Text>
            <View style={styles.badges}>
              {section.badges.map((badge) => (
                <View key={badge.label} style={[styles.badge, badge.highlighted && styles.badgeHighlighted]}>
                  <Text style={[styles.badgeText, badge.highlighted && styles.badgeTextHighlighted]}>
                    {badge.label}
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
    gap: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.heading,
  },
  badges: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  badgeHighlighted: {
    borderColor: colors.link,
    backgroundColor: colors.link,
  },
  badgeText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textMuted,
  },
  badgeTextHighlighted: {
    color: colors.surface,
  },
});
