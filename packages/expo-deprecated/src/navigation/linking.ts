import { getPathFromState as getPathFromNavigationState, type LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { installedWebAppPath } from "@/lib/installedWebAppUrl";
import type { RootStackParamList } from "@/navigation/types";

export const APP_SCHEME = "jacobhomanics";

export const rootLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/"), `${APP_SCHEME}://`, "https://jacobhomanics.com"],
  config: {
    screens: {
      site: {
        path: "",
        screens: {
          home: "",
          card: "card",
          category: ":category",
          project: ":category/:slug",
        },
      },
      qr: "qr",
    },
  },
  getPathFromState(state, options) {
    return installedWebAppPath() ?? getPathFromNavigationState(state, options);
  },
};
