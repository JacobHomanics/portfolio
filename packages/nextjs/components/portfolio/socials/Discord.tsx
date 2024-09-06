import { DiscordLogo } from "../logos/DiscordLogo";

export const Discord = (username: string, logo?: string) => {
  return {
    url: username,
    icon: logo ?? DiscordLogo,
  };
};
