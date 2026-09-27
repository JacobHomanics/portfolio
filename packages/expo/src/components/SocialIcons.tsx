import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { Pressable, View } from "react-native";

import { socialLinks } from "@/content/socials";
import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal } from "@/lib/links";
import type { RootStackParamList } from "@/navigation/types";

export function SocialIcons({
  size = 24,
  gap = 12,
  includeQr = true,
}: {
  size?: number;
  gap?: number;
  includeQr?: boolean;
}) {
  const { colors } = useAppTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const links = includeQr ? socialLinks : socialLinks.filter(link => !("action" in link));

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap }}>
      {links.map(link => (
        <Pressable
          key={link.label}
          accessibilityLabel={link.label}
          onPress={() => {
            if ("url" in link) {
              void openExternal(link.url);
              return;
            }
            navigation.navigate("qr");
          }}
          style={{ width: size + 8, height: size + 8, alignItems: "center", justifyContent: "center" }}
        >
          <Ionicons name={link.icon} size={size} color={"color" in link ? link.color : colors.text} />
        </Pressable>
      ))}
    </View>
  );
}
