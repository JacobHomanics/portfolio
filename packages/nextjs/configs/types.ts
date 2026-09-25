import { StaticImageData } from "next/image";

export type GameEmbed = {
  url: string;
  width: number;
  height: number;
};

export type ProjectData = {
  name: string;
  description?: string;
  imgSrc?: StaticImageData | string;
  bannerSrc?: StaticImageData | string;
  shortDescription?: string;
  link?: string;
  links?: Array<Link>;
  embed?: GameEmbed;
};

export type Link = {
  url: string;
  imagePath: string | StaticImageData;
};
