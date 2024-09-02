"use client";

import { useEffect, useState } from "react";

type Props = {
  Icon: string | any;
  size?: "base" | "sm" | "lg" | "xs";
};

const sizeMap = {
  xs: "w-[24px] h-[24px]",
  sm: "w-[32px] h-[32px]",
  base: "w-[64px] h-[64px]",
  lg: "w-[128px] h-[128px]",
};

export const UniversalIcon = ({ Icon, size = "base" }: Props) => {
  const [output, setOutput] = useState<any>(<></>);

  useEffect(() => {
    if (typeof Icon === "string") {
      setOutput(
        <div className={"hover:brightness-75 dark:hover:brightness-25" + sizeMap[size]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={Icon} alt="Link" className={`h-full object-scale-down`} />
        </div>,
      );
    } else {
      setOutput(
        <Icon
          className={"fill-current text-base-100 hover:brightness-50 hover:dark:brightness-200 " + sizeMap[size]}
        />,
      );
    }
  }, [Icon]);

  return output;
};
