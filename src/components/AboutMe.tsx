import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function AboutMe() {
  const ref = useScrollFadeIn();

  return (
    <section id="ueber-mich" className="py-32 px-6">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto">
        <div className="apple-divider mb-16" />
        <div className="grid md:grid-cols-[180px_1fr] gap-16 items-start">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-40 rounded-full border border-border overflow-hidden">
              <img src="/my_profile_photo.png" alt="Anton Melnychuk" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4">Über mich</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 tracking-tight">
              Entwickler.<br />Solopreneur.<br />
              <span className="text-gradient-gold">Macher.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px] font-light max-w-xl">
              <p>
                Ich bin Anton Melnychuk — Entwickler und Solopreneur mit Fokus auf den DACH-Markt. Ich baue
                KI-gestützte Web-Applikationen, die echte Schmerzpunkte für kleine Unternehmen, Handwerker
                und Selbstständige lösen.
              </p>
              <p>
                Mein Ansatz: Validierung vor Perfektion. Ich launche in Stunden, nicht Monaten — und lasse
                zahlende Kunden entscheiden, was gebaut wird. Mein Werkzeugkasten: Claude AI, React, Supabase
                und Lovable.
              </p>
              <p>
                Ziel: Ein System aufbauen, das unabhängig von meiner Zeit funktioniert — Produkte, die
                Mehrwert liefern, während ich schlafe.
              </p>
            </div>
            <div className="flex items-center gap-5 mt-8">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="mailto:deine@email.de" aria-label="E-Mail" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
