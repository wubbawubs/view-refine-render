import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, Settings, MapPin } from "lucide-react";

const UpdatesFeed = () => {
  const updates = [
    {
      type: "ranking",
      title: "KlikKlaar.io ranking stijgt naar #2 voor 'SEO software Nederland' (+3)",
      impact: "+45% verwacht organisch verkeer",
      timestamp: "1 uur geleden",
      badge: "Ranking"
    },
    {
      type: "technical", 
      title: "Meta descriptions geoptimaliseerd voor 15 pagina's",
      impact: "Verbeterde click-through rates",
      timestamp: "2 dagen geleden",
      badge: "Tech SEO"
    },
    {
      type: "content",
      title: "AI-gedreven H1 optimalisaties actief op Homepage, Prijzen, Contact",
      impact: "Geoptimaliseerde content voor 'automatische SEO'",
      timestamp: "6 uren geleden", 
      badge: "Content"
    },
    {
      type: "local",
      title: "Schema markup voor SaaS software toegevoegd",
      impact: "Lokale zichtbaarheid voor B2B bedrijven verbeterd",
      timestamp: "3 dagen geleden",
      badge: "Schema"
    }
  ];

  return (
    <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
      <div className="mb-6 pb-4 border-b border-border/50">
        <h3 className="text-kk-h2 text-foreground">KlikKlaar.io SEO Updates</h3>
        <p className="text-kk-caption text-muted-foreground mt-1">AI-gedreven optimalisaties en prestaties van deze week</p>
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