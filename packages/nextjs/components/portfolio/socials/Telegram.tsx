import TelegramLogo from "~~/public/website-icons/Logo.png";

export const Telegram = (username: string) => {
  return {
    url: "https://t.me/" + username,
    icon: TelegramLogo.src,
  };
};
