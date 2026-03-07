import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer aria-label="Seitenfuß" className="py-10 px-6">
      <div className="apple-divider mb-10" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p className="font-light">© {new Date().getFullYear()} Anton Melnychuk</p>
        <nav aria-label="Rechtliche Links" className="flex items-center gap-6">
          <Link to="/impressum" title="Impressum anzeigen" className="hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">Impressum</Link>
          <Link to="/datenschutz" title="Datenschutzerklärung anzeigen" className="hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">Datenschutzerklärung</Link>
          <Link to="/barrierefreiheit" title="Barrierefreiheitserklärung anzeigen" className="hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">Barrierefreiheit</Link>
        </nav>
      </div>
    </footer>
  );
}
