import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { blogArticles } from "@/content/blog";
import { Clock, ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const ref = useScrollFadeIn();

  return (
    <section id="blog" className="py-20 sm:py-28 px-6" style={{ background: "linear-gradient(180deg, transparent, hsla(211,100%,44%,0.025) 50%, transparent)" }}>
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Insights</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center tracking-tight">
          Blog & Perspektiven
        </h2>
        <p className="text-muted-foreground text-center text-sm font-light mb-16 max-w-lg mx-auto leading-relaxed">
          Praktische Einblicke aus der täglichen Arbeit als Indie-Entwickler im DACH-Markt.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {blogArticles.map((a) => (
            <article
              key={a.slug}
              className="group border border-border rounded-2xl p-7 bg-surface-1 hover:border-border/80 surface-glow hover:surface-glow-hover transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-muted-foreground bg-surface-2 px-2.5 py-1 rounded-full">{a.date}</span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  <Clock size={10} />
                  {a.readingTime} Lesezeit
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-3 leading-snug text-[17px] tracking-tight group-hover:text-gradient-blue transition-all duration-300">
                {a.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed">{a.excerpt}</p>
              <Link
                to={`/blog/${a.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                style={{ color: "hsl(211 100% 62%)" }}
              >
                Weiterlesen
                <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
