import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";

import { PortfolioImage } from "@/components/PortfolioImage";
import { Screen } from "@/components/Screen";
import { SocialIcons } from "@/components/SocialIcons";
import { cardHighlightProjects, profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { openResume, parseProjectLink } from "@/lib/links";
import type { RootStackParamList, SiteStackParamList } from "@/navigation/types";

export function CardScreen() {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<SiteStackParamList & Pick<RootStackParamList, "share">>>();
  const wide = width >= 1024;
  useDocumentTitle("Card");

  return (
    <Screen footerInset={false}>
      <View style={styles.profileRow}>
        <View style={styles.photoWrap}>
          <PortfolioImage
            imageKey={profile.photo}
            accessibilityLabel={profile.name}
            contentFit="cover"
            style={styles.photo}
          />
          <Pressable
            accessibilityLabel="Resume"
            onPress={() => void openResume()}
            style={[styles.resume, { backgroundColor: colors.brand }]}
          >
            <Text style={{ color: colors.onBrand, fontWeight: "700" }}>Resume</Text>
            <Ionicons name="document-text-outline" size={18} color={colors.onBrand} />
          </Pressable>
        </View>
        <View style={styles.identity}>
          <Text style={[styles.name, { color: colors.text }]}>{profile.name}</Text>
          <Text style={{ color: colors.text, fontSize: wide ? 20 : 14 }}>{profile.title}</Text>
          <Text style={{ color: colors.text, textAlign: wide ? "center" : "left" }}>{profile.description}</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {cardHighlightProjects.map(project => {
          const parsed = parseProjectLink(project.link);
          return (
            <Pressable
              key={project.name}
              accessibilityLabel={project.name}
              onPress={() => {
                if (parsed) navigation.navigate("project", parsed);
              }}
              style={[styles.tile, { backgroundColor: colors.surfaceMuted, width: wide ? "23%" : "48%" }]}
            >
              <PortfolioImage
                imageKey={project.bannerSrc ?? project.imgSrc}
                style={{ width: "100%", aspectRatio: 16 / 10 }}
              />
              {project.shortDescription ? (
                <Text numberOfLines={3} style={{ color: colors.text, padding: 10 }}>
                  {project.shortDescription}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>

      <View style={styles.actions}>
        <SocialIcons size={wide ? 36 : 28} gap={wide ? 20 : 12} />
        <Pressable accessibilityLabel="Share" onPress={() => navigation.navigate("share")}>
          <Ionicons name="share-outline" size={wide ? 36 : 28} color={colors.text} />
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileRow: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  photoWrap: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  photo: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  resume: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 6,
  },
  identity: {
    flex: 1,
    gap: 8,
    minWidth: 0,
  },
  name: {
    fontSize: 32,
    fontWeight: "800",
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  tile: {
    borderRadius: 12,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
