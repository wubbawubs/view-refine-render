import { useState } from "react";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface Page {
  slug: string;
  type: string;
  title: string;
}

const MOCK_PAGES: Page[] = [
  { slug: "/", type: "home", title: "KlikKlaarWeb | Professionele Websites" },
  { slug: "/diensten", type: "page", title: "Onze Diensten" },
  { slug: "/over-ons", type: "page", title: "Over Ons" },
  { slug: "/contact", type: "page", title: "Contact" },
  { slug: "/blog", type: "blog", title: "Blog Overzicht" },
];

interface StepSelectPagesProps {
  onPrevious: () => void;
  onContinue: (selectedPages: Page[]) => void;
}

const StepSelectPages = ({ onPrevious, onContinue }: StepSelectPagesProps) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(MOCK_PAGES.map((p) => p.slug)));
  const selectFirst5 = () => setSelected(new Set(MOCK_PAGES.slice(0, 5).map((p) => p.slug)));

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <FileText className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
          Selecteer Pagina's
        </h2>
        <p className="text-sm text-muted-foreground">Kies welke pagina's je wilt meenemen in de SEO analyse.</p>
      </div>

      <div>
        <div className="flex gap-2 mb-4">
          <Button size="sm" variant="outline" onClick={selectAll} className="text-xs">
            Selecteer alle
          </Button>
          <Button size="sm" variant="outline" onClick={selectFirst5} className="text-xs">
            Selecteer eerste 5
          </Button>
          {selected.size > 0 && (
            <span className="inline-flex items-center text-xs font-medium text-[hsl(var(--kk-violet))] bg-[hsl(var(--kk-violet)/0.08)] px-2.5 py-1 rounded-full">
              {selected.size} geselecteerd
            </span>
          )}
        </div>

        <div className="border border-border rounded-xl overflow-hidden">
          {/* Header with gradient accent */}
          <div className="relative grid grid-cols-[40px_1fr_1fr_2fr] items-center px-4 py-2.5 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
            <Checkbox
              checked={selected.size === MOCK_PAGES.length}
              onCheckedChange={(checked) => {
                if (checked) selectAll();
                else setSelected(new Set());
              }}
            />
            <span>Slug</span>
            <span>Type</span>
            <span>Title</span>
          </div>

          {MOCK_PAGES.map((page) => (
            <div
              key={page.slug}
              className={`grid grid-cols-[40px_1fr_1fr_2fr] items-center px-4 py-3 border-b border-border last:border-b-0 hover:bg-[hsl(var(--kk-violet)/0.03)] transition-colors cursor-pointer ${
                selected.has(page.slug) ? "bg-[hsl(var(--kk-violet)/0.04)]" : ""
              }`}
              onClick={() => toggle(page.slug)}
            >
              <Checkbox
                checked={selected.has(page.slug)}
                onCheckedChange={() => toggle(page.slug)}
              />
              <span className="text-sm font-mono text-foreground">{page.slug}</span>
              <span className="text-sm text-muted-foreground capitalize">{page.type}</span>
              <span className="text-sm text-foreground">{page.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Vorige
        </Button>
        <Button
          onClick={() => onContinue(MOCK_PAGES.filter((p) => selected.has(p.slug)))}
          disabled={selected.size === 0}
          className="gap-2"
        >
          Continue met {selected.size} pagina's
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StepSelectPages;
