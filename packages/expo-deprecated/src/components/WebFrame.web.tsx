import { createElement } from "react";
import { View } from "react-native";

export function WebFrame({
  url,
  embedUrl,
  title,
  aspectRatio,
  height,
}: {
  url: string;
  embedUrl?: string;
  title: string;
  aspectRatio?: number;
  height?: number;
}) {
  return (
    <View
      style={{
        width: "100%",
        maxWidth: height ? 600 : 960,
        aspectRatio: height ? undefined : aspectRatio,
        height,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {createElement("iframe", {
        src: embedUrl ?? url,
        title,
        allow:
          "autoplay; fullscreen *; gamepad; gyroscope; accelerometer; xr-spatial-tracking; picture-in-picture; web-share",
        allowFullScreen: true,
        style: { width: "100%", height: "100%", border: 0 },
      })}
    </View>
  );
}
