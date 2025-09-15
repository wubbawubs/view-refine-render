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
                    <p className="text-sm text-gray-600">Onze AI analyseert je website en voert automatisch optimalisaties uit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Updates elke 4 weken</p>
                    <p className="text-sm text-gray-600">Regelmatige optimalisaties en verbeteringen aan je SEO</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Toegang tot alle dashboards & rapportages</p>
                    <p className="text-sm text-gray-600">Volledige inzage in je SEO prestaties en voortgang</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Inzichten in snelheid, zoekwoorden & content</p>
                    <p className="text-sm text-gray-600">Gedetailleerde analyses van je website prestaties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Analyse van marktkansen (gap-insights)</p>
                    <p className="text-sm text-gray-600">Ontdek nieuwe kansen waar je concurrenten nog niet op focussen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Focus op blijvende vindbaarheid</p>
                    <p className="text-sm text-gray-600">Geen omkijken meer naar SEO - wij regelen het volledig</p>
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
                    <p className="text-sm text-gray-600">Alle functies van het Basic plan zijn inbegrepen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Updates elke 2 weken</p>
                    <p className="text-sm text-gray-600">Dubbel zo vaak optimalisaties voor sneller resultaat</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Uitgebreide concurrentie-analyse & gap-inzichten</p>
                    <p className="text-sm text-gray-600">Diepgaande analyse van je concurrenten en marktpositie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sneller resultaat door dubbele optimalisatiefrequentie</p>
                    <p className="text-sm text-gray-600">Versnelde groei door intensievere optimalisatie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Extra focus op contentstrategie en marktdominantie</p>
                    <p className="text-sm text-gray-600">Strategische content planning voor marktleiderschap</p>
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