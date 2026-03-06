import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">← Zurück</Link>
        <h1 className="text-3xl font-bold text-foreground mb-8">Impressum</h1>
        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-lg font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>Anton Melnychuk<br />[STRAßE UND HAUSNUMMER]<br />[PLZ ORT]<br />Deutschland</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Kontakt</h2>
            <p>E-Mail: [DEINE@EMAIL.DE]</p>
            <p className="text-xs text-muted-foreground">[HINWEIS: Wenn du als Kleinunternehmer tätig bist, keine USt-ID nötig. Wenn du ein Gewerbe angemeldet hast, ergänze: Umsatzsteuer-ID gemäß § 27a UStG: DE [NUMMER]]</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Anton Melnychuk<br />[STRAßE UND HAUSNUMMER]<br />[PLZ ORT]</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Urheberrecht</h2>
            <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr/</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
