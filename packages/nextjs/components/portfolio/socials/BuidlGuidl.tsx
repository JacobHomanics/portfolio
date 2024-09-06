import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

export const BuidlGuidl = (username: string, logo?: string) => {
  return {
    url: "https://app.buidlguidl.com/builders/" + username,
    icon: logo ?? BuidlGuidlLogo,
  };
};
