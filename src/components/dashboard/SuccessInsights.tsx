import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Nieuwe ranking: #3 voor 'kapper Hoorn'",
    description: "Positie verbeterd met +2 plekken. Geschatte 15% meer organisch verkeer.",
    time: "2 uur geleden",
    type: "success" as const
  },
  {
    icon: Users,
    title: "31% meer organische zichtbaarheid",
    description: "Verbeterde rankings voor 47 zoektermen in de afgelopen week.",
    time: "1 dag geleden", 
    type: "improvement" as const
  },
  {
    icon: Target,
    title: "2,347 nieuwe organische bezoekers", 
    description: "47% van het verkeer komt uit lokale zoekopdrachten.",
    time: "Deze week",
    type: "metric" as const
  },
  {
    icon: Zap,
    title: "114 technische optimalisaties uitgevoerd",
    description: "Page speed verbeterd naar 94/100. Core Web Vitals geoptimaliseerd.",
    time: "1 week geleden",
    type: "automation" as const
  }
];

const typeStyles = {
  success: "bg-growth",
  improvement: "bg-neutral-soft", 
  metric: "bg-info",
  automation: "bg-warning-soft"
};

const SuccessInsights = () => {
  return (
    <Card className="p-6 border bg-white shadow-enterprise animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Recente updates</h3>
            <p className="text-sm text-muted-foreground">Data-driven inzichten van deze week</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-background-subtle hover:bg-muted/30 transition-colors duration-200 border border-border/50"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeStyles[insight.type]}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground mb-1 text-sm">{insight.title}</h4>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{insight.description}</p>
                <span className="text-xs text-muted-foreground/60">{insight.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default SuccessInsights;