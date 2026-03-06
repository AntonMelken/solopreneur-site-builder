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
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card px-4 py-3">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Diese Website verwendet ausschließlich technisch notwendige Cookies zur Speicherung Ihrer
          Anzeigeeinstellungen. Kein Tracking.{" "}
          <Link to="/datenschutz" className="underline hover:text-foreground">
            Datenschutzerklärung
          </Link>
        </p>
        <button
          onClick={() => {
            localStorage.setItem("cookie_notice_accepted", "true");
            setVisible(false);
          }}
          className="shrink-0 px-4 py-1.5 border border-border rounded-md text-sm text-foreground hover:bg-secondary transition-colors"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
