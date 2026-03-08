import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
      <h2 className="text-xl font-bold text-foreground">Selecteer Pagina's</h2>

      <div>
        <p className="text-sm font-medium text-foreground mb-3">
          Selecteer pagina's voor SEO plans
        </p>
        <div className="flex gap-2 mb-4">
          <Button size="sm" onClick={selectAll}>
            Selecteer alle
          </Button>
          <Button size="sm" variant="secondary" onClick={selectFirst5}>
            Selecteer eerste 5
          </Button>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[40px_1fr_1fr_2fr] items-center px-4 py-2.5 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
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

          {/* Rows */}
          {MOCK_PAGES.map((page) => (
            <div
              key={page.slug}
              className="grid grid-cols-[40px_1fr_1fr_2fr] items-center px-4 py-3 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors cursor-pointer"
              onClick={() => toggle(page.slug)}
            >
              <Checkbox
                checked={selected.has(page.slug)}
                onCheckedChange={() => toggle(page.slug)}
              />
              <span className="text-sm text-foreground">{page.slug}</span>
              <span className="text-sm text-muted-foreground">{page.type}</span>
              <span className="text-sm text-foreground">{page.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious}>
          ⬅ Vorige
        </Button>
        <Button
          onClick={() => onContinue(MOCK_PAGES.filter((p) => selected.has(p.slug)))}
          disabled={selected.size === 0}
        >
          Continue met geselecteerde pagina's
        </Button>
      </div>
    </div>
  );
};

export default StepSelectPages;
