import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, Search, BarChart3, Target, Zap, Shield, Users, TrendingUp, Clock, ArrowRight, Play } from "lucide-react";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";


const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img 
              src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
              alt="KlikKlaar SEO Logo"
              className="h-16 w-auto"
            />
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#hoe-het-werkt" className="text-gray-600 hover:text-kk-blue transition-colors">Hoe het werkt</a>
              <a href="#resultaten" className="text-gray-600 hover:text-kk-blue transition-colors">Resultaten</a>
              <a href="#prijzen" className="text-gray-600 hover:text-kk-blue transition-colors">Prijzen</a>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-kk-blue hover:bg-kk-bg">
              Login
            </Button>
            <Button className="button-primary inline-flex items-center space-x-2">
              <span>Gratis scan</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-bg py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy & CTA */}
            <div className="lg:pr-8 animate-fade-in">
              <h1 className="text-hero text-kk-ink mb-6">
                Meer klanten uit Google.{" "}
                <span className="text-kk-blue">Automatisch.</span>
              </h1>
              <p className="text-lead text-kk-muted mb-8 max-w-lg">
                KlikKlaar verbetert je website en Google-profiel zonder gedoe.
              </p>
              
              {/* CTA Form */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="url"
                    placeholder="jouwbedrijf.nl"
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kk-blue focus:border-kk-blue outline-none"
                  />
                  <Button className="button-primary group">
                    <span>Gratis scan</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <p className="text-sm text-kk-muted mt-2">Binnen 60 seconden. Geen verplichtingen.</p>
              </div>
              
              {/* Trust Badge */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-kk-ink">4.8/5</span>
                <span className="text-sm text-kk-muted">uit 63 reviews</span>
              </div>
              
              {/* Secondary CTA */}
              <Button variant="ghost" className="button-secondary inline-flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Bekijk demo</span>
              </Button>
              
              {/* Outcome Bullets */}
              <div className="grid grid-cols-1 gap-4 mt-12">
                <div className="flex items-start space-x-3">
                  <div className="icon-card">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kk-ink">Meer vindbaar in jouw buurt</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="icon-card">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kk-ink">Nieuwe klanten zonder website-gedoe</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="icon-card">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kk-ink">Automatische verbeteringen elke week</h3>
                  </div>
                </div>
              </div>
              
              {/* Reassurance */}
              <div className="flex flex-wrap gap-4 mt-8 text-sm text-kk-muted">
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-kk-muted rounded-full"></div>
                  <span>Geen IT nodig</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-kk-muted rounded-full"></div>
                  <span>Maandelijks opzegbaar</span>
                </span>
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-kk-muted rounded-full"></div>
                  <span>Nederlandse support</span>
                </span>
              </div>
            </div>
            
            {/* Right Column - Product Mock */}
            <div className="relative animate-slide-up lg:animate-none">
              <div className="relative">
                <div className="card p-1 max-w-lg mx-auto">
                  <img 
                    src="/lovable-uploads/f506cedb-82da-4a28-94aa-4ba7d6af1922.png" 
                    alt="KlikKlaar Dashboard"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-xl"></div>
                </div>
                
                {/* Floating Stat Chips */}
                <div className="absolute -top-4 -left-8 stat-chip animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="text-lg font-bold text-kk-blue">+64%</div>
                  <div className="text-xs text-kk-muted">zichtbaarheid</div>
                </div>
                <div className="absolute -bottom-6 -right-6 stat-chip animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <div className="text-lg font-bold text-kk-blue">127</div>
                  <div className="text-xs text-kk-muted">optimalisaties toegepast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Voor Wie Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-kk-muted font-medium mb-6">Voor wie?</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-kk-ink">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kk-yellow rounded-full"></div>
              <span>Kapper</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kk-yellow rounded-full"></div>
              <span>Tandarts</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kk-yellow rounded-full"></div>
              <span>Makelaar</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kk-yellow rounded-full"></div>
              <span>Coach</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kk-yellow rounded-full"></div>
              <span>Installateur</span>
            </span>
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}
      <section className="py-20 bg-white" id="hoe-het-werks">
        <div className="container mx-auto px-4">
          {/* 3-Step Process */}
          <div className="text-center mb-20">
            <h2 className="text-h2 text-kk-ink mb-6">Hoe het werkt</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-kk-blue text-white flex items-center justify-center font-bold text-lg mb-4">01</div>
                <h3 className="font-semibold text-kk-ink mb-2">Website scannen</h3>
                <p className="text-kk-muted text-sm max-w-48">We analyseren je website en vinden alle verbeterpunten</p>
              </div>
              <div className="hidden md:block w-16 h-px bg-gray-200"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-kk-blue text-white flex items-center justify-center font-bold text-lg mb-4">02</div>
                <h3 className="font-semibold text-kk-ink mb-2">Automatisch verbeteren</h3>
                <p className="text-kk-muted text-sm max-w-48">Onze AI past je website en Google-profiel automatisch aan</p>
              </div>
              <div className="hidden md:block w-16 h-px bg-gray-200"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-kk-blue text-white flex items-center justify-center font-bold text-lg mb-4">03</div>
                <h3 className="font-semibold text-kk-ink mb-2">Meer klanten</h3>
                <p className="text-kk-muted text-sm max-w-48">Volg je groei in ons dashboard en ontvang meer aanvragen</p>
              </div>
            </div>
          </div>

          {/* Results Strip */}
          <div className="bg-kk-bg rounded-2xl p-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-kk-blue mb-2" style={{ fontFamily: 'Monaco, monospace' }}>+64%</div>
                <div className="text-kk-muted">gemiddelde zichtbaarheidsverbetering</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-kk-blue mb-2" style={{ fontFamily: 'Monaco, monospace' }}>8.5k</div>
                <div className="text-kk-muted">extra bezoekers per maand</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-kk-blue mb-2" style={{ fontFamily: 'Monaco, monospace' }}>127</div>
                <div className="text-kk-muted">automatische optimalisaties</div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card card-hover p-6">
              <div className="icon-card mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-kk-ink mb-3">Lokale zoekopdrachten</h3>
              <p className="text-sm text-kk-muted">
                Optimalisatie voor 'kapper Amsterdam' en andere lokale zoektermen in jouw gebied.
              </p>
            </Card>

            <Card className="card card-hover p-6">
              <div className="icon-card mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-kk-ink mb-3">Google My Business</h3>
              <p className="text-sm text-kk-muted">
                Automatische verbetering van je Google-profiel voor meer zichtbaarheid en reviews.
              </p>
            </Card>

            <Card className="card card-hover p-6">
              <div className="icon-card mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-kk-ink mb-3">Website optimalisatie</h3>
              <p className="text-sm text-kk-muted">
                Technische SEO verbeteringen die zorgen voor betere rankings in Google.
              </p>
            </Card>

            <Card className="card card-hover p-6">
              <div className="icon-card mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-kk-ink mb-3">Live rapportage</h3>
              <p className="text-sm text-kk-muted">
                Dagelijks overzicht van je rankings, bezoekers en nieuwe klanten via ons dashboard.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kk-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-h2 mb-6">
            Klaar om meer klanten te krijgen?
          </h2>
          <p className="text-lead opacity-90 mb-8 max-w-2xl mx-auto">
            Start vandaag nog met je gratis website-scan en ontdek binnen 60 seconden 
            hoe je meer zichtbaar wordt in Google.
          </p>
          <Button size="lg" className="bg-white text-kk-blue hover:bg-gray-50 font-bold px-8 py-4 text-lg group">
            <span>Start gratis scan</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-kk-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-kk-ink mb-8">Laatste nieuws</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="card overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-kk-blue via-kk-blue to-kk-yellow relative">
                <div className="absolute inset-0 bg-kk-blue opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">KlikKlaar succesverhalen</h3>
                    <p className="opacity-90">Hoe lokale ondernemers hun omzet verdubbelden</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-kk-ink mb-4">
                  KlikKlaar behoort tot de beste SEO-diensten in Nederland op Trustpilot
                </h3>
                <Button className="button-primary group">
                  <span>Lees meer</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="resultaten">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-kk-ink mb-6">Wat klanten zeggen</h2>
            <p className="text-kk-muted text-lead max-w-2xl mx-auto">
              Ontdek hoe lokale ondernemers hun zichtbaarheid hebben verbeterd met KlikKlaar
            </p>
          </div>
          
          {/* Testimonial Cards with Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="card p-6">
              <blockquote className="text-kk-muted mb-6">
                "+41% meer afspraken in 30 dagen. KlikKlaar heeft onze online zichtbaarheid compleet getransformeerd."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-kk-yellow rounded-full flex items-center justify-center">
                  <span className="font-bold text-kk-ink text-sm">SH</span>
                </div>
                <div>
                  <div className="font-semibold text-kk-ink">Schoonheidssalon Susan</div>
                  <div className="text-sm text-kk-muted">Hoorn</div>
                </div>
              </div>
            </Card>
            
            <Card className="card p-6">
              <blockquote className="text-kk-muted mb-6">
                "Eindelijk bovenaan in Google voor 'tandarts Utrecht'. Mijn agenda zit nu vol met nieuwe patiënten."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-kk-yellow rounded-full flex items-center justify-center">
                  <span className="font-bold text-kk-ink text-sm">PV</span>
                </div>
                <div>
                  <div className="font-semibold text-kk-ink">Tandartspraktijk Vos</div>
                  <div className="text-sm text-kk-muted">Utrecht</div>
                </div>
              </div>
            </Card>
            
            <Card className="card p-6">
              <blockquote className="text-kk-muted mb-6">
                "Van 0 naar 50+ online aanvragen per maand. KlikKlaar werkt echt voor lokale makelaars."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-kk-yellow rounded-full flex items-center justify-center">
                  <span className="font-bold text-kk-ink text-sm">MK</span>
                </div>
                <div>
                  <div className="font-semibold text-kk-ink">Makelaar Janssen</div>
                  <div className="text-sm text-kk-muted">Alkmaar</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Pricing Teaser */}
          <div className="text-center">
            <p className="text-kk-muted mb-4">Vanaf €99 per maand. Maandelijks opzegbaar.</p>
            <Button className="button-primary group">
              <span>Bekijk alle prijzen</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Prijzen aangepast{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                aan jouw behoefte
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Kies een plan dat bij je past en boek een afspraak met ons, waar wij je verwelkomen op een rondleiding door onze AI SEO Suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basis Plan */}
            <Card className="p-8 relative bg-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-4">Basis</h3>
                <div className="text-4xl font-bold mb-1">€1188,-</div>
                <div className="text-gray-600 mb-2">Jaarlijks</div>
                <div className="text-sm text-gray-500">+ €240 start-up fee</div>
              </div>
              <Button className="w-full mb-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
            </Card>

            {/* Plus Plan */}
            <Card className="p-8 relative bg-white border-2 border-purple-500">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                Populair
              </Badge>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-4">Plus</h3>
                <div className="text-4xl font-bold mb-1">€1668,-</div>
                <div className="text-gray-600 mb-2">Jaarlijks</div>
                <div className="text-sm text-gray-500">+ €360 start-up fee</div>
              </div>
              <Button className="w-full mb-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 relative bg-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                <div className="text-4xl font-bold mb-1">€2388,-</div>
                <div className="text-gray-600 mb-2">Jaarlijks</div>
                <div className="text-sm text-gray-500">+ €480 start-up fee</div>
              </div>
              <Button className="w-full mb-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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