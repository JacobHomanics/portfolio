import YoutubeLogo from "~~/public/website-icons/youtube_social_circle_red.png";

export const Youtube = (username: string, logo?: string) => {
  return {
    url: "https://youtube.com/" + username,
    icon: logo ?? YoutubeLogo.src,
  };
};
