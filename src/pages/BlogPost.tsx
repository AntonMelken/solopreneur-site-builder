import { useParams, Link } from "react-router-dom";
import { blogArticles } from "@/components/BlogPreview";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4 font-light">Artikel nicht gefunden.</p>
          <Link to="/" className="text-sm text-muted-foreground underline hover:text-foreground transition-colors duration-300">Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("# ")) return <h1 key={i} className="text-4xl font-bold text-foreground mb-6 tracking-tight">{trimmed.slice(2)}</h1>;
      if (trimmed.startsWith("## ")) return <h2 key={i} className="text-xl font-semibold text-foreground mt-12 mb-4">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith("### ")) return <h3 key={i} className="text-lg font-semibold text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>;
      return <p key={i} className="text-muted-foreground leading-[1.8] mb-5 font-light">{trimmed}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link to="/#blog" className="text-xs text-muted-foreground hover:text-foreground mb-12 inline-block transition-colors duration-300">← Zurück zum Blog</Link>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[11px] text-muted-foreground">{article.date}</span>
          <span className="font-mono text-[11px] text-muted-foreground">· {article.readingTime} Lesezeit</span>
        </div>
        <article>{renderContent(article.content)}</article>
      </div>
    </div>
  );
}
