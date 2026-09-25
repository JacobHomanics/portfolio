import type { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetail } from "@/components/ProjectDetail";
import { Screen } from "@/components/Screen";
import { WebFrame } from "@/components/WebFrame";
import { getCategory } from "@/content/categories";
import { data as companies } from "@/content/companies.config";
import { getTalk, youtubeEmbedUrl } from "@/content/talks.config";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import type { SiteStackParamList } from "@/navigation/types";

export function ProjectScreen({ route }: { route: RouteProp<SiteStackParamList, "project"> }) {
  const { category: categorySlug, slug } = route.params;
  const { colors } = useAppTheme();
  const category = getCategory(categorySlug);
  const talk = categorySlug === "presentations" ? getTalk(slug) : undefined;
  const company = categorySlug === "companies" ? companies.find(item => item.slug === slug) : undefined;
  const project = category?.projects.find(item => item.slug === slug);
  const title = talk?.name ?? company?.name ?? project?.name ?? "Project";
  const navigation = useNavigation();
  useDocumentTitle(title);
  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  if (categorySlug === "presentations") {
    if (!talk) return <Missing />;
    const embedUrl = youtubeEmbedUrl(talk.youtubeUrl);
    return (
      <Screen>
        <Text style={{ color: colors.text, fontSize: 32, fontWeight: "800", textAlign: "center" }}>{talk.name}</Text>
        {embedUrl ? <WebFrame url={talk.youtubeUrl} embedUrl={embedUrl} title={talk.name} aspectRatio={16 / 9} /> : null}
        <Text style={{ color: colors.text, fontSize: 18, textAlign: "center" }}>{talk.description}</Text>
      </Screen>
    );
  }

  if (categorySlug === "companies") {
    if (!company) return <Missing />;
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
      <Screen>
        <ProjectDetail project={company} imageFirst compactImage>
          <View style={{ width: "100%", gap: 24 }}>
            {sections.map(section => (
              <View key={section.title} style={{ gap: 12 }}>
                <Text style={{ color: colors.text, fontSize: 20, fontWeight: "800", textAlign: "center" }}>
                  {section.title}
                </Text>
                {section.projects.map(project => (
                  <ProjectCard
                    key={`${project.category}-${project.slug}`}
                    name={project.name}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    link={project.link}
                    compact
                  />
                ))}
              </View>
            ))}
          </View>
        </ProjectDetail>
      </Screen>
    );
  }

  if (!project) return <Missing />;

  return (
    <Screen>
      <ProjectDetail project={project} />
    </Screen>
  );
}

function Missing() {
  const { colors } = useAppTheme();
  return (
    <Screen>
      <Text style={{ color: colors.text, fontSize: 24, fontWeight: "800" }}>Project not found</Text>
    </Screen>
  );
}
