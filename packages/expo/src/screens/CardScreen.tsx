import { Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import type { NavigationProp, RouteProp } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View, useWindowDimensions, type ViewStyle } from "react-native";

import { ConnectPrompt } from "@/components/ConnectPrompt";
import { PortfolioImage } from "@/components/PortfolioImage";
import { Screen } from "@/components/Screen";
import { SocialIcons } from "@/components/SocialIcons";
import { cardHighlightProjects, profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAnswerEngine } from "@/hooks/useAnswerEngine";
import { useShake } from "@/hooks/useShake";
import { openResume, parseProjectLink } from "@/lib/links";
import { shareCard } from "@/lib/share";
import { usePublishShakeAccess } from "@/navigation/ShakeAccessContext";
import { usePublishSocialPlacement } from "@/navigation/SocialPlacementContext";
import type { RootStackParamList, SiteStackParamList } from "@/navigation/types";

export function CardScreen() {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<SiteStackParamList>>();
  const route = useRoute<RouteProp<SiteStackParamList, "card">>();
  const focused = useIsFocused();
  const connectRequested = route.params?.connect === "1";
  const [connectOpen, setConnectOpen] = useState(connectRequested);
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const [socialsBelow, setSocialsBelow] = useState(false);
  const toggleSocialsBelow = useCallback(() => {
    setSocialsBelow(value => !value);
  }, []);
  const wide = width >= 1024;
  const socialSize = wide ? 56 : 40;
  const actionSize = socialSize;
  const actionIconSize = Math.round(socialSize * 0.58);
  useAnswerEngine("card");

  useEffect(() => {
    if (connectRequested) setConnectOpen(true);
  }, [connectRequested]);

  const dismissConnect = useCallback(() => {
    setConnectOpen(false);
    navigation.setParams({ connect: undefined });
  }, [navigation]);

  const { access: shakeAccess, requestAccess: requestShakeAccess } = useShake(() => {
    navigation.getParent<NavigationProp<RootStackParamList>>()?.navigate("qr");
  }, focused);
  usePublishShakeAccess(shakeAccess, requestShakeAccess);
  usePublishSocialPlacement(focused, socialsBelow, toggleSocialsBelow);

  const socials = (
    <>
      <View style={styles.footer}>
        <SocialIcons size={socialSize} gap={wide ? 16 : 6} inset={0} includeQr={false} />
        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="QR code"
            onPress={() => navigation.getParent<NavigationProp<RootStackParamList>>()?.navigate("qr")}
            style={[styles.share, actionButtonStyle(actionSize, colors.brand)]}
          >
            <Ionicons name="qr-code" size={actionIconSize} color={colors.onBrand} />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Share"
            onPress={() => {
              void shareCard().then(setShareMessage);
            }}
            style={[styles.share, actionButtonStyle(actionSize, colors.brand)]}
          >
            <Ionicons name="share-outline" size={actionIconSize} color={colors.onBrand} />
          </Pressable>
        </View>
      </View>
      {shareMessage ? <Text style={{ color: colors.text, marginTop: -12 }}>{shareMessage}</Text> : null}
    </>
  );

  return (
    <Screen footerInset={false}>
      <ConnectPrompt visible={connectOpen} onDismiss={dismissConnect} />
      <View style={styles.intro}>
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
          </View>
        </View>
        <Text style={[styles.bio, { color: colors.text }]}>{profile.description}</Text>
      </View>

      {socialsBelow ? null : socials}

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
              style={[
                styles.tile,
                { backgroundColor: colors.surfaceMuted, width: wide ? "23%" : "48%", flexGrow: 1 },
              ]}
            >
              <PortfolioImage
                imageKey={project.bannerSrc ?? project.imgSrc}
                style={{ width: "100%", aspectRatio: 2 }}
              />
              {project.shortDescription ? (
                <View style={styles.caption}>
                  <Text numberOfLines={3} style={[styles.tileDescription, { color: colors.text }]}>
                    {project.shortDescription}
                  </Text>
                </View>
              ) : null}
            </Pressable>
          );
        })}
      </View>
      {socialsBelow ? socials : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: {
    width: "100%",
    gap: 12,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
  },
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
    paddingTop: 6,
    paddingBottom: 8,
    gap: 2,
  },
  tileDescription: {
    fontSize: 11,
    lineHeight: 14,
  },
  footer: {
    alignItems: "center",
    gap: 16,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  share: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

function actionButtonStyle(size: number, backgroundColor: string): ViewStyle {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
    // Native <button> chrome ignores border-radius unless appearance is reset.
    ...(Platform.OS === "web" ? ({ appearance: "none" } as ViewStyle) : null),
  };
}
