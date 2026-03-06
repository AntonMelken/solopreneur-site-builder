import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="apple-divider mb-10" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p className="font-light">© {new Date().getFullYear()} Anton Melnychuk</p>
        <div className="flex items-center gap-6">
          <Link to="/impressum" className="hover:text-foreground transition-colors duration-300">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-foreground transition-colors duration-300">Datenschutzerklärung</Link>
        </div>
      </div>
    </footer>
  );
}
