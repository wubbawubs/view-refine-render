import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, Settings, MapPin } from "lucide-react";

const UpdatesFeed = () => {
  const updates = [
    {
      type: "ranking",
      title: "Nieuwe ranking: #3 voor 'kapper hoorn' (+2)",
      impact: "+15% verwacht organisch verkeer",
      timestamp: "2 uur geleden",
      badge: "Ranking"
    },
    {
      type: "technical", 
      title: "Schema markup toegevoegd op 12 pagina's",
      impact: "Verbeterde rich snippets",
      timestamp: "3 dagen geleden",
      badge: "Tech fix"
    },
    {
      type: "content",
      title: "Toplayer actief op Services, About, Home",
      impact: "Geoptimaliseerde content",
      timestamp: "1 dag geleden", 
      badge: "Content"
    },
    {
      type: "local",
      title: "Google My Business profiel geüpdatet",
      impact: "Lokale zichtbaarheid verbeterd",
      timestamp: "45 minuten geleden",
      badge: "Local"
    }
  ];

  return (
    <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
      <div className="mb-6 pb-4 border-b border-border/50">
        <h3 className="text-kk-h2 text-foreground">Recente updates</h3>
        <p className="text-kk-caption text-muted-foreground mt-1">Data-gedreven inzichten van deze week</p>
      </div>
      
      <div className="space-y-6">
        {updates.map((update, index) => (
          <div key={index} className="bg-muted/20 rounded-lg p-4 border border-border/30">
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
                Bekijk details
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpdatesFeed;