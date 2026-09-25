import { notFound } from "next/navigation";
import { ProjectDetail } from "~~/components/portfolio/ProjectDetail";
import { data } from "~~/configs/dao-tooling.config";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return data.map(project => ({ slug: project.slug }));
}

const DaoToolPage = ({ params }: PageProps) => {
  const project = data.find(item => item.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
};

export default DaoToolPage;
