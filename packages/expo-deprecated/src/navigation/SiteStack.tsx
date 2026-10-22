import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MobileHeader } from "@/components/MobileHeader";
import { getCategory } from "@/content/categories";
import { useAppTheme } from "@/hooks/useAppTheme";
import { SiteLayout } from "@/navigation/SiteLayout";
import { siteStackScreens } from "@/navigation/screens";
import type { SiteStackParamList } from "@/navigation/types";

const NativeStack = createNativeStackNavigator<SiteStackParamList>();

export function SiteStack() {
  const { colors } = useAppTheme();

  return (
    <NativeStack.Navigator
      initialRouteName="home"
      layout={({ children, state }) => (
        <SiteLayout routeName={state.routes[state.index]?.name ?? "home"}>{children}</SiteLayout>
      )}
      screenOptions={{
        header: props => (
          <MobileHeader
            options={props.options}
            routeName={props.route.name}
            navigation={props.navigation}
          />
        ),
        contentStyle: { backgroundColor: colors.background },
        animation: "slide_from_right",
      }}
    >
      <NativeStack.Screen name="home" component={siteStackScreens.home} options={{ title: "Home" }} />
      <NativeStack.Screen name="card" component={siteStackScreens.card} options={{ title: "Jacob Homanics" }} />
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
