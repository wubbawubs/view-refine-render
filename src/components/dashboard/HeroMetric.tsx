import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const HeroMetric = () => {
  return (
    <Card className="p-8 mb-8 shadow-card animate-fade-in rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-kk-h1 text-kk-eggplant mb-2">Jouw zichtbaarheid deze maand</h2>
          <div className="mt-2 h-[2px] bg-kk-gradient rounded-full w-24 mb-4"></div>
          <div className="text-kk-kpi text-kk-eggplant mb-3">+64%</div>
          <p className="text-kk-label text-kk-gray-500 mb-6">Verbetering t.o.v. vorige maand. Updates elke week.</p>
          
          {/* Benchmark Pills */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-kk-gray-300">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-kk-label font-semibold text-kk-eggplant">Jouw groei</div>
                <div className="text-kk-caption text-kk-gray-500">+64%</div>
              </div>
              <div className="w-px h-8 bg-kk-gray-300"></div>
              <div className="text-center">
                <div className="text-kk-label font-semibold text-kk-gray-700">Concurrentgemiddelde</div>
                <div className="text-kk-caption text-kk-gray-500">+26%</div>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 bg-kk-gradient rounded-full"></div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-kk-caption font-medium border border-kk-gray-300 text-kk-gray-700">
                24% beter dan gemiddeld
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-right ml-8">
          <div className="w-16 h-16 bg-kk-gray-100 rounded-full flex items-center justify-center mb-2">
            <TrendingUp className="w-8 h-8 text-kk-violet opacity-60" />
          </div>
          <div className="text-kk-caption text-kk-gray-500">Trending up</div>
        </div>
      </div>
    </Card>
  );
};

export default HeroMetric;