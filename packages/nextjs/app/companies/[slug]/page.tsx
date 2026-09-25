import { notFound } from "next/navigation";
import { ProjectCard } from "~~/components/portfolio/ProjectCard";
import { ProjectDetail } from "~~/components/portfolio/ProjectDetail";
import { data } from "~~/configs/companies.config";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return data.map(company => ({ slug: company.slug }));
}

const CompanyPage = ({ params }: PageProps) => {
  const company = data.find(item => item.slug === params.slug);
  if (!company) notFound();

  const sections = company.projects.reduce<Array<{ title: string; projects: typeof company.projects }>>(
    (groups, project) => {
      const group = groups.find(item => item.title === project.categoryTitle);
      if (group) group.projects.push(project);
      else groups.push({ title: project.categoryTitle, projects: [project] });
      return groups;
    },
    [],
  );

  return (
    <ProjectDetail
      project={company}
      imageFirst
      copyClassName="text-sm md:text-base"
      imageClassName="h-24 w-24 rounded-lg object-contain md:h-36 md:w-36"
    >
      <div className="flex w-full max-w-3xl flex-col gap-6">
        {sections.map(section => (
          <div key={section.title} className="flex flex-col gap-4">
            <p className="text-center text-xl font-bold">{section.title}</p>
            {section.projects.map(project => (
              <ProjectCard
                key={`${project.category}-${project.slug}`}
                name={project.name}
                description={project.description}
                imgSrc={project.imgSrc}
                link={project.link}
                imageClassName="flex-none h-12 w-12 md:h-20 md:w-20"
              />
            ))}
          </div>
        ))}
      </div>
    </ProjectDetail>
  );
};

export default CompanyPage;
