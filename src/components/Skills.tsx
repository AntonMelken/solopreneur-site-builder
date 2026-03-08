import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const groups = [
  {
    title: "iOS Development",
    color: "blue",
    colorStyle: { color: "hsl(211 100% 66%)", background: "hsla(211,100%,44%,0.08)", borderColor: "hsla(211,100%,44%,0.2)" },
    dotColor: "hsl(211,100%,50%)",
    skills: [
      { name: "Swift", badge: "badge-blue" },
      { name: "SwiftUI", badge: "badge-blue" },
      { name: "MapKit", badge: "badge-blue" },
      { name: "CoreLocation", badge: "badge-blue" },
      { name: "StoreKit", badge: "badge-blue" },
      { name: "iOS 17+", badge: "badge-blue" },
    ],
  },
  {
    title: "Frontend & Web",
    color: "green",
    colorStyle: { color: "hsl(142 71% 60%)", background: "hsla(142,71%,40%,0.08)", borderColor: "hsla(142,71%,40%,0.2)" },
    dotColor: "hsl(142,71%,46%)",
    skills: [
      { name: "React", badge: "badge-green" },
      { name: "TypeScript", badge: "badge-green" },
      { name: "Tailwind CSS", badge: "badge-green" },
      { name: "shadcn/ui", badge: "badge-green" },
      { name: "HTML", badge: "badge-green" },
      { name: "CSS", badge: "badge-green" },
    ],
  },
  {
    title: "Backend & APIs",
    color: "orange",
    colorStyle: { color: "hsl(28 100% 68%)", background: "hsla(28,100%,55%,0.08)", borderColor: "hsla(28,100%,55%,0.2)" },
    dotColor: "hsl(28,100%,55%)",
    skills: [
      { name: "Supabase", badge: "badge-orange" },
      { name: "REST APIs", badge: "badge-orange" },
      { name: "Claude API", badge: "badge-gold" },
      { name: "OpenChargeMap API", badge: "badge-orange" },
      { name: "Stripe", badge: "badge-orange" },
    ],
  },
  {
    title: "Produkt & Deploy",
    color: "purple",
    colorStyle: { color: "hsl(263 69% 76%)", background: "hsla(263,69%,60%,0.08)", borderColor: "hsla(263,69%,60%,0.2)" },
    dotColor: "hsl(263,69%,62%)",
    skills: [
      { name: "App Store", badge: "badge-purple" },
      { name: "GitHub", badge: "badge-purple" },
      { name: "Vercel", badge: "badge-purple" },
      { name: "DSGVO-konform", badge: "badge-purple" },
      { name: "Freemium-Modelle", badge: "badge-purple" },
      { name: "Subscription", badge: "badge-purple" },
    ],
  },
];

export default function Skills() {
  const ref = useScrollFadeIn();

  return (
    <section id="skills" className="py-20 sm:py-28 px-6">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Kompetenzen</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center tracking-tight">
          Skills & Technologien
        </h2>
        <p className="text-muted-foreground text-center text-sm font-light mb-16 max-w-lg mx-auto leading-relaxed">
          Ein durchdachter, moderner Stack — bewährt in realen Projekten und stets auf dem neuesten Stand.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="p-6 rounded-2xl border border-border bg-surface-1 surface-glow hover:surface-glow-hover transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: g.dotColor }} />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: g.colorStyle.color }}>
                  {g.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s.name}
                    className={`font-mono text-[11px] px-3 py-1.5 rounded-full border ${s.badge} transition-all duration-200 hover:scale-105`}
                  >
                    {s.name}
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
