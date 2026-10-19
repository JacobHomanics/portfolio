import { StyleSheet, Text, View } from "react-native";

export default function ContactPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>This is my contact page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  message: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
  },
});
