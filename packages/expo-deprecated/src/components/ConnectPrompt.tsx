import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { socialLinks } from "@/content/socials";
import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal } from "@/lib/links";

const contactLinks = socialLinks.filter(link => "url" in link);

export function ConnectPrompt({ visible, onDismiss }: { visible: boolean; onDismiss: () => void }) {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (!visible || Platform.OS !== "web" || typeof window === "undefined") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onDismiss, visible]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onDismiss} statusBarTranslucent>
      <View
        style={[
          styles.backdrop,
          {
            paddingTop: Math.max(24, insets.top + 12),
            paddingBottom: Math.max(24, insets.bottom + 12),
          },
        ]}
      >
        <Pressable accessibilityLabel="Dismiss" onPress={onDismiss} style={StyleSheet.absoluteFill} />
        <View style={[styles.dialog, { backgroundColor: colors.surface }]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            onPress={onDismiss}
            style={[styles.close, { backgroundColor: colors.secondary }]}
          >
            <Ionicons name="close" size={22} color={colors.text} />
          </Pressable>
          <Text style={[styles.title, { color: colors.text }]}>How would you like to connect?</Text>
          <ScrollView contentContainerStyle={styles.list} style={styles.listScroll}>
            {contactLinks.map(link => (
              <Pressable
                key={link.label}
                accessibilityRole="button"
                accessibilityLabel={link.label}
                onPress={() => {
                  void openExternal(link.url);
                  onDismiss();
                }}
                style={[styles.item, buttonReset]}
              >
                <Ionicons name={link.icon} size={36} color={link.color} />
                <Text style={[styles.name, { color: colors.text }]}>{link.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const buttonReset: ViewStyle | null =
  Platform.OS === "web" ? ({ appearance: "none", backgroundColor: "transparent" } as ViewStyle) : null;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  dialog: {
    width: "100%",
    maxWidth: 420,
    maxHeight: "100%",
    borderRadius: 16,
    paddingTop: 48,
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 1,
  },
  close: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
  },
  listScroll: {
    flexGrow: 0,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: 20,
  },
  item: {
    width: "33%",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
