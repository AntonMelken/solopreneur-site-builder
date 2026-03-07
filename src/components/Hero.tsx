import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useScrollFadeIn();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep blue ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsla(211, 100%, 44%, 0.08) 0%, transparent 65%)" }}
      />
      {/* Warm secondary glow */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(43, 72%, 58%, 0.04) 0%, transparent 70%)" }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsla(211,100%,44%,0.04) 1px, transparent 1px), linear-gradient(90deg, hsla(211,100%,44%,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div ref={ref} className="fade-in-section relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-border bg-surface-1 surface-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
            Verfügbar für Projekte · iOS · Web · DACH
          </span>
        </div>

        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.95]">
          <span className="text-gradient">Anton</span>
          <br />
          <span className="text-gradient">Melnychuk</span>
        </h1>

        <p className="text-xl sm:text-2xl font-light text-muted-foreground mb-5 tracking-wide">
          <span className="text-gradient-blue font-medium">iOS & Web-Entwickler</span>
          {" "}· Independent Creator
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed text-base font-light">
          Ich entwickle durchdachte digitale Produkte — von der ersten Idee über das Interface bis zum
          erfolgreichen Launch. iOS-Apps, Web-Applikationen und alles dazwischen.
          Mit Fokus auf Qualität, Nutzererfahrung und nachhaltigem Wachstum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm"
          >
            Projekte ansehen
            <ArrowRight size={15} />
          </a>
          <a
            href="#kontakt"
            className="btn-secondary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-sm"
          >
            Kontakt aufnehmen
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-20 pt-8 border-t border-border/60">
          {[
            { value: "3+", label: "Veröffentlichte Apps" },
            { value: "100%", label: "DSGVO-konform" },
            { value: "24h", label: "Antwortzeit" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-gradient-blue mb-0.5">{item.value}</div>
              <div className="text-xs text-muted-foreground font-light">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
