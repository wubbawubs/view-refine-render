import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Search, BarChart3, Zap, Shield, Target, Clock, CheckCircle } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-kk-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-semibold text-xl">KlikKlaar</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Prijzen</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Inloggen</Button>
            <Button>Aan de slag</Button>
          </div>
        </div>
      </header>

      {/* Trustpilot Badge */}
      <div className="bg-gradient-to-r from-kk-primary/10 to-kk-secondary/10 py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">KlikKlaar behoort tot de beste SEO-diensten in Nederland op Trustpilot</span>
            <Button size="sm" variant="outline" className="ml-4">
              Lees meer →
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-kk-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master jouw SEO met de{" "}
            <span className="bg-gradient-to-r from-kk-primary to-kk-secondary bg-clip-text text-transparent">
              Power van AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bereik rankings voor je website in minder tijd
          </p>
          <Button size="lg" className="mb-12">
            Boost top je Demo
          </Button>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground mb-16">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Veel meer keywords per AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Problemen content met hoge conversie</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Verbeter haalbare content met AI</span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-background/50 backdrop-blur border-0 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-6 h-6 bg-kk-primary rounded"></div>
                <span className="font-medium">Dashboard</span>
                <div className="flex space-x-2 ml-auto">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gradient-to-r from-kk-primary/20 to-transparent rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-kk-primary">5.8</div>
                    <div className="text-sm text-muted-foreground">Score</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-kk-primary">114</div>
                    <div className="text-sm text-muted-foreground">Keywords</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-kk-primary">1.200</div>
                    <div className="text-sm text-muted-foreground">Clicks</div>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="h-32 bg-gradient-to-t from-kk-primary/20 to-transparent rounded flex items-end justify-center">
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                  </Card>
                  <div className="space-y-2">
                    <div className="h-6 bg-muted rounded flex items-center px-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs">Recent Insights</span>
                    </div>
                    <div className="h-6 bg-muted rounded flex items-center px-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-xs">Analytics</span>
                    </div>
                    <div className="h-6 bg-muted rounded flex items-center px-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-xs">Updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-kk-primary mb-2">+50%</div>
              <div className="text-muted-foreground">organic traffic</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-kk-primary mb-2">2x</div>
              <div className="text-muted-foreground">Verhoging in sales</div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Onze marketing had lots effectivere nodig, ik wilde AI inzetten, maar had geen tijd om alles zelf te leren. KlikKlaar automatiseert nu al onze SEO."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-muted rounded-full"></div>
              <div className="text-left">
                <div className="font-medium">Evelina Salomina</div>
                <div className="text-sm text-muted-foreground">Content Manager at Tobo Mare Fiesland</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <blockquote className="text-sm italic text-muted-foreground mb-4">
                "SEO AI helpt ons eenvoudig content te creëren en versnel ons hele proces."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Tommy Blix</div>
                  <div className="text-xs text-muted-foreground">Founder at MyPilot</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <blockquote className="text-sm italic text-muted-foreground mb-4">
                "Met KlikKlaar hebben we meerdere #1 posities behaald, echt super blij mee!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Ana Gheorghiu</div>
                  <div className="text-xs text-muted-foreground">CEO at Derby Systems</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <blockquote className="text-sm italic text-muted-foreground mb-4">
                "Dankzij KlikKlaar positioneren we top in toekomtige zoekopdrachten en besparen we veel tijd in SEO."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Karl Toerink</div>
                  <div className="text-xs text-muted-foreground">Lead SEO Strategist</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-kk-primary">SEO AI</span> Toolset voor meer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bij KlikKlaar mappen wij alles dag of het om onderzochte commerciële gezochtheden en kunnen barten bedelen 
              voor marketteam om nauwkeurig voor hun bedrijven. Onze gecombineerde AI-ondersteuning onderstant je op de 
              belangrijke gebieden waaronder technisch en beheersmatig vast een belangrijkheid heeft den voorsprong.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">Je eigen AI</h3>
              <p className="text-sm text-muted-foreground">
                Een eigen gepersonaliseerd en op maat gesneden AI-assistent
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">Trefwoord Analyse</h3>
              <p className="text-sm text-muted-foreground">
                Vind snel de zin interessante trefwoord gegevens
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">Ideegeneratie</h3>
              <p className="text-sm text-muted-foreground">
                Intelligente gevarenzicht SEO of innoveerd content
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">Inhoud creëren</h3>
              <p className="text-sm text-muted-foreground">
                Schrijf focus en snel voor uitstekende en verschillende rapportage
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">Automatisch posten</h3>
              <p className="text-sm text-muted-foreground">
                Alles wat je schrijft automatisch uit te publiceren om te publiceren
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">Vollg je concurrenten</h3>
              <p className="text-sm text-muted-foreground">
                Volg stap voor stap van je grootste tegenstanders
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">Rank Tracker</h3>
              <p className="text-sm text-muted-foreground">
                Bekijk performance voor je belangrijke wond zoekwoord
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-kk-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-kk-primary" />
              </div>
              <h3 className="font-semibold mb-2">SEO Analyse</h3>
              <p className="text-sm text-muted-foreground">
                Ontdek verbeteren ondersteun wijd waarom ondersteuning op je grote genoemde
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-kk-primary to-kk-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ontdek hoe we binnen enkele seconden
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Weeduid je veld dag nou kijk werkstructuur? Laat dans voor je beginnen krant waar elke progressieve SEO tool die helpen zo je plaats deze wensen lui heel
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-kk-primary hover:bg-white/90">
            Boost Acties met ons
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Prijzen aangepast{" "}
              <span className="bg-gradient-to-r from-kk-primary to-kk-secondary bg-clip-text text-transparent">
                aan jouw behoefte
              </span>
            </h2>
            <p className="text-muted-foreground">
              Kies een plan dat bij je past en boek een afspraak met ons, waar wij je begroeten op een rondriding door ons AI SEO Suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basis Plan */}
            <Card className="p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Basis</h3>
                <div className="text-3xl font-bold">€1188,-</div>
                <div className="text-muted-foreground">Jaarlijks</div>
                <div className="text-sm text-muted-foreground mt-1">+ €240 start-up fee</div>
              </div>
              <Button className="w-full mb-6">Demo sessie plannen</Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>50 selected keywords to create content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1-2 blog posts per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>+30 languages to translate content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated content publishing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Supervision of max. 3 competitors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Monthly SEO audit for max. 500 pages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Dedicated Customer Success Manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Technical installation and commissioning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1 check-in meeting per year</span>
                </li>
              </ul>
            </Card>

            {/* Plus Plan */}
            <Card className="p-8 relative border-2 border-kk-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-kk-primary">
                Populair
              </Badge>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Plus</h3>
                <div className="text-3xl font-bold">€1668,-</div>
                <div className="text-muted-foreground">Jaarlijks</div>
                <div className="text-sm text-muted-foreground mt-1">+ €360 start-up fee</div>
              </div>
              <Button className="w-full mb-6">Demo sessie plannen</Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100 selected keywords to create content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>3-6 blog posts per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>+30 languages to translate content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated content publishing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Supervision of max. 10 competitors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Monthly SEO audit for max. 500 pages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Dedicated Customer Success Manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Technical installation and commissioning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>4 check-in meeting per year</span>
                </li>
              </ul>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <div className="text-3xl font-bold">€2388,-</div>
                <div className="text-muted-foreground">Jaarlijks</div>
                <div className="text-sm text-muted-foreground mt-1">+ €480 start-up fee</div>
              </div>
              <Button className="w-full mb-6">Demo sessie plannen</Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>500 selected keywords to create content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>8+ blog posts per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>+30 languages to translate content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated content publishing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Supervision of max. 20 competitors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Monthly SEO audit for max. 1500 pages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Dedicated Customer Success Manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Technical installation and commissioning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>12 check-in meetings per year</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nieuwe Blog</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  KlikKlaar behoort tot de beste SEO-diensten in Nederland op Trustpilot
                </h3>
                <Button variant="outline" size="sm">
                  Lees meer →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-kk-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-semibold text-xl">KlikKlaar</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Geavanceerde automatische content met je doelgroep optimaliseren SEO om gericht van mijn business proces behouden.
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-kk-primary rounded flex items-center justify-center">
                  <span className="text-white text-xs">in</span>
                </div>
                <div className="w-8 h-8 bg-kk-primary rounded flex items-center justify-center">
                  <span className="text-white text-xs">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Trefwoord AI</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Technische SEO Audit</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Website deployment</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Website geïntegreerd AI</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Geavanceerde positie</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Geoptimiseerde tagmetriek</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Content verstrekking</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">AI technofacts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Bedrijf</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Team</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Overons</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Neem contact op</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Vacatures</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Partner worden</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Directions</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Zakstraat office</li>
                <li className="text-muted-foreground">Oosteenvegen 1<br />1031AM, Amsterdam</li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">Copyright © 2025. All rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Website by KlikKlaar SEO</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;