"use client";

import Link from "next/link";

type Props = {
  address?: string;
  efpFollowers?: number;
  efpFollowing?: number;
};

export const EFPCard = ({ address, efpFollowers, efpFollowing }: Props) => {
  return efpFollowers && efpFollowing ? (
    <Link href={`https://ethfollow.xyz/${address}`} target="#" className="">
      <div className="hover:scale-95 transition-transform duration-300 bg-gradient-to-t from-[#FFBCE4] to-[#FFFA80] rounded-lg text-[#1E2025] p-2 font-bold text-center">
        <p className="m-0 text-sm">Ethereum Follow Protocol</p>
        <div className="flex items-center justify-center space-x-4">
          <div>
            <div className="text-xs">Followers </div>
            <div className="text-xs">{efpFollowers} </div>
          </div>
          <div>
            <div className="text-xs">Following </div>
            <div className="text-xs">{efpFollowing} </div>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <></>
  );
};
