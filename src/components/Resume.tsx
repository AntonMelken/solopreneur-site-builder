import { Download } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const experience: { period: string; title: string; company: string; description: string }[] = [
  // Wird manuell hinzugefügt
];

const education: { period: string; title: string; institution: string; description: string }[] = [
  // Wird manuell hinzugefügt
];

function TimelineItem({ period, title, subtitle, description }: { period: string; title: string; subtitle: string; description: string }) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-background" />
      <div className="absolute left-[5px] top-5 bottom-0 w-px bg-border" />
      <p className="font-mono text-xs text-muted-foreground mb-1">{period}</p>
      <h4 className="font-bold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
    </div>
  );
}

export default function Resume() {
  const ref = useScrollFadeIn();

  return (
    <section id="lebenslauf" className="py-24 px-4 bg-secondary/50">
      <div ref={ref} className="fade-in-section max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">Lebenslauf</h2>

        {experience.length > 0 && (
          <>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">Berufserfahrung</h3>
            {experience.map((e, i) => (
              <TimelineItem key={i} period={e.period} title={e.title} subtitle={e.company} description={e.description} />
            ))}
          </>
        )}

        {education.length > 0 && (
          <>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 mt-12">Ausbildung</h3>
            {education.map((e, i) => (
              <TimelineItem key={i} period={e.period} title={e.title} subtitle={e.institution} description={e.description} />
            ))}
          </>
        )}

        {experience.length === 0 && education.length === 0 && (
          <p className="text-center text-muted-foreground font-mono text-sm">Wird in Kürze hinzugefügt.</p>
        )}

        <div className="text-center mt-12">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Download size={16} />
            CV herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}
