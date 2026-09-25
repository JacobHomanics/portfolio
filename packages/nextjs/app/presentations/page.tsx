"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { talkProjects } from "~~/configs/talks.config";

const PresentationsPage: NextPage = () => {
  return <Projects title="Presentations" data={talkProjects} />;
};

export default PresentationsPage;
