import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

interface FeaturesModalProProps {
  children: React.ReactNode;
}

export const FeaturesModalPro: React.FC<FeaturesModalProProps> = ({ children }) => {
  const features = [
    {
      title: "Alles van KlikKlaar Basis",
      description: "Alle SEO-optimalisaties, snelle website-injectie, wekelijkse updates, rapporten en e-mail support."
    },
    {
      title: "Uitgebreide concurrentieanalyse",
      description: "We onderzoeken je 10 belangrijkste concurrenten en leggen hun SEO-strategieën bloot, zodat jij ze gericht kunt overtreffen."
    },
    {
      title: "Keyword gap-analyse",
      description: "Ontdek zoekwoorden waarop je concurrenten scoren, maar jij nog niet. Zo benut je direct nieuwe groeikansen."
    },
    {
      title: "Maandelijkse competitor monitoring",
      description: "Elke maand ontvang je een overzicht van de bewegingen van je concurrenten, inclusief adviezen om snel te reageren."
    },
    {
      title: "Geavanceerde ranking tracking",
      description: "Monitor niet alleen je eigen posities, maar ook die van je concurrenten op cruciale zoekwoorden."
    },
    {
      title: "Dedicated accountmanager",
      description: "Een vaste contactpersoon die je persoonlijk begeleidt en binnen 4 uur reageert op je vragen."
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Wat zit er precies in KlikKlaar Pro?</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-5 h-5 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-card-foreground mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};