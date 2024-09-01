"use client";

// import Link from "next/link";
import { IconLink } from "./IconLink";

type Props = {
  items?: any[];
  size?: "sm" | "base" | "lg";
};

// const sizeMap = {
//   sm: 7,
//   base: "w-[75px] lg:w-[275px]",
//   lg: "",
// };

export const SocialLinks = ({
  items,
}: //   size = "base",
Props) => {
  const itemsElements = items?.map((item, index) => {
    return (
      <IconLink url={item.url} key={"socialLinks-" + index}>
        {item.type === "img" ? (
          <img src={item.img.src} alt="Link" className="w-7 lg:w-10 h-7 lg:h-10 m-1" />
        ) : (
          <item.img className="w-7 h-7 lg:w-10 lg:h-10" />
        )}
      </IconLink>
    );
  });

  return <div className="flex flex-wrap items-center">{itemsElements}</div>;
};
