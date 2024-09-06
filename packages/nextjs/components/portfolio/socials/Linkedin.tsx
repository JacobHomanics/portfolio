import LinkedinLogo from "~~/public/website-icons/LI-In-Bug.png";

export const Linkedin = (username: string) => {
  return {
    url: "https://linkedin.com/in/" + username,
    icon: LinkedinLogo.src,
  };
};
