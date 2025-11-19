import { Card } from "@/components/ui/card";
import { AlertTriangle, Info } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import type { ActionAlert } from "@/types/dashboard";

interface ActionsAlertsProps {
  alerts?: ActionAlert[];
  loading?: boolean;
  error?: Error | null;
}

const ActionsAlerts = ({ alerts = [], loading = false, error = null }: ActionsAlertsProps) => {
  if (loading) {
    return (
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
        <div className="mb-6">
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Skeleton className="w-5 h-5 mt-0.5" />
              <div className="flex-1">
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
              <Skeleton className="w-20 h-8" />
            </div>
          ))}
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
        <EmptyState
          title="Unable to load alerts"
          description="There was an error loading action alerts. Please try again."
          icon="alert"
        />
      </Card>
    );
  }

  if (!alerts || alerts.length === 0) {
    return (
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
        <div className="mb-6">
          <h3 className="text-kk-h2 text-foreground">Belangrijke acties</h3>
          <p className="text-kk-caption text-muted-foreground mt-1">Items die aandacht vragen</p>
        </div>
        <EmptyState
          title="Geen acties vereist"
          description="Er zijn momenteel geen actiepunten die aandacht vragen."
          icon="database"
        />
      </Card>
    );
  }

  return (
    <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
      <div className="mb-6">
        <h3 className="text-kk-h2 text-foreground">Belangrijke acties</h3>
        <p className="text-kk-caption text-muted-foreground mt-1">Items die aandacht vragen</p>
      </div>
      
      <div className="space-y-4">
        {alerts.map((action, index) => {
          const Icon = action.severity === "warning" ? AlertTriangle : Info;
          const isWarning = action.severity === "warning";
          
          return (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Icon className={`w-5 h-5 mt-0.5 ${isWarning ? 'text-[hsl(var(--kk-warning))]' : 'text-[hsl(var(--kk-violet))]'}`} />
              
              <div className="flex-1">
                <h4 className="text-kk-label font-semibold text-foreground mb-1">
                  {action.title}
                </h4>
                <p className="text-kk-caption text-muted-foreground">
                  {action.description}
                </p>
              </div>
              
              <button className="px-3 py-1.5 text-kk-caption font-medium text-[hsl(var(--kk-violet))] bg-card border border-[hsl(var(--kk-violet))] rounded-lg hover:bg-[hsl(var(--kk-violet))] hover:text-white transition-colors">
                {action.cta}
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ActionsAlerts;
