import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageOptStatus {
  slug: string;
  status: "pending" | "running" | "done";
}

interface StepOptimalisatiesProps {
  onPrevious: () => void;
  onContinue: () => void;
}

const StepOptimalisaties = ({ onPrevious, onContinue }: StepOptimalisatiesProps) => {
  const [pages, setPages] = useState<PageOptStatus[]>([
    { slug: "/", status: "running" },
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPages((prev) => prev.map((p) => ({ ...p, status: "done" })));
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const allDone = pages.every((p) => p.status === "done");

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Generate Optimizations</h2>
      <p className="text-sm text-muted-foreground">
        We genereren nu optimalisaties per pagina op basis van je goedgekeurde plannen.
      </p>

      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">Status per pagina</h3>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 items-center px-4 py-2.5 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
            <span>Slug</span>
            <span>Status</span>
          </div>
          {pages.map((p) => (
            <div
              key={p.slug}
              className="grid grid-cols-2 items-center px-4 py-3 border-b border-border last:border-b-0"
            >
              <span className="text-sm text-foreground">{p.slug}</span>
              <div className="flex items-center gap-1.5">
                {p.status === "running" ? (
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
                <span className="text-sm capitalize text-foreground">{p.status === "done" ? "Done" : "Running"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Vorige
        </Button>
        {allDone && (
          <Button onClick={onContinue} className="gap-2">
            Volgende <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepOptimalisaties;
