import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const HeroMetric = () => {
  return (
    <Card className="p-8 shadow-card animate-fade-in rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-kk-h1 text-foreground mb-2">Zichtbaarheid — September</h2>
            <div className="h-0.5 w-full max-w-md rounded-full bg-kk-gradient mb-4"></div>
          </div>
          
          <div className="mb-6">
            <div className="text-kk-kpi text-foreground mb-2">+64%</div>
            <p className="text-kk-label text-muted-foreground">Verbetering t.o.v. vorige maand.</p>
          </div>
          
          {/* Benchmark Pills */}
          <div className="bg-muted/20 rounded-lg border border-border/40 p-5">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-sm font-medium text-muted-foreground mb-1">Automatische optimalisaties</div>
                <div className="text-lg font-bold text-foreground">127</div>
              </div>
              <div className="w-px h-10 bg-border mx-4"></div>
              <div className="text-center flex-1">
                <div className="text-sm font-medium text-muted-foreground mb-1">Zichtbaarheidsindex (Δ)</div>
                <div className="text-lg font-bold text-foreground">+64%</div>
              </div>
              <div className="w-px h-10 bg-border mx-4"></div>
              <div className="text-center flex-1">
                <div className="text-sm font-medium text-muted-foreground mb-1">Verwachting volgende periode</div>
                <div className="text-lg font-bold text-foreground">+78%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right ml-8">
          <div className="w-16 h-8 mb-2">
            {/* Sparkline would go here */}
            <div className="w-full h-full bg-gradient-to-r from-[hsl(var(--kk-violet))]/20 to-[hsl(var(--kk-violet))]/40 rounded"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroMetric;