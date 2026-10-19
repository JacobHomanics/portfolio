import { ScrollView, StyleSheet, View } from "react-native";

import { colors } from "../src/theme/colors";

export default function SkillsPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.panel} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  panel: {
    width: "100%",
    maxWidth: 1040,
    alignSelf: "center",
    flexGrow: 1,
  },
});
