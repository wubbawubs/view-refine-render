import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, Search, BarChart3, Target, Zap, Shield, Users, TrendingUp, Clock } from "lucide-react";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";


const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Trustpilot Badge */}
      <div className="bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 text-white">
            <span className="font-semibold">Excellent</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
              ))}
            </div>
            <span className="text-sm">63 reviews on</span>
            <span className="font-semibold">Trustpilot</span>
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
              className="h-16 w-auto"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-600">SEO AI</span> Toolset voor meer
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Bij KlikKlaar zorgen wij ervoor dat jij op de juiste onderwerpen commerciële gezochtheden en kunnen beurten bestelen 
              voor marketingteam om nauwkeurig voor hun bedrijven. Onze gecombineerde AI-ondersteuning ondersteunt je op de 
              belangrijke gebieden.
            </p>
          </div>

          {/* First row of features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Je eigen AI</h3>
              <p className="text-gray-600 text-sm">
                Een eigen gepersonaliseerd en op maat gesneden AI-assistent die speciaal voor jouw bedrijf en branche is geoptimaliseerd voor de beste resultaten.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Trefwoord Analyse</h3>
              <p className="text-gray-600 text-sm">
                Vind snel de meest interessante trefwoord gegevens met behulp van geavanceerde AI-algoritmen die de markt analyseren.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Ideegeneratie</h3>
              <p className="text-gray-600 text-sm">
                Intelligente gevarenzicht SEO en innovatieve content ideeën die perfect aansluiten bij jouw doelgroep en markt.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Inhoud creëren</h3>
              <p className="text-gray-600 text-sm">
                Schrijf gefocuste en snelle content voor uitstekende en verschillende rapportages die je concurrentie overtreffen.
              </p>
            </Card>
          </div>

          {/* Second row of features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Automatisch posten</h3>
              <p className="text-gray-600 text-sm">
                Alles wat je schrijft automatisch publiceren om tijd te besparen en consistentie te waarborgen.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Volg je concurrenten</h3>
              <p className="text-gray-600 text-sm">
                Volg stap voor stap van je grootste tegenstanders en blijf altijd een stap voor op de concurrentie.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Rank Tracker</h3>
              <p className="text-gray-600 text-sm">
                Bekijk performance voor je belangrijkste zoekwoorden en monitor je vooruitgang in real-time.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">SEO Analyse</h3>
              <p className="text-gray-600 text-sm">
                Ontdek verbeteringen en ondersteuning waar je website optimalisatie nodig heeft voor betere rankings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ontdek hoe we binnen enkele seconden
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Wetendurig je veld dag nou kijk werkstructuur? Laat dans voor je beginnen krant waar elke progressieve SEO tool die helpen zo je plaats deze wensen lui heel gemakkelijk te realiseren binnen enkele seconden.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-8 py-4 text-lg">
            Boost Actie met ons
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Nieuwe Blog</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  KlikKlaar behoort tot de beste SEO-diensten in Nederland op Trustpilot
                </h3>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-600 mb-2">+50%</div>
              <div className="text-gray-600 text-lg">organic traffic</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-600 mb-2">2x</div>
              <div className="text-gray-600 text-lg">Verhoging in sales</div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <blockquote className="text-gray-600 italic mb-4">
                "SEO AI helpt ons eenvoudig content te creëren en versnelt ons hele proces."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium">Tommy Blix</div>
                  <div className="text-sm text-gray-500">Founder at MyApp</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <blockquote className="text-gray-600 italic mb-4">
                "Met KlikKlaar hebben we meerdere #1 posities behaald, echt super blij mee!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium">Ana Gheorghiu</div>
                  <div className="text-sm text-gray-500">CEO at Derby Systems</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <blockquote className="text-gray-600 italic mb-4">
                "Dankzij KlikKlaar positioneren we top in toekomstige zoekopdrachten en besparen we veel tijd in SEO."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium">Karl Toerink</div>
                  <div className="text-sm text-gray-500">Head SEO Strategist</div>
                </div>
              </div>
            </Card>
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
                className="h-16 w-auto"
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