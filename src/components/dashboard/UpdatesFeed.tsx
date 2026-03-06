import { TrendingUp } from "lucide-react";
import { GradientCard } from "@/components/ui/gradient-card";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import type { Update } from "@/types/dashboard";

interface UpdatesFeedProps {
  updates?: Update[];
  loading?: boolean;
  error?: Error | null;
}

const UpdatesFeed = ({ updates = [], loading = false, error = null }: UpdatesFeedProps) => {
  if (loading) {
    return (
      <GradientCard>
        <div className="p-6">
          <div className="mb-6 pb-4 border-b border-border/50">
            <Skeleton className="h-6 w-40 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted/20 rounded-lg p-4 border border-border/30">
                <Skeleton className="h-4 w-20 mb-3" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </GradientCard>
    );
  }

  if (error) {
    return (
      <GradientCard>
        <div className="p-6">
          <EmptyState title="Unable to load updates" description="There was an error loading the updates feed." icon="alert" />
        </div>
      </GradientCard>
    );
  }

  if (!updates || updates.length === 0) {
    return (
      <GradientCard>
        <div className="p-6">
          <div className="mb-6 pb-4 border-b border-border/50">
            <h3 className="text-kk-h2 text-foreground">Recente updates</h3>
            <p className="text-kk-caption text-muted-foreground mt-1">AI-gedreven optimalisaties van deze week</p>
          </div>
          <EmptyState title="Geen updates beschikbaar" description="Er zijn momenteel geen recente updates om te tonen." icon="file" />
        </div>
      </GradientCard>
    );
  }

  return (
    <GradientCard>
      <div className="p-6">
        <div className="mb-6 pb-4 border-b border-border/50">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Recente updates</h3>
          </div>
          <p className="text-sm text-muted-foreground">AI-gedreven optimalisaties van deze week</p>
        </div>
        
        <div className="space-y-3">
          {updates.map((update, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="bg-muted/30 rounded-xl p-4 border border-border hover:border-primary/40 hover:bg-muted/50 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">{update.badge}</span>
                    <span className="text-xs text-muted-foreground">{update.timestamp}</span>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">{update.title}</h4>
                    <p className="text-xs text-muted-foreground">{update.impact}</p>
                    <button className="text-xs text-primary hover:underline font-medium">Bekijk details →</button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{update.title}</DialogTitle>
                  <DialogDescription className="text-base mt-2">{update.badge} • {update.timestamp}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div><h4 className="font-semibold text-foreground mb-2">Impact</h4><p className="text-muted-foreground">{update.impact}</p></div>
                  <div className="bg-muted/30 rounded-lg p-4"><h4 className="font-semibold text-foreground mb-2">Details</h4><p className="text-muted-foreground leading-relaxed">{update.details}</p></div>
                  <div className="flex gap-3 pt-4 border-t">
                    <Button className="flex-1">Bekijk volledige analyse</Button>
                    <Button variant="outline" className="flex-1">Exporteer rapport</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </GradientCard>
  );
};

export default UpdatesFeed;
