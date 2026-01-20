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
    <Card className="p-6 shadow-lg animate-fade-in rounded-2xl border border-border bg-card">
      <div className="mb-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-2 mb-1">
          <Lightbulb className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Website suggesties</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Hier delen we content ideeën voor jouw website
        </p>
      </div>

      <div className="space-y-3">
        {suggestions.map((suggestion) => {
          const IconComponent = iconMap[suggestion.icon as keyof typeof iconMap] || Lightbulb;
          return (
            <Dialog key={suggestion.id}>
              <DialogTrigger asChild>
                <div className="bg-muted/30 rounded-xl p-4 border border-border hover:border-primary/40 hover:bg-muted/50 transition-all cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h4 className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                          {suggestion.title}
                        </h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                          suggestion.priority === "Hoog" 
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" 
                            : suggestion.priority === "Gemiddeld"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}>
                          {suggestion.priority}
                        </span>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-2">
                        {suggestion.category} • {suggestion.estimatedImpact}
                      </p>
                      
                      <button className="text-xs text-primary hover:underline font-medium">
                        Bekijk details →
                      </button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">{suggestion.title}</DialogTitle>
                  <DialogDescription className="text-sm mt-2">
                    {suggestion.category} • Prioriteit: {suggestion.priority}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-5 mt-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Beschrijving</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {suggestion.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Focus keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {suggestion.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1 text-sm">Verwachte impact</h4>
                    <p className="text-primary font-semibold">
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
