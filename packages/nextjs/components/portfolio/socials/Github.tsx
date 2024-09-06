import { GithubLogo } from "~~/components/portfolio/logos/GithubLogo";

export const github = (username: string) => {
  return {
    url: "https://github.com/" + username,
    icon: GithubLogo,
  };
};
