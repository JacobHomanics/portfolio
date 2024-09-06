import LinkedinLogo from "~~/public/website-icons/LI-In-Bug.png";

export const Linkedin = (username: string, logo?: string) => {
  return {
    url: "https://linkedin.com/in/" + username,
    icon: logo ?? LinkedinLogo.src,
  };
};
