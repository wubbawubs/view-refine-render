import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Target } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import type { SuccessInsight } from "@/types/dashboard";

interface SuccessInsightsProps {
  insights?: SuccessInsight[];
  loading?: boolean;
  error?: Error | null;
}

const iconMap = {
  TrendingUp,
  Users,
  Target,
  Zap,
};

const typeStyles = {
  success: "bg-growth",
  improvement: "bg-neutral-soft", 
  metric: "bg-info",
  automation: "bg-warning-soft"
};

const SuccessInsights = ({ insights = [], loading = false, error = null }: SuccessInsightsProps) => {
  if (loading) {
    return (
      <Card className="p-6 border bg-white shadow-enterprise animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <div>
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-background-subtle border border-border/50">
              <Skeleton className="w-10 h-10 rounded-lg" />
              <div className="flex-1">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-full mb-2" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6 border bg-white shadow-enterprise animate-slide-up">
        <EmptyState
          title="Unable to load insights"
          description="There was an error loading success insights. Please try again."
          icon="alert"
        />
      </Card>
    );
  }

  if (!insights || insights.length === 0) {
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
        <EmptyState
          title="Geen inzichten beschikbaar"
          description="Er zijn momenteel geen updates om weer te geven."
          icon="database"
        />
      </Card>
    );
  }

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
          const IconComponent = iconMap[insight.icon as keyof typeof iconMap] || TrendingUp;
          return (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-background-subtle hover:bg-muted/30 transition-colors duration-200 border border-border/50"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${typeStyles[insight.type]}`}>
                <IconComponent className="w-5 h-5 text-white" />
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
