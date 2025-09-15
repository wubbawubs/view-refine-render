import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Trophy } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OverOns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300/40 via-purple-400/30 to-orange-300/40">
      <Header />
      
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-purple-400/30 to-orange-300/40"></div>
        
        {/* Fade out to bottom - stronger fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-60% to-white to-100%"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        
        {/* Subtle overlay for more blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Over KlikKlaar SEO</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wij zijn KlikKlaar - de eerste volledig geautomatiseerde SEO-oplossing die zorgt dat 
            jouw website altijd vindbaar blijft, zonder dat jij er omkijken naar hebt.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content - Left Column */}
            <div className="text-left">
              <div className="mb-8">
                <div className="w-16 h-16 bg-kk-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Onze Missie</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bij KlikKlaar geloven we dat SEO niet ingewikkeld hoeft te zijn. Daarom hebben we de 
                eerste volledig geautomatiseerde SEO-tool ontwikkeld die AI en machine learning combineert 
                om jouw website continu te optimaliseren. Jij zet het één keer op, wij zorgen dat je 
                website altijd vindbaar blijft.
              </p>
            </div>
            
            {/* Image Placeholder - Right Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-gray-500 font-medium">Afbeelding komt hier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Wat ons drijft</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deze waarden vormen de basis van alles wat we doen bij KlikKlaar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center bg-white shadow-lg border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-kk-fuchsia to-kk-violet rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Klantgericht</h3>
              <p className="text-gray-600">
                Jouw succes is ons succes. We bouwen tools die echt werken voor ondernemers 
                die willen groeien zonder technische complexiteit.
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-kk-orange to-kk-fuchsia rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Eenvoud</h3>
              <p className="text-gray-600">
                Geen ingewikkelde instellingen of onduidelijke rapportages. Alles is 
                ontworpen om zo simpel en effectief mogelijk te zijn.
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-kk-violet to-kk-fuchsia rounded-xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Resultaat</h3>
              <p className="text-gray-600">
                We meten ons succes aan jouw groei. Onze AI werkt 24/7 om jouw 
                online zichtbaarheid en conversies te verbeteren.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Waarom KlikKlaar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We zijn niet zomaar een SEO-bureau. We zijn de toekomst van zoekmachineoptimalisatie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Traditionele SEO-bureaus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-600">Maandelijkse rapporten die je moet interpreteren</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-600">Lange contracten en onduidelijke kosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-600">Afhankelijk van menselijke capaciteit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gray-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-600">Resultaten pas zichtbaar na maanden</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">KlikKlaar</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Real-time dashboard met duidelijke inzichten</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Transparante pricing, opzegbaar wanneer je wilt</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">AI werkt 24/7 zonder pauzes of vakanties</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-kk-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Eerste verbeteringen binnen enkele weken</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern - flowing in from bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-purple-400/30 to-orange-300/40"></div>
        
        {/* Fade in from top - creating flow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white from-0% via-transparent via-40% to-transparent to-100%"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Klaar om te beginnen?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ontdek zelf waarom steeds meer ondernemers kiezen voor KlikKlaar's 
            geautomatiseerde SEO-oplossing.
          </p>
          <Button 
            onClick={() => window.location.href = '/homepage#pricing'}
            className="bg-kk-gradient hover:opacity-90 text-white font-semibold px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Bekijk onze pakketten
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OverOns;