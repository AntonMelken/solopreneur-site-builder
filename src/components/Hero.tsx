import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function Hero() {
  const ref = useScrollFadeIn();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow — Apple style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(43, 52%, 54%, 0.04) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(hsla(0,0%,100%,0.1) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div ref={ref} className="fade-in-section relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground mb-8 uppercase">
          Solopreneur · Developer · DACH
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-gradient leading-[1.05]">
          Anton<br />Melnychuk
        </h1>
        <p className="text-lg sm:text-xl font-light text-muted-foreground mb-4 tracking-wide">
          AI-powered Indie Developer
        </p>
        <p className="text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed text-sm font-light">
          Ich baue KI-gestützte Micro-SaaS-Produkte für den deutschsprachigen Markt — von der Idee bis zum ersten zahlenden Kunden.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-all duration-300"
          >
            Portfolio ansehen
          </a>
          <a
            href="#kontakt"
            className="px-8 py-3 border border-border text-foreground rounded-full font-medium text-sm hover:border-muted-foreground/50 transition-all duration-300"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
