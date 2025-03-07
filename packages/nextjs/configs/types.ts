import { StaticImageData } from "next/image";

export type ProjectData = {
  name: string;
  description?: string;
  imgSrc?: StaticImageData | string;
  bannerSrc?: StaticImageData | string;
  shortDescription?: string;
  link?: string;
  links?: Array<Link>;
};

export type Link = {
  url: string;
  imagePath: string | StaticImageData;
};
