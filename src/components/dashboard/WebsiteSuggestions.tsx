import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, FileText, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import type { WebsiteSuggestion } from "@/types/dashboard";

interface WebsiteSuggestionsProps {
  suggestions?: WebsiteSuggestion[];
  loading?: boolean;
  error?: Error | null;
}

const iconMap = {
  FileText,
  Target,
  TrendingUp,
  Lightbulb,
};

const WebsiteSuggestions = ({ suggestions = [], loading = false, error = null }: WebsiteSuggestionsProps) => {
  if (loading) {
    return (
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
        <div className="mb-6 pb-4 border-b border-border/50">
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted/20 rounded-lg p-4 border border-border/30">
              <div className="flex items-start gap-4">
                <Skeleton className="w-9 h-9 rounded-lg" />
                <div className="flex-1">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
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
          title="Unable to load suggestions"
          description="There was an error loading website suggestions. Please try again."
          icon="alert"
        />
      </Card>
    );
  }

  if (!suggestions || suggestions.length === 0) {
    return (
      <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
        <div className="mb-6 pb-4 border-b border-border/50">
          <h3 className="text-kk-h2 text-foreground">Website suggesties</h3>
          <p className="text-kk-caption text-muted-foreground mt-1">
            Hier delen we content ideeën voor jouw website
          </p>
        </div>
        <EmptyState
          title="Geen suggesties beschikbaar"
          description="Er zijn momenteel geen website suggesties om te tonen."
          icon="file"
        />
      </Card>
    );
  }

  return (
    <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
      <div className="mb-6 pb-4 border-b border-border/50">
        <h3 className="text-kk-h2 text-foreground">Website suggesties</h3>
        <p className="text-kk-caption text-muted-foreground mt-1">
          Hier delen we content ideeën voor jouw website
        </p>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => {
          const IconComponent = iconMap[suggestion.icon as keyof typeof iconMap] || Lightbulb;
          return (
            <Dialog key={suggestion.id}>
              <DialogTrigger asChild>
                <div className="bg-muted/20 rounded-lg p-4 border border-border/30 hover:border-[hsl(var(--kk-violet))]/50 transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-[hsl(var(--kk-violet))]/10 text-[hsl(var(--kk-violet))] group-hover:bg-[hsl(var(--kk-violet))]/20 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-kk-label font-semibold text-foreground leading-tight">
                          {suggestion.title}
                        </h4>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap ${
                          suggestion.priority === "Hoog" 
                            ? "bg-red-500/10 text-red-600 dark:text-red-400" 
                            : suggestion.priority === "Gemiddeld"
                            ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                            : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        }`}>
                          {suggestion.priority}
                        </span>
                      </div>
                      
                      <p className="text-kk-caption text-muted-foreground mb-2">
                        {suggestion.category} • {suggestion.estimatedImpact}
                      </p>
                      
                      <button className="text-kk-caption text-[hsl(var(--kk-violet))] hover:underline font-medium">
                        Bekijk details →
                      </button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{suggestion.title}</DialogTitle>
                  <DialogDescription className="text-base mt-2">
                    {suggestion.category} • Prioriteit: {suggestion.priority}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Beschrijving</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {suggestion.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Focus keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {suggestion.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground border border-border"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-[hsl(var(--kk-violet))]/5 border border-[hsl(var(--kk-violet))]/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">Verwachte impact</h4>
                    <p className="text-[hsl(var(--kk-violet))] font-medium">
                      {suggestion.estimatedImpact}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t">
                    <Button className="flex-1">
                      Start met schrijven
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Plan voor later
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </Card>
  );
};

export default WebsiteSuggestions;
