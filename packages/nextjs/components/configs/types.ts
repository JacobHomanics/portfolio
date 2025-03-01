import { StaticImageData } from "next/image";

export type ProjectData = {
  name: string;
  description?: string;
  imgSrc: StaticImageData;
  link: string;
  links?: Array<Link>;
};

export type Link = {
  url: string;
  imagePath: string;
};
