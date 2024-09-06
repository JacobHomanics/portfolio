import { EmailLogo } from "../logos/EmailLogo";

export const Email = (email: string) => {
  return {
    url: "mailto:" + email,
    icon: EmailLogo,
  };
};
