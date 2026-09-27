import { Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";

import { PortfolioImage } from "@/components/PortfolioImage";
import { Screen } from "@/components/Screen";
import { SocialIcons } from "@/components/SocialIcons";
import { cardHighlightProjects, profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useShake } from "@/hooks/useShake";
import { openResume, parseProjectLink } from "@/lib/links";
import { shareCard } from "@/lib/share";
import type { RootStackParamList, SiteStackParamList } from "@/navigation/types";

export function CardScreen() {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<SiteStackParamList>>();
  const focused = useIsFocused();
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const wide = width >= 1024;
  useDocumentTitle(profile.name);

  const { access: shakeAccess, requestAccess: requestShakeAccess } = useShake(() => {
    navigation.getParent<NavigationProp<RootStackParamList>>()?.navigate("qr");
  }, focused);

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
              style={[
                styles.tile,
                { backgroundColor: colors.surfaceMuted, width: wide ? "23%" : "48%", flexGrow: 1 },
              ]}
            >
              <PortfolioImage
                imageKey={project.bannerSrc ?? project.imgSrc}
                style={{ width: "100%", aspectRatio: 2 }}
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

      <View style={styles.footer}>
        <SocialIcons size={wide ? 44 : 32} gap={wide ? 16 : 10} includeQr={false} />
        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="QR code"
            onPress={() => navigation.getParent<NavigationProp<RootStackParamList>>()?.navigate("qr")}
            style={[styles.share, { backgroundColor: colors.brand }]}
          >
            <Ionicons name="qr-code" size={wide ? 18 : 16} color={colors.onBrand} />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Share"
            onPress={() => {
              void shareCard().then(setShareMessage);
            }}
            style={[styles.share, { backgroundColor: colors.brand }]}
          >
            <Ionicons name="share-outline" size={wide ? 18 : 16} color={colors.onBrand} />
          </Pressable>
        </View>
      </View>
      {shareMessage ? <Text style={{ color: colors.text, marginTop: -12 }}>{shareMessage}</Text> : null}
      {shakeAccess === "prompt" ? (
        <Pressable accessibilityRole="button" accessibilityLabel="Allow shake to show QR code" onPress={requestShakeAccess}>
          <Text style={{ color: colors.brand, fontWeight: "700", textAlign: "center" }}>Tap to allow shake for QR</Text>
        </Pressable>
      ) : null}
      {shakeAccess === "denied" ? (
        <Pressable accessibilityRole="button" accessibilityLabel="Try shake access again" onPress={requestShakeAccess}>
          <Text style={{ color: colors.text, textAlign: "center" }}>
            Turn on Motion & Orientation Access in Safari settings, then tap here.
          </Text>
        </Pressable>
      ) : null}
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
    paddingTop: 6,
    paddingBottom: 8,
    gap: 2,
  },
  tileTitle: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 15,
  },
  tileDescription: {
    fontSize: 11,
    lineHeight: 14,
  },
  footer: {
    alignItems: "center",
    gap: 16,
    marginTop: -12,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  share: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    padding: 6,
  },
});
