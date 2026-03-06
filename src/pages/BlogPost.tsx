import { useParams, Link } from "react-router-dom";
import { blogArticles } from "@/components/BlogPreview";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Artikel nicht gefunden.</p>
          <Link to="/" className="text-gold underline">Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  // Simple markdown-to-HTML (headings and paragraphs)
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("# ")) return <h1 key={i} className="text-3xl font-bold text-foreground mb-4">{trimmed.slice(2)}</h1>;
      if (trimmed.startsWith("## ")) return <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith("### ")) return <h3 key={i} className="text-lg font-bold text-foreground mt-6 mb-2">{trimmed.slice(4)}</h3>;
      return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{trimmed}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link to="/#blog" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">← Zurück zum Blog</Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-muted-foreground">{article.date}</span>
          <span className="font-mono text-xs text-muted-foreground">· {article.readingTime} Lesezeit</span>
        </div>
        <article>{renderContent(article.content)}</article>
      </div>
    </div>
  );
}
