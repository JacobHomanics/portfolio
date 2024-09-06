import { EtherscanLogo } from "../logos/EtherscanLogo";

export const Etherscan = (username: string, logo?: string) => {
  return {
    url: "https://etherscan.io/address/" + username,
    icon: logo ?? EtherscanLogo,
  };
};
