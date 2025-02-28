"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/Projects";
import { data } from "~~/components/configs/nftCollections.config";

const NFTCollectionsPage: NextPage = () => {
  return <Projects title="NFT Collections" data={data} />;
};

export default NFTCollectionsPage;
