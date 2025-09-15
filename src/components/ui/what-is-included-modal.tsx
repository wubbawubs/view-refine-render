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
                  Basic Plan - €99/maand
                </h3>
              )}
              <div className="grid gap-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Volledig automatische SEO + AI optimalisatie</p>
                    <p className="text-sm text-gray-600">Onze geavanceerde AI analyseert continu je website, detecteert SEO-problemen en voert automatisch technische optimalisaties uit. Van meta-tags tot interne linkstructuur - alles wordt geoptimaliseerd zonder dat je er omkijken naar hebt.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Updates elke 4 weken</p>
                    <p className="text-sm text-gray-600">Elke maand krijg je nieuwe optimalisaties en verbeteringen. We monitoren zoektrends, algoritme-updates en je concurrentie om je website telkens een stapje verder te brengen in de zoekresultaten.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Toegang tot alle dashboards & rapportages</p>
                    <p className="text-sm text-gray-600">Krijg volledig inzicht in je SEO-prestaties met real-time dashboards. Zie je rankings, verkeer, conversies en ROI in één overzichtelijk platform. Inclusief maandelijkse rapporten en trendanalyses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Inzichten in snelheid, zoekwoorden & content</p>
                    <p className="text-sm text-gray-600">Diepgaande analyses van je website-snelheid (Core Web Vitals), zoekwoordposities en content-prestaties. Ontdek welke pagina's het beste presteren en waar kansen liggen voor verbetering.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Analyse van marktkansen (gap-insights)</p>
                    <p className="text-sm text-gray-600">Ontdek lucratieve zoekwoorden waar je concurrenten nog niet op focussen. Onze gap-analyse toont je precies welke kansen er liggen om marktaandeel te winnen en nieuwe klanten te bereiken.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Focus op blijvende vindbaarheid</p>
                    <p className="text-sm text-gray-600">Vergeet het gedoe met SEO-updates en technische aanpassingen. Onze AI zorgt ervoor dat je website altijd up-to-date blijft met de nieuwste SEO-best practices en algoritme-wijzigingen.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(!plan || plan === 'pro') && (
            <div className="space-y-4">
              {!plan && (
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Pro Plan - €149/maand <span className="text-sm font-normal text-purple-600">(Meest gekozen)</span>
                </h3>
              )}
              <div className="grid gap-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Alles van Basic, plus:</p>
                    <p className="text-sm text-gray-600">Alle krachtige functies van het Basic plan zijn automatisch inbegrepen, plus extra premium features voor maximaal resultaat.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Updates elke 2 weken</p>
                    <p className="text-sm text-gray-600">Dubbel zo vaak optimalisaties betekent dubbel zo snel resultaat. Je website wordt om de 14 dagen geüpdatet met de nieuwste SEO-inzichten en marktveranderingen voor maximale groei.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Uitgebreide concurrentie-analyse & gap-inzichten</p>
                    <p className="text-sm text-gray-600">Krijg een gedetailleerd overzicht van je concurrenten: hun sterke en zwakke punten, hun SEO-strategieën en vooral waar jij ze kunt overtreffen. Inclusief wekelijkse concurrentie-updates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sneller resultaat door dubbele optimalisatiefrequentie</p>
                    <p className="text-sm text-gray-600">Door de verhoogde update-frequentie zie je gemiddeld 40% sneller resultaat. Ideaal voor ambitieuze ondernemers die snel willen groeien en marktaandeel willen winnen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Extra focus op contentstrategie en marktdominantie</p>
                    <p className="text-sm text-gray-600">Ontvang strategisch contentadvies en topic-clustering om je expertise te tonen en autoriteit op te bouwen. We helpen je niet alleen gevonden te worden, maar ook om de marktleider te worden.</p>
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