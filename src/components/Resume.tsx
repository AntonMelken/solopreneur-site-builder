import { Download, Briefcase, GraduationCap } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const experience: { period: string; title: string; company: string; description: string }[] = [
  {
    period: "2023 – heute",
    title: "Independent iOS & Web Developer",
    company: "Selbstständig · Remote",
    description: "Konzeption, Design und Entwicklung von iOS-Apps und Web-Applikationen für den DACH-Markt. Verantwortlich für den gesamten Produktlebenszyklus — von der Idee bis zur Veröffentlichung im App Store.",
  },
];

const education: { period: string; title: string; institution: string; description: string }[] = [
  {
    period: "Autodidakt · Laufend",
    title: "iOS & Swift Development",
    institution: "Apple Developer Academy · Swift Playgrounds · Diverse Kurse",
    description: "Kontinuierliche Weiterbildung in Swift, SwiftUI, iOS-Frameworks und modernen Entwicklungs-Best-Practices. Ergänzt durch praktische Projekte und Community-Engagement.",
  },
  {
    period: "2022 – 2023",
    title: "Web Development & React",
    institution: "Selbststudium · Online-Kurse",
    description: "Intensives Studium von React, TypeScript, Tailwind CSS und modernem Web-Engineering. Fokus auf produktionsreife Anwendungen und DSGVO-konforme Architekturen.",
  },
];

function TimelineItem({
  period,
  title,
  subtitle,
  description,
  color,
}: {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      <div
        className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300"
        style={{ background: color, borderColor: "hsl(var(--background))", boxShadow: `0 0 0 2px ${color}44` }}
      />
      <div className="absolute left-[4.5px] top-5 bottom-0 w-px" style={{ background: "hsla(0,0%,100%,0.06)" }} />
      <p className="font-mono text-[11px] text-muted-foreground mb-1.5">{period}</p>
      <h4 className="font-semibold text-foreground text-[15px] mb-0.5">{title}</h4>
      <p className="text-sm font-light" style={{ color }}>{subtitle}</p>
      {description && (
        <p className="text-sm text-muted-foreground mt-2.5 font-light leading-relaxed max-w-xl">{description}</p>
      )}
    </div>
  );
}

export default function Resume() {
  const ref = useScrollFadeIn();

  return (
    <section id="lebenslauf" className="py-32 px-6">
      <div ref={ref} className="fade-in-section max-w-3xl mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Werdegang</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center tracking-tight">
          Lebenslauf
        </h2>
        <p className="text-muted-foreground text-center text-sm font-light mb-16 max-w-lg mx-auto leading-relaxed">
          Ein klarer Werdegang mit konsequentem Fokus auf die Entwicklung hochwertiger digitaler Produkte.
        </p>

        {experience.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "hsla(211,100%,44%,0.12)" }}>
                <Briefcase size={14} style={{ color: "hsl(211,100%,66%)" }} />
              </div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "hsl(211,100%,66%)" }}>Berufserfahrung</h3>
            </div>
            {experience.map((e, i) => (
              <TimelineItem key={i} period={e.period} title={e.title} subtitle={e.company} description={e.description} color="hsl(211,100%,58%)" />
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "hsla(43,72%,58%,0.12)" }}>
                <GraduationCap size={14} style={{ color: "hsl(43,72%,70%)" }} />
              </div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "hsl(43,72%,70%)" }}>Ausbildung</h3>
            </div>
            {education.map((e, i) => (
              <TimelineItem key={i} period={e.period} title={e.title} subtitle={e.institution} description={e.description} color="hsl(43,72%,62%)" />
            ))}
          </div>
        )}

        <div className="text-center mt-16 pt-8 border-t border-border/40">
          <a
            href="/cv.pdf"
            download
            className="btn-secondary inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium"
          >
            <Download size={15} />
            Vollständigen Lebenslauf herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}
