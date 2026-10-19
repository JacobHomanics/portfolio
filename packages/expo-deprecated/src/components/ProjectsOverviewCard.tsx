import { useState } from "react";
import { Pressable, StyleSheet, Text, View, type ViewStyle } from "react-native";

import { PortfolioImage } from "@/components/PortfolioImage";
import type { ProjectData } from "@/content/types";
import { useAppTheme } from "@/hooks/useAppTheme";

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = next[i];
    next[i] = next[j]!;
    next[j] = current!;
  }
  return next;
}

function withAlpha(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function fanStyle(index: number, wide: boolean): ViewStyle {
  if (!wide) {
    const slots = [
      { size: 64, translateX: 0, zIndex: 20 },
      { size: 48, translateX: -36, zIndex: 10 },
      { size: 48, translateX: 36, zIndex: 10 },
    ];
    const slot = slots[index] ?? slots[0]!;
    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: slot.size,
      height: slot.size,
      marginLeft: -slot.size / 2,
      marginTop: -slot.size / 2,
      transform: [{ translateX: slot.translateX }],
      zIndex: slot.zIndex,
    };
  }

  if (index === 3) {
    return {
      position: "absolute",
      left: 48,
      top: "50%",
      width: 56,
      height: 56,
      marginTop: -28,
      zIndex: 0,
    };
  }

  if (index === 4) {
    return {
      position: "absolute",
      right: 48,
      top: "50%",
      width: 56,
      height: 56,
      marginTop: -28,
      zIndex: 0,
    };
  }

  const slots = [
    { size: 96, translateX: 0, zIndex: 20 },
    { size: 80, translateX: -64, zIndex: 10 },
    { size: 80, translateX: 64, zIndex: 10 },
  ];
  const slot = slots[index] ?? slots[0]!;
  return {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: slot.size,
    height: slot.size,
    marginLeft: -slot.size / 2,
    marginTop: -slot.size / 2,
    transform: [{ translateX: slot.translateX }],
    zIndex: slot.zIndex,
  };
}

export function ProjectsOverviewCard({
  title,
  data,
  wide,
  spread = false,
  onPress,
}: {
  title: string;
  data: ProjectData[];
  wide: boolean;
  spread?: boolean;
  onPress: () => void;
}) {
  const { colors } = useAppTheme();
  const [preview] = useState(() => shuffle(data).slice(0, 5));
  const [hovered, setHovered] = useState(false);
  const visible = preview.slice(0, wide && spread ? 5 : 3);

  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={title}
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={({ pressed }) => [
        styles.card,
        wide ? styles.cardWide : styles.cardCompact,
        {
          borderColor: colors.secondary,
          backgroundColor: withAlpha(colors.secondary, hovered || pressed ? 1 : 0.4),
        },
      ]}
    >
      <Text numberOfLines={1} style={[styles.title, wide ? styles.titleWide : styles.titleCompact, { color: colors.text }]}>
        {title}
      </Text>
      <View style={[styles.stage, { height: wide ? 80 : 48 }]}>
        {visible.map((item, index) => (
          <View key={`${item.name}-${index}`} style={[styles.thumb, fanStyle(index, wide)]}>
            <PortfolioImage
              imageKey={item.imgSrc || "organization.png"}
              accessibilityLabel=""
              contentFit="contain"
              style={styles.thumbImage}
            />
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cardCompact: {
    gap: 12,
  },
  cardWide: {
    gap: 16,
  },
  title: {
    fontWeight: "700",
    textAlign: "center",
  },
  titleCompact: {
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 8,
  },
  titleWide: {
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 16,
  },
  stage: {
    width: "100%",
    marginBottom: 8,
  },
  thumb: {
    borderRadius: 6,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  thumbImage: {
    width: "100%",
    height: "100%",
  },
});
