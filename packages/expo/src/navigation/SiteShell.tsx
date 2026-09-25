import { useNavigationState } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";

import { BrowseSheet } from "@/components/BrowseSheet";
import { Sidebar } from "@/components/Sidebar";
import { SocialBar } from "@/components/SocialBar";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";
import { BrowseContext } from "@/navigation/BrowseContext";
import { SiteStack } from "@/navigation/SiteStack";

export function SiteShell() {
  const desktop = useIsDesktopWeb();
  const { colors } = useAppTheme();
  const [browseOpen, setBrowseOpen] = useState(false);
  const routeName = useNavigationState(state => {
    const site = state.routes[state.index ?? 0];
    const nested = site?.state;
    if (!nested || !("routes" in nested) || nested.index == null) return "home";
    return nested.routes[nested.index]?.name ?? "home";
  });

  return (
    <BrowseContext.Provider value={{ open: browseOpen, setOpen: setBrowseOpen }}>
      <View style={{ flex: 1, flexDirection: desktop ? "row" : "column", backgroundColor: colors.background }}>
        {desktop ? <Sidebar /> : null}
        <View style={{ flex: 1, minWidth: 0 }}>
          <SiteStack />
        </View>
        {!desktop && routeName !== "card" ? <SocialBar /> : null}
      </View>
      {!desktop ? <BrowseSheet /> : null}
    </BrowseContext.Provider>
  );
}
