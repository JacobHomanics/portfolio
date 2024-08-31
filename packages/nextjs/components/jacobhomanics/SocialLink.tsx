"use client";

import Link from "next/link";

type Props = {
  url?: string;
  //   img: any;
  //   customCss?: string;
  children?: any;

  size?: "sm" | "base" | "lg";
};

// const sizeMap = {
//   sm: 7,
//   base: "w-[75px] lg:w-[275px]",
//   lg: "",
// };

export const SocialLink = ({
  url, //img, customCss,
  //   size = "base",
  children,
}: Props) => {
  return (
    <div className="w-7 lg:w-10">
      <Link href={url || ""} target="#">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="hover:brightness-75 w-full h-full">{children}</div>
        {/* <img src={img.src} alt="X" className={`w-7 lg:w-10 hover:brightness-75 ${customCss}`} /> */}
      </Link>
    </div>
  );
};
