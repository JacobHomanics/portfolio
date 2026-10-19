import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAppTheme } from "@/hooks/useAppTheme";
import { rootStackScreens } from "@/navigation/screens";
import type { RootStackParamList } from "@/navigation/types";

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  const { colors } = useAppTheme();

  return (
    <NativeStack.Navigator
      initialRouteName="site"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        gestureEnabled: true,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <NativeStack.Screen name="site" component={rootStackScreens.site} />
      <NativeStack.Screen
        name="qr"
        component={rootStackScreens.qr}
        options={{
          presentation: "modal",
          headerShown: false,
          contentStyle: { backgroundColor: colors.surface },
        }}
      />
    </NativeStack.Navigator>
  );
}
