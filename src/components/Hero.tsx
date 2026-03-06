import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function Hero() {
  const ref = useScrollFadeIn();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark mode gold orb */}
      <div className="hidden dark:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      {/* Subtle code decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12rem] sm:text-[18rem] font-mono text-foreground/[0.03] leading-none">
          {"{ }"}
        </span>
      </div>

      <div ref={ref} className="fade-in-section relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">
          ◆ Solopreneur · Developer · DACH
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4">
          Anton Melnychuk
        </h1>
        <p className="text-lg sm:text-xl text-gold font-medium mb-6">
          AI-powered Indie Developer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          „Ich baue KI-gestützte Micro-SaaS-Produkte für den deutschsprachigen Markt — von der Idee bis zum ersten zahlenden Kunden."
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Portfolio ansehen
          </a>
          <a
            href="#kontakt"
            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
