"use client";

import Link from "next/link";

type Props = {
  name: string;
  description: string;
  img: any;
  url: string;
};

export const Project = ({ name, description, img, url }: Props) => {
  return (
    <div className="flex bg-primary p-4 rounded-lg border-2 border-indigo-500 items-start">
      <Link href={url} target="#" className="w-[100px] h-[100px] flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt="Hejh" className="w-full h-full object-cover rounded-lg" />
      </Link>
      <div className="flex flex-col pl-6 items-start">
        <Link href={url} target="#">
          <div className="text-2xl text-blue-600 dark:text-blue-500 hover:underline">{name}</div>
        </Link>
        <div className="break-all">{description}</div>
      </div>
    </div>
  );
};
