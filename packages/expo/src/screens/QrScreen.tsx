import { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import { Platform, Pressable, StyleSheet, Text, View, type ViewStyle } from "react-native";

import { Overlay } from "@/components/Overlay";
import { PortfolioImage } from "@/components/PortfolioImage";
import { profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { CARD_CONNECT_URL, LINKEDIN_PROFILE_URL } from "@/lib/links";

const qrTabs = [
  { id: "card", label: "Card", url: CARD_CONNECT_URL },
  { id: "linkedin", label: "LinkedIn", url: LINKEDIN_PROFILE_URL },
] as const;

type QrTabId = (typeof qrTabs)[number]["id"];

export function QrScreen() {
  const { colors } = useAppTheme();
  const [tab, setTab] = useState<QrTabId>("card");
  const selected = qrTabs.find(item => item.id === tab) ?? qrTabs[0];

  return (
    <Overlay placement="center" showClose>
      <View style={styles.content}>
        <PortfolioImage
          imageKey={profile.photo}
          accessibilityLabel={profile.name}
          style={styles.photo}
        />
        <Text style={[styles.name, { color: colors.text }]}>{profile.name}</Text>
        <Text style={{ color: colors.text }}>{profile.title}</Text>
        <View accessibilityRole="tablist" style={[styles.tabs, { backgroundColor: colors.secondary }]}>
          {qrTabs.map(item => {
            const active = item.id === selected.id;
            return (
              <Pressable
                key={item.id}
                accessibilityRole="tab"
                accessibilityLabel={item.label}
                accessibilityState={{ selected: active }}
                aria-selected={active}
                onPress={() => setTab(item.id)}
                style={[styles.tab, active && { backgroundColor: colors.brand }, tabButton]}
              >
                <Text style={[styles.tabLabel, { color: active ? colors.onBrand : colors.text }]}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.code}>
          <QRCode key={selected.id} value={selected.url} size={200} />
        </View>
      </View>
    </Overlay>
  );
}

const tabButton: ViewStyle | null =
  Platform.OS === "web" ? ({ appearance: "none", cursor: "pointer" } as ViewStyle) : null;

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    gap: 8,
  },
  photo: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
  },
  tabs: {
    flexDirection: "row",
    width: 224,
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 15,
    fontWeight: "700",
  },
  code: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 16,
  },
});
