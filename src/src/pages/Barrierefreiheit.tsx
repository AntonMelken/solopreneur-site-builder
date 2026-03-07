import { Link } from "react-router-dom";

export default function Barrierefreiheit() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link to="/" className="text-xs text-muted-foreground hover:text-foreground mb-12 inline-block transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">← Zurück</Link>
        <h1 className="text-4xl font-bold text-foreground mb-12 tracking-tight">Barrierefreiheit</h1>
        <div className="space-y-8 text-muted-foreground text-[15px] font-light leading-[1.8]">

          <section aria-labelledby="erklaerung-heading">
            <h2 id="erklaerung-heading" className="text-sm font-semibold text-foreground mb-3">Erklärung zur Barrierefreiheit</h2>
            <p>
              Anton Melnychuk ist bemüht, seine Website{" "}
              <a href="https://melnychuk-anton.de" className="underline hover:text-foreground transition-colors duration-300">
                melnychuk-anton.de
              </a>{" "}
              barrierefrei zugänglich zu machen. Diese Erklärung zur Barrierefreiheit gilt für die gesamte
              Website und bezieht sich auf die Anforderungen des Barrierefreiheitsstärkungsgesetzes (BFSG)
              sowie die Web Content Accessibility Guidelines (WCAG) 2.1, Konformitätsstufe AA.
            </p>
          </section>
          <div className="apple-divider" />

          <section aria-labelledby="stand-heading">
            <h2 id="stand-heading" className="text-sm font-semibold text-foreground mb-3">Stand der Barrierefreiheit</h2>
            <p>
              Diese Website ist <strong className="text-foreground font-medium">teilweise konform</strong> mit
              den WCAG 2.1, Stufe AA. Bekannte Einschränkungen werden im Folgenden aufgeführt.
            </p>
          </section>
          <div className="apple-divider" />

          <section aria-labelledby="massnahmen-heading">
            <h2 id="massnahmen-heading" className="text-sm font-semibold text-foreground mb-3">Umgesetzte Maßnahmen</h2>
            <p>Folgende Maßnahmen wurden zur Verbesserung der Barrierefreiheit umgesetzt:</p>
            <ul className="mt-3 space-y-2 list-none">
              <li>✓ Semantisch korrekte HTML-Struktur mit Überschriftenhierarchie (H1–H3)</li>
              <li>✓ Alle Bilder mit beschreibenden Alt-Attributen versehen</li>
              <li>✓ Alle Formularfelder mit sichtbaren Labels und Platzhaltertexten</li>
              <li>✓ Autovervollständigung (autocomplete) in Kontaktformular aktiviert</li>
              <li>✓ Vollständige Tastaturnavigation mit sichtbarem Fokus-Ring</li>
              <li>✓ Skip-Navigation-Link zum Überspringen der Hauptnavigation</li>
              <li>✓ ARIA-Landmarks für Hauptbereiche (nav, main, footer, region)</li>
              <li>✓ SSL-verschlüsselte Verbindung (HTTPS)</li>
              <li>✓ Sprach-Attribut (lang="de") im HTML-Element gesetzt</li>
              <li>✓ Keine automatisch abspielenden Medien</li>
            </ul>
          </section>
          <div className="apple-divider" />

          <section aria-labelledby="einschraenkungen-heading">
            <h2 id="einschraenkungen-heading" className="text-sm font-semibold text-foreground mb-3">Bekannte Einschränkungen</h2>
            <p>
              Trotz aller Bemühungen können einige Inhalte noch nicht vollständig barrierefrei sein:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li>
                <strong className="text-foreground font-medium">Farbkontrast:</strong> Einige Hilfstexte
                (z. B. Eingabehinweise in Formularen) können je nach Darstellungsgerät einen Kontrast
                unterhalb des WCAG-AA-Grenzwerts von 4,5:1 aufweisen. Diese werden kontinuierlich
                überprüft und verbessert.
              </li>
              <li>
                <strong className="text-foreground font-medium">Dynamische Inhalte:</strong> Animationen
                beim Scrollen (Fade-in-Effekte) können für Nutzer mit Bewegungsempfindlichkeit störend
                sein. Eine Unterstützung für das Systemmerkmal "prefers-reduced-motion" ist geplant.
              </li>
            </ul>
          </section>
          <div className="apple-divider" />

          <section aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="text-sm font-semibold text-foreground mb-3">Feedback und Kontakt</h2>
            <p>
              Wenn Sie Barrieren auf dieser Website bemerken oder Verbesserungsvorschläge haben,
              wenden Sie sich bitte direkt an mich:
            </p>
            <p className="mt-3">
              Anton Melnychuk<br />
              E-Mail:{" "}
              <a
                href="mailto:contact@melnychuk-anton.de"
                className="underline hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
              >
                contact@melnychuk-anton.de
              </a><br />
              Telefon: +49 175 3797891
            </p>
            <p className="mt-3">
              Ich werde Ihre Anfrage so schnell wie möglich, spätestens jedoch innerhalb von zwei Wochen,
              bearbeiten.
            </p>
          </section>
          <div className="apple-divider" />

          <section aria-labelledby="schlichtung-heading">
            <h2 id="schlichtung-heading" className="text-sm font-semibold text-foreground mb-3">Schlichtungsverfahren</h2>
            <p>
              Wenn Sie auf Ihre Rückmeldung keine zufriedenstellende Antwort erhalten haben, können Sie
              sich an die Schlichtungsstelle nach § 16 BFSG wenden:
            </p>
            <p className="mt-3">
              Schlichtungsstelle nach dem Behindertengleichstellungsgesetz (BGG)<br />
              bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen<br />
              Mauerstraße 53, 10117 Berlin<br />
              <a
                href="https://www.schlichtungsstelle-bgg.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
              >
                www.schlichtungsstelle-bgg.de
              </a>
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <p className="text-xs text-muted-foreground/70">Stand: März 2026</p>
          </section>

        </div>
      </div>
    </div>
  );
}
