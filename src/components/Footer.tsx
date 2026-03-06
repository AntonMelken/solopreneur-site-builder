import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Anton Melnychuk</p>
        <div className="flex items-center gap-6">
          <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutzerklärung</Link>
        </div>
      </div>
    </footer>
  );
}
