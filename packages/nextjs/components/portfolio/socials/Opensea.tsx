import { OpenSeaLogo } from "../logos/OpenSeaLogo";

export const Opensea = (username: string, logo?: string) => {
  return {
    url: "https://opensea.io/" + username,
    icon: logo ?? OpenSeaLogo,
  };
};
