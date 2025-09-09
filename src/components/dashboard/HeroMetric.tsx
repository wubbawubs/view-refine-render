import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const HeroMetric = () => {
  return (
    <Card className="p-8 bg-kk-gray-50 border-kk-gray-200 shadow-hero mb-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-h2 text-kk-gray-600 mb-2">Jouw zichtbaarheid deze maand</h2>
          <div className="text-hero text-foreground mb-3">+64%</div>
          <p className="text-body text-kk-gray-500 mb-6">Verbetering t.o.v. vorige maand. Updates elke week.</p>
          
          {/* Benchmark Pills */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-kk-gray-200">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-h3 text-foreground">Jouw groei</div>
                <div className="text-small text-kk-gray-500">+64%</div>
              </div>
              <div className="w-px h-8 bg-kk-gray-200"></div>
              <div className="text-center">
                <div className="text-h3 text-kk-gray-500">Concurrentgemiddelde</div>
                <div className="text-small text-kk-gray-500">+26%</div>
              </div>
            </div>
            <div className="ml-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-small font-medium bg-kk-success/10 text-kk-success">
                24% beter dan gemiddeld
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-right ml-8">
          <div className="w-16 h-16 bg-kk-primary rounded-full flex items-center justify-center mb-2">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div className="text-small text-kk-gray-500">Trending up</div>
        </div>
      </div>
    </Card>
  );
};

export default HeroMetric;