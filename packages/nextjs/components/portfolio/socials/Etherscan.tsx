import { EtherscanLogo } from "../logos/EtherscanLogo";

export const Etherscan = (username: string) => {
  return {
    url: "https://etherscan.io/address/" + username,
    icon: EtherscanLogo,
  };
};
