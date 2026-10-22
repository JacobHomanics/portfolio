import type { ReactNode } from "react";
import { View } from "react-native";

import { SocialBar } from "@/components/SocialBar";
import { useIsDesktopWeb } from "@/hooks/useIsDesktopWeb";
import { useReportSiteRoute } from "@/navigation/SiteRouteContext";

export function SiteLayout({ routeName, children }: { routeName: string; children: ReactNode }) {
  const desktop = useIsDesktopWeb();
  useReportSiteRoute(routeName);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, minWidth: 0 }}>{children}</View>
      {!desktop && routeName !== "card" ? <SocialBar /> : null}
    </View>
  );
}
