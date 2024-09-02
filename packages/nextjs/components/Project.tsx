"use client";

import Link from "next/link";

type Props = {
  name: string;
  description: string;
  img: any;
};

// const textExample =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus velit. Integer porta lectus ac nisi semper, a vehicula lectus iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae sollicitudin dui. Integer scelerisque a purus eget hendrerit. Nam sagittis elit quis fermentum tempus. Aliquam non venenatis ante, eget efficitur tortor. Maecenas lorem felis, ullamcorper ac volutpat et, fringilla ac est. Donec scelerisque purus magna, id volutpat mauris feugiat id. Phasellus dignissim sed ex sed porttitor. Ut fringilla accumsan lectus, vel aliquet quam laoreet vitae. Duis eros massa, dictum pellentesque nisl vitae, malesuada rhoncus neque." +
//   "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ultrices ex. Pellentesque accumsan varius odio non ullamcorper. Vivamus blandit ligula a aliquet imperdiet. Donec sapien purus, rutrum facilisis maximus nec, eleifend vel tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut hendrerit semper mauris. Integer sed dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

// const shortTextExample = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export const Project = ({ name, description, img }: Props) => {
  return (
    <div className="flex bg-primary p-4 rounded-lg border-2 border-indigo-500 items-start">
      <Link href={"#"} className="w-[100px] h-[100px] flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt="Hejh" className="w-full h-full object-cover rounded-lg" />
      </Link>
      <div className="flex flex-col pl-6 items-start">
        {/* <Link href={"#"} className="container"> */}
        <a href="#" className="">
          <div className="text-2xl text-blue-600 dark:text-blue-500 hover:underline">{name}</div>
        </a>
        {/* </Link> */}
        <div className="break-all">{description}</div>
      </div>
    </div>
  );
};
