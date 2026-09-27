import { CardScreen } from "@/screens/CardScreen";
import { CategoryScreen } from "@/screens/CategoryScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { ProjectScreen } from "@/screens/ProjectScreen";
import { QrScreen } from "@/screens/QrScreen";
import { SiteShell } from "@/navigation/SiteShell";

export const rootStackScreens = {
  site: SiteShell,
  qr: QrScreen,
};

export const siteStackScreens = {
  home: HomeScreen,
  card: CardScreen,
  category: CategoryScreen,
  project: ProjectScreen,
};
