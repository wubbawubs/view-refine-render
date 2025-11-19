import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
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
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
        <EmptyState
          title="Unable to load updates"
          description="There was an error loading the updates feed. Please try again."
          icon="alert"
        />
      </Card>
    );
  }

  if (!updates || updates.length === 0) {
    return (
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
        <div className="mb-6 pb-4 border-b border-border/50">
          <h3 className="text-kk-h2 text-foreground">Recente updates</h3>
          <p className="text-kk-caption text-muted-foreground mt-1">AI-gedreven optimalisaties van deze week</p>
        </div>
        <EmptyState
          title="Geen updates beschikbaar"
          description="Er zijn momenteel geen recente updates om te tonen."
          icon="file"
        />
      </Card>
    );
  }

  return (
    <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
      <div className="mb-6 pb-4 border-b border-border/50">
        <h3 className="text-kk-h2 text-foreground">Recente updates</h3>
        <p className="text-kk-caption text-muted-foreground mt-1">AI-gedreven optimalisaties van deze week</p>
      </div>
      
      <div className="space-y-6">
        {updates.map((update, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="bg-muted/20 rounded-lg p-4 border border-border/30 hover:border-[hsl(var(--kk-violet))]/50 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-kk-caption font-medium bg-muted/60 text-muted-foreground border border-border/30">
                    {update.badge}
                  </span>
                  <span className="text-kk-caption text-muted-foreground">{update.timestamp}</span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-kk-label font-semibold text-foreground leading-tight">
                    {update.title}
                  </h4>
                  
                  <p className="text-kk-caption text-muted-foreground">
                    {update.impact}
                  </p>
                  
                  <button className="text-kk-caption text-[hsl(var(--kk-violet))] hover:underline font-medium">
                    Bekijk details →
                  </button>
                </div>
              </div>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{update.title}</DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {update.badge} • {update.timestamp}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                  <p className="text-muted-foreground">
                    {update.impact}
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Details</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {update.details}
                  </p>
                </div>
                
                <div className="flex gap-3 pt-4 border-t">
                  <Button className="flex-1">
                    Bekijk volledige analyse
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Exporteer rapport
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Card>
  );
};

export default UpdatesFeed;