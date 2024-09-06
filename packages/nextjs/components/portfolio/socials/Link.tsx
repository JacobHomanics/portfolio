import { LinkLogo } from "../logos/LinkLogo";

export const Link = (url: string, logo?: string) => {
  return {
    url,
    icon: logo ?? LinkLogo,
  };
};
