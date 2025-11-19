import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle2, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import type { WeeklySummaryData } from "@/types/dashboard";

interface WeeklySummaryProps {
  summary?: WeeklySummaryData | null;
  loading?: boolean;
}

const WeeklySummary = ({ summary = null, loading = false }: WeeklySummaryProps) => {
  if (loading) {
    return (
      <div className="space-y-6">
        <Card className="p-6 border bg-card shadow-md animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <Skeleton className="w-5 h-5" />
            <Skeleton className="h-6 w-40" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </Card>
        <Card className="p-6 border bg-card shadow-md animate-slide-up">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="flex gap-3">
            <Skeleton className="h-16 flex-1" />
            <Skeleton className="h-16 flex-1" />
          </div>
        </Card>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="space-y-6">
        <Card className="p-6 border bg-card shadow-md animate-slide-up">
          <EmptyState
            title="Geen weekoverzicht beschikbaar"
            description="Er zijn momenteel geen weekgegevens om weer te geven."
            icon="database"
          />
        </Card>
        
        {/* Feedback Card - Always shown */}
        <Card className="p-6 border bg-card shadow-md animate-slide-up">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">Hoe vond je deze week?</h3>
          <p className="text-sm text-muted-foreground mb-4">Jouw feedback helpt ons om je nog beter te helpen</p>
          
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors group">
              <ThumbsUp className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-orange-700">Super tevreden</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-border hover:border-muted-foreground hover:bg-muted transition-colors group">
              <ThumbsDown className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
              <span className="font-medium text-muted-foreground">Kan beter</span>
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Week Summary Card */}
      <Card className="p-6 border bg-card shadow-md animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-5 h-5 text-warning" />
          <h3 className="text-lg font-semibold text-card-foreground">
            Week {summary.weekNumber} Samenvatting
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <h4 className="font-medium text-green-900 mb-3">Deze week hebben we bereikt:</h4>
            <div className="space-y-2">
              {summary.achievements.length > 0 ? (
                summary.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-green-800">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{achievement}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-green-800">N/A</p>
              )}
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-blue-900">Volgende week focussen we op:</h4>
            </div>
            <p className="text-sm text-blue-800">
              {summary.focusArea || 'N/A'}
            </p>
          </div>
        </div>
      </Card>

      {/* Feedback Card */}
      <Card className="p-6 border bg-card shadow-md animate-slide-up">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">Hoe vond je deze week?</h3>
        <p className="text-sm text-muted-foreground mb-4">Jouw feedback helpt ons om je nog beter te helpen</p>
        
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors group">
            <ThumbsUp className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-orange-700">Super tevreden</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-border hover:border-muted-foreground hover:bg-muted transition-colors group">
            <ThumbsDown className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
            <span className="font-medium text-muted-foreground">Kan beter</span>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default WeeklySummary;