import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Hello This is my World!</Text>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
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
  link: {
    marginTop: 16,
    fontSize: 18,
    color: "#0b57d0",
  },
});
