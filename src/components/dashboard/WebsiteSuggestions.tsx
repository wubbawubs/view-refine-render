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

const WebsiteSuggestions = () => {
  const suggestions = [
    {
      id: 1,
      title: "Blog: 'Top 10 SEO trends voor 2025'",
      category: "Content Marketing",
      priority: "Hoog",
      description: "Schrijf een uitgebreide blog over de belangrijkste SEO trends in 2025. Focus op AI-gestuurde optimalisatie en voice search.",
      keywords: ["SEO trends", "AI optimalisatie", "voice search"],
      estimatedImpact: "+15% organisch verkeer",
      icon: FileText,
    },
    {
      id: 2,
      title: "Landingspagina: 'Automatische SEO voor webshops'",
      category: "Conversion",
      priority: "Hoog",
      description: "Creëer een gerichte landingspagina voor e-commerce bedrijven. Benadruk automatische product optimalisatie en structured data.",
      keywords: ["webshop SEO", "e-commerce optimalisatie", "productpagina's"],
      estimatedImpact: "+25% conversies",
      icon: Target,
    },
    {
      id: 3,
      title: "Case Study: 'Hoe Bedrijf X 200% meer bezoekers kreeg'",
      category: "Social Proof",
      priority: "Middel",
      description: "Documenteer een succesverhaal van een bestaande klant. Gebruik concrete cijfers en voor-en-na screenshots.",
      keywords: ["case study", "klant succes", "SEO resultaten"],
      estimatedImpact: "+40% trust signals",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "FAQ pagina: 'Alles over lokale SEO'",
      category: "Support Content",
      priority: "Middel",
      description: "Maak een uitgebreide FAQ over lokale SEO optimalisatie. Beantwoord veelgestelde vragen met rich snippets.",
      keywords: ["lokale SEO", "Google Maps", "bedrijfsprofiel"],
      estimatedImpact: "+10% featured snippets",
      icon: Lightbulb,
    }
  ];

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
          const Icon = suggestion.icon;
          return (
            <Dialog key={suggestion.id}>
              <DialogTrigger asChild>
                <div className="bg-muted/20 rounded-lg p-4 border border-border/30 hover:border-[hsl(var(--kk-violet))]/50 transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-[hsl(var(--kk-violet))]/10 text-[hsl(var(--kk-violet))] group-hover:bg-[hsl(var(--kk-violet))]/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-kk-label font-semibold text-foreground leading-tight">
                          {suggestion.title}
                        </h4>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap ${
                          suggestion.priority === "Hoog" 
                            ? "bg-red-500/10 text-red-600 dark:text-red-400" 
                            : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
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
