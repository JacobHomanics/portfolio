import * as Clipboard from "expo-clipboard";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Platform, Pressable, Share, Text, View } from "react-native";

import { Overlay } from "@/components/Overlay";
import { profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { CARD_URL } from "@/lib/links";
import type { RootStackParamList } from "@/navigation/types";

export function ShareScreen() {
  const { colors } = useAppTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [message, setMessage] = useState<string | null>(null);

  const shareCard = async () => {
    const payload = { title: profile.name, text: profile.title, url: CARD_URL };

    try {
      if (Platform.OS === "web" && typeof navigator.share === "function") {
        const canShare = typeof navigator.canShare !== "function" || navigator.canShare(payload);
        await navigator.share(canShare ? payload : { url: CARD_URL });
        if (navigation.canGoBack()) navigation.goBack();
        return;
      }

      if (Platform.OS !== "web") {
        await Share.share({ title: profile.name, message: CARD_URL, url: CARD_URL });
        if (navigation.canGoBack()) navigation.goBack();
        return;
      }

      await Clipboard.setStringAsync(CARD_URL);
      setMessage("Link copied");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      setMessage("Sharing isn't available");
    }
  };

  return (
    <Overlay placement="sheet">
      <Text style={{ color: colors.text, fontSize: 20, fontWeight: "800", textAlign: "center" }}>Share</Text>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 12 }}>
        <Pressable
          accessibilityRole="button"
          onPress={() => void shareCard()}
          style={{ backgroundColor: colors.brand, borderRadius: 999, paddingHorizontal: 16, paddingVertical: 10 }}
        >
          <Text style={{ color: colors.onBrand, fontWeight: "700" }}>Share to...</Text>
        </Pressable>
        <Pressable
          accessibilityLabel="Show QR code"
          onPress={() => navigation.navigate("qr")}
          style={{
            backgroundColor: colors.brand,
            borderRadius: 12,
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="qr-code" size={22} color={colors.onBrand} />
        </Pressable>
      </View>
      {message ? <Text style={{ color: colors.text, textAlign: "center" }}>{message}</Text> : null}
    </Overlay>
  );
}
