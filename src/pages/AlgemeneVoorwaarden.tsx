import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AlgemeneVoorwaarden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300/40 via-purple-400/30 to-orange-300/40">
      <Header />
      
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
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
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-kk-gradient">Algemene Voorwaarden</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deze algemene voorwaarden zijn van toepassing op alle diensten van KlikKlaar SEO.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Toepasselijkheid</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, diensten en overeenkomsten 
                  van KlikKlaar SEO, gevestigd te Olieslagers poort 1, 1601AW Enkhuizen.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Door gebruik te maken van onze diensten accepteert u deze voorwaarden volledig. 
                  Afwijkende voorwaarden van de klant worden uitdrukkelijk van de hand gewezen, 
                  tenzij schriftelijk anders overeengekomen.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Dienstverlening</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar levert geautomatiseerde SEO-optimalisatie diensten voor websites. 
                  Onze AI-gestuurde platform optimaliseert continu uw website voor betere vindbaarheid 
                  in zoekmachines.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Wij streven ernaar om de best mogelijke resultaten te behalen, maar kunnen geen 
                  specifieke ranking-posities of traffic-aantallen garanderen, aangezien dit afhankelijk 
                  is van vele externe factoren.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Prijzen en Betaling</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Alle prijzen zijn exclusief BTW, tenzij anders vermeld</li>
                  <li>• Betaling geschiedt vooraf via iDEAL, creditcard of andere geaccepteerde methoden</li>
                  <li>• Bij maandelijkse abonnementen wordt automatisch verlengd, tenzij tijdig opgezegd</li>
                  <li>• Kortingsperiodes (3 maanden, 6 maanden) worden vooraf in één keer gefactureerd</li>
                  <li>• Prijswijzigingen worden minimaal 30 dagen van tevoren aangekondigd</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Opzegging</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Maandelijkse abonnementen kunnen te allen tijde worden opgezegd met ingang van de 
                  volgende facturatieperiode. Opzegging dient te geschieden via uw account dashboard 
                  of per e-mail naar support@klikklaar.nl.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Vooruitbetaalde periodes (3 of 6 maanden) kunnen niet tussentijds worden opgezegd. 
                  Het abonnement loopt af aan het einde van de betaalde periode.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Gegevens en Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wij respecteren uw privacy en handelen conform de AVG. Voor het optimaliseren van 
                  uw website hebben wij toegang nodig tot bepaalde website-gegevens en analytics.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Uw gegevens worden uitsluitend gebruikt voor het leveren van onze diensten en 
                  worden niet gedeeld met derden, behalve waar noodzakelijk voor de dienstverlening.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Aansprakelijkheid</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Onze aansprakelijkheid is beperkt tot het bedrag van de door u betaalde maandelijkse 
                  fee. Wij zijn niet aansprakelijk voor indirecte schade, gederfde winst of 
                  gevolgschade.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  KlikKlaar is niet verantwoordelijk voor wijzigingen in zoekalgoritmes, 
                  technische problemen bij derden, of andere externe factoren die de resultaten 
                  kunnen beïnvloeden.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Intellectueel Eigendom</h2>
                <p className="text-gray-600 leading-relaxed">
                  Alle rechten op onze software, methodieken, en rapportages blijven eigendom van 
                  KlikKlaar. Het is niet toegestaan om onze technieken te reproduceren of 
                  door te verkopen aan derden.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Wijzigingen</h2>
                <p className="text-gray-600 leading-relaxed">
                  KlikKlaar behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. 
                  Wijzigingen worden minimaal 30 dagen van tevoren per e-mail aangekondigd. 
                  Voortgezet gebruik van onze diensten geldt als acceptatie van de nieuwe voorwaarden.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Toepasselijk Recht</h2>
                <p className="text-gray-600 leading-relaxed">
                  Op deze overeenkomst is Nederlands recht van toepassing. Geschillen worden 
                  voorgelegd aan de bevoegde rechter in Noord-Holland.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-gray-50 to-gray-50/80 shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Voor vragen over deze algemene voorwaarden kunt u contact opnemen:
                </p>
                <div className="text-gray-600">
                  <p><strong>KlikKlaar SEO</strong></p>
                  <p>Olieslagers poort 1</p>
                  <p>1601AW Enkhuizen</p>
                  <p>Nederland</p>
                  <p className="mt-2">
                    E-mail: <a href="mailto:support@klikklaar.nl" className="text-kk-orange hover:underline">support@klikklaar.nl</a>
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-purple-400/30 to-orange-300/40"></div>
        
        {/* Fade in from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 from-0% to-transparent to-25%"></div>
        
        {/* Fade out to bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 from-0% to-transparent to-25%"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Nog vragen?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Neem gerust contact met ons op als u vragen heeft over onze voorwaarden 
            of onze dienstverlening.
          </p>
          <Button 
            onClick={() => window.location.href = '/homepage#pricing'}
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Start nu
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AlgemeneVoorwaarden;