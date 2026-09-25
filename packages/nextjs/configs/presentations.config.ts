import { talks } from "./talks.config";
import { ProjectData } from "./types";

export const data: Array<ProjectData> = talks.map(talk => ({
  name: talk.name,
  shortDescription: talk.shortDescription,
  description: talk.description,
  imgSrc: talk.imgSrc,
  bannerSrc: talk.bannerSrc,
  link: talk.youtubeUrl,
}));
