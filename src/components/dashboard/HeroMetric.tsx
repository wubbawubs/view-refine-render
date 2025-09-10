import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const HeroMetric = () => {
  return (
    <Card className="p-8 shadow-card animate-fade-in rounded-2xl border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-kk-h1 text-[hsl(var(--kk-eggplant))] mb-2">Jouw zichtbaarheid deze maand</h2>
          <div className="h-0.5 w-24 rounded-full bg-kk-gradient mb-4"></div>
          <div className="text-kk-kpi text-[hsl(var(--kk-eggplant))] mb-3">+64%</div>
          <p className="text-kk-label text-[hsl(var(--kk-gray-500))] mb-6">Verbetering t.o.v. vorige maand.</p>
          
          {/* Benchmark Pills */}
          <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-xl border border-slate-200">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-kk-label font-semibold text-[hsl(var(--kk-eggplant))]">Totale aanpassingen gemaakt</div>
                <div className="text-kk-caption text-[hsl(var(--kk-gray-500))]">127</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-kk-label font-semibold text-[hsl(var(--kk-eggplant))]">Totale groei</div>
                <div className="text-kk-caption text-[hsl(var(--kk-gray-500))]">+64%</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-kk-label font-semibold text-[hsl(var(--kk-eggplant))]">Geschatte groei aankomende maand</div>
                <div className="text-kk-caption text-[hsl(var(--kk-gray-500))]">+78%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right ml-8">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-2">
            <TrendingUp className="w-8 h-8 text-[hsl(var(--kk-violet))] opacity-60" />
          </div>
          <div className="text-kk-caption text-[hsl(var(--kk-gray-500))]">Trending up</div>
        </div>
      </div>
    </Card>
  );
};

export default HeroMetric;