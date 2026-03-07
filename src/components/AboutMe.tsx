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
              <img src="/IMG_1140.png" alt="Anton Melnychuk" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4">Über mich</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 tracking-tight">
              Entwickler.<br />Maker.<br />
              <span className="text-gradient-gold">Allrounder.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px] font-light max-w-xl">
              <p>
                Ich bin Anton Melnychuk — ein selbst gelernter Entwickler, der digitale Produkte von Anfang bis Ende baut.
                Vom ersten Konzept über Design und Entwicklung bis zum fertigen Launch. Aktuell mit Fokus auf iOS,
                aber mein Horizont reicht weiter: Web-Apps, Games, und alles, was als nächstes kommt.
              </p>
              <p>
                Ich arbeite mit modernen Tools und Workflows — darunter auch KI. Nicht als Abkürzung, sondern als
                fester Bestandteil meiner Arbeitsweise. Wie jeder gute Handwerker, der das richtige Werkzeug für
                den richtigen Job wählt.
              </p>
              <p>
                Mein Antrieb: Dinge wirklich bauen. Validieren, launchen, verbessern — und dabei unabhängig bleiben.
              </p>
            </div>
            <div className="flex items-center gap-5 mt-8">
              <a href="https://github.com/antonmelken" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="mailto:antosic200@gmail.com" aria-label="E-Mail" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
