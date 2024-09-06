import { XLogo } from "../logos/XLogo";

export const X = (username: string) => {
  return {
    url: "https://x.com/" + username,
    icon: XLogo,
  };
};
