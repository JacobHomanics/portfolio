import { DiscordLogo } from "../logos/DiscordLogo";

export const Discord = (username: string) => {
  return {
    url: username,
    icon: DiscordLogo,
  };
};
