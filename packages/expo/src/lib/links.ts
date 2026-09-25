import * as WebBrowser from "expo-web-browser";
import { Linking, Platform } from "react-native";

import type { SiteStackParamList } from "@/navigation/types";

export const CARD_URL = "https://jacobhomanics.com/card";
export const RESUME_PATH = "/Jacob_Homanics_Resume.pdf";

export function parseProjectLink(link?: string): { category: string; slug: string } | null {
  if (!link?.startsWith("/")) return null;
  const [, category, slug] = link.split("/");
  if (!category || !slug) return null;
  return { category, slug };
}

export async function openExternal(url: string) {
  if (url.startsWith("mailto:")) {
    await Linking.openURL(url);
    return;
  }

  if (Platform.OS === "web") {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  await WebBrowser.openBrowserAsync(url);
}

export async function openResume() {
  if (Platform.OS === "web") {
    window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
    return;
  }

  await WebBrowser.openBrowserAsync(`https://jacobhomanics.com${RESUME_PATH}`);
}

export function projectRoute(link?: string): { name: "project"; params: SiteStackParamList["project"] } | null {
  const parsed = parseProjectLink(link);
  if (!parsed) return null;
  return { name: "project", params: parsed };
}
