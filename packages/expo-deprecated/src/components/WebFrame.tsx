import { Pressable, Text } from "react-native";

import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal } from "@/lib/links";

export function WebFrame({
  url,
  title,
}: {
  url: string;
  embedUrl?: string;
  title: string;
  aspectRatio?: number;
  height?: number;
}) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => void openExternal(url)}
      style={{
        backgroundColor: colors.brand,
        borderRadius: 999,
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      <Text style={{ color: colors.onBrand, fontWeight: "700" }}>Open {title}</Text>
    </Pressable>
  );
}
