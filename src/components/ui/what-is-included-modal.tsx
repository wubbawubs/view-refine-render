import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface WhatIsIncludedModalProps {
  children: React.ReactNode;
  plan?: 'basic' | 'pro' | 'enterprise';
}

export const WhatIsIncludedModal: React.FC<WhatIsIncludedModalProps> = ({ children, plan }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            {plan === 'basic' && 'Basic Plan - €99/maand'}
            {plan === 'pro' && 'Pro Plan - €149/maand'}
            {plan === 'enterprise' && 'Enterprise Plan - Coming Soon'}
            {!plan && 'Wat zit er precies in?'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {(!plan || plan === 'basic') && (
            <div className="space-y-4">
              {!plan && (
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Basic Plan – €99/maand
                </h3>
              )}
              <div className="grid gap-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Volledig automatische SEO + AI</p>
                    <p className="text-sm text-gray-600">Onze AI analyseert en optimaliseert je website 24/7. Van meta-tags tot interne links: alle technische verbeteringen gebeuren automatisch, zonder dat jij iets hoeft te doen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Updates elke 4 weken</p>
                    <p className="text-sm text-gray-600">Iedere maand nieuwe optimalisaties op basis van zoektrends, algoritme-updates en concurrentie. Je site blijft altijd voorop lopen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Real-time dashboards & rapportages</p>
                    <p className="text-sm text-gray-600">Volledige transparantie in je prestaties: rankings, verkeer en conversies direct inzichtelijk, inclusief maandelijkse trendanalyses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Diepgaande prestatie-analyses</p>
                    <p className="text-sm text-gray-600">Krijg helder inzicht in snelheid (Core Web Vitals), zoekwoorden en content-resultaten. Zie wat werkt en ontdek direct waar kansen liggen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Marktkansen & gap-insights</p>
                    <p className="text-sm text-gray-600">Ontdek waar jouw concurrenten kansen laten liggen. Onze AI toont direct winstgevende zoekwoorden en nieuwe groeimogelijkheden.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Altijd vindbaar, zonder gedoe</p>
                    <p className="text-sm text-gray-600">SEO-problemen? Altijd opgelost. Wij zorgen dat je site continu geoptimaliseerd blijft volgens de nieuwste best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(!plan || plan === 'pro') && (
            <div className="space-y-4">
              {!plan && (
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Pro Plan – €149/maand <span className="text-sm font-normal text-purple-600">(Meest gekozen)</span>
                </h3>
              )}
              <div className="grid gap-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Alles van Basic, plus premium power</p>
                    <p className="text-sm text-gray-600">Alle functies van het Basic Plan, aangevuld met extra's die zorgen voor sneller resultaat en maximale dominantie in jouw markt.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Updates elke 2 weken</p>
                    <p className="text-sm text-gray-600">Dubbele updatefrequentie = dubbel tempo. Elke 14 dagen optimalisaties en verbeteringen, afgestemd op de nieuwste zoektrends en algoritme-veranderingen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Uitgebreide concurrentie-analyse</p>
                    <p className="text-sm text-gray-600">Volledige inzichten in de SEO-strategieën van je concurrenten. Zie hun sterke en zwakke punten en ontdek direct waar jij ze kunt overtreffen. Inclusief wekelijkse updates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Tot 40% sneller resultaat</p>
                    <p className="text-sm text-gray-600">Dankzij de verhoogde optimalisatiefrequentie zie je gemiddeld 40% sneller vooruitgang in rankings en traffic. Ideaal voor ambitieuze bedrijven die niet willen wachten.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Contentstrategie & marktdominantie</p>
                    <p className="text-sm text-gray-600">Strategisch contentadvies en slimme topic-clustering helpen je niet alleen beter gevonden te worden, maar ook de autoriteit in je branche te claimen.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(!plan || plan === 'enterprise') && (
            <div className="space-y-4">
              {!plan && (
                <h3 className="text-lg font-semibold text-gray-500 border-b pb-2">
                  Enterprise Plan - Coming Soon
                </h3>
              )}
              <div className="text-center text-gray-500 py-4">
                <p>Meer functies en maatwerk voor grotere organisaties.</p>
                <p className="text-sm">Neem contact op voor meer informatie.</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};