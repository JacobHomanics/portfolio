import { ProjectData } from "./types";
import atxDaoLogo from "~~/public/organizations/atx-dao.png";
// import baseLogo from "~~/public/organizations/base-logo-in-blue.png";
import bstwLogo from "~~/public/organizations/bstw.png";
import buidlguidlLogo from "~~/public/organizations/buidlguidllogo.jpg";
import curios from "~~/public/organizations/curios.jpg";
import daoCoalition from "~~/public/organizations/dao-coalition.png";
import developerDaoLogo from "~~/public/organizations/dd.png";
import hatsProtocolLogo from "~~/public/organizations/hats.jpg";
// import optimismLogo from "~~/public/organizations/optimism-ethereum-op-logo.png";
import optimismFractalLogo from "~~/public/organizations/optimism-fractal.jpg";
import raidGuildLogo from "~~/public/organizations/rg-icon.png";
import solidityGuildLogo from "~~/public/organizations/solidity-guild.png";

export const data: Array<ProjectData> = [
  { link: "https://buidlguidl.com", imgSrc: buidlguidlLogo.src, name: "Buidl Guidl" },
  { link: "https://raidguild.org", imgSrc: raidGuildLogo.src, name: "Raid Guild" },
  { link: "https://solidityguild.com/", imgSrc: solidityGuildLogo.src, name: "Solidity Guild" },
  { link: "https://hatsprotocol.xyz/", imgSrc: hatsProtocolLogo.src, name: "Hats Protocol" },
  { link: "https://www.developerdao.com/", imgSrc: developerDaoLogo.src, name: "Developer DAO" },

  // { url: "https://optimism.io/", imgSrc: optimismLogo.src, name: "Optimism" },
  { link: "https://atxdao.com", imgSrc: atxDaoLogo.src, name: "ATX DAO" },
  { link: "https://optimismfractal.com/", imgSrc: optimismFractalLogo.src, name: "Optimism Fractal" },

  // { url: "https://base.org/", imgSrc: baseLogo.src, name: "Base" },
  { link: "https://www.daocoalition.org/", imgSrc: daoCoalition.src, name: "DAO Coalition" },

  { link: "https://www.bigshottoyworks.com/", imgSrc: bstwLogo.src, name: "Bigshot Toyworks" },
  { link: "https://curios.com/", imgSrc: curios.src, name: "Curios" },
];
