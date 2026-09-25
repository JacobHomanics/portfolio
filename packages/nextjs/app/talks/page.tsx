"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { talkProjects } from "~~/configs/talks.config";

const TalksPage: NextPage = () => {
  return <Projects title="Talks" data={talkProjects} />;
};

export default TalksPage;
