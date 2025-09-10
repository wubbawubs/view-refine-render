import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface HeroMetricProps {
  language?: 'nl' | 'en';
}

const HeroMetric = ({ language = 'nl' }: HeroMetricProps) => {
  const texts = {
    nl: {
      title: 'Jouw zichtbaarheid deze maand',
      percentage: '+64%',
      improvement: 'Verbetering t.o.v. vorige maand.',
      trending: 'Trending up'
    },
    en: {
      title: 'Your visibility this month',
      percentage: '+64%',
      improvement: 'Improvement vs. previous month.',
      trending: 'Trending up'
    }
  };

  const t = texts[language];

  return (
    <Card className="p-6 lg:p-8 shadow-card animate-fade-in rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-lg lg:text-kk-h1 text-foreground mb-2">{t.title}</h2>
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