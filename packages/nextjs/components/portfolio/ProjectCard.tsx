"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pushProjectOrigin } from "~~/utils/projectNavStack";

export function ProjectCard({
  name,
  description,
  imgSrc,
  link,
  kicker,
  imageClassName = "flex-none w-16 h-16 md:w-40 md:h-40",
}: {
  name: string;
  description?: string;
  imgSrc?: string | StaticImageData;
  link?: string;
  kicker?: string;
  imageClassName?: string;
}) {
  const pathname = usePathname();
  const className = "bg-primary rounded-lg flex items-start p-4 gap-4 group";
  const content = (
    <>
      <div className={imageClassName}>
        <Image
          className="rounded-lg w-full h-full object-fit"
          width={160}
          height={160}
          src={imgSrc || "/images/organization.png"}
          alt="Project Image"
        />
      </div>

      <div className="flex min-w-0 flex-col items-start gap-4">
        <div className="min-w-0">
          {kicker && <p className="text-xs uppercase tracking-wide opacity-70">{kicker}</p>}
          <p
            className={`font-bold text-xl md:text-2xl ${
              link ? "text-blue-700 dark:text-blue-400 group-hover:underline" : ""
            }`}
          >
            {name}
          </p>
          {description && <p className="line-clamp-2 break-words">{description}</p>}
        </div>
      </div>
    </>
  );

  if (!link) {
    return <div className={className}>{content}</div>;
  }

  if (link.startsWith("/")) {
    return (
      <Link href={link} className={className} onClick={() => pushProjectOrigin(pathname)}>
        {content}
      </Link>
    );
  }

  return (
    <a href={link} target="#" className={className}>
      {content}
    </a>
  );
}
