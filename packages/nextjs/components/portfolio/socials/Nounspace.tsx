import { NounspaceLogo } from "../logos/NounspaceLogo";

export const Nounspace = (username: string, logo?: string) => {
  return {
    url: "https://nounspace.com/s/" + username,
    icon: logo ?? NounspaceLogo,
  };
};
