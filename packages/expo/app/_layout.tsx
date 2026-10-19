import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { BottomBanner } from "../src/components/BottomBanner";
import { TopNav } from "../src/components/TopNav";
import { colors } from "../src/theme/colors";

export default function RootLayout() {
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <TopNav />
      <View style={styles.content}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.background },
          }}
        />
      </View>
      <BottomBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
});

