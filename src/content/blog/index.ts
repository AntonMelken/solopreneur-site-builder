// ================================================
// BLOG REGISTRY — Neue Artikel hier importieren
// ================================================

import type { BlogArticle } from "./types";
import autoPerformanceTracker from "./auto-performance-tracker-launch";

// Füge neue Artikel einfach hier hinzu:
export const blogArticles: BlogArticle[] = [
  autoPerformanceTracker,
  // import myArticle from "./mein-neuer-artikel";
  // myArticle,
];

export type { BlogArticle } from "./types";
