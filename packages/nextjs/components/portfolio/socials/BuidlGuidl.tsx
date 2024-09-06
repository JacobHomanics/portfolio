import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

export const BuidlGuidl = (username: string) => {
  return {
    url: "https://app.buidlguidl.com/builders/" + username,
    icon: BuidlGuidlLogo,
  };
};
