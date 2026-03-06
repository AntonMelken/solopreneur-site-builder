import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Lebenslauf", href: "#lebenslauf" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass glass-border border-t-0 border-x-0">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-12">
        <a href="#home" className="font-semibold text-foreground tracking-tight text-sm">
          Anton Melnychuk
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Menü" className="p-2 text-foreground">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
