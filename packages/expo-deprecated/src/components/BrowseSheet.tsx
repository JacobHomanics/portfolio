import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useBrowse } from "@/navigation/BrowseContext";
import { siteNav } from "@/navigation/navItems";
import type { RootStackParamList } from "@/navigation/types";

export function BrowseSheet() {
  const { colors } = useAppTheme();
  const { open, setOpen } = useBrowse();
  const sheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const snapPoints = useMemo(() => ["58%"], []);

  useEffect(() => {
    if (open) sheetRef.current?.expand();
    else sheetRef.current?.close();
  }, [open]);

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={() => setOpen(false)}
      backgroundStyle={{ backgroundColor: colors.surface }}
      handleIndicatorStyle={{ backgroundColor: colors.handle }}
    >
      <BottomSheetScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.heading, { color: colors.text }]}>Browse</Text>
        {siteNav.map(item => {
          const category = "category" in item ? item.category : undefined;
          return (
            <Pressable
              key={item.label}
              accessibilityRole="link"
              onPress={() => {
                setOpen(false);
                if (item.screen === "category" && category) {
                  navigation.navigate("site", { screen: "category", params: { category } });
                  return;
                }
                if (item.screen === "card") {
                  navigation.navigate("site", { screen: "card" });
                  return;
                }
                navigation.navigate("site", { screen: "home" });
              }}
              style={[styles.row, { backgroundColor: colors.surfaceMuted }]}
            >
              <Text style={{ color: colors.text, fontSize: 16, fontWeight: "600" }}>{item.label}</Text>
            </Pressable>
          );
        })}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },
  row: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
