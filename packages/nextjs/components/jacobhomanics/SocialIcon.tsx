"use client";

// import Link from "next/link";

type Props = {
  img: any;
  alt?: string;
  size?: "sm" | "base" | "lg";
};

// const sizeMap = {
//   sm: 7,
//   base: "w-[75px] lg:w-[275px]",
//   lg: "",
// };

export const SocialIcon = ({
  img,
  alt = "Image",
}: //size = "base"
Props) => {
  return (
    <div className="w-full h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.src} alt={alt} className="w-full h-full" />
    </div>
  );
};
