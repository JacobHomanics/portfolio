export type ProjectData = {
  name: string;
  description?: string;
  imgSrc: string;
  link: string;
  links?: Array<Link>;
};

export type Link = {
  url: string;
  imagePath: string;
};
