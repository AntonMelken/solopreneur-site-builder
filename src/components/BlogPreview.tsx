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
    <section id="blog" className="py-32 px-6">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Insights</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center tracking-tight">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {blogArticles.map((a) => (
            <article
              key={a.slug}
              className="group border border-border rounded-2xl p-7 bg-surface-1 hover:border-muted-foreground/20 surface-glow hover:surface-glow-hover transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[11px] text-muted-foreground">{a.date}</span>
                <span className="font-mono text-[11px] text-muted-foreground">· {a.readingTime} Lesezeit</span>
              </div>
              <h3 className="font-semibold text-foreground mb-3 leading-snug text-lg group-hover:text-gradient-gold transition-all duration-300">{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 font-light leading-relaxed">{a.excerpt}</p>
              <Link
                to={`/blog/${a.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors duration-300"
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
