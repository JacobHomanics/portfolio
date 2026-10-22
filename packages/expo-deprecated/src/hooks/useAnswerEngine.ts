import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { Platform } from "react-native";

import { answerEngine, answerEngineJsonLd, type AnswerEnginePage } from "@/content/aeo";

const MARK = "data-aeo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"][${MARK}]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    element.setAttribute(MARK, "");
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
  return element;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector(`link[rel="canonical"][${MARK}]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    element.setAttribute(MARK, "");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
  return element;
}

function upsertJsonLd(data: unknown) {
  let element = document.getElementById("aeo-jsonld");
  if (!element) {
    element = document.createElement("script");
    element.id = "aeo-jsonld";
    element.setAttribute("type", "application/ld+json");
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
  return element;
}

export function useAnswerEngine(page: AnswerEnginePage) {
  const enabled = useIsFocused();
  useEffect(() => {
    if (!enabled || Platform.OS !== "web" || typeof document === "undefined") return;

    const content = answerEngine[page];
    document.title = content.title;
    const nodes = [
      upsertMeta("name", "description", content.description),
      upsertMeta("name", "author", "Jacob Homanics"),
      upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1"),
      upsertMeta("property", "og:site_name", "Jacob Homanics"),
      upsertMeta("property", "og:locale", "en_US"),
      upsertMeta("property", "og:title", content.title),
      upsertMeta("property", "og:description", content.description),
      upsertMeta("property", "og:url", content.url),
      upsertMeta("property", "og:type", content.openGraphType),
      upsertMeta("name", "twitter:card", "summary"),
      upsertMeta("name", "twitter:title", content.title),
      upsertMeta("name", "twitter:description", content.description),
      upsertCanonical(content.url),
      upsertJsonLd(answerEngineJsonLd(page)),
    ];

    return () => {
      for (const node of nodes) node.remove();
    };
  }, [page, enabled]);
}
