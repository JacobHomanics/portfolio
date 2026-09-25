import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import { socialLinks } from "@/content/socials";
import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal } from "@/lib/links";

export function SocialIcons({ size = 24, gap = 12 }: { size?: number; gap?: number }) {
  const { colors } = useAppTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap }}>
      {socialLinks.map(link => (
        <Pressable
          key={link.url}
          accessibilityLabel={link.label}
          onPress={() => void openExternal(link.url)}
          style={{ width: size + 8, height: size + 8, alignItems: "center", justifyContent: "center" }}
        >
          <Ionicons name={link.icon} size={size} color={colors.text} />
        </Pressable>
      ))}
    </View>
  );
}
