import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie_notice_accepted") !== "true") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass glass-border border-b-0 border-x-0 px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground text-center sm:text-left font-light">
          Diese Website verwendet ausschließlich technisch notwendige Cookies zur Speicherung Ihrer
          Anzeigeeinstellungen. Kein Tracking.{" "}
          <Link to="/datenschutz" className="underline hover:text-foreground transition-colors duration-300">
            Datenschutzerklärung
          </Link>
        </p>
        <button
          onClick={() => {
            localStorage.setItem("cookie_notice_accepted", "true");
            setVisible(false);
          }}
          className="shrink-0 px-5 py-1.5 border border-border rounded-full text-xs text-foreground hover:border-muted-foreground/40 transition-all duration-300"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
