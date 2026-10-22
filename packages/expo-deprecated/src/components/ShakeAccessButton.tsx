import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useShakeAccess } from "@/navigation/ShakeAccessContext";

export function ShakeAccessButton() {
  const { colors } = useAppTheme();
  const { access, requestAccess } = useShakeAccess();
  if (access === "hidden") return null;

  const denied = access === "denied";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        denied
          ? "Turn on Motion & Orientation Access in Safari settings, then tap to try again."
          : "Allow shake to show QR code"
      }
      onPress={requestAccess}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
      }}
    >
      <Ionicons name="qr-code-outline" size={22} color={denied ? colors.danger : colors.text} />
    </Pressable>
  );
}
