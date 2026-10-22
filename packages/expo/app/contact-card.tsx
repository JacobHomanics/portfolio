import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View, type ViewStyle } from "react-native";
import QRCode from "react-native-qrcode-svg";

import { contactLinks } from "../src/content/contactLinks";
import { profile } from "../src/content/profile";
import { colors } from "../src/theme/colors";

const contactPageUrl =
  Platform.OS === "web" && typeof window !== "undefined"
    ? `${window.location.origin}/contact`
    : "https://jacobhomanics.com/contact";

const qrBoxHeight = 226;

export default function ContactCardPage() {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const { height: windowHeight } = useWindowDimensions();
  const [frameHeight, setFrameHeight] = useState(0);
  const [identityBottom, setIdentityBottom] = useState(0);
  const [stackHeight, setStackHeight] = useState(0);
  const selected = contactLinks.find(link => link.label === selectedLabel);
  const qrValue = selected?.url ?? contactPageUrl;
  const centeredTop = frameHeight - windowHeight / 2 - qrBoxHeight / 2;
  const qrTop = Math.max(0, centeredTop, identityBottom + 12);
  const placed = frameHeight > 0 && identityBottom > 0;

  return (
    <ScrollView
      style={styles.scroll}
      onLayout={event => setFrameHeight(event.nativeEvent.layout.height)}
      contentContainerStyle={[styles.container, { minHeight: Math.max(frameHeight, qrTop + stackHeight + 24) }]}
    >
      <View
        style={styles.identity}
        onLayout={event => {
          const { y, height } = event.nativeEvent.layout;
          setIdentityBottom(y + height);
        }}
      >
        <Image source={profile.photo} style={styles.photo} accessibilityLabel={profile.name} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.headline}>{profile.headline}</Text>
      </View>
      <View
        style={[styles.qrStack, { top: qrTop, opacity: placed ? 1 : 0 }]}
        onLayout={event => setStackHeight(event.nativeEvent.layout.height)}
      >
        <View
          accessibilityLabel={`QR code for ${qrValue}`}
          style={styles.code}
        >
          <QRCode key={qrValue} value={qrValue} size={200} backgroundColor={colors.surface} color={colors.heading} />
        </View>
        <View accessibilityRole="tablist" style={styles.list}>
          {contactLinks.map(link => {
            const active = link.label === selected?.label;
            return (
              <Pressable
                key={link.label}
                accessibilityRole="tab"
                accessibilityLabel={link.label}
                accessibilityState={{ selected: active }}
                aria-selected={active}
                onPress={() => setSelectedLabel(active ? null : link.label)}
                style={[styles.link, active && styles.linkActive, pressable]}
              >
                <Ionicons name={link.icon} size={18} color={link.color} />
                <Text style={styles.linkLabel}>{link.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const pressable: ViewStyle | null = Platform.OS === "web" ? ({ cursor: "pointer" } as ViewStyle) : null;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    position: "relative",
    backgroundColor: colors.background,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  identity: {
    width: "100%",
    maxWidth: 440,
    alignItems: "center",
  },
  photo: {
    width: 88,
    height: 106,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: colors.heading,
  },
  headline: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 16,
    color: colors.textMuted,
    textAlign: "center",
  },
  qrStack: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    gap: 16,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    maxWidth: 560,
    paddingHorizontal: 16,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  linkLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.heading,
  },
  linkActive: {
    backgroundColor: colors.surfaceMuted,
  },
  code: {
    backgroundColor: colors.surface,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
