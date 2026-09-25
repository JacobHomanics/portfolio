import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  type BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Platform, Pressable, Share, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { profile } from "@/content/profile.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { CARD_URL } from "@/lib/links";
import type { RootStackParamList } from "@/navigation/types";

export function ShareSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<NavigationProp<Pick<RootStackParamList, "qr">>>();
  const [message, setMessage] = useState<string | null>(null);
  const snapPoints = useMemo(() => ["45%"], []);

  useEffect(() => {
    if (!open) return;
    setMessage(null);
    sheetRef.current?.present();
  }, [open]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.4} pressBehavior="close" />
    ),
    [],
  );

  const shareCard = async () => {
    const payload = { title: profile.name, text: profile.title, url: CARD_URL };

    try {
      if (Platform.OS === "web" && typeof navigator.share === "function") {
        const canShare = typeof navigator.canShare !== "function" || navigator.canShare(payload);
        await navigator.share(canShare ? payload : { url: CARD_URL });
        sheetRef.current?.dismiss();
        return;
      }

      if (Platform.OS !== "web") {
        await Share.share({ title: profile.name, message: CARD_URL, url: CARD_URL });
        sheetRef.current?.dismiss();
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
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose
      onDismiss={onClose}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: colors.surface }}
      handleIndicatorStyle={{ backgroundColor: colors.handle }}
    >
      <BottomSheetView style={[styles.content, { paddingBottom: Math.max(insets.bottom, 24) }]}>
        <Text style={[styles.title, { color: colors.text }]}>Share</Text>
        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            onPress={() => void shareCard()}
            style={[styles.shareButton, { backgroundColor: colors.brand }]}
          >
            <Text style={{ color: colors.onBrand, fontWeight: "700" }}>Share to...</Text>
          </Pressable>
          <Pressable
            accessibilityLabel="Show QR code"
            onPress={() => {
              sheetRef.current?.dismiss();
              navigation.navigate("qr");
            }}
            style={[styles.qrButton, { backgroundColor: colors.brand }]}
          >
            <Ionicons name="qr-code" size={22} color={colors.onBrand} />
          </Pressable>
        </View>
        {message ? <Text style={{ color: colors.text, textAlign: "center" }}>{message}</Text> : null}
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingTop: 8,
    gap: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  shareButton: {
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  qrButton: {
    borderRadius: 12,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
});
