import TelegramLogo from "~~/public/website-icons/Logo.png";

export const Telegram = (username: string, logo?: string) => {
  console.log(logo);
  return {
    url: "https://t.me/" + username,
    icon: logo ?? TelegramLogo.src,
  };
};
