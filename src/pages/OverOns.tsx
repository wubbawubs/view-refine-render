import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Trophy } from "lucide-react";

const OverOns = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-kk-orange/10 via-kk-fuchsia/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Over KlikKlaar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wij zijn KlikKlaar - de eerste volledig geautomatiseerde SEO-oplossing die zorgt dat 
            jouw website altijd vindbaar blijft, zonder dat jij er omkijken naar hebt.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-white shadow-luxury border-0 rounded-2xl">
              <div className="text-center mb-8">
                <Target className="w-16 h-16 text-kk-orange mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Onze Missie</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                Bij KlikKlaar geloven we dat SEO niet ingewikkeld hoeft te zijn. Daarom hebben we de 
                eerste volledig geautomatiseerde SEO-tool ontwikkeld die AI en machine learning combineert 
                om jouw website continu te optimaliseren. Jij zet het één keer op, wij zorgen dat je 
                website altijd vindbaar blijft.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Wat ons drijft</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deze waarden vormen de basis van alles wat we doen bij KlikKlaar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-kk-fuchsia mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Klantgericht</h3>
              <p className="text-gray-600">
                Jouw succes is ons succes. We bouwen tools die echt werken voor ondernemers 
                die willen groeien zonder technische complexiteit.
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-shadow">
              <CheckCircle className="w-12 h-12 text-kk-orange mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Eenvoud</h3>
              <p className="text-gray-600">
                Geen ingewikkelde instellingen of onduidelijke rapportages. Alles is 
                ontworpen om zo simpel en effectief mogelijk te zijn.
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-shadow">
              <Trophy className="w-12 h-12 text-kk-fuchsia mx-auto mb-6" />
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
      <section className="py-16">
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
      <section className="py-20 bg-gradient-to-r from-kk-orange/10 via-kk-fuchsia/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
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
    </div>
  );
};

export default OverOns;