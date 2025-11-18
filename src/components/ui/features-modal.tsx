import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

interface FeaturesModalProps {
  children: React.ReactNode;
}

export const FeaturesModal: React.FC<FeaturesModalProps> = ({ children }) => {
  const features = [
    {
      title: "Automatische SEO-optimalisaties",
      description: "Onze AI voert continu technische verbeteringen uit, zoals meta-tags, interne links en snelheid, zonder dat jij ernaar hoeft om te kijken."
    },
    {
      title: "Snelle website-injectie",
      description: "Binnen 24 uur staat je site live met de eerste optimalisaties. Geen installaties of ingewikkelde stappen nodig."
    },
    {
      title: "Wekelijkse updates in je dashboard",
      description: "Elke week zie je precies welke verbeteringen zijn doorgevoerd, hoe je rankings zich ontwikkelen en waar nieuwe kansen liggen."
    },
    {
      title: "Heldere rapporten en trendanalyses",
      description: "Grafieken en rapporten maken je voortgang inzichtelijk. Geen vage SEO-jargon, maar duidelijk resultaat."
    },
    {
      title: "Technische support per e-mail",
      description: "Loop je ergens tegenaan? Ons supportteam reageert altijd binnen 24 uur."
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Wat zit er precies in KlikKlaar Basis?</DialogTitle>
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