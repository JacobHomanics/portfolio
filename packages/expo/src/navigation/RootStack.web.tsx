import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";
import { rootStackScreens } from "@/navigation/screens";
import type { RootStackParamList } from "@/navigation/types";

const WebStack = createStackNavigator<RootStackParamList>();

export function RootStack() {
  const isDesktopWeb = useIsDesktopWeb();
  const { colors } = useAppTheme();

  return (
    <WebStack.Navigator
      initialRouteName="site"
      screenOptions={{
        headerShown: false,
        animation: isDesktopWeb ? "none" : "slide_from_right",
        cardStyle: {
          flex: 1,
          backgroundColor: colors.background,
        },
      }}
    >
      <WebStack.Screen name="site" component={rootStackScreens.site} />
      <WebStack.Screen
        name="share"
        component={rootStackScreens.share}
        options={{
          presentation: "transparentModal",
          headerShown: false,
          animation: "fade",
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: false,
        }}
      />
      <WebStack.Screen
        name="qr"
        component={rootStackScreens.qr}
        options={{
          presentation: "transparentModal",
          headerShown: false,
          animation: Platform.OS === "web" ? "fade" : "default",
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: false,
        }}
      />
    </WebStack.Navigator>
  );
}
