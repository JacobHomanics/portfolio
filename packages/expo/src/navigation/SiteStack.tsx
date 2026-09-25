import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getCategory } from "@/content/categories";
import { useAppTheme } from "@/hooks/useAppTheme";
import { MobileHeader } from "@/components/MobileHeader";
import { siteStackScreens } from "@/navigation/screens";
import type { SiteStackParamList } from "@/navigation/types";

const NativeStack = createNativeStackNavigator<SiteStackParamList>();

export function SiteStack() {
  const { colors } = useAppTheme();

  return (
    <NativeStack.Navigator
      initialRouteName="home"
      screenOptions={{
        header: props => <MobileHeader navigation={props.navigation} options={props.options} />,
        contentStyle: { backgroundColor: colors.background },
        animation: "slide_from_right",
      }}
    >
      <NativeStack.Screen name="home" component={siteStackScreens.home} options={{ title: "Home" }} />
      <NativeStack.Screen name="card" component={siteStackScreens.card} options={{ title: "Card" }} />
      <NativeStack.Screen
        name="category"
        component={siteStackScreens.category}
        options={({ route }) => ({
          title: getCategory(route.params.category)?.title ?? "Projects",
        })}
      />
      <NativeStack.Screen
        name="project"
        component={siteStackScreens.project}
        options={({ route }) => ({
          title: getCategory(route.params.category)?.title ?? "Project",
        })}
      />
    </NativeStack.Navigator>
  );
}
