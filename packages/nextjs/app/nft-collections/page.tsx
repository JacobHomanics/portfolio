"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { data } from "~~/configs/nftCollections.config";

const NFTCollectionsPage: NextPage = () => {
  return <Projects title="NFT Collections" data={data} />;
};

export default NFTCollectionsPage;
