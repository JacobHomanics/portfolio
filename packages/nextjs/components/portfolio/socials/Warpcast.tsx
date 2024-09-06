import WarpcastLogo from "~~/public/website-icons/warpcast-icon.png";

export const Warpcast = (username: string, logo?: string) => {
  return {
    url: "https://warpcast.com/" + username,
    icon: logo ?? WarpcastLogo.src,
  };
};
