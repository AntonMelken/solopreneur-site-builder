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
            <p>
              Anton Melnychuk<br />
              Heppenheimer Straße 39<br />
              64658 Fürth im Odenwald<br />
              E-Mail:{" "}
              <a href="mailto:contact@melnychuk-anton.de" className="underline hover:text-foreground transition-colors duration-300">
                contact@melnychuk-anton.de
              </a><br />

            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung einer
              funktionsfähigen Website und der angebotenen Inhalte erforderlich ist. Die Verarbeitung
              erfolgt auf Basis der DSGVO. Soweit für Verarbeitungsvorgänge eine Einwilligung eingeholt
              wird, gilt Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">3. Hosting — GitHub Pages</h2>
            <p>Diese Website wird gehostet bei:</p>
            <p className="mt-2">
              GitHub, Inc.<br />
              88 Colin P Kelly Jr St<br />
              San Francisco, CA 94107, USA<br />
              Datenschutz:{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors duration-300"
              >
                GitHub Privacy Statement
              </a>
            </p>
            <p className="mt-2">
              Bei jedem Zugriff auf diese Website erfasst GitHub Pages automatisch Verbindungsdaten
              (IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp). Die
              Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am
              sicheren und stabilen Betrieb der Website). Die Speicherdauer dieser Logs beträgt laut
              GitHub-Datenschutzrichtlinie in der Regel bis zu 7 Tage. Es besteht eine Datenübertragung
              in die USA; GitHub verfügt über EU-Standardvertragsklauseln gemäß Art. 46 DSGVO.
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">4. Kontaktformular</h2>
            <p>
              Das Kontaktformular auf dieser Website öffnet ausschließlich Ihren lokal installierten
              E-Mail-Client (mailto:-Link). Es findet keine Übertragung von Daten an einen Server des
              Betreibers dieser Website statt. Ihre Eingaben (Name, E-Mail-Adresse, Betreff, Nachricht)
              verbleiben vollständig in Ihrer eigenen E-Mail-Anwendung und werden von dort nach Ihrer
              Entscheidung versendet.
            </p>
            <p className="mt-2">
              Wenn Sie mir eine E-Mail senden, verarbeite ich die übermittelten Daten ausschließlich
              zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Kontaktanfragen). Die Daten werden nach
              abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen. Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">5. Lokale Speicherung (localStorage)</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Einträge im lokalen Speicher
              Ihres Browsers (localStorage):
            </p>
            <ul className="mt-2 space-y-1 list-none">
              <li>
                <span className="font-medium text-foreground">theme</span> — speichert Ihre Hell/Dunkel-Modus-Präferenz.
              </li>
              <li>
                <span className="font-medium text-foreground">cookie_notice_accepted</span> — speichert, ob Sie den Hinweisbanner zur lokalen Speicherung bestätigt haben.
              </li>
            </ul>
            <p className="mt-2">
              Es werden keine Tracking-Cookies, Werbe-Cookies oder Analyse-Cookies eingesetzt.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am nutzerfreundlichen
              Betrieb der Website). Ein Opt-In-Cookie-Banner ist für rein technisch notwendige Einträge
              nicht erforderlich.
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">6. Keine Analyse-Tools, kein Tracking</h2>
            <p>
              Diese Website verwendet keinerlei Analyse- oder Tracking-Tools (kein Google Analytics,
              kein Facebook Pixel, kein Hotjar oder ähnliche Dienste). Es werden keine Nutzungsdaten
              an Dritte zu Werbezwecken übermittelt.
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">7. Externe Links</h2>
            <p>
              Die Website enthält Links zu externen Diensten. Für deren Datenschutzpraktiken sind die
              jeweiligen Anbieter verantwortlich. Durch Anklicken dieser Links verlassen Sie diese
              Website, und es kann zu einer Datenübertragung (z. B. IP-Adresse) an die Anbieter kommen.
              Betroffen sind insbesondere:
            </p>
            <ul className="mt-2 space-y-1 list-none">
              <li>
                <span className="font-medium text-foreground">GitHub</span> (GitHub, Inc., USA) —{" "}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors duration-300">Datenschutzerklärung</a>
              </li>
              <li>
                <span className="font-medium text-foreground">LinkedIn</span> (LinkedIn Ireland Unlimited Company, Irland) —{" "}
                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors duration-300">Datenschutzerklärung</a>
              </li>
              <li>
                <span className="font-medium text-foreground">Instagram</span> (Meta Platforms Ireland Limited, Irland) —{" "}
                <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors duration-300">Datenschutzerklärung</a>
              </li>
            </ul>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">8. Einsatz von KI-Werkzeugen</h2>
            <p>
              Für die Erstellung und Überarbeitung von Inhalten auf dieser Website (u. a. Blog-Beiträge,
              Texte) werden KI-gestützte Schreibwerkzeuge eingesetzt (z. B. Claude von Anthropic, ChatGPT
              von OpenAI). Alle so erstellten Inhalte werden vom Autor geprüft, inhaltlich verantwortet
              und freigegeben. Eine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO findet
              nicht statt.
            </p>
            <p className="mt-2">
              Dieser Hinweis erfolgt im Sinne der Transparenzpflichten gemäß Art. 13 DSGVO sowie
              vorausschauend in Bezug auf Art. 50 der Verordnung (EU) 2024/1689 (EU AI Act), der ab
              dem 2. August 2026 vollständig anwendbar ist.
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">9. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben folgende Rechte gegenüber mir als Verantwortlichem:</p>
            <p className="mt-2">
              Auskunft (Art. 15 DSGVO) · Berichtigung (Art. 16 DSGVO) · Löschung (Art. 17 DSGVO) ·
              Einschränkung der Verarbeitung (Art. 18 DSGVO) · Datenübertragbarkeit (Art. 20 DSGVO) ·
              Widerspruch (Art. 21 DSGVO) · Widerruf einer erteilten Einwilligung mit Wirkung für die
              Zukunft (Art. 7 Abs. 3 DSGVO)
            </p>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:contact@melnychuk-anton.de" className="underline hover:text-foreground transition-colors duration-300">
                contact@melnychuk-anton.de
              </a>
            </p>
            <p className="mt-2">
              Sie haben außerdem das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu
              beschweren:
            </p>
            <p className="mt-2">
              Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)<br />
              Postfach 3163, 65021 Wiesbaden<br />
              <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors duration-300">
                datenschutz.hessen.de
              </a>
            </p>
          </section>
          <div className="apple-divider" />

          <section>
            <h2 className="text-sm font-semibold text-foreground mb-3">10. Aktualität dieser Erklärung</h2>
            <p>
              Stand: März 2026. Diese Erklärung wird bei Änderungen der eingesetzten Dienste oder der
              Rechtslage aktualisiert.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
