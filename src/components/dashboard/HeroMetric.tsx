import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { HeroMetricData } from "@/types/dashboard";

interface HeroMetricProps {
  language?: 'nl' | 'en';
  data?: HeroMetricData | null;
  loading?: boolean;
}

const HeroMetric = ({ language = 'nl', data = null, loading = false }: HeroMetricProps) => {
  // When no data is provided, show neutral "N/A" placeholders
  const fallback: HeroMetricData = {
    title: 'N/A',
    percentage: 'N/A',
    improvement: 'N/A',
    trending: 'N/A',
  };

  const t = data ?? fallback;

  if (loading) {
    return (
      <Card className="p-6 lg:p-8 shadow-card animate-fade-in rounded-2xl border border-border bg-card">
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
    <Card className="p-6 lg:p-8 shadow-card animate-fade-in rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-lg lg:text-kk-h1 text-foreground mb-2" dangerouslySetInnerHTML={{ __html: t.title }}></h2>
            <div className="h-0.5 w-full max-w-md rounded-full bg-kk-gradient mb-4"></div>
          </div>
          
          <div className="mb-4 lg:mb-6">
            <div className="text-3xl lg:text-kk-kpi text-foreground mb-2">{t.percentage}</div>
            <p className="text-sm lg:text-kk-label text-muted-foreground">{t.improvement}</p>
          </div>
        </div>
        
        <div className="text-right ml-4 lg:ml-8">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-muted rounded-full flex items-center justify-center mb-2">
            <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-[hsl(var(--kk-violet))] opacity-60" />
          </div>
          <div className="text-xs lg:text-kk-caption text-muted-foreground">{t.trending}</div>
        </div>
      </div>
    </Card>
  );
};

export default HeroMetric;