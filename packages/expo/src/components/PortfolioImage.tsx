import { Image, type ImageContentFit, type ImageStyle } from "expo-image";
import { StyleSheet, View, type StyleProp } from "react-native";

import { portfolioImage } from "@/content/images";
import { useAppTheme } from "@/hooks/useAppTheme";

export function PortfolioImage({
  imageKey,
  style,
  contentFit = "cover",
  accessibilityLabel,
}: {
  imageKey?: string;
  style?: StyleProp<ImageStyle>;
  contentFit?: ImageContentFit;
  accessibilityLabel?: string;
}) {
  const { colors } = useAppTheme();
  const source = portfolioImage(imageKey);

  if (!source) {
    return <View style={[styles.fallback, { backgroundColor: colors.border }, style]} />;
  }

  return (
    <Image
      source={source}
      style={style}
      contentFit={contentFit}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

const styles = StyleSheet.create({
  fallback: {
    backgroundColor: "#ccc",
  },
});
