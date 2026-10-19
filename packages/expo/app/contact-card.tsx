import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, View, type ViewStyle } from "react-native";
import QRCode from "react-native-qrcode-svg";

import { contactLinks } from "../src/content/contactLinks";
import { profile } from "../src/content/profile";

const contactPageUrl =
  Platform.OS === "web" && typeof window !== "undefined"
    ? `${window.location.origin}/contact`
    : "https://jacobhomanics.com/contact";

export default function ContactCardPage() {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const selected = contactLinks.find(link => link.label === selectedLabel);
  const qrValue = selected?.url ?? contactPageUrl;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View style={styles.identity}>
        <Image source={profile.photo} style={styles.photo} accessibilityLabel={profile.name} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.headline}>{profile.headline}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.qrColumn}>
          <View
            accessibilityLabel={`QR code for ${qrValue}`}
            style={styles.code}
          >
            <QRCode key={qrValue} value={qrValue} size={200} backgroundColor="#ffffff" />
          </View>
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
                <Ionicons name={link.icon} size={22} color={link.color} />
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
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  identity: {
    width: "100%",
    maxWidth: 440,
    alignItems: "center",
    marginBottom: 24,
  },
  photo: {
    width: 140,
    height: 168,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  headline: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
    textAlign: "center",
  },
  body: {
    width: "100%",
    maxWidth: 640,
    alignItems: "center",
    justifyContent: "center",
    gap: 28,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  linkActive: {
    backgroundColor: "#f2f2f2",
  },
  qrColumn: {
    alignItems: "center",
  },
  code: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
});
