import { ReactNode } from "react";
import Image from "next/image";
import { AssetStoreWidget } from "~~/components/AssetStoreWidget";
import { GameEmbed } from "~~/components/GameEmbed";
import { BackToList } from "~~/components/portfolio/BackToList";
import { DetailProject } from "~~/configs/detail-page";
import { Link } from "~~/configs/types";

function assetStorePackageId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "assetstore.unity.com") return undefined;
    const match = parsed.pathname.match(/\/packages\/(?:[^/]+\/){2}[^/]+-(\d+)$/);
    return match?.[1];
  } catch {
    return undefined;
  }
}

function linkLabel(url: string, label?: string) {
  if (label) return label;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LinkButton({ item, iconOnly = false }: { item: Link; iconOnly?: boolean }) {
  const label = linkLabel(item.url, item.label);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      aria-label={iconOnly ? label : undefined}
      className={
        iconOnly ? "btn btn-secondary btn-circle h-6 w-6 min-h-0 p-0 md:h-9 md:w-9" : "btn btn-sm btn-secondary gap-2"
      }
    >
      <Image
        src={item.imagePath}
        alt=""
        width={20}
        height={20}
        className={iconOnly ? "h-3.5 w-3.5 md:h-5 md:w-5" : "h-5 w-5"}
      />
      {iconOnly ? null : label}
    </a>
  );
}

export function ProjectDetail({
  project,
  children,
  imageClassName = "h-auto max-h-[32rem] w-auto max-w-full rounded-lg",
  imageFirst = false,
  copyClassName = "text-lg",
}: {
  project: DetailProject;
  children?: ReactNode;
  imageClassName?: string;
  imageFirst?: boolean;
  copyClassName?: string;
}) {
  const assetStoreLink = project.links?.find(item => assetStorePackageId(item.url));
  const assetStoreId = assetStoreLink ? assetStorePackageId(assetStoreLink.url) : undefined;
  const links = assetStoreId ? project.links?.filter(item => !assetStorePackageId(item.url)) : project.links;

  const media = project.embed ? (
    <GameEmbed src={project.embed.url} title={project.name} width={project.embed.width} height={project.embed.height} />
  ) : (
    project.imgSrc && <Image src={project.imgSrc} alt={project.name} className={imageClassName} />
  );

  const description = project.description && (
    <p className={`max-w-2xl text-center ${copyClassName}`}>{project.description}</p>
  );
  const linkButtons = links?.map(item => <LinkButton key={item.url} item={item} />);
  const iconLinkButtons = links?.map(item => <LinkButton key={item.url} item={item} iconOnly />);

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4 md:p-8 gap-6">
      <BackToList />
      {imageFirst && !assetStoreId ? (
        <div className="flex flex-col items-center gap-3 text-center">
          {media}
          <div className="flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-2">
            <h1 className="mb-0 font-bold text-2xl leading-none md:text-4xl">{project.name}</h1>
            {iconLinkButtons}
          </div>
          {description}
        </div>
      ) : (
        <>
          {assetStoreId ? (
            <h1 className="sr-only">{project.name}</h1>
          ) : (
            <h1 className="font-bold text-2xl md:text-4xl text-center">{project.name}</h1>
          )}
          {!assetStoreId && media}
          {assetStoreId && assetStoreLink && (
            <AssetStoreWidget packageId={assetStoreId} title={project.name} href={assetStoreLink.url} />
          )}
          {description}
          {project.recommendedPlatform && (
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Recommended platform</p>
              <p className="text-lg">{project.recommendedPlatform.name}</p>
              {project.recommendedPlatform.note && (
                <p className="max-w-2xl text-base opacity-80">{project.recommendedPlatform.note}</p>
              )}
            </div>
          )}
          {!!links?.length && <div className="flex max-w-3xl flex-wrap justify-center gap-3">{linkButtons}</div>}
        </>
      )}
      {children}
    </div>
  );
}
