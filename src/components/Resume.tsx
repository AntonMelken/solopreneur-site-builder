import { Download } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const experience: { period: string; title: string; company: string; description: string }[] = [];
const education: { period: string; title: string; institution: string; description: string }[] = [];

function TimelineItem({ period, title, subtitle, description }: { period: string; title: string; subtitle: string; description: string }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gold/80 border-2 border-background group-hover:bg-gold transition-colors duration-300" />
      <div className="absolute left-[4.5px] top-5 bottom-0 w-px bg-border" />
      <p className="font-mono text-[11px] text-muted-foreground mb-1">{period}</p>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground font-light">{subtitle}</p>
      {description && <p className="text-sm text-muted-foreground mt-2 font-light leading-relaxed">{description}</p>}
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
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center tracking-tight">
          Lebenslauf
        </h2>

        {experience.length > 0 && (
          <div className="mb-16">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">Berufserfahrung</h3>
            {experience.map((e, i) => (
              <TimelineItem key={i} period={e.period} title={e.title} subtitle={e.company} description={e.description} />
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">Ausbildung</h3>
            {education.map((e, i) => (
              <TimelineItem key={i} period={e.period} title={e.title} subtitle={e.institution} description={e.description} />
            ))}
          </div>
        )}

        {experience.length === 0 && education.length === 0 && (
          <div className="text-center py-20 border border-border rounded-2xl bg-surface-1">
            <p className="text-muted-foreground font-mono text-xs">Wird in Kürze hinzugefügt.</p>
          </div>
        )}

        <div className="text-center mt-16">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-border text-foreground rounded-full text-sm font-medium hover:border-muted-foreground/40 transition-all duration-300"
          >
            <Download size={15} />
            CV herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}
