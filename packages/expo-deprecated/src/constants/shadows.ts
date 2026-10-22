import { Platform, type ViewStyle } from "react-native";

type WebSafeShadowOptions = {
  opacity: number;
  radius: number;
  offsetX?: number;
  offsetY?: number;
  elevation?: number;
};

export function webSafeShadow({
  opacity,
  radius,
  offsetX = 0,
  offsetY = 0,
  elevation,
}: WebSafeShadowOptions): ViewStyle {
  if (Platform.OS === "web") {
    return {
      boxShadow: `${offsetX}px ${offsetY}px ${radius}px rgba(0, 0, 0, ${opacity})`,
    };
  }

  return {
    shadowColor: "#000",
    shadowOpacity: opacity,
    shadowRadius: radius,
    shadowOffset: { width: offsetX, height: offsetY },
    ...(elevation != null ? { elevation } : null),
  };
}
