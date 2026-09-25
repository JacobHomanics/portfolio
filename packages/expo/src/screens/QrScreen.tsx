import QRCode from "react-native-qrcode-svg";
import { Text, View } from "react-native";

import { Overlay } from "@/components/Overlay";
import { PortfolioImage } from "@/components/PortfolioImage";
import { profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { CARD_URL } from "@/lib/links";

export function QrScreen() {
  const { colors } = useAppTheme();

  return (
    <Overlay placement="center" showClose>
      <View style={{ alignItems: "center", gap: 12 }}>
        <PortfolioImage
          imageKey={profile.photo}
          accessibilityLabel={profile.name}
          style={{ width: 96, height: 96, borderRadius: 48 }}
        />
        <Text style={{ color: colors.text, fontSize: 24, fontWeight: "800" }}>{profile.name}</Text>
        <Text style={{ color: colors.text }}>{profile.title}</Text>
        <View style={{ backgroundColor: "#ffffff", padding: 12, borderRadius: 16 }}>
          <QRCode value={CARD_URL} size={220} />
        </View>
      </View>
    </Overlay>
  );
}
