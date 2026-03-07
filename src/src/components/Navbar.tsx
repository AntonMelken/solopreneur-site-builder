import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",        href: "#home",       title: "Zur Startseite" },
  { label: "Über mich",   href: "#ueber-mich", title: "Mehr über Anton Melnychuk" },
  { label: "Skills",      href: "#skills",     title: "Technische Kompetenzen" },
  { label: "Portfolio",   href: "#portfolio",  title: "Ausgewählte Projekte" },
  { label: "Lebenslauf",  href: "#lebenslauf", title: "Beruflicher Werdegang" },
  { label: "Blog",        href: "#blog",       title: "Blog & Insights" },
  { label: "Kontakt",     href: "#kontakt",    title: "Kontakt aufnehmen" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Hauptnavigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass glass-border border-t-0 border-x-0"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#home"
          title="Anton Melnychuk – Startseite"
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
        >
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xs leading-none">A</span>
          </div>
          <span className="font-semibold text-foreground tracking-tight text-sm">Anton Melnychuk</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              title={l.title}
              className="px-3.5 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-3 px-4 py-2 btn-primary text-xs rounded-full font-semibold"
          >
            Anfrage stellen
          </a>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 text-foreground rounded-lg hover:bg-white/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden glass px-6 pb-6 pt-3 border-t border-border/40">
          <div className="space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                title={l.title}
                onClick={() => setOpen(false)}
                className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="block btn-primary text-center py-2.5 px-3 text-sm rounded-xl font-semibold"
              >
                Anfrage stellen
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
