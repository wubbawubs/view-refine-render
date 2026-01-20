import { TrendingUp, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { HeroMetricData } from "@/types/dashboard";

interface HeroMetricProps {
  language?: 'nl' | 'en';
  data?: HeroMetricData | null;
  loading?: boolean;
}

const HeroMetric = ({ language = 'nl', data = null, loading = false }: HeroMetricProps) => {
  const fallback: HeroMetricData = {
    title: 'N/A',
    percentage: 'N/A',
    improvement: 'N/A',
    trending: 'N/A',
  };

  const t = data ?? fallback;

  if (loading) {
    return (
      <Card className="p-6 lg:p-8 shadow-lg animate-fade-in rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/20">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-12 w-32 mb-2" />
            <Skeleton className="h-5 w-48" />
          </div>
          <Skeleton className="w-16 h-16 rounded-full" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="relative overflow-hidden p-6 lg:p-8 shadow-lg animate-fade-in rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-xl" />
      
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <div className="mb-4 lg:mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">AI Insights</span>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2" dangerouslySetInnerHTML={{ __html: t.title }}></h2>
            <div className="h-1 w-full max-w-md rounded-full bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
          </div>
          
          <div className="mb-4 lg:mb-6">
            <div className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2">{t.percentage}</div>
            <p className="text-sm lg:text-base text-muted-foreground">{t.improvement}</p>
          </div>
        </div>
        
        <div className="text-right ml-4 lg:ml-8">
          <div className="w-14 h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-3 border border-primary/20 shadow-lg">
            <TrendingUp className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
          </div>
          <div className="text-xs lg:text-sm text-muted-foreground font-medium">{t.trending}</div>
        </div>
      </div>
    </Card>
  );
};

export default HeroMetric;