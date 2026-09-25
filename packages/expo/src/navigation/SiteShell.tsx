import { useState } from "react";
import { View } from "react-native";

import { BrowseSheet } from "@/components/BrowseSheet";
import { Sidebar } from "@/components/Sidebar";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";
import { BrowseContext } from "@/navigation/BrowseContext";
import { SiteRouteProvider } from "@/navigation/SiteRouteContext";
import { SiteStack } from "@/navigation/SiteStack";

export function SiteShell() {
  const desktop = useIsDesktopWeb();
  const { colors } = useAppTheme();
  const [browseOpen, setBrowseOpen] = useState(false);

  return (
    <BrowseContext.Provider value={{ open: browseOpen, setOpen: setBrowseOpen }}>
      <SiteRouteProvider>
        <View style={{ flex: 1, flexDirection: desktop ? "row" : "column", backgroundColor: colors.background }}>
          {desktop ? <Sidebar /> : null}
          <View style={{ flex: 1, minWidth: 0 }}>
            <SiteStack />
          </View>
        </View>
        {!desktop ? <BrowseSheet /> : null}
      </SiteRouteProvider>
    </BrowseContext.Provider>
  );
}
