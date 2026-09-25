import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useWebViewportHeightFix } from "@/hooks/useWebViewportHeightFix";
import { RootNavigator } from "@/navigation/RootNavigator";
import { ColorSchemeProvider } from "@/providers/ColorSchemeProvider";

export default function App() {
  useWebViewportHeightFix();

  return (
    <ColorSchemeProvider>
      <AppContent />
    </ColorSchemeProvider>
  );
}

function AppContent() {
  const { colors } = useAppTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
