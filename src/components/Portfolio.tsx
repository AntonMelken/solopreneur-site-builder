import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const projects: {
  name: string;
  niche: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}[] = [
  // Placeholder — Wird manuell hinzugefügt
];

export default function Portfolio() {
  const ref = useScrollFadeIn();

  return (
    <section id="portfolio" className="py-24 px-4">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">Portfolio</h2>

        {projects.length === 0 ? (
          <p className="text-center text-muted-foreground font-mono text-sm">
            Projekte werden in Kürze hinzugefügt.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group border border-border rounded-lg p-6 bg-card hover:border-gold/40 hover:shadow-lg transition-all"
              >
                <p className="font-mono text-xs text-muted-foreground mb-1">{p.niche}</p>
                <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 border border-border rounded-sm text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground underline">
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground underline">
                      Live Demo
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
