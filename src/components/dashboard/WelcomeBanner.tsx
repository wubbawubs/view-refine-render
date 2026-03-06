import { Sparkles, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface WelcomeBannerProps {
  customerName?: string;
  seoScore?: number;
  optimizationsThisWeek?: number;
}

const WelcomeBanner = ({ 
  customerName = "daar", 
  seoScore = 0, 
  optimizationsThisWeek = 0 
}: WelcomeBannerProps) => {
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Goedemorgen" : hour < 18 ? "Goedemiddag" : "Goedenavond";

  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-[hsl(var(--kk-violet)/0.08)] via-[hsl(var(--kk-fuchsia)/0.05)] to-[hsl(var(--kk-orange)/0.06)] dark:from-[hsl(var(--kk-violet)/0.15)] dark:via-[hsl(var(--kk-fuchsia)/0.08)] dark:to-[hsl(var(--kk-orange)/0.1)] shadow-luxury animate-fade-in rounded-2xl">
      {/* Decorative orbs */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[hsl(var(--kk-violet)/0.1)] rounded-full blur-3xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[hsl(var(--kk-orange)/0.08)] rounded-full blur-2xl" />
      
      <div className="relative p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--kk-violet))]">
                Dashboard
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">
              {greeting}, {customerName} 👋
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg">
              Hier is een overzicht van jouw SEO prestaties. We werken continu aan het verbeteren van jouw online zichtbaarheid.
            </p>
          </div>

          {/* Quick action chips */}
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex gap-2 flex-wrap">
              <Button 
                size="sm" 
                variant="outline"
                className="text-xs h-8 rounded-full border-[hsl(var(--kk-violet)/0.3)] hover:bg-[hsl(var(--kk-violet)/0.1)] hover:border-[hsl(var(--kk-violet)/0.5)] transition-all"
                onClick={() => navigate("/aanpassingen")}
              >
                <Zap className="w-3 h-3 mr-1" />
                Aanpassingen
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="text-xs h-8 rounded-full border-[hsl(var(--kk-orange)/0.3)] hover:bg-[hsl(var(--kk-orange)/0.1)] hover:border-[hsl(var(--kk-orange)/0.5)] transition-all"
                onClick={() => navigate("/seo-plan")}
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                SEO Plan
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeBanner;
