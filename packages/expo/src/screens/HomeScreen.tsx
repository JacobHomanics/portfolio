import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { PortfolioImage } from "@/components/PortfolioImage";
import { Screen } from "@/components/Screen";
import { data as companiesData } from "@/content/companies.config";
import { data as daoToolingData } from "@/content/dao-tooling.config";
import { data as nftCollectionsData } from "@/content/nftCollections.config";
import { highlightProjects, profile } from "@/content/profile.config";
import { talkProjects } from "@/content/talks.config";
import type { ProjectData } from "@/content/types";
import { data as unityToolingData } from "@/content/unity-tooling.config";
import { data as gamesData } from "@/content/video-games.config";
import { data as websitesData } from "@/content/websites.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { openResume, parseProjectLink } from "@/lib/links";
import type { SiteStackParamList } from "@/navigation/types";

const pageCards: Array<{ title: string; category: string; data: Array<ProjectData & { slug?: string }> }> = [
  { title: "Companies", category: "companies", data: companiesData },
  { title: "Websites", category: "websites", data: websitesData },
  { title: "Video Games", category: "video-games", data: gamesData },
  { title: "NFT Collections", category: "nft-collections", data: nftCollectionsData },
  { title: "Presentations", category: "presentations", data: talkProjects },
  { title: "Unity Tooling", category: "unity-tooling", data: unityToolingData },
  { title: "DAO Tooling", category: "dao-tooling", data: daoToolingData },
];

export function HomeScreen() {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<SiteStackParamList>>();
  const wideCards = width >= 768;
  useDocumentTitle("Jacob Homanics");

  const openProject = (link?: string) => {
    const parsed = parseProjectLink(link);
    if (parsed) navigation.navigate("project", parsed);
  };

  return (
    <Screen>
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
            <Text style={{ color: colors.text, fontSize: width >= 1024 ? 20 : 14 }}>{profile.title}</Text>
          </View>
          {wideCards ? (
            <ExpandableDescription text={profile.description} color={colors.text} />
          ) : (
            <Text style={{ color: colors.text }}>{profile.description}</Text>
          )}
        </View>
      </View>

      {wideCards ? (
        <View style={styles.showcaseWrap}>
          {highlightProjects.map(project => (
            <Pressable
              key={project.name}
              accessibilityLabel={project.name}
              onPress={() => openProject(project.link)}
              style={styles.showcase}
            >
              <PortfolioImage imageKey={project.bannerSrc ?? project.imgSrc} style={StyleSheet.absoluteFill} />
              <View style={[styles.showcaseCaption, { backgroundColor: colors.secondary }]}>
                <Text style={[styles.showcaseTitle, { color: colors.onSecondary }]}>{project.name}</Text>
                {project.shortDescription ? (
                  <Text style={{ color: colors.onSecondary, textAlign: "center" }}>{project.shortDescription}</Text>
                ) : null}
              </View>
            </Pressable>
          ))}
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          contentContainerStyle={styles.carouselContent}
        >
          {highlightProjects.map(project => (
            <Pressable
              key={project.name}
              accessibilityLabel={project.name}
              onPress={() => openProject(project.link)}
              style={styles.carouselCard}
            >
              <PortfolioImage imageKey={project.bannerSrc ?? project.imgSrc} style={StyleSheet.absoluteFill} />
              <View style={[styles.showcaseCaption, { backgroundColor: colors.secondary }]}>
                <Text style={{ color: colors.onSecondary, fontWeight: "700", textAlign: "center" }}>{project.name}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      )}

      <View style={[styles.divider, { backgroundColor: colors.text }]} />

      <View style={styles.overview}>
        {pageCards.map(card => (
          <Pressable
            key={card.category}
            accessibilityRole="link"
            onPress={() => navigation.navigate("category", { category: card.category })}
            style={[styles.overviewCard, { backgroundColor: colors.surfaceMuted, borderColor: colors.border }]}
          >
            <Text style={[styles.overviewTitle, { color: colors.text }]}>{card.title}</Text>
            <View style={styles.thumbs}>
              {card.data.slice(0, wideCards ? 5 : 3).map(project => (
                <PortfolioImage
                  key={project.name}
                  imageKey={project.imgSrc}
                  contentFit="contain"
                  style={[styles.thumb, { backgroundColor: colors.surface }]}
                />
              ))}
            </View>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

function ExpandableDescription({ text, color }: { text: string; color: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Text style={{ color, textAlign: "center" }}>
      <Text numberOfLines={expanded ? undefined : 2}>{text} </Text>
      <Text accessibilityRole="button" onPress={() => setExpanded(current => !current)} style={{ textDecorationLine: "underline" }}>
        {expanded ? "Show less" : "Show more"}
      </Text>
    </Text>
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
    gap: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
  },
  showcaseWrap: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  showcase: {
    width: 280,
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  carousel: {
    width: "100%",
    alignSelf: "stretch",
  },
  carouselContent: {
    gap: 12,
  },
  carouselCard: {
    width: 220,
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  showcaseCaption: {
    padding: 8,
    opacity: 0.92,
  },
  showcaseTitle: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },
  divider: {
    width: "100%",
    height: 8,
  },
  overview: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  overviewCard: {
    width: 280,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    alignItems: "center",
  },
  overviewTitle: {
    fontWeight: "800",
    fontSize: 18,
  },
  thumbs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
});
