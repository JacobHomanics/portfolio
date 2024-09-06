import { OpenSeaLogo } from "../logos/OpenSeaLogo";

export const Opensea = (username: string) => {
  return {
    url: "https://opensea.io/" + username,
    icon: OpenSeaLogo,
  };
};
