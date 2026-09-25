import { useNavigation, useNavigationState } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useAppTheme } from "@/hooks/useAppTheme";
import { openExternal } from "@/lib/links";
import { siteNav } from "@/navigation/navItems";
import type { RootStackParamList } from "@/navigation/types";
import { SocialIcons } from "@/components/SocialIcons";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Sidebar() {
  const { colors } = useAppTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const current = useNavigationState(state => {
    const site = state.routes[state.index ?? 0];
    const nested = site?.state;
    if (!nested || !("routes" in nested) || nested.index == null) {
      return { name: "home", category: undefined as string | undefined };
    }
    const route = nested.routes[nested.index];
    const params = route?.params as { category?: string } | undefined;
    return { name: route?.name ?? "home", category: params?.category };
  });

  return (
    <View style={[styles.sidebar, { backgroundColor: colors.surface, borderRightColor: colors.border }]}>
      <View style={styles.brandRow}>
        <Text style={[styles.brand, { color: colors.text }]}>Jacob Homanics</Text>
        <ThemeToggle />
      </View>
      <ScrollView contentContainerStyle={styles.links}>
        {siteNav.map(item => {
          const category = "category" in item ? item.category : undefined;
          const active = item.screen === "category" ? current.category === category : current.name === item.screen;
          return (
            <Pressable
              key={item.label}
              accessibilityRole="link"
              onPress={() => {
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
              style={[styles.link, active && { backgroundColor: colors.secondary }]}
            >
              <Text style={{ color: colors.text, fontWeight: active ? "700" : "500" }}>{item.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <SocialIcons />
        <Pressable onPress={() => void openExternal("https://github.com/jacobhomanics/jacobhomanics-website")}>
          <Text style={{ color: colors.text, textDecorationLine: "underline" }}>Fork me</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 240,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingTop: 20,
    paddingBottom: 16,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  brand: {
    fontSize: 16,
    fontWeight: "800",
    flex: 1,
  },
  links: {
    paddingHorizontal: 12,
    gap: 6,
  },
  link: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  footer: {
    paddingHorizontal: 16,
    gap: 12,
  },
});
