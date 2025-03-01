"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/cards/Projects";
import { data } from "~~/components/configs/video-games.config";

const VideoGamesPage: NextPage = () => {
  return <Projects title="Video Games" data={data} />;
};

export default VideoGamesPage;
