"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/Projects";
import { data } from "~~/components/configs/unity-tooling.config";

const UnityToolingPage: NextPage = () => {
  return <Projects title="Unity Tooling" data={data} />;
};

export default UnityToolingPage;
