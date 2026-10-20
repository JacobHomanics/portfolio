import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Platform, ScrollView, StyleSheet, Text, View, type ViewStyle } from "react-native";

import { projects } from "../src/content/projects";
import { colors } from "../src/theme/colors";

export default function ProjectsPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.heading}>Projects</Text>
        <Text style={styles.intro}>A few products I've helped take from 0 to 1.</Text>
        <View style={styles.cards}>
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
              style={[styles.card, pointer]}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{project.name}</Text>
                <Ionicons name="open-outline" size={18} color={colors.link} />
              </View>
              <Text style={styles.cardText}>{project.description}</Text>
              <View style={styles.tags}>
                {project.tags.map((tag) => (
                  <Text key={tag} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </Link>
          ))}
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
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  panel: {
    width: "100%",
    maxWidth: 1040,
    alignSelf: "center",
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.heading,
  },
  intro: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    color: colors.textMuted,
  },
  cards: {
    marginTop: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  // Two cards per row on desktop; they stack to one column on phones.
  card: {
    flexGrow: 1,
    flexBasis: 320,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    ...(Platform.OS === "web" ? { display: "flex" as const, flexDirection: "column" as const } : null),
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  cardTitle: {
    flexShrink: 1,
    fontSize: 20,
    fontWeight: "600",
    color: colors.heading,
  },
  cardText: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
  tags: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: colors.surfaceMuted,
    fontSize: 13,
    fontWeight: "600",
    color: colors.textMuted,
  },
});
