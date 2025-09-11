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
      title: "SEO-optimalisaties automatisch",
      description: "Wij zorgen voor alle technische SEO-aanpassingen aan je website zonder dat jij er iets voor hoeft te doen."
    },
    {
      title: "Snelle website-injectie (zonder gedoe)",
      description: "Je website wordt binnen 24 uur geoptimaliseerd. Geen ingewikkelde installaties of handmatige aanpassingen."
    },
    {
      title: "Wekelijkse updates in dashboard",
      description: "Elk week krijg je een overzicht van je SEO-voortgang, rankings en nieuwe optimalisaties."
    },
    {
      title: "Rapporten en voortgang inzichtelijk",
      description: "Duidelijke grafieken en rapporten tonen je precies hoe je website presteert in zoekmachines."
    },
    {
      title: "Technische support per e-mail",
      description: "Heb je vragen? Ons team helpt je binnen 24 uur via e-mail."
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