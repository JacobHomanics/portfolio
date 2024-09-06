import WarpcastLogo from "~~/public/website-icons/warpcast-icon.png";

export const Warpcast = (username: string) => {
  return {
    url: "https://warpcast.com/" + username,
    icon: WarpcastLogo.src,
  };
};
