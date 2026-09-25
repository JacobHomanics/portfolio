import { CardScreen } from "@/screens/CardScreen";
import { CategoryScreen } from "@/screens/CategoryScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { ProjectScreen } from "@/screens/ProjectScreen";
import { QrScreen } from "@/screens/QrScreen";
import { ShareScreen } from "@/screens/ShareScreen";
import { SiteShell } from "@/navigation/SiteShell";

export const rootStackScreens = {
  site: SiteShell,
  share: ShareScreen,
  qr: QrScreen,
};

export const siteStackScreens = {
  home: HomeScreen,
  card: CardScreen,
  category: CategoryScreen,
  project: ProjectScreen,
};
