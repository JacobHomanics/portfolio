"use client";

import { useEffect, useState } from "react";

type Props = {
  Icon: string | any;
  size?: "base" | "sm" | "lg" | "xs";
  isRounded?: boolean;
};

const sizeMap = {
  xs: "w-[24px] h-[24px]",
  sm: "w-5 h-5 md:w-8 md:h-8",
  base: "w-[64px] h-[64px]",
  lg: "w-[64x] h-[64px] md:w-[128px] md:h-[128px]",
};

export const UniversalIcon = ({ Icon, size = "base", isRounded }: Props) => {
  const [output, setOutput] = useState<any>(<></>);

  useEffect(() => {
    if (typeof Icon === "string") {
      setOutput(
        <div className={"hover:brightness-75 dark:hover:brightness-25"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={Icon}
            alt="Link"
            className={`${sizeMap[size]} object-scale-down ${isRounded ? "rounded-xl" : ""}`}
          />
        </div>,
      );
    } else {
      setOutput(
        <Icon
          className={"fill-current text-secondary hover:brightness-50 hover:dark:brightness-200 " + sizeMap[size]}
        />,
      );
    }
  }, [Icon, isRounded, size]);

  return output;
};
