import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "claude-api-vs-gpt-dach",
    title: "Warum ich Claude API statt GPT nutze: Ein Developer-Vergleich für DACH-Produkte",
    excerpt: "Kosten, Geschwindigkeit, Qualität — mein ehrlicher Vergleich nach 12 Micro-SaaS-Projekten.",
    date: "2025-06-15",
    readingTime: "8 Min",
    content: `# Warum ich Claude API statt GPT nutze

Kosten, Geschwindigkeit, Qualität — mein ehrlicher Vergleich nach 12 Micro-SaaS-Projekten.

## Der Kontext

Als Indie Developer, der Micro-SaaS-Produkte für den DACH-Markt baut, ist die Wahl der richtigen KI-API entscheidend. Nach einem Jahr intensiver Nutzung beider Plattformen teile ich hier meine Erfahrungen.

## Kosten

Claude API bietet ein transparentes Preismodell. Für die meisten meiner Anwendungsfälle — Textgenerierung, Analyse, Zusammenfassungen — sind die Kosten vergleichbar, aber die Qualität der deutschen Ausgabe ist bei Claude konsistent besser.

## Geschwindigkeit

Beide APIs liefern schnelle Antworten. In meinen Benchmarks mit deutschsprachigen Prompts zeigt Claude eine leicht bessere Latenz bei komplexen Aufgaben.

## Qualität der deutschen Ausgabe

Hier liegt der größte Unterschied: Claude versteht Nuancen der deutschen Sprache deutlich besser. Fachbegriffe, formelle Anrede, regionale Ausdrücke — alles wird natürlicher wiedergegeben.

## Fazit

Für DACH-fokussierte Produkte ist Claude API meine erste Wahl. Die Kombination aus Qualität, Zuverlässigkeit und fairem Pricing macht den Unterschied.`,
  },
];

export default function BlogPreview() {
  const ref = useScrollFadeIn();

  return (
    <section id="blog" className="py-24 px-4">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">Blog</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogArticles.map((a) => (
            <article
              key={a.slug}
              className="border border-border rounded-lg p-6 bg-card hover:border-gold/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-muted-foreground">{a.date}</span>
                <span className="font-mono text-xs text-muted-foreground">· {a.readingTime} Lesezeit</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 leading-snug">{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{a.excerpt}</p>
              <Link
                to={`/blog/${a.slug}`}
                className="text-sm text-gold hover:underline font-medium"
              >
                Weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
