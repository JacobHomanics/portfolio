import { Platform, useWindowDimensions } from "react-native";

/** Matches the previous site's `lg` breakpoint. */
export const DESKTOP_MIN_WIDTH = 1024;

export function useIsDesktopWeb() {
  const { width } = useWindowDimensions();
  return Platform.OS === "web" && width >= DESKTOP_MIN_WIDTH;
}
