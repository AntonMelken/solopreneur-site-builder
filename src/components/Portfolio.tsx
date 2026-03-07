import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { ExternalLink, Github } from "lucide-react";

const projects: {
  name: string;
  niche: string;
  description: string;
  tech: string[];
  badge: string;
  accentColor: string;
  borderColor: string;
  github?: string;
  live?: string;
}[] = [
  {
    name: "Auto Performance Tracker",
    niche: "iOS App · Navigation & Produktivität",
    description:
      "GPS-basierter Fahrassistent mit farbkodiertem Echtzeit-Tracking und einem mehrdimensionalen Driving Score. Inkl. Kraftstoffanalyse, Smart-Fahrtipps sowie einem durchdachten Freemium-Monetarisierungsmodell. Vollständig DSGVO-konform auf EU-Servern.",
    tech: ["Swift", "SwiftUI", "MapKit", "Supabase", "StoreKit", "Claude API"],
    badge: "badge-blue",
    accentColor: "hsla(211,100%,44%,0.08)",
    borderColor: "hsla(211,100%,44%,0.15)",
    live: "https://antonmelken.github.io/auto-performance-tracker/",
  },
];

const techBadgeMap: Record<string, string> = {
  "Swift": "badge-blue",
  "SwiftUI": "badge-blue",
  "MapKit": "badge-blue",
  "CoreLocation": "badge-blue",
  "Supabase": "badge-orange",
  "StoreKit": "badge-blue",
  "Claude API": "badge-gold",
  "React": "badge-green",
  "TypeScript": "badge-green",
  "Tailwind CSS": "badge-green",
  "Stripe": "badge-orange",
  "Vercel": "badge-purple",
};

export default function Portfolio() {
  const ref = useScrollFadeIn();

  return (
    <section id="portfolio" className="py-32 px-6" style={{ background: "linear-gradient(180deg, transparent, hsla(211,100%,44%,0.025) 50%, transparent)" }}>
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Arbeiten</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center tracking-tight">
          Ausgewählte Projekte
        </h2>
        <p className="text-muted-foreground text-center text-sm font-light mb-16 max-w-lg mx-auto leading-relaxed">
          Produkte, die ich von Grund auf konzipiert, entwickelt und erfolgreich veröffentlicht habe.
        </p>

        {projects.length === 0 ? (
          <div className="text-center py-20 border border-border rounded-2xl bg-surface-1">
            <p className="text-muted-foreground font-mono text-xs">Projekte werden in Kürze hinzugefügt.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group relative border rounded-2xl overflow-hidden transition-all duration-500 surface-glow hover:surface-glow-hover"
                style={{ borderColor: p.borderColor, background: "hsl(var(--surface-1))" }}
              >
                {/* Color header bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${p.accentColor.replace('0.08', '0.6')}, ${p.accentColor.replace('0.08', '0.2')})` }}
                />

                <div className="p-6">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{p.niche}</p>
                  <h3 className="font-semibold text-foreground mb-3 text-[17px] leading-snug tracking-tight">{p.name}</h3>
                  <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed font-light">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${techBadgeMap[t] || "border-border text-muted-foreground"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border/50">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                        style={{ color: "hsl(211 100% 66%)" }}
                      >
                        <ExternalLink size={13} />
                        Projekt ansehen
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Coming soon card */}
            <div className="border border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[280px] hover:border-muted-foreground/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-lg">+</span>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-1">In Entwicklung</p>
              <p className="text-xs text-muted-foreground font-light">Weiteres Projekt folgt in Kürze</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
