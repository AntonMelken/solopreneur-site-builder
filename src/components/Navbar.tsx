import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",        href: "#home",       title: "Zur Startseite" },
  { label: "Über mich",   href: "#ueber-mich", title: "Mehr über Anton Melnychuk erfahren" },
  { label: "Skills",      href: "#skills",     title: "Technische Fähigkeiten ansehen" },
  { label: "Portfolio",   href: "#portfolio",  title: "Projekte im Portfolio ansehen" },
  { label: "Lebenslauf",  href: "#lebenslauf", title: "Beruflichen Werdegang ansehen" },
  { label: "Blog",        href: "#blog",       title: "Blog-Beiträge lesen" },
  { label: "Kontakt",     href: "#kontakt",    title: "Kontakt aufnehmen" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Hauptnavigation" className="fixed top-0 left-0 right-0 z-50 glass glass-border border-t-0 border-x-0">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-12">
        <a
          href="#home"
          title="Anton Melnychuk – Startseite"
          className="font-semibold text-foreground tracking-tight text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
        >
          Anton Melnychuk
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              title={l.title}
              className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden glass px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              title={l.title}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
