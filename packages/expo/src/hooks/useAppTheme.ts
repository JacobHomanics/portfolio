import { useColorSchemeContext } from "@/providers/ColorSchemeProvider";

export function useAppTheme() {
  return useColorSchemeContext();
}
