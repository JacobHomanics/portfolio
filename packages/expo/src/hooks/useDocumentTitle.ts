import { useEffect } from "react";
import { Platform } from "react-native";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    if (Platform.OS !== "web" || typeof document === "undefined") return;
    document.title = title === "Jacob Homanics" ? title : `${title} · Jacob Homanics`;
  }, [title]);
}
