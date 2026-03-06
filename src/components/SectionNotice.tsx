import { memo } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

function SectionNotice({ text }: { text: string }) {
  return (
    <div className="text-center py-20 border border-border rounded-2xl bg-surface-1">
      <p className="text-muted-foreground font-mono text-xs">{text}</p>
    </div>
  );
}

export default memo(SectionNotice);
