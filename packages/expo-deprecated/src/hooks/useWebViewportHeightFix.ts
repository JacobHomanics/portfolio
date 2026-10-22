import { useEffect } from "react";
import { Platform } from "react-native";

const STYLE_ID = "portfolio-web-viewport";

export function useWebViewportHeightFix() {
  useEffect(() => {
    if (Platform.OS !== "web" || typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      html, body {
        height: 100% !important;
        height: 100dvh !important;
        max-height: 100dvh !important;
        overflow: hidden !important;
        margin: 0 !important;
      }
      #root {
        height: 100% !important;
        height: 100dvh !important;
        max-height: 100dvh !important;
        overflow: hidden !important;
        display: flex !important;
        flex-direction: column !important;
        min-height: 0 !important;
      }
      #root > div {
        flex: 1 1 auto !important;
        min-height: 0 !important;
        display: flex !important;
        flex-direction: column !important;
      }
    `;
    document.head.appendChild(style);
  }, []);
}
