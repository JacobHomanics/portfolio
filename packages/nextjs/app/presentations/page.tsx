"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { data } from "~~/configs/presentations.config";

const PresentationsPage: NextPage = () => {
  return <Projects title="Presentations" data={data} />;
};

export default PresentationsPage;
