import { useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Link } from "react-router-dom";

export default function Contact() {
  const ref = useScrollFadeIn();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    form.name.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.subject.trim() !== "" &&
    form.message.trim().length >= 20 &&
    privacy;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const mailtoLink = `mailto:contact@melnychuk-anton.de?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-border bg-surface-1 text-foreground text-sm font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus:border-muted-foreground/30 transition-all duration-300 placeholder:text-muted-foreground/40";

  return (
    <section id="kontakt" aria-labelledby="kontakt-heading" className="py-32 px-6">
      <div ref={ref} className="fade-in-section max-w-lg mx-auto">
        <div className="apple-divider mb-16" />
        <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">Kontakt</p>
        <h2 id="kontakt-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center tracking-tight">
          Lass uns sprechen.
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm font-light leading-relaxed max-w-md mx-auto">
          Ich bin offen für Kooperationen, Feedback zu meinen Produkten oder einfach einen Austausch über
          Indie-Development im DACH-Markt.
        </p>

        {submitted ? (
          <div className="text-center py-16 border border-border rounded-2xl bg-surface-1 surface-glow">
            <p className="text-foreground font-medium">Vielen Dank!</p>
            <p className="text-muted-foreground text-sm font-light mt-2">Ich melde mich so bald wie möglich.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Kontaktformular">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2">Name *</label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Max Mustermann"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2">E-Mail *</label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="max@beispiel.de"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground mb-2">Betreff *</label>
              <input
                id="subject"
                type="text"
                required
                autoComplete="off"
                placeholder="Worum geht es?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2">
                Nachricht * <span className="text-muted-foreground font-normal">(mind. 20 Zeichen)</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                autoComplete="off"
                placeholder="Deine Nachricht an mich..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClasses} resize-y`}
              />
            </div>
            <div className="flex items-start gap-3 pt-2">
              <input
                id="privacy"
                type="checkbox"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-border bg-surface-2 accent-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />
              <label htmlFor="privacy" className="text-[11px] text-muted-foreground leading-relaxed">
                Ich habe die{" "}
                <Link to="/datenschutz" className="underline hover:text-foreground transition-colors duration-300">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner personenbezogenen Daten zur Bearbeitung meiner
                Anfrage zu. *
              </label>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium disabled:opacity-20 disabled:cursor-not-allowed hover:bg-primary/90 transition-all duration-300 mt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Nachricht senden
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-5 mt-12">
          <a
            href="mailto:contact@melnychuk-anton.de"
            title="E-Mail an Anton Melnychuk senden"
            className="text-xs text-muted-foreground font-mono hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
          >
            contact@melnychuk-anton.de
          </a>
          <a href="https://github.com/antonmelken" target="_blank" rel="noopener noreferrer" aria-label="GitHub-Profil von Anton Melnychuk" title="GitHub-Profil" className="text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/anton-melnychuk-42230a273" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn-Profil von Anton Melnychuk" title="LinkedIn-Profil" className="text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">
            <Linkedin size={16} />
          </a>
          <a href="https://www.instagram.com/gghlhf" target="_blank" rel="noopener noreferrer" aria-label="Instagram-Profil von Anton Melnychuk" title="Instagram-Profil" className="text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
