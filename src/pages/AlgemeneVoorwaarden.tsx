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
        
        {/* Fade out to bottom - stronger fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-60% to-white to-100%"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        
        {/* Subtle overlay for more blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Algemene Voorwaarden – KlikKlaar SEO</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, diensten en overeenkomsten van KlikKlaar SEO, gevestigd te Olieslagerspoort 1, 1601AW Enkhuizen.
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
                  Deze voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en leveringen van KlikKlaar SEO, tenzij schriftelijk anders overeengekomen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Door gebruik te maken van onze diensten accepteert de klant deze voorwaarden volledig.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Afwijkende of aanvullende voorwaarden van de klant worden uitdrukkelijk van de hand gewezen, tenzij deze schriftelijk en uitdrukkelijk door KlikKlaar zijn aanvaard.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Dienstverlening</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar levert geautomatiseerde SEO-optimalisatie via een AI-gestuurd platform.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar levert uitsluitend een inspanningsverbintenis en geen resultaatverbintenis.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Er worden geen garanties gegeven met betrekking tot zoekmachineposities, traffic, conversies of enig ander concreet resultaat.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Resultaten zijn afhankelijk van externe factoren zoals zoekalgoritmes, concurrentie, technische omstandigheden en marktontwikkelingen.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Prijzen en Betaling</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Alle prijzen zijn exclusief BTW, tenzij anders vermeld</li>
                  <li>• Betaling geschiedt vooraf via iDEAL, creditcard of andere door KlikKlaar geaccepteerde methoden</li>
                  <li>• Abonnementen worden automatisch verlengd, tenzij tijdig opgezegd</li>
                  <li>• Kortingsabonnementen (bijv. 3 of 6 maanden) worden vooraf in één termijn betaald en kunnen niet tussentijds worden beëindigd of gerestitueerd</li>
                  <li>• Zodra een klant zich registreert en een abonnement activeert, ontstaat een betalingsverplichting voor de volledige abonnementsperiode. Niet-gebruik van de dienst ontslaat de klant niet van zijn betalingsverplichting</li>
                  <li>• KlikKlaar behoudt zich het recht voor prijzen te wijzigen met een aankondigingstermijn van minimaal 30 dagen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Opzegging</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Maandabonnementen kunnen te allen tijde worden opgezegd met ingang van de volgende facturatieperiode.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vooruitbetaalde periodes (bijv. 3 of 6 maanden) kunnen niet tussentijds worden beëindigd of gerestitueerd.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Opzeggingen dienen via het klantdashboard of per e-mail te worden ingediend.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Gegevens en Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar handelt conform de Algemene Verordening Gegevensbescherming (AVG).
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Voor de uitvoering van de diensten kan toegang nodig zijn tot website-gegevens, statistieken of third-party platforms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gegevens van klanten worden uitsluitend gebruikt voor de uitvoering van de dienstverlening en niet verkocht aan derden.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Aansprakelijkheid</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  De totale aansprakelijkheid van KlikKlaar is in alle gevallen beperkt tot het bedrag dat de klant in de laatste maand aan KlikKlaar heeft betaald.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar is niet aansprakelijk voor indirecte schade, gevolgschade, verlies van omzet of winst, reputatieschade, dataverlies of claims van derden.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar is niet verantwoordelijk voor wijzigingen in zoekalgoritmes, storingen of beperkingen bij derden, hacks, beveiligingsincidenten of andere externe oorzaken die de dienstverlening beïnvloeden.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gebruik van onze diensten is volledig op eigen risico van de klant.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Intellectueel Eigendom</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Alle rechten op software, methodieken, data, analyses en rapportages berusten bij KlikKlaar.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Het is niet toegestaan onze technologie, methodieken of content te kopiëren, reproduceren of door te verkopen, tenzij met uitdrukkelijke schriftelijke toestemming van KlikKlaar.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Overmacht</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar is niet gehouden enige verplichting na te komen indien dit redelijkerwijs niet mogelijk is als gevolg van overmacht.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Onder overmacht wordt verstaan: iedere van de wil van KlikKlaar onafhankelijke omstandigheid die nakoming tijdelijk of blijvend verhindert.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hieronder vallen onder meer (maar niet uitsluitend): storingen in de infrastructuur van derden, internet- of hostingproblemen, virussen, hacks, pandemieën, natuurrampen, overheidsmaatregelen, oorlog, stakingen, brand en andere omstandigheden waarop KlikKlaar geen invloed kan uitoefenen.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Wijzigingen</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  KlikKlaar behoudt zich het recht voor deze algemene voorwaarden te allen tijde te wijzigen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gewijzigde voorwaarden worden minimaal 30 dagen vooraf aan de klant bekendgemaakt.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Voortgezet gebruik van de diensten geldt als aanvaarding van de gewijzigde voorwaarden.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Toepasselijk Recht</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Op deze overeenkomst is uitsluitend Nederlands recht van toepassing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Geschillen worden voorgelegd aan de bevoegde rechter te Noord-Holland.
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
                  <p>Olieslagerspoort 1</p>
                  <p>1601AW Enkhuizen</p>
                  <p>Nederland</p>
                  <p className="mt-2">
                    E-mail: <a href="mailto:support@klikklaar.io" className="text-orange-500 hover:underline">support@klikklaar.io</a>
                  </p>
                </div>
              </CardContent>
            </Card>

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