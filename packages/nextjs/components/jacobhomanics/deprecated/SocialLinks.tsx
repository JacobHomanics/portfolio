// "use client";

// // import Link from "next/link";
// import { IconLink } from "./IconLink";

// type Props = {
//   items?: any[];
//   size?: "sm" | "base" | "lg";
// };

// // const sizeMap = {
// //   sm: 7,
// //   base: "w-[75px] lg:w-[275px]",
// //   lg: "",
// // };

// export const SocialLinks = ({
//   items,
// }: //   size = "base",
// Props) => {
//   const itemsElements = items?.map((item, index) => {
//     return (
//       <div
//         key={"socialLinks-" + index}
//         className={
//           item.type === "component" ? "m-1 hover:brightness-200 dark:hover:brightness-75" : "m-1 hover:brightness-75"
//         }
//       >
//         <IconLink url={item.url}>
//           {item.type === "img" ? (
//             /* eslint-disable-next-line @next/next/no-img-element */
//             <img src={item.img.src} alt="Link" className="w-min h-7 lg:h-10" />
//           ) : (
//             <div className="">
//               <item.img className="w-7 h-7 lg:w-8 lg:h-8" />
//             </div>
//           )}
//         </IconLink>
//       </div>
//     );
//   });

//   return <div className="flex flex-wrap items-center justify-start">{itemsElements}</div>;
// };
