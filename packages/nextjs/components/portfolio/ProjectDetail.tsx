import Image from "next/image";
import { DetailProject } from "~~/configs/detail-page";

function linkLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function ProjectDetail({ project }: { project: DetailProject }) {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4 md:p-8 gap-6">
      <h1 className="font-bold text-2xl md:text-4xl text-center">{project.name}</h1>
      {project.imgSrc && (
        <Image src={project.imgSrc} alt={project.name} className="h-auto max-h-[32rem] w-auto max-w-full rounded-lg" />
      )}
      {project.description && <p className="text-lg max-w-2xl text-center">{project.description}</p>}
      {!!project.links?.length && (
        <div className="flex max-w-3xl flex-wrap justify-center gap-3">
          {project.links.map(item => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-secondary gap-2"
            >
              <Image src={item.imagePath} alt="" width={20} height={20} className="h-5 w-5" />
              {linkLabel(item.url)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
