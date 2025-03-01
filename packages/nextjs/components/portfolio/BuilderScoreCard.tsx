"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  talentScore?: number;
};

export const BuilderScoreCard = ({ talentScore }: Props) => {
  return talentScore ? (
    <Link href="https://passport.talentprotocol.com/profile/535818" target="#">
      <div className="hover:scale-95 transition-transform duration-300 flex border-t-4 border-t-[#826AEE] border-l-4 border-l-[#826AEE] border-r-4 border-r-[#826AEE] rounded-xl p-3 items-center justify-center">
        <Image src={`/talent-protocol-logo/logo-purple.svg`} alt="TP" width={26} height={26} />
        <div className="flex flex-col text-center">
          <p className="m-0 text-sm">Builder Score</p>
          <span className="m-0 text-[#826AEE] font-bold text-xs">{talentScore}</span>
        </div>
      </div>
    </Link>
  ) : (
    <></>
  );
};
