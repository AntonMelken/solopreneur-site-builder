import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer aria-label="Seitenfuß" className="py-10 px-6">
      <div className="apple-divider mb-10" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">A</span>
          </div>
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} Anton Melnychuk — Independent Digital Creator
          </p>
        </div>
        <nav aria-label="Rechtliche Links" className="flex items-center gap-6">
          {[
            { to: "/impressum", label: "Impressum" },
            { to: "/datenschutz", label: "Datenschutz" },
            { to: "/barrierefreiheit", label: "Barrierefreiheit" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
