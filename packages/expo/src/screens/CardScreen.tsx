import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";

import { PortfolioImage } from "@/components/PortfolioImage";
import { Screen } from "@/components/Screen";
import { ShareSheet } from "@/components/ShareSheet";
import { SocialIcons } from "@/components/SocialIcons";
import { cardHighlightProjects, profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { openResume, parseProjectLink } from "@/lib/links";
import type { SiteStackParamList } from "@/navigation/types";

export function CardScreen() {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<SiteStackParamList>>();
  const [shareOpen, setShareOpen] = useState(false);
  const wide = width >= 1024;
  useDocumentTitle(profile.name);

  return (
    <Screen footerInset={false}>
      <View style={styles.profileRow}>
        <View style={styles.photoWrap}>
          <View style={styles.photoClip}>
            <PortfolioImage
              imageKey={profile.photo}
              accessibilityLabel={profile.name}
              contentFit="cover"
              style={styles.photo}
            />
          </View>
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
          <View style={styles.heading}>
            <Text style={[styles.name, { color: colors.text }]}>{profile.name}</Text>
            <Text style={{ color: colors.text, fontSize: wide ? 20 : 14 }}>{profile.title}</Text>
          </View>
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
              <View style={styles.caption}>
                <Text numberOfLines={2} style={[styles.tileTitle, { color: colors.text }]}>
                  {project.name}
                </Text>
                {project.shortDescription ? (
                  <Text numberOfLines={3} style={[styles.tileDescription, { color: colors.text }]}>
                    {project.shortDescription}
                  </Text>
                ) : null}
              </View>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.actions}>
        <SocialIcons size={wide ? 36 : 28} gap={wide ? 20 : 12} />
        <Pressable
          accessibilityLabel="Share"
          onPress={() => setShareOpen(true)}
          style={[styles.share, { backgroundColor: colors.brand }]}
        >
          <Ionicons name="share-outline" size={wide ? 28 : 22} color={colors.onBrand} />
        </Pressable>
      </View>
      <ShareSheet open={shareOpen} onClose={() => setShareOpen(false)} />
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
    width: 104,
    height: 104,
    justifyContent: "flex-end",
  },
  photoClip: {
    ...StyleSheet.absoluteFill,
    borderRadius: 52,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  resume: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 6,
    borderRadius: 8,
  },
  identity: {
    flex: 1,
    gap: 8,
    minWidth: 0,
  },
  heading: {
    gap: 2,
  },
  name: {
    fontSize: 22,
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
  caption: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 10,
    gap: 2,
  },
  tileTitle: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
  },
  tileDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  share: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    padding: 8,
  },
});
