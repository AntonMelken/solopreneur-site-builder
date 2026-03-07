import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const groups = [
  {
    title: "iOS Development",
    skills: ["Swift", "SwiftUI", "MapKit", "CoreLocation", "StoreKit", "iOS 17+"],
  },
  {
    title: "Frontend & Web",
    skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Supabase", "REST APIs", "Claude API", "OpenChargeMap API", "Stripe"],
    highlight: ["Claude API"],
  },
  {
    title: "Produkt & Deploy",
    skills: ["App Store", "GitHub", "Vercel", "DSGVO-Compliance", "Freemium-Modelle", "Subscription"],
  },
];

export default function Skills() {
  const ref = useScrollFadeIn();

  return (
    <section id="skills" className="py-32 px-6">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Kompetenzen</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center tracking-tight">
          Skills & Technologien
        </h2>
        <div className="grid sm:grid-cols-2 gap-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-4">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={`font-mono text-[11px] px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                      g.highlight?.includes(s)
                        ? "border border-gold/30 text-gold bg-gold/5"
                        : "border border-border text-secondary-foreground bg-surface-2 hover:border-muted-foreground/30"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
