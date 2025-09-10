import { HelpCircle, Phone, MessageCircle, Book, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Hulp = () => {
  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">Hulp & Ondersteuning</h1>
            <p className="text-kk-label text-muted-foreground">
              Vind antwoorden op veelgestelde vragen of plan een gesprek in
            </p>
          </div>
          
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <Button className="bg-kk-gradient text-white hover:opacity-90">
              <Phone className="w-4 h-4 mr-2" />
              Plan een gesprek
            </Button>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--kk-violet))]" />
              <CardTitle>Persoonlijk gesprek</CardTitle>
              <CardDescription>
                Plan een 1-op-1 gesprek met een SEO specialist
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Afspraak inplannen
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--kk-violet))]" />
              <CardTitle>Live chat</CardTitle>
              <CardDescription>
                Direct contact met ons support team
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" variant="outline">  
                <MessageCircle className="w-4 h-4 mr-2" />
                Start chat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Book className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--kk-violet))]" />
              <CardTitle>Kennisbase</CardTitle>
              <CardDescription>
                Uitgebreide gidsen en tutorials
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Bekijk gidsen
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Veelgestelde vragen
            </CardTitle>
            <CardDescription>
              Antwoorden op de meest gestelde vragen over KlikKlaar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Hoe werkt KlikKlaar precies?</AccordionTrigger>
                <AccordionContent>
                  KlikKlaar analyseert uw website automatisch en implementeert SEO-optimalisaties zoals het verbeteren van meta descriptions, H1-tags, alt-teksten en technische SEO-elementen. Alle wijzigingen worden eerst aan u getoond voordat ze worden doorgevoerd.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Kan ik optimalisaties zelf aanpassen?</AccordionTrigger>
                <AccordionContent>
                  Ja, absoluut! In het "Aanpassingen" menu kunt u alle automatische optimalisaties bekijken en naar wens personaliseren. U behoudt altijd volledige controle over uw website content.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Hoe snel zie ik resultaten?</AccordionTrigger>
                <AccordionContent>
                  Technische verbeteringen zijn vaak binnen 24-48 uur zichtbaar in zoekresultaten. Voor ranking verbeteringen rekenen we gemiddeld 4-12 weken, afhankelijk van de concurrentie in uw sector en locatie.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Welke websites worden ondersteund?</AccordionTrigger>
                <AccordionContent>
                  KlikKlaar werkt met de meeste moderne websites, inclusief WordPress, Shopify, Wix, en custom HTML/CSS sites. Tijdens de setup controleren we of uw website compatibel is.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Kan ik mijn abonnement opzeggen?</AccordionTrigger>
                <AccordionContent>
                  Ja, u kunt uw abonnement op elk moment opzeggen zonder opzegtermijn. Alle doorgevoerde optimalisaties blijven actief op uw website, maar nieuwe analyses en optimalisaties worden gestopt.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>Hoe werkt de audit functie?</AccordionTrigger>
                <AccordionContent>
                  Onze audit tool scant uw complete website op 50+ SEO factoren, inclusief technische SEO, content kwaliteit, gebruikerservaring en lokale SEO. U krijgt een gedetailleerd rapport met prioriteit scores en actiepunten.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Hulp;