import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAppTheme } from "@/hooks/useAppTheme";
import { webSafeShadow } from "@/constants/shadows";
import { SocialIcons } from "@/components/SocialIcons";

export const SOCIAL_BAR_HEIGHT = 56;

export function SocialBar() {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.bar,
        webSafeShadow({ opacity: 0.12, radius: 12, offsetY: -4 }),
        {
          backgroundColor: colors.surface,
          paddingBottom: Math.max(insets.bottom, 8),
        },
      ]}
    >
      <SocialIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
});
