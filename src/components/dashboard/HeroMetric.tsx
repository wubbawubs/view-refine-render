import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const HeroMetric = () => {
  return (
    <Card className="p-8 shadow-card animate-fade-in rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-kk-h1 text-foreground mb-2">Jouw zichtbaarheid deze maand</h2>
          <div className="h-0.5 w-80 rounded-full bg-kk-gradient mb-4"></div>
          <div className="text-kk-kpi text-foreground mb-3">+64%</div>
          <p className="text-kk-label text-muted-foreground mb-6">Verbetering t.o.v. vorige maand.</p>
          
          {/* Benchmark Pills */}
          <div className="flex items-center justify-between p-5 bg-muted/50 rounded-xl border border-border">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-kk-label font-semibold text-foreground">Totale aanpassingen gemaakt</div>
                <div className="text-kk-caption text-muted-foreground">127</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-kk-label font-semibold text-foreground">Totale groei</div>
                <div className="text-kk-caption text-muted-foreground">+64%</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-kk-label font-semibold text-foreground">Geschatte groei aankomende maand</div>
                <div className="text-kk-caption text-muted-foreground">+78%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right ml-8">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-2">
            <TrendingUp className="w-8 h-8 text-[hsl(var(--kk-violet))] opacity-60" />
          </div>
          <div className="text-kk-caption text-muted-foreground">Trending up</div>
        </div>
      </div>
    </Card>
  );
};

export default HeroMetric;