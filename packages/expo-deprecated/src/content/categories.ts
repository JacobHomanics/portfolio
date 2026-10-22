import { getCategory as getCatalogCategory } from "./catalog";
import { data as companiesData } from "./companies.config";

export function getCategory(slug: string) {
  if (slug === "companies") {
    return { title: "Companies", projects: companiesData };
  }

  return getCatalogCategory(slug);
}
