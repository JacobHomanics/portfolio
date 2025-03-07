"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { data } from "~~/configs/ai.config";

const ArtificialIntelligencePage: NextPage = () => {
  return <Projects title="AI/LLM" data={data} />;
};

export default ArtificialIntelligencePage;
