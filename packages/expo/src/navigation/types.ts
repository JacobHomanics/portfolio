import type { NavigatorScreenParams } from "@react-navigation/native";

export type SiteStackParamList = {
  home: undefined;
  card: undefined;
  category: { category: string };
  project: { category: string; slug: string };
};

export type RootStackParamList = {
  site: NavigatorScreenParams<SiteStackParamList> | undefined;
  qr: undefined;
};
