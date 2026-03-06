import { useState } from "react";
import { Github, Linkedin } from "lucide-react";
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
    // mailto fallback
    const mailtoLink = `mailto:deine@email.de?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 px-4 bg-secondary/50">
      <div ref={ref} className="fade-in-section max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">Lass uns sprechen.</h2>
        <p className="text-muted-foreground text-center mb-10">
          Ich bin offen für Kooperationen, Feedback zu meinen Produkten oder einfach einen Austausch über
          Indie-Development im DACH-Markt.
        </p>

        {submitted ? (
          <div className="text-center p-8 border border-gold/30 rounded-lg bg-card">
            <p className="text-foreground font-medium">Vielen Dank! Ich melde mich so bald wie möglich.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name *</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-Mail *</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Betreff *</label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Nachricht * <span className="text-muted-foreground font-normal">(mind. 20 Zeichen)</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="mt-1 accent-gold"
              />
              <label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed">
                Ich habe die{" "}
                <Link to="/datenschutz" className="underline hover:text-foreground">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner personenbezogenen Daten zur Bearbeitung meiner
                Anfrage zu. *
              </label>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              Nachricht senden
            </button>
            <p className="text-[10px] text-muted-foreground text-center">
              Hinweis: Derzeit wird eine mailto:-Weiterleitung genutzt. Für echten Versand EmailJS oder Resend anbinden.
            </p>
          </form>
        )}

        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-sm text-muted-foreground">[DEINE@EMAIL.DE]</span>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
