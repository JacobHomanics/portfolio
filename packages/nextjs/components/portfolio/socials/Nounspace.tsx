import { NounspaceLogo } from "../logos/NounspaceLogo";

export const Nounspace = (username: string) => {
  return {
    url: "https://nounspace.com/s/" + username,
    icon: NounspaceLogo,
  };
};
