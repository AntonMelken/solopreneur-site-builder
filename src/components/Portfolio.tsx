import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const projects: {
  name: string;
  niche: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}[] = [
  {
    name: "Auto Performance Tracker",
    niche: "iOS App · Mobilität",
    description:
      "GPS-basierter Fahrassistent mit farbkodiertem Echtzeit-Tracking, Driving Score in 7 Dimensionen, Kraftstoffanalyse und KI-Fahrtipps. Freemium-Modell mit Jahres- und Monatsabo. DSGVO-konform auf EU-Servern.",
    tech: ["Swift", "SwiftUI", "MapKit", "Supabase", "StoreKit", "Claude API"],
    live: "https://antonmelken.github.io/auto-performance-tracker/",
  },
];

export default function Portfolio() {
  const ref = useScrollFadeIn();

  return (
    <section id="portfolio" className="py-32 px-6">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Arbeiten</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center tracking-tight">
          Ausgewählte Projekte
        </h2>

        {projects.length === 0 ? (
          <div className="text-center py-20 border border-border rounded-2xl bg-surface-1">
            <p className="text-muted-foreground font-mono text-xs">
              Projekte werden in Kürze hinzugefügt.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group border border-border rounded-2xl p-6 bg-surface-1 hover:border-muted-foreground/20 surface-glow hover:surface-glow-hover transition-all duration-500"
              >
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{p.niche}</p>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed font-light">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-border rounded-full text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
                      GitHub →
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
                      Zur App →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
