"use client";

import { useEffect, useState } from "react";

type Props = {
  Icon: string | any;
};

export const UniversalIcon = ({ Icon }: Props) => {
  const [output, setOutput] = useState<any>(<></>);

  console.log(Icon);
  console.log(typeof Icon);

  useEffect(() => {
    if (typeof Icon === "string") {
      setOutput(
        <div className={"h-[128px]"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={Icon} alt="Link" className={`h-full object-scale-down`} />
        </div>,
      );
    } else {
      setOutput(<Icon className={`w-[128px] h-[128px]`} />);
    }
  }, [Icon]);

  return output;
};
