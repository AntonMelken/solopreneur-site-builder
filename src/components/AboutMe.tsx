import { Github, Linkedin, Mail, Instagram, MapPin, Code2, Rocket } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const highlights = [
  { icon: Code2, label: "Full-Stack Entwickler", desc: "iOS, Web & APIs aus einer Hand" },
  { icon: Rocket, label: "Indie Creator", desc: "Von der Idee bis zum fertigen Produkt" },
  { icon: MapPin, label: "DACH-Markt", desc: "Fokus auf den deutschsprachigen Raum" },
];

export default function AboutMe() {
  const ref = useScrollFadeIn();

  return (
    <section id="ueber-mich" className="py-32 px-6 relative" style={{ background: "linear-gradient(180deg, transparent, hsla(211,100%,44%,0.025) 50%, transparent)" }}>
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />

        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          {/* Photo + Social */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-44 h-44 rounded-2xl border border-border overflow-hidden surface-glow">
                <img src="/IMG_1140.png" alt="Anton Melnychuk" className="w-full h-full object-cover" />
              </div>
              {/* Available badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-1 border border-border surface-glow whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] text-muted-foreground">Verfügbar</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com/antonmelken" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-surface-1 text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 hover:scale-105">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/anton-melnychuk-42230a273" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-surface-1 text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 hover:scale-105">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/gghlhf" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-surface-1 text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 hover:scale-105">
                <Instagram size={16} />
              </a>
              <a href="mailto:contact@melnychuk-anton.de" aria-label="E-Mail" className="w-9 h-9 flex items-center justify-center rounded-xl border border-border bg-surface-1 text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 hover:scale-105">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4">Über mich</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 tracking-tight leading-tight">
              Entwickler.<br />
              Maker.<br />
              <span className="text-gradient-blue">Problemlöser.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-[1.85] text-[15px] font-light max-w-xl mb-10">
              <p>
                Ich bin Anton Melnychuk — ein selbst gelernter Entwickler mit einem klaren Anspruch:
                Produkte zu bauen, die tatsächlich funktionieren und echten Mehrwert schaffen.
                Vom ersten Konzept über das Interface-Design bis zum fertigen App-Store-Eintrag.
              </p>
              <p>
                Mein Fokus liegt auf iOS und modernen Web-Technologien. Ich integriere
                KI-gestützte Workflows nicht als Spielerei, sondern als festen Bestandteil
                professioneller Softwareentwicklung — schneller, präziser, qualitativ hochwertiger.
              </p>
              <p>
                Transparenz, technische Sorgfalt und konsequentes Umsetzen sind die Grundlagen
                meiner Arbeit. Ich liefere keine Halbfertigprodukte — ich liefere fertige Lösungen.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-3">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-surface-1 surface-glow hover:surface-glow-hover transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "hsla(211,100%,44%,0.12)" }}>
                    <Icon size={15} style={{ color: "hsl(211,100%,66%)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-0.5">{label}</p>
                    <p className="text-[11px] text-muted-foreground font-light leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
