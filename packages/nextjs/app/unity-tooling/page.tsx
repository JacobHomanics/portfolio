"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { data } from "~~/configs/unity-tooling.config";

const UnityToolingPage: NextPage = () => {
  return <Projects title="Unity Tooling" data={data} />;
};

export default UnityToolingPage;
