import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconGradientDefs } from "@/components/ui/icon-gradient-defs";
import { IconBadge } from "@/components/ui/icon-badge";
import { Star, CheckCircle, Brain, Search, Lightbulb, FileText, CalendarCheck, Binoculars, TrendingUp, ScanSearch } from "lucide-react";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";


const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <IconGradientDefs />
      {/* Trustpilot Badge */}
      <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 py-2">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 text-white text-sm">
            <span className="font-medium">Excellent</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
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
            <Button variant="outline" className="text-purple-600 border-purple-300 hover:bg-purple-50">
              Login
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Start nu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Master jouw SEO met de{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Power van AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Betere rankings voor je website in minder tijd
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="mb-16 px-8 py-4 text-lg border-2 border-gray-400 hover:bg-gray-50 rounded-lg"
          >
            Boek hier je Demo
          </Button>
          
          {/* Trust indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-700 mb-20">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span>Vind micro keywords met AI</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span>Produceer content met hoge conversie</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span>Verbeter bestaande content met AI</span>
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
              <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">SEO AI Toolset</span> voor meer
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Bij KlikKlaar vragen we ons elke dag af hoe we zoekmachine optimalisatie gemakkelijker en sneller kunnen maken 
              voor marketeers en succesvoller voor hun bedrijven. Onze geautomatiseerde AI-oplossing ondersteunt je op de 
              volgende gebieden, allemaal te bedienen vanaf één dashboard.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm" 
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={Brain} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Je eigen AI</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Analyseer je branche, identificeer zoekwoorden en analyseer je concurrenten om een schat aan ideeën voor inhoud te genereren met onze AI-tekst schrijftool.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm"
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={Search} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Trefwoord Analyse</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Onze zoekwoordanalyse richt zich op het ontdekken van het potentieel van microzoekwoorden voor uw bedrijf. De analyse is gebaseerd op zoekvolume, intentie en moeilijkheidsgraad van de zoekwoorden.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm"
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={Lightbulb} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Ideeëngeneratie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Met behulp van kunstmatige intelligentie genereren SEO AI inhoud ideeën, tekstontwerpen, trefwoordgeoptimaliseerde titels en metabeschrijvingen.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm"
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={FileText} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Inhoud creëren</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Zeg vaarwel tegen een writer's block en laat ons eigen AI-model eenvoudig goed geschreven, nuttige en boeiende content genereren voor je publiek.
              </p>
            </Card>
          </div>

          {/* Second row of features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm"
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={CalendarCheck} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Automatisch posten</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Onze AI-tekst schrijftool bevat een planningsfunctie waarmee je de publicatie van je inhoud op de gewenste frequentie kunt automatiseren.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm"
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={Binoculars} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Volg je concurrent</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We monitoren je concurrenten en hun rankings. Met behulp van de gegevens creëren we betere inhoud met de potentie om beter te presteren dan de concurrentie.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm"
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={TrendingUp} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Rank Tracker</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Volg de rangschikking van je zoekwoorden en vind nog meer ideeën voor inhoud met microzoekwoorden die topische autoriteit in je niche opbouwen.
              </p>
            </Card>

            <Card className="text-left hover:shadow-lg transition-shadow bg-white border border-gray-200 shadow-sm"
                  style={{ width: '273px', height: '397px', borderRadius: '10px', padding: '34px' }}>
              <div className="mb-6">
                <IconBadge Icon={ScanSearch} />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">SEO Analyse</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Analyseer je website regelmatig op technische en structurele problemen en krijg aanbevelingen om je website te verbeteren.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden animate-fade-in">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-purple-400/30 to-orange-300/40"></div>
        
        {/* Fade in from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-white from-0% to-transparent to-50%"></div>
        
        {/* Fade out to bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white from-0% to-transparent to-50%"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        
        {/* Subtle overlay for more blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in">
              Ontdek hoe we binnen enkele seconden
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Wetendurig je veld dag nou kijk werkstructuur? Laat dans voor je beginnen krant waar 
              elke progressieve SEO tool die helpen zo je plaats deze wensen lui heel gemakkelijk te 
              realiseren binnen enkele seconden.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-kk-orange/80 to-kk-fuchsia/80 hover:from-kk-orange/90 hover:to-kk-fuchsia/90 
                         text-white border-0 px-12 py-6 text-xl font-semibold rounded-xl 
                         shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
            >
              Boost Actie met ons
            </Button>
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
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50 px-3 py-1">
                    Nieuws
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <span>Luuk Wubs</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-gray-900 leading-tight">
                  KlikKlaar behoort tot de beste SEO-diensten in Nederland op Trustpilot
                </h3>
                <Button 
                  className="bg-gradient-to-r from-kk-orange to-kk-fuchsia hover:from-kk-orange/90 hover:to-kk-fuchsia/90 
                             text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
                >
                  Lees meer →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
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

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden animate-fade-in">
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
                aan jouw behoefte
              </span>
            </h2>
            <p className="text-black/80 text-lg max-w-2xl mx-auto">
              Kies een plan dat bij je past en boek een afspraak met ons, waar we je meenemen op een rondleiding door onze AI SEO Suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basis Plan */}
            <Card className="p-8 relative bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Basis</h3>
                  <div className="text-4xl font-bold mb-1 text-gray-900">€99,-</div>
                  <div className="text-gray-600 mb-2">Per maand</div>
                </div>
                <Button className="w-full mb-6 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg">
                  Demo sessie plannen
                </Button>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>50 selected keywords to create content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1-2 blog posts per month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>+30 languages to translate content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated content publishing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Supervision of max. 3 competitors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly SEO audit for max. 500 pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dedicated Customer Success Manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Technical installation and commissioning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1 check-in meeting per year</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Plus Plan */}
            <Card className="p-8 relative bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                <Badge className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold text-sm">
                  Populair
                </Badge>
              </div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Plus</h3>
                  <div className="text-4xl font-bold mb-1 text-gray-900">€149,-</div>
                  <div className="text-gray-600 mb-2">Per maand</div>
                </div>
                <Button className="w-full mb-6 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg">
                  Demo sessie plannen
                </Button>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>100 selected keywords to create content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>3-6 blog posts per month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>+30 languages to translate content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated content publishing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Supervision of max. 10 competitors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly SEO audit for max. 500 pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dedicated Customer Success Manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Technical installation and commissioning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>4 check-in meetings per year</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 relative bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Pro</h3>
                  <div className="text-4xl font-bold mb-1 text-gray-900">TBA</div>
                  <div className="text-gray-600 mb-2">Prijs op aanvraag</div>
                </div>
                <Button className="w-full mb-6 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg">
                  Demo sessie plannen
                </Button>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>500 selected keywords to create content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>8+ blog posts per month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>+30 languages to translate content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated content publishing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Supervision of max. 20 competitors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly SEO audit for max. 1500 pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dedicated Customer Success Manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Technical installation and commissioning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>12 check-in meetings per year</span>
                  </li>
                </ul>
              </div>
            </Card>
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
                Geavanceerde automatische content met je doelgroep optimaliseren SEO om gericht van mijn business proces behouden.
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
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Trefwoord AI</a></li>
                <li><a href="#" className="hover:text-white">Technische SEO Audit</a></li>
                <li><a href="#" className="hover:text-white">Website deployment</a></li>
                <li><a href="#" className="hover:text-white">Website geïntegreerd AI</a></li>
                <li><a href="#" className="hover:text-white">Geavanceerde positie</a></li>
                <li><a href="#" className="hover:text-white">Geoptimiseerde tagmetriek</a></li>
                <li><a href="#" className="hover:text-white">Content verstrekking</a></li>
                <li><a href="#" className="hover:text-white">AI technofacts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Bedrijf</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Over ons</a></li>
                <li><a href="#" className="hover:text-white">Neem contact op</a></li>
                <li><a href="#" className="hover:text-white">Vacatures</a></li>
                <li><a href="#" className="hover:text-white">Partner worden</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Directions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Zakstraat office</li>
                <li>Oosteenvegen 1<br />1031AM, Amsterdam</li>
                <li><a href="#" className="hover:text-white">Contact us</a></li>
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