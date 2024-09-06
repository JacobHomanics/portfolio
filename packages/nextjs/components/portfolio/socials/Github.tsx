import { GithubLogo } from "~~/components/portfolio/logos/GithubLogo";

export const github = (username: string, logo?: string) => {
  return {
    url: "https://github.com/" + username,
    icon: logo ?? GithubLogo,
  };
};
