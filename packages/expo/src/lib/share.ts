import * as Clipboard from "expo-clipboard";
import { Platform, Share } from "react-native";

import { profile } from "@/content/profile.config";
import { CARD_URL } from "@/lib/links";

export async function shareCard(): Promise<string | null> {
  const payload = { title: profile.name, text: profile.title, url: CARD_URL };

  try {
    if (Platform.OS === "web" && typeof navigator.share === "function") {
      const canShare = typeof navigator.canShare !== "function" || navigator.canShare(payload);
      await navigator.share(canShare ? payload : { url: CARD_URL });
      return null;
    }

    if (Platform.OS !== "web") {
      await Share.share({ title: profile.name, message: CARD_URL, url: CARD_URL });
      return null;
    }

    await Clipboard.setStringAsync(CARD_URL);
    return "Link copied";
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") return null;
    return "Sharing isn't available";
  }
}
