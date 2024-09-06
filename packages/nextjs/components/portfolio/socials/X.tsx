import { XLogo } from "../logos/XLogo";

export const X = (username: string, logo?: string) => {
  return {
    url: "https://x.com/" + username,
    icon: logo ?? XLogo,
  };
};
