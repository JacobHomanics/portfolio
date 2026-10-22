import type { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type IconName = ComponentProps<typeof Ionicons>["name"];

export const contactLinks: {
  label: string;
  url: string;
  icon: IconName;
  color: string;
}[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jacobhomanics",
    icon: "logo-linkedin",
    color: "#0A66C2",
  },
  { label: "X", url: "https://x.com/jacobhomanics", icon: "logo-x", color: "#000000" },
  { label: "Text", url: "sms:+17245180234", icon: "chatbubble-ellipses", color: "#34C759" },
  { label: "Email", url: "mailto:homanicsjake@gmail.com", icon: "mail", color: "#EA4335" },
  { label: "Telegram", url: "https://t.me/jacobhomanics", icon: "paper-plane", color: "#1B8FC9" },
  { label: "WhatsApp", url: "https://wa.me/17245180234", icon: "logo-whatsapp", color: "#25D366" },
  { label: "GitHub", url: "https://github.com/jacobhomanics", icon: "logo-github", color: "#181717" },
];
