import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

import { contactLinks } from "../src/content/contactLinks";
import { colors } from "../src/theme/colors";

export default function ContactPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.message}>This is my contact page.</Text>
      {contactLinks.map(link => {
        const opensInNewTab = link.url.startsWith("https://") && !link.url.startsWith("https://wa.me/");
        return (
          <Link
            key={link.label}
            href={link.url}
            rel={opensInNewTab ? "noopener noreferrer" : undefined}
            target={opensInNewTab ? "_blank" : undefined}
            style={styles.link}
          >
            <Ionicons name={link.icon} size={22} color={link.color} />
            <Text style={styles.label}>{link.label}</Text>
          </Link>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  message: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    color: colors.heading,
  },
  link: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.link,
  },
});
