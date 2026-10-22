import type { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { PortfolioImage } from "@/components/PortfolioImage";
import { WebFrame } from "@/components/WebFrame";
import type { DetailProject } from "@/content/detail-page";
import type { Link } from "@/content/types";
import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal } from "@/lib/links";

function assetStorePackageId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "assetstore.unity.com") return undefined;
    const match = parsed.pathname.match(/\/packages\/(?:[^/]+\/){2}[^/]+-(\d+)$/);
    return match?.[1];
  } catch {
    return undefined;
  }
}

function linkLabel(url: string, label?: string) {
  if (label) return label;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LinkButton({ item, iconOnly = false }: { item: Link; iconOnly?: boolean }) {
  const { colors } = useAppTheme();
  const label = linkLabel(item.url, item.label);

  return (
    <Pressable
      accessibilityLabel={label}
      onPress={() => void openExternal(item.url)}
      style={[
        iconOnly ? styles.iconButton : styles.linkButton,
        { backgroundColor: colors.secondary },
      ]}
    >
      <PortfolioImage
        imageKey={item.imagePath}
        contentFit="contain"
        style={iconOnly ? styles.iconOnlyImage : styles.linkImage}
      />
      {iconOnly ? null : <Text style={{ color: colors.onSecondary, fontWeight: "600" }}>{label}</Text>}
    </Pressable>
  );
}

export function ProjectDetail({
  project,
  children,
  imageFirst = false,
  compactImage = false,
}: {
  project: DetailProject;
  children?: ReactNode;
  imageFirst?: boolean;
  compactImage?: boolean;
}) {
  const { colors } = useAppTheme();
  const assetStoreLink = project.links?.find(item => assetStorePackageId(item.url));
  const assetStoreId = assetStoreLink ? assetStorePackageId(assetStoreLink.url) : undefined;
  const links = assetStoreId ? project.links?.filter(item => !assetStorePackageId(item.url)) : project.links;

  const media = project.embed ? (
    <WebFrame
      url={project.embed.url}
      title={project.name}
      aspectRatio={project.embed.width / project.embed.height}
    />
  ) : project.imgSrc ? (
    <PortfolioImage
      imageKey={project.imgSrc}
      accessibilityLabel={project.name}
      contentFit={compactImage ? "contain" : "cover"}
      style={compactImage ? styles.compactImage : styles.heroImage}
    />
  ) : null;

  const description = project.description ? (
    <Text style={[styles.description, { color: colors.text }]}>{project.description}</Text>
  ) : null;

  return (
    <View style={styles.wrap}>
      {imageFirst && !assetStoreId ? (
        <View style={styles.centered}>
          {media}
          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: colors.text }]}>{project.name}</Text>
            {links?.map(item => (
              <LinkButton key={item.url} item={item} iconOnly />
            ))}
          </View>
          {description}
        </View>
      ) : (
        <View style={styles.centered}>
          {assetStoreId ? null : <Text style={[styles.title, { color: colors.text }]}>{project.name}</Text>}
          {!assetStoreId ? media : null}
          {assetStoreId && assetStoreLink ? (
            <WebFrame
              url={assetStoreLink.url}
              embedUrl={`https://assetstore.unity.com/linkmaker/embed/package/${assetStoreId}/widget-wide`}
              title={project.name}
              height={130}
            />
          ) : null}
          {description}
          {project.recommendedPlatform ? (
            <View style={styles.centered}>
              <Text style={[styles.kicker, { color: colors.textMuted }]}>Recommended platform</Text>
              <Text style={{ color: colors.text, fontSize: 18 }}>{project.recommendedPlatform.name}</Text>
              {project.recommendedPlatform.note ? (
                <Text style={{ color: colors.textMuted, textAlign: "center" }}>{project.recommendedPlatform.note}</Text>
              ) : null}
            </View>
          ) : null}
          {!!links?.length && (
            <View style={styles.links}>
              {links.map(item => (
                <LinkButton key={item.url} item={item} />
              ))}
            </View>
          )}
        </View>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    alignItems: "center",
    gap: 24,
  },
  centered: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },
  titleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    maxWidth: 640,
  },
  kicker: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  heroImage: {
    width: "100%",
    maxWidth: 640,
    height: 360,
    borderRadius: 12,
  },
  compactImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  linkImage: {
    width: 20,
    height: 20,
  },
  iconOnlyImage: {
    width: 16,
    height: 16,
  },
});
