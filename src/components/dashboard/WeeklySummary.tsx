import { Calendar, CheckCircle2, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { GradientCard } from "@/components/ui/gradient-card";
import type { WeeklySummaryData } from "@/types/dashboard";

interface WeeklySummaryProps {
  summary?: WeeklySummaryData | null;
  loading?: boolean;
}

const WeeklySummary = ({ summary = null, loading = false }: WeeklySummaryProps) => {
  if (loading) {
    return (
      <div className="space-y-6">
        <GradientCard>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Skeleton className="w-5 h-5" />
              <Skeleton className="h-6 w-40" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </GradientCard>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="space-y-6">
        <GradientCard>
          <div className="p-6">
            <EmptyState
              title="Geen maandoverzicht beschikbaar"
              description="Er zijn momenteel geen maandgegevens om weer te geven."
              icon="database"
            />
          </div>
        </GradientCard>
        
        {/* Feedback Card */}
        <GradientCard>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Hoe vond je deze maand?</h3>
            <p className="text-sm text-muted-foreground mb-4">Jouw feedback helpt ons om je nog beter te helpen</p>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-[hsl(var(--kk-orange)/0.3)] bg-[hsl(var(--kk-orange)/0.05)] hover:bg-[hsl(var(--kk-orange)/0.1)] transition-colors group">
                <ThumbsUp className="w-5 h-5 text-[hsl(var(--kk-orange))] group-hover:scale-110 transition-transform" />
                <span className="font-medium text-[hsl(var(--kk-orange))]">Super tevreden</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-border hover:border-muted-foreground hover:bg-muted transition-colors group">
                <ThumbsDown className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
                <span className="font-medium text-muted-foreground">Kan beter</span>
              </button>
            </div>
          </div>
        </GradientCard>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <GradientCard>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Maandoverzicht</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800">
              <h4 className="font-medium text-emerald-900 dark:text-emerald-300 mb-3">Deze maand hebben we bereikt:</h4>
              <div className="space-y-2">
                {summary.achievements.length > 0 ? (
                  summary.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-emerald-800 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{achievement}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-emerald-800 dark:text-emerald-400">N/A</p>
                )}
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h4 className="font-medium text-blue-900 dark:text-blue-300">Volgende maand focussen we op:</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-400">{summary.focusArea || 'N/A'}</p>
            </div>
          </div>
        </div>
      </GradientCard>

      {/* Feedback Card */}
      <GradientCard>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">Hoe vond je deze maand?</h3>
          <p className="text-sm text-muted-foreground mb-4">Jouw feedback helpt ons om je nog beter te helpen</p>
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-[hsl(var(--kk-orange)/0.3)] bg-[hsl(var(--kk-orange)/0.05)] hover:bg-[hsl(var(--kk-orange)/0.1)] transition-colors group">
              <ThumbsUp className="w-5 h-5 text-[hsl(var(--kk-orange))] group-hover:scale-110 transition-transform" />
              <span className="font-medium text-[hsl(var(--kk-orange))]">Super tevreden</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-border hover:border-muted-foreground hover:bg-muted transition-colors group">
              <ThumbsDown className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
              <span className="font-medium text-muted-foreground">Kan beter</span>
            </button>
          </div>
        </div>
      </GradientCard>
    </div>
  );
};

export default WeeklySummary;
