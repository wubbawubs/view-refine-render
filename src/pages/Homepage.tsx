import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconGradientDefs } from "@/components/ui/icon-gradient-defs";
import { IconBadge } from "@/components/ui/icon-badge";
import { DesktopMockup } from "@/components/ui/desktop-mockup";
import { WhatIsIncludedModal } from "@/components/ui/what-is-included-modal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, CheckCircle, Brain, Search, Lightbulb, Atom, CalendarCheck, Binoculars, TrendingUp, ScanSearch, Zap, Clock, Target } from "lucide-react";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";


const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trustIndicators = [
    { icon: Clock, text: "Nooit meer tijd kwijt aan SEO taken" },
    { icon: Zap, text: "Volledig geautomatiseerd" },
    { icon: Target, text: "wij optimaliseren voor zoekmachines zowel als AI" }
  ];

  // Auto-rotate carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trustIndicators.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [trustIndicators.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-purple-50/20">
      <IconGradientDefs />
      {/* Trustpilot Badge */}
      <div 
        className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 py-2 cursor-pointer hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 transition-all duration-200"
        onClick={() => window.open('https://www.trustpilot.com/review/klikklaar.io', '_blank', 'noopener,noreferrer')}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 text-white text-sm">
            <span className="font-medium">Excellent</span>
            <div className="flex items-center space-x-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              <div className="relative">
                <Star className="w-3 h-3 text-yellow-400" />
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              </div>
            </div>
            <span className="text-xs opacity-90">63 reviews on</span>
            <span className="font-medium">Trustpilot</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
              alt="KlikKlaar SEO Logo"
              className="h-24 w-auto"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="text-purple-600 border-purple-300 hover:bg-purple-50"
              onClick={() => window.location.href = '/login'}
            >
              Login
            </Button>
            <Button 
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/homepage#pricing';
                }
              }}
            >
              Start nu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-transparent via-gray-50/20 to-purple-50/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-black">
            Master jouw SEO met de{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Power van AI
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            Dé eerste volledig automatische SEO software.
          </p>
          <Button 
            size="lg" 
            className="mb-12 sm:mb-16 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-orange-400/70 via-pink-400/70 to-purple-500/70 hover:from-orange-500/80 hover:via-pink-500/80 hover:to-purple-600/80 text-white border-0 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              window.open('https://calendly.com/luuk-klikklaar/kennismakingsgesprek', '_blank', 'noopener,noreferrer');
            }}
          >
            Even met elkaar bellen
          </Button>
          
          {/* Trust indicators */}
          <div className="mb-16 sm:mb-20 px-4">
            {/* Mobile carousel */}
            <div className="sm:hidden">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center">
                      <div className="flex items-center space-x-3 text-center bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
                        <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <indicator.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">{indicator.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop layout */}
            <div className="hidden sm:flex flex-row items-center justify-center space-x-6 lg:space-x-12 text-gray-700">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-3 text-center sm:text-left">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <indicator.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-1">
              <img 
                src="/lovable-uploads/f506cedb-82da-4a28-94aa-4ba7d6af1922.png" 
                alt="KlikKlaar SEO Dashboard showing +64% visibility improvement, SEO score 3.8, 127 total adjustments, +78% estimated growth, and 8,542 visitors"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO AI Toolset Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Wat <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">Klikklaar SEO</span> voor jou doet
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              KlikKlaar is de eerste tool die SEO en AI volledig automatisch optimaliseert. Jij zet het één keer op, wij zorgen dat je website altijd vindbaar blijft. Terwijl jij je focust op je bedrijf, bouwen wij continu door achter de schermen. Geen ingewikkelde instellingen, geen gedoe, wél blijvende zichtbaarheid en groei.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]" 
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={Brain} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">KlikKlaar AI</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Onze ontwikkelde AI-assistent leert jouw branche begrijpen, concurrenten analyseren en direct optimalisaties aandraagt. Altijd relevant, nooit meer stilvallen.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]"
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={Search} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">Keyword Analyse</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Wij vinden de zoekwoorden die écht klanten opleveren. Wij analyseren volume, intentie en moeilijkheid, zodat jij weet waar je de meeste winst pakt.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]"
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={Lightbulb} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">Ideeëngeneratie</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Stop met gokken. Onze AI genereert concrete SEO-ideeën, pakkende titels en metateksten die klikken opleveren.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]"
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={Atom} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">Vindbaar op AI</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Onze software is ingericht om ook op AI vindbaar te zijn: KlikKlaar SEO is gebouwd om markt breed vindbaar te zijn en te blijven.
              </p>
            </Card>
          </div>

          {/* Second row of features */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]"
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={CalendarCheck} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">Automatisch Geoptimaliseerd</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Onze software kan via een slimme laag op je website ten aller tijde optimaliseren. 15 minuten opzet werk en je AI zorgt dat er consistent vindbaar blijft, zonder gedoe.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]"
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={Binoculars} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">Volg je concurrent</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Zie precies hoe je concurrenten scoren en gebruik hun zwakke plekken om ze in te halen. Jij krijgt de inzichten, wij doen het werk.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]"
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={TrendingUp} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">Rank Tracker</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Hou dagelijks zicht op je posities in Google. Ontdek nieuwe groeikansen en bouw stap voor stap meer autoriteit op.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm flex flex-col lg:h-[320px]"
                  style={{ borderRadius: '10px', padding: '20px' }}>
              <div className="mb-4">
                <IconBadge Icon={ScanSearch} />
              </div>
              <h3 className="font-semibold text-base lg:text-lg mb-3 text-gray-900">SEO Analyse</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">
                Krijg een voortdurende check van je website. Van technische fouten tot optimalisatie-gaten: wij signaleren het en optimaliseren het direct.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 -my-20 relative overflow-hidden animate-fade-in">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-purple-400/30 to-orange-300/40"></div>
        
        {/* Fade in from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 from-0% to-transparent to-25%"></div>
        
        {/* Fade out to bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 from-0% to-transparent to-25%"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        
        {/* Subtle overlay for more blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-3 text-left flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in">
                De eerste tool die SEO volledig automatiseert
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed animate-fade-in">
                Met onze unieke toplayer-technologie, diepgaande research en maatwerk AI-modellen automatiseert KlikKlaar vrijwel alle SEO-taken. Je krijgt betere resultaten, sneller én voordeliger, ontwikkeld in een jaar van full-focus zonder concessies aan kwaliteit.
              </p>
              <Button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg" 
                className="bg-gradient-to-r from-kk-orange/80 to-kk-fuchsia/80 hover:from-kk-orange/90 hover:to-kk-fuchsia/90 
                           text-white border-0 px-12 py-6 text-xl font-semibold rounded-xl 
                           shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
              >
                Direct starten
              </Button>
            </div>
            
            {/* Right Column - Desktop Mockup */}
            <div className="lg:col-span-2 animate-fade-in">
              <DesktopMockup 
                dashboardImage={dashboardMockup}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Nieuwe Blog</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-luxury bg-white border-0 rounded-2xl animate-fade-in">
              <div className="h-96 relative">
                <img 
                  src="/lovable-uploads/cf789301-8b7c-420c-9ce0-2aa864c3b2ca.png"
                  alt="Abstract watercolor art with blue, purple, and orange tones"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
              </div>
              <div className="p-10 text-center">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  Coming Soon
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We zijn hard aan het werk aan nieuwe blog content. Blijf op de hoogte voor de laatste updates over SEO en digitale marketing.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Hidden until reviews are ready */}
      {false && (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Testimonial Card */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="p-12 bg-white border border-gray-200 rounded-3xl shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Left Stat */}
                <div className="text-center lg:text-left">
                  <div className="text-6xl font-bold text-gray-900 mb-2">+50%</div>
                  <div className="text-gray-600 text-lg">organic traffic</div>
                </div>

                {/* Center Testimonial */}
                <div className="text-center">
                  <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                    "Onze marketing had iets effectievers nodig. Ik wilde AI inzetten, maar had geen tijd om alles zelf te leren. KlikKlaar automatiseert nu al onze SEO."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">Eveliina Salminen</div>
                      <div className="text-sm text-gray-500">Marketing Manager at TuKu Music Festival</div>
                    </div>
                  </div>
                </div>

                {/* Right Stat */}
                <div className="text-center lg:text-right">
                  <div className="text-6xl font-bold text-gray-900 mb-2">2x</div>
                  <div className="text-gray-600 text-lg">Verhoging in sales</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Three Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <blockquote className="text-gray-700 italic mb-6 text-sm leading-relaxed">
                "SEO AI helpt ons eenvoudig content te creëren en versnelt ons hele proces."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Tommy Siro</div>
                  <div className="text-sm text-gray-500">Co-Founder at Jobilla</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <blockquote className="text-gray-700 italic mb-6 text-sm leading-relaxed">
                "Met KlikKlaar hebben we meerdere #1-posities behaald, echt super blij mee!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Anu Sinisalo</div>
                  <div className="text-sm text-gray-500">CEO at Wanha Satama</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <blockquote className="text-gray-700 italic mb-6 text-sm leading-relaxed">
                "Dankzij KlikKlaar presteren we top in belangrijke zoekresultaten en besparen we veel tijd in SEO."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Kati Tommila</div>
                  <div className="text-sm text-gray-500">CEO at Raiteille Oy</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative overflow-hidden animate-fade-in">
        {/* Subtle left to right gradient background with fading */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/60 via-pink-200/50 via-purple-200/60 to-blue-200/70"></div>
        {/* Strong fade to white at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent from-30% to-white to-80%"></div>
        {/* Subtle fade at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-white/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-black animate-scale-in">
              Prijzen aangepast{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                aan jouw groei
              </span>
            </h2>
            <p className="text-black/80 text-lg max-w-2xl mx-auto">
              Kies het plan dat bij je past. Beide pakketten geven je volledige toegang tot dashboards, automatische optimalisaties en voortdurende SEO + AI verbeteringen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            {/* Basis Plan */}
            <Card className="p-8 relative bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Basic</h3>
                  <div className="text-4xl font-bold mb-1 text-gray-900">€99,-</div>
                  <div className="text-gray-600 mb-2">/ maand</div>
                </div>
                <Button 
                  onClick={() => window.location.href = '/checkout/basis'}
                  className="w-full mb-6 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg"
                >
                  Nu starten
                </Button>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Volledig automatische SEO + AI optimalisatie</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Updates elke 4 weken</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Toegang tot alle dashboards & rapportages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Inzichten in snelheid, zoekwoorden & content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Analyse van marktkansen (gap-insights)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Focus op blijvende vindbaarheid zonder omkijken</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 italic mb-4">🔗 Perfect voor bedrijven die willen dat SEO gewoon geregeld is.</p>
                  <WhatIsIncludedModal plan="basic">
                    <Button variant="outline" className="w-full text-purple-600 border-purple-300 hover:bg-purple-50">
                      Wat zit er precies in? →
                    </Button>
                  </WhatIsIncludedModal>
                </div>
              </div>
            </Card>

            {/* Plus Plan */}
            <Card className="p-8 pt-14 pb-14 relative bg-white rounded-2xl shadow-2xl border-0 overflow-visible min-h-[680px] -mt-4 mb-8">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                <Badge className="bg-gradient-to-r from-orange-300/80 to-purple-400/80 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-xl">
                  Meest gekozen
                </Badge>
              </div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Pro</h3>
                  <div className="text-4xl font-bold mb-1 text-gray-900">€149,-</div>
                  <div className="text-gray-600 mb-2">/ maand</div>
                </div>
                <Button 
                  onClick={() => window.location.href = '/checkout/pro'}
                  className="w-full mb-6 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg"
                >
                  Nu starten
                </Button>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Alles van Basic, plus:</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Updates elke 2 weken</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Uitgebreide concurrentie-analyse & gap-inzichten</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sneller resultaat door dubbele optimalisatie­frequentie</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Extra focus op contentstrategie en marktdominantie</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 italic mb-4">🔗 Voor ondernemers die hun concurrentie willen verslaan en sneller willen groeien.</p>
                  <WhatIsIncludedModal plan="pro">
                    <Button variant="outline" className="w-full text-purple-600 border-purple-300 hover:bg-purple-50">
                      Wat zit er precies in? →
                    </Button>
                  </WhatIsIncludedModal>
                </div>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 relative bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
                  <div className="text-4xl font-bold mb-1 text-gray-500">Coming soon</div>
                  <div className="text-gray-500 mb-2">-</div>
                </div>
                <Button 
                  disabled 
                  className="w-full mb-6 bg-gray-400 cursor-not-allowed text-white font-semibold py-3 rounded-lg"
                >
                  Coming soon
                </Button>
                <div className="text-center text-gray-500 py-8">
                  <p className="text-lg font-medium mb-4">Meer functies en maatwerk voor grotere organisaties.</p>
                  <WhatIsIncludedModal plan="enterprise">
                    <Button variant="outline" className="w-full text-gray-400 border-gray-300 cursor-not-allowed" disabled>
                      Meer info binnenkort →
                    </Button>
                  </WhatIsIncludedModal>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Antwoorden op de meest gestelde vragen over KlikKlaar SEO
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Hoe werkt KlikKlaar SEO precies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  KlikKlaar SEO werkt met een slimme toplayer-technologie die over je website wordt geplaatst. Onze AI analyseert continu je content, concurrenten en zoektrends, en past automatisch je SEO aan. Je hoeft niets te doen na de eerste setup - wij zorgen dat je website altijd geoptimaliseerd blijft.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Hoe lang duurt het voordat ik resultaten zie?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  De eerste optimalisaties zijn direct zichtbaar na installatie. Voor merkbare SEO-resultaten zoals hogere rankings en meer bezoekers kun je rekenen op 4-12 weken, afhankelijk van je branche en concurrentie. Onze AI werkt 24/7 door om je positie te verbeteren.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Kan ik KlikKlaar SEO gebruiken op elke website?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  Ja, KlikKlaar SEO werkt op vrijwel alle websites - WordPress, Shopify, Wix, Squarespace, custom websites en meer. Onze toplayer-technologie integreert naadloos zonder dat je bestaande website aangepast hoeft te worden.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Is er een setup fee of eenmalige kosten?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  Nee, er zijn geen setup kosten of verborgen fees. Je betaalt alleen het maandelijks abonnement vanaf €49 per maand. We nemen de volledige installatie en configuratie voor onze rekening tijdens het gratis kennismakingsgesprek.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Wat onderscheidt KlikKlaar van andere SEO tools?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  KlikKlaar is de enige tool die SEO volledig automatiseert. Terwijl andere tools alleen data geven, voeren wij de optimalisaties ook daadwerkelijk uit. Onze AI-gedreven aanpak zorgt voor betere resultaten met minder werk van jouw kant. Plus: we optimaliseren ook voor AI-zoekmachines zoals ChatGPT.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Kan ik het abonnement opzeggen wanneer ik wil?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  Ja, je kunt maandelijks opzeggen zonder lange contracten of boetes. We zijn zo overtuigd van onze resultaten dat we geen klanten vast willen houden - we verdienen je vertrouwen elke maand opnieuw door uitstekende resultaten te leveren.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
                alt="KlikKlaar SEO Logo"
                className="h-20 w-auto"
              />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                KlikKlaar SEO maakt je vindbaar op zoekmachines zowel als AI, Volledig automatisch.
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">in</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    Direct starten
                  </button>
                </li>
                <li><a href="/over-ons" className="hover:text-white cursor-pointer">Over ons</a></li>
                <li><a href="/algemene-voorwaarden" className="hover:text-white cursor-pointer">Algemene voorwaarden</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Neem contact op</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Onze gegevens</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Klikklaar SEO</li>
                <li>Olieslagers poort 1<br />1601AW Enkhuizen</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">Copyright © 2025. All rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Website by KlikKlaar SEO</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;