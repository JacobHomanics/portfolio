"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/Projects";
import { data } from "~~/components/configs/websites.config";

const WebsitesPage: NextPage = () => {
  return <Projects title="Websites" data={data} />;
};

export default WebsitesPage;
