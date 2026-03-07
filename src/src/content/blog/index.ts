// ================================================
// BLOG REGISTRY — Neue Artikel hier importieren
// ================================================

import type { BlogArticle } from "./types";
import claudeApiVsGpt from "./claude-api-vs-gpt-dach";

// Füge neue Artikel einfach hier hinzu:
export const blogArticles: BlogArticle[] = [
  claudeApiVsGpt,
  // import myArticle from "./mein-neuer-artikel";
  // myArticle,
];

export type { BlogArticle } from "./types";
