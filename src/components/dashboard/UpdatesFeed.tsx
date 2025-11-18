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

const UpdatesFeed = () => {
  const updates = [
    {
      type: "ranking",
      title: "Verwachte ranking stijgt naar #3 voor 'SEO software Nederland'",
      impact: "Projectie: stabilisatie rond positie #3 in oktober",
      timestamp: "1 uur geleden",
      badge: "Ranking",
      details: "Je ranking voor het zoekwoord 'SEO software Nederland' is gestegen van positie #7 naar #5. Op basis van de huidige trend verwachten we dat je binnen 2-3 weken positie #3 bereikt. Focus op het verbeteren van je backlink profiel om deze positie te behouden."
    },
    {
      type: "technical", 
      title: "Meta descriptions geoptimaliseerd voor 15 pagina's",
      impact: "Verbeterde click-through rates",
      timestamp: "2 dagen geleden",
      badge: "Tech SEO",
      details: "Onze AI heeft automatisch 15 meta descriptions herschreven om beter aan te sluiten bij zoekintentie. De nieuwe descriptions zijn geoptimaliseerd voor een lengte van 150-160 karakters en bevatten relevante keywords. Verwachte CTR verbetering: +12%."
    },
    {
      type: "content",
      title: "AI-gedreven H1 optimalisaties actief op Homepage, Prijzen, Contact",
      impact: "Geoptimaliseerde content voor 'automatische SEO'",
      timestamp: "6 uren geleden", 
      badge: "Content",
      details: "De H1 tags op je belangrijkste pagina's zijn geoptimaliseerd voor betere keyword targeting. Wijzigingen: Homepage (nu gericht op 'automatische SEO software'), Prijzen pagina (focus op 'betaalbare SEO oplossingen'), Contact pagina (lokale SEO optimalisatie)."
    },
    {
      type: "local",
      title: "Schema markup voor SaaS software toegevoegd",
      impact: "Lokale zichtbaarheid voor B2B bedrijven verbeterd",
      timestamp: "3 dagen geleden",
      badge: "Schema",
      details: "We hebben SoftwareApplication schema markup geïmplementeerd inclusief aggregateRating, offers, en applicationCategory. Dit helpt Google om je software beter te begrijpen en kan leiden tot rich snippets in zoekresultaten met sterrenbeoordelingen."
    }
  ];

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