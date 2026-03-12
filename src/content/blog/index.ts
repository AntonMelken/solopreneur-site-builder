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
import autoPerformanceTracker from "./auto-performance-tracker-launch";

export const blogArticles: BlogArticle[] = [
  autoPerformanceTracker,
  claudeApiVsGpt,
];
export type { BlogArticle } from "./types";
