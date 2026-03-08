import { useState, useEffect } from "react";
import { CheckCircle2, Loader2, Copy, Package, PartyPopper } from "lucide-react";
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
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Package className="w-5 h-5 text-[hsl(var(--kk-orange))]" />
          Build Toplayer & Snippet
        </h2>
        <p className="text-sm text-muted-foreground">
          Bouw toplayer-bundles voor alle goedgekeurde pagina's.
        </p>
      </div>

      {!allReady && (
        <Button
          onClick={startBuild}
          disabled={building}
          className="gap-2 bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] hover:opacity-90 text-white border-0"
        >
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
        <h3 className="font-semibold text-foreground text-sm">Status per pagina</h3>
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-2 items-center px-4 py-2.5 bg-muted/50 border-b border-border text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
            <span>Slug</span>
            <span>Status</span>
          </div>
          {pages.map((p) => (
            <div
              key={p.slug}
              className="grid grid-cols-2 items-center px-4 py-3 border-b border-border last:border-b-0"
            >
              <span className="text-sm font-mono text-foreground">{p.slug}</span>
              <div className="flex items-center gap-1.5">
                {p.status === "building" && (
                  <Loader2 className="w-4 h-4 animate-spin text-[hsl(var(--kk-violet))]" />
                )}
                {p.status === "ready" && (
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--kk-success))]" />
                )}
                <span className="text-sm text-foreground">
                  {p.status === "idle" ? "Wachten" : p.status === "building" ? "Bouwen..." : "Ready"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Snippet section */}
      {allReady && (
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 space-y-3">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--kk-violet))] via-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))]" />
          <h3 className="font-bold text-foreground">Toplayer Snippet</h3>
          <p className="text-sm text-muted-foreground">
            Plaats deze snippet in de <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">&lt;head&gt;</code> van je site, wij regelen de rest per pagina/slug.
          </p>
          <pre className="text-xs bg-muted/80 dark:bg-muted/40 rounded-lg p-4 overflow-x-auto text-foreground font-mono leading-relaxed">
            {SNIPPET_CODE}
          </pre>
          <Button onClick={copySnippet} variant="outline" className="gap-2">
            <Copy className="w-4 h-4" />
            Kopieer snippet
          </Button>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Vorige
        </Button>
        {allReady && (
          <Button
            className="gap-2 bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] hover:opacity-90 text-white border-0"
            onClick={() => {
              toast({ title: "Onboarding voltooid! 🎉", description: "De klant is succesvol onboard." });
            }}
          >
            <PartyPopper className="w-4 h-4" />
            Onboarding afronden
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepToplayer;
