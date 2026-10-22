import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useSocialPlacement } from "@/navigation/SocialPlacementContext";

export function SocialPlacementToggle() {
  const { colors } = useAppTheme();
  const { visible, below, toggle } = useSocialPlacement();
  if (!visible) return null;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        below
          ? "Move social links above highlighted cards"
          : "Move social links below highlighted cards"
      }
      onPress={toggle}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
      }}
    >
      <Ionicons name={below ? "arrow-up-outline" : "arrow-down-outline"} size={22} color={colors.text} />
    </Pressable>
  );
}
