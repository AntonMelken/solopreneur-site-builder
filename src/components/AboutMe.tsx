import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function AboutMe() {
  const ref = useScrollFadeIn();

  return (
    <section id="ueber-mich" className="py-24 px-4">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto grid md:grid-cols-[200px_1fr] gap-12 items-start">
        {/* Photo */}
        <div className="flex justify-center md:justify-start">
          <div className="w-40 h-40 rounded-full bg-secondary border border-border flex items-center justify-center">
            <span className="text-xs text-muted-foreground font-mono">Foto hier einfügen</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Über mich</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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
          <div className="flex items-center gap-4 mt-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:deine@email.de" aria-label="E-Mail" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
