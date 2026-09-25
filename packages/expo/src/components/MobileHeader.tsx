import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useBrowse } from "@/navigation/BrowseContext";
import { ThemeToggle } from "@/components/ThemeToggle";

type MobileHeaderProps = {
  navigation: { canGoBack: () => boolean; goBack: () => void };
  options: { title?: string };
};

export function MobileHeader({ navigation, options }: MobileHeaderProps) {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const { setOpen } = useBrowse();
  const canGoBack = navigation.canGoBack();

  return (
    <View
      style={[
        styles.bar,
        {
          paddingTop: insets.top,
          backgroundColor: colors.surface,
          borderBottomColor: colors.border,
        },
      ]}
    >
      <View style={styles.row}>
        {canGoBack ? (
          <Pressable accessibilityLabel="Back" onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="chevron-back" size={24} color={colors.text} />
          </Pressable>
        ) : (
          <View style={styles.iconButton} />
        )}
        <Text numberOfLines={1} style={[styles.title, { color: colors.text }]}>
          {options.title ?? ""}
        </Text>
        <ThemeToggle />
        <Pressable accessibilityLabel="Browse" onPress={() => setOpen(true)} style={styles.iconButton}>
          <Ionicons name="menu" size={24} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    gap: 4,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
