import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, View, type ViewStyle } from "react-native";

import { BrandIcon } from "../src/components/BrandIcon";
import { projects } from "../src/content/projects";
import { colors } from "../src/theme/colors";

export default function ProjectsPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.panel}>
        <Text accessibilityRole="header" style={styles.heading}>
          Projects
        </Text>
        <View style={styles.cards}>
          {projects.map((project) => (
            <View key={project.name} style={styles.card}>
              {/* With the button gone, the image and title are what open the project. */}
              <Link href={project.url} asChild>
                <Pressable style={StyleSheet.flatten([styles.imageFrame, pointer])} {...externalLinkProps}>
                  <Image
                    source={project.image}
                    resizeMode="cover"
                    style={styles.image}
                    accessibilityLabel={project.name}
                    accessibilityIgnoresInvertColors
                  />
                </Pressable>
              </Link>
              <View style={styles.body}>
                <Link
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={[styles.cardTitle, pointer]}
                >
                  {project.name}
                </Link>
                <Text style={styles.cardText}>{project.description}</Text>
                <View style={styles.pills}>
                  {project.tech.length > 0
                    ? project.tech.map((item) => (
                        <View key={item.label} style={styles.pill}>
                          {item.icon ? <BrandIcon name={item.icon} size={12} /> : null}
                          <Text style={styles.pillText}>{item.label}</Text>
                        </View>
                      ))
                    : project.tags.map((tag) => (
                        <View key={tag} style={styles.pill}>
                          <Text style={styles.pillText}>{tag}</Text>
                        </View>
                      ))}
                </View>
                {project.links ? (
                  <View style={styles.links}>
                    {project.links.map((link) => (
                      <Link
                        key={link.url}
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        style={[styles.linkPill, pointer]}
                      >
                        <Text style={styles.linkPillText}>{link.label}</Text>
                        <Ionicons name="open-outline" size={12} color={colors.link} />
                      </Link>
                    ))}
                  </View>
                ) : null}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

// `target` doesn't survive `asChild`, so hand the new-tab attributes to the web anchor directly.
const externalLinkProps =
  Platform.OS === "web" ? ({ hrefAttrs: { target: "_blank", rel: "noopener noreferrer" } } as object) : {};

const pointer: ViewStyle | null = Platform.OS === "web" ? ({ cursor: "pointer" } as ViewStyle) : null;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  panel: {
    width: "100%",
    maxWidth: 1040,
    alignSelf: "center",
    flexGrow: 1,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: colors.heading,
  },
  cards: {
    marginTop: 28,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 24,
  },
  // Three cards per row on desktop; they stack to one column on phones. The cap keeps a short
  // last row from stretching wider than the rest.
  card: {
    flexGrow: 1,
    flexBasis: 300,
    maxWidth: 330,
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    shadowColor: "#3E1F2C",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  imageFrame: {
    width: "100%",
    aspectRatio: 16 / 9,
    overflow: "hidden",
    backgroundColor: colors.surfaceMuted,
  },
  // Explicit size, or web falls back to the file's own pixel height.
  image: {
    width: "100%",
    height: "100%",
  },
  // Grows to the row's height so cards in a row stay the same height.
  body: {
    flexGrow: 1,
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.heading,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
  },
  pills: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text,
  },
  links: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  linkPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.link,
    ...(Platform.OS === "web" ? { display: "flex" as const } : null),
  },
  linkPillText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.link,
  },
});
