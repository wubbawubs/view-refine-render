import { useState, useEffect } from "react";
import { CheckCircle2, Loader2, Copy, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface PageBuildStatus {
  slug: string;
  status: "idle" | "building" | "ready";
}

interface StepToplayerProps {
  onPrevious: () => void;
}

const SNIPPET_CODE = `<script>
  (function() {
    window.__KL_TOPLAYER_CONFIG__ = {
      siteId: "klikklaarweb.nl",
      bundleIndexUrl: "https://storage.googleapis.com/klikklaar-160d8-toplayer/toplayers-v2/klikklaarweb.nl/bundles-index.json",
      enableTelemetry: false
    };
  })();
</script>
<script src="https://klikklaar-cdn-prod.web.app/snippet/v2/snippet.min.js" async defer></script>`;

const StepToplayer = ({ onPrevious }: StepToplayerProps) => {
  const [pages, setPages] = useState<PageBuildStatus[]>([
    { slug: "/", status: "idle" },
  ]);
  const [building, setBuilding] = useState(false);

  const startBuild = () => {
    setBuilding(true);
    setPages((prev) => prev.map((p) => ({ ...p, status: "building" })));
  };

  useEffect(() => {
    if (!building) return;
    const timeout = setTimeout(() => {
      setPages((prev) => prev.map((p) => ({ ...p, status: "ready" })));
      setBuilding(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, [building]);

  const allReady = pages.every((p) => p.status === "ready");

  const copySnippet = () => {
    navigator.clipboard.writeText(SNIPPET_CODE).then(() => {
      toast({ title: "Gekopieerd!", description: "Snippet staat op je klembord." });
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-foreground">Build Toplayer & Snippet</h2>
        <p className="text-sm text-muted-foreground">
          Bouw toplayer-bundles voor alle goedgekeurde pagina's.
        </p>
      </div>

      {!allReady && (
        <Button onClick={startBuild} disabled={building} className="gap-2">
          {building ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Package className="w-4 h-4" />
          )}
          {building ? "Bezig met bouwen..." : "Bouw toplayer"}
        </Button>
      )}

      {/* Status table */}
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
                {p.status === "building" && (
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                )}
                {p.status === "ready" && (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
                <span className="text-sm capitalize text-foreground">
                  {p.status === "idle" ? "Wachten" : p.status === "building" ? "Bouwen..." : "Ready"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Snippet section */}
      {allReady && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <h3 className="font-bold text-foreground">Toplayer Snippet</h3>
          <p className="text-sm text-muted-foreground">
            Plaats deze snippet in de <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">&lt;head&gt;</code> van je site, wij regelen de rest per pagina/slug.
          </p>
          <pre className="text-xs bg-muted/80 dark:bg-muted/40 rounded-lg p-4 overflow-x-auto text-foreground font-mono leading-relaxed">
            {SNIPPET_CODE}
          </pre>
          <Button onClick={copySnippet} className="gap-2">
            <Copy className="w-4 h-4" />
            Kopieer snippet
          </Button>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious}>
          <span className="mr-1">←</span> Vorige
        </Button>
        {allReady && (
          <Button variant="default" className="gap-2" onClick={() => {
            toast({ title: "Onboarding voltooid!", description: "De klant is succesvol onboard." });
          }}>
            <CheckCircle2 className="w-4 h-4" />
            Onboarding afronden
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepToplayer;
