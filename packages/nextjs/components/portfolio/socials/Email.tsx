import { EmailLogo } from "../logos/EmailLogo";

export const Email = (email: string, logo?: string) => {
  return {
    url: "mailto:" + email,
    icon: logo ?? EmailLogo,
  };
};
