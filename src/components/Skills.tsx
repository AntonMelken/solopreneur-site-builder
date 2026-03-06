import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const groups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "shadcn/ui", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Supabase", "REST APIs", "Claude API", "Stripe", "Lemon Squeezy"],
    highlight: ["Claude API"],
  },
  {
    title: "Build & Deploy",
    skills: ["Vercel", "Git", "GitHub", "Lovable", "Gumroad"],
  },
  {
    title: "Produkt & Strategie",
    skills: ["Micro-SaaS", "MVP-Entwicklung", "DACH-Markt", "Produktvalidierung", "Preisfindung"],
  },
];

export default function Skills() {
  const ref = useScrollFadeIn();

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/50">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={`font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                      g.highlight?.includes(s)
                        ? "border-gold/50 text-gold"
                        : "border-border text-muted-foreground"
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
