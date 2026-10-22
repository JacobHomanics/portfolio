import { Link, ProjectData } from "./types";

export type DetailProject = ProjectData & { slug: string };

export function withDetailPage(basePath: string, projects: DetailProject[]): DetailProject[] {
  return projects.map(project => {
    const links: Link[] = [...(project.links ?? [])];
    if (project.link && !project.link.startsWith("/") && !links.some(item => item.url === project.link)) {
      links.unshift({ url: project.link, imagePath: "link.svg" });
    }

    return {
      ...project,
      link: `${basePath}/${project.slug}`,
      links,
    };
  });
}
