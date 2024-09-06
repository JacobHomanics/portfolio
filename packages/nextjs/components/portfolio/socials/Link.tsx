import { LinkLogo } from "../logos/LinkLogo";

export const Link = (url: string) => {
  return {
    url,
    icon: LinkLogo,
  };
};
