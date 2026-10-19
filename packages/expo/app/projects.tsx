import { ScrollView, StyleSheet, Text, View } from "react-native";

import { colors } from "../src/theme/colors";

export default function ProjectsPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.heading}>Hello projects!</Text>
      </View>
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
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.heading,
  },
});
