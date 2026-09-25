import type { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";

import { ProjectCard } from "@/components/ProjectCard";
import { Screen } from "@/components/Screen";
import { getCategory } from "@/content/categories";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import type { SiteStackParamList } from "@/navigation/types";

export function CategoryScreen({ route }: { route: RouteProp<SiteStackParamList, "category"> }) {
  const { colors } = useAppTheme();
  const category = getCategory(route.params.category);
  useDocumentTitle(category?.title ?? "Projects");

  if (!category) {
    return (
      <Screen>
        <Text style={{ color: colors.text, fontSize: 24, fontWeight: "800" }}>Category not found</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <Text style={{ color: colors.text, fontSize: 32, fontWeight: "800", textAlign: "center" }}>{category.title}</Text>
      <View style={{ width: "100%", gap: 16 }}>
        {category.projects.map(project => (
          <ProjectCard
            key={project.slug}
            name={project.name}
            description={project.description ?? project.shortDescription}
            imgSrc={project.imgSrc}
            link={project.link}
            compact={route.params.category === "companies"}
          />
        ))}
      </View>
    </Screen>
  );
}
