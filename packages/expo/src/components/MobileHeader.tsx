import { Ionicons } from "@expo/vector-icons";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useBrowse } from "@/navigation/BrowseContext";

type MobileHeaderProps = {
  options: { title?: string };
  routeName: string;
  navigation: NavigationProp<ParamListBase>;
};

export function MobileHeader({ options, routeName, navigation }: MobileHeaderProps) {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const { setOpen } = useBrowse();
  const isCard = routeName === "card";

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
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isCard ? "Home" : "Browse"}
          onPress={() => {
            if (isCard) {
              navigation.navigate("home");
              return;
            }
            setOpen(true);
          }}
          style={[styles.iconButton, styles.filledButton, { backgroundColor: colors.secondary }]}
        >
          <Ionicons name={isCard ? "home-outline" : "menu"} size={24} color={colors.text} />
        </Pressable>
        <Text numberOfLines={1} style={[styles.title, { color: colors.text }]}>
          {isCard ? "" : (options.title ?? "")}
        </Text>
        <ThemeToggle />
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
  filledButton: {
    borderRadius: 20,
  },
});
