import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { PortfolioImage } from "@/components/PortfolioImage";
import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal, parseProjectLink } from "@/lib/links";
import type { SiteStackParamList } from "@/navigation/types";

export function ProjectCard({
  name,
  description,
  imgSrc,
  link,
  kicker,
  compact = false,
}: {
  name: string;
  description?: string;
  imgSrc?: string;
  link?: string;
  kicker?: string;
  compact?: boolean;
}) {
  const { colors } = useAppTheme();
  const navigation = useNavigation<NavigationProp<SiteStackParamList>>();
  const internal = parseProjectLink(link);
  const imageSize = compact ? 56 : 96;

  const open = () => {
    if (internal) {
      navigation.navigate("project", internal);
      return;
    }
    if (link) void openExternal(link);
  };

  return (
    <Pressable
      accessibilityRole="link"
      onPress={link ? open : undefined}
      style={[styles.card, { backgroundColor: colors.brand }]}
    >
      <PortfolioImage
        imageKey={imgSrc}
        accessibilityLabel=""
        contentFit="cover"
        style={{ width: imageSize, height: imageSize, borderRadius: 8 }}
      />
      <View style={styles.copy}>
        {kicker ? <Text style={[styles.kicker, { color: colors.onBrand }]}>{kicker}</Text> : null}
        <Text style={[styles.name, { color: colors.onBrand }]}>{name}</Text>
        {description ? (
          <Text numberOfLines={2} style={{ color: colors.onBrand }}>
            {description}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    gap: 16,
    alignItems: "flex-start",
  },
  copy: {
    flex: 1,
    gap: 4,
    minWidth: 0,
  },
  kicker: {
    fontSize: 12,
    textTransform: "uppercase",
    opacity: 0.7,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
  },
});
