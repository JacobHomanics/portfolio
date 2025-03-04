"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { data } from "~~/configs/video-games.config";

const VideoGamesPage: NextPage = () => {
  return <Projects title="Video Games" data={data} />;
};

export default VideoGamesPage;
