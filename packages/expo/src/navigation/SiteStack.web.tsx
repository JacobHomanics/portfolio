import { createStackNavigator } from "@react-navigation/stack";

import { getCategory } from "@/content/categories";
import { MobileHeader } from "@/components/MobileHeader";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";
import { siteStackScreens } from "@/navigation/screens";
import type { SiteStackParamList } from "@/navigation/types";

const WebStack = createStackNavigator<SiteStackParamList>();

export function SiteStack() {
  const isDesktopWeb = useIsDesktopWeb();
  const { colors } = useAppTheme();

  return (
    <WebStack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: !isDesktopWeb,
        header: props => <MobileHeader navigation={props.navigation} options={props.options} />,
        animation: isDesktopWeb ? "none" : "slide_from_right",
        cardStyle: { flex: 1, backgroundColor: colors.background },
      }}
    >
      <WebStack.Screen name="home" component={siteStackScreens.home} options={{ title: "Home" }} />
      <WebStack.Screen name="card" component={siteStackScreens.card} options={{ title: "Card" }} />
      <WebStack.Screen
        name="category"
        component={siteStackScreens.category}
        options={({ route }) => ({
          title: getCategory(route.params.category)?.title ?? "Projects",
        })}
      />
      <WebStack.Screen
        name="project"
        component={siteStackScreens.project}
        options={({ route }) => ({
          title: getCategory(route.params.category)?.title ?? "Project",
        })}
      />
    </WebStack.Navigator>
  );
}
