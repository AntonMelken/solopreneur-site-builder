import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link to="/" className="text-xs text-muted-foreground hover:text-foreground mb-12 inline-block transition-colors duration-300">← Zurück</Link>
        <h1 className="text-4xl font-bold text-foreground mb-12 tracking-tight">Datenschutzerklärung</h1>
        <div className="space-y-8 text-muted-foreground text-[15px] font-light leading-[1.8]">
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">1. Verantwortlicher</h2>
            <p>Anton Melnychuk<br />[STRAßE UND HAUSNUMMER]<br />[PLZ ORT]<br />E-Mail: [DEINE@EMAIL.DE]</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung einer funktionsfähigen Website und der angebotenen Inhalte erforderlich ist. Die Verarbeitung erfolgt auf Basis der DSGVO.</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">3. Hosting</h2>
            <p>Diese Website wird gehostet bei: [HOSTER EINTRAGEN — z.B. „Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA"]. Bei jedem Zugriff werden Verbindungsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet. Es besteht ggf. eine Datenübertragung in die USA; der Hoster verfügt über EU-Standardvertragsklauseln nach Art. 46 DSGVO.</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">4. Kontaktformular</h2>
            <p>Daten aus dem Kontaktformular (Name, E-Mail, Betreff, Nachricht) werden ausschließlich zur Bearbeitung der Anfrage verwendet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Daten werden nach Abschluss der Bearbeitung gelöscht. Eine Weitergabe an Dritte erfolgt nicht.</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">5. Cookies und lokale Speicherung</h2>
            <p>Diese Website verwendet ausschließlich technisch notwendige Speicherung (localStorage zur Speicherung der Hell/Dunkel-Modus-Präferenz unter dem Schlüssel „theme"). Es werden keine Tracking-Cookies, Werbe-Cookies oder Analyse-Cookies eingesetzt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website). Ein Opt-In-Cookie-Banner ist für rein technisch notwendige Cookies nicht erforderlich.</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">6. Keine Analyse-Tools, kein Tracking</h2>
            <p>Diese Website verwendet keinerlei Analyse- oder Tracking-Tools (kein Google Analytics, kein Facebook Pixel, kein Hotjar o. ä.). Es werden keine Nutzungsdaten an Dritte zu Werbezwecken übermittelt.</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">7. Externe Links</h2>
            <p>Die Website enthält Links zu externen Diensten (GitHub, LinkedIn). Für deren Datenschutzpraktiken sind die jeweiligen Anbieter verantwortlich. Durch Anklicken dieser Links verlassen Sie diese Website.</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">8. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben das Recht auf: Auskunft (Art. 15 DSGVO) · Berichtigung (Art. 16 DSGVO) · Löschung (Art. 17 DSGVO) · Einschränkung der Verarbeitung (Art. 18 DSGVO) · Datenübertragbarkeit (Art. 20 DSGVO) · Widerspruch (Art. 21 DSGVO) · Beschwerde bei der zuständigen Aufsichtsbehörde.</p>
            <p className="mt-2">Zuständige Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Ihres Bundeslandes.</p>
          </section>
          <div className="apple-divider" />
          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">9. Aktualität dieser Erklärung</h2>
            <p>Stand: März 2026.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
