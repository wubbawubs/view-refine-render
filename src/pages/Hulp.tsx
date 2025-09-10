import { HelpCircle, Phone, MessageCircle, Book, ExternalLink, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Hulp = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');

  const texts = {
    nl: {
      title: 'Hulp & Ondersteuning',
      subtitle: 'Vind antwoorden op veelgestelde vragen of plan een gesprek in',
      planCall: 'Plan een gesprek',
      personalCall: 'Persoonlijk gesprek',
      personalCallDesc: 'Plan een 1-op-1 gesprek met een SEO specialist',
      scheduleAppointment: 'Afspraak inplannen',
      liveChat: 'Live chat',
      liveChatDesc: 'Direct contact met ons support team',
      startChat: 'Start chat',
      knowledgeBase: 'Kennisbase',
      knowledgeBaseDesc: 'Uitgebreide gidsen en tutorials',
      viewGuides: 'Bekijk gidsen',
      faq: 'Veelgestelde vragen',
      faqDesc: 'Antwoorden op de meest gestelde vragen over KlikKlaar',
      language: 'Taal'
    },
    en: {
      title: 'Help & Support',
      subtitle: 'Find answers to frequently asked questions or schedule a call',
      planCall: 'Schedule a call',
      personalCall: 'Personal conversation',
      personalCallDesc: 'Schedule a 1-on-1 conversation with an SEO specialist',
      scheduleAppointment: 'Schedule appointment',
      liveChat: 'Live chat',
      liveChatDesc: 'Direct contact with our support team',
      startChat: 'Start chat',
      knowledgeBase: 'Knowledge base',
      knowledgeBaseDesc: 'Extensive guides and tutorials',
      viewGuides: 'View guides',
      faq: 'Frequently Asked Questions',
      faqDesc: 'Answers to the most frequently asked questions about KlikKlaar',
      language: 'Language'
    }
  };

  const t = texts[language];

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">{t.title}</h1>
            <p className="text-kk-label text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
          
          <div className="flex gap-3 items-center">
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[140px]">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">Nederlands</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            <ThemeToggle />
            <Button className="bg-kk-gradient text-white hover:opacity-90">
              <Phone className="w-4 h-4 mr-2" />
              {t.planCall}
            </Button>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="border border-border/50">
            <CardHeader className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--kk-violet))]" />
              <CardTitle>{t.personalCall}</CardTitle>
              <CardDescription>
                {t.personalCallDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.scheduleAppointment}
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader className="text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--kk-violet))]" />
              <CardTitle>{t.liveChat}</CardTitle>
              <CardDescription>
                {t.liveChatDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" variant="outline">  
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.startChat}
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader className="text-center">
              <Book className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--kk-violet))]" />
              <CardTitle>{t.knowledgeBase}</CardTitle>
              <CardDescription>
                {t.knowledgeBaseDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewGuides}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
              {t.faq}
            </CardTitle>
            <CardDescription>
              {t.faqDesc}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {language === 'nl' ? 'Hoe werkt KlikKlaar precies?' : 'How does KlikKlaar work exactly?'}
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'nl' 
                    ? 'KlikKlaar analyseert uw website automatisch en implementeert SEO-optimalisaties zoals het verbeteren van meta descriptions, H1-tags, alt-teksten en technische SEO-elementen. Alle wijzigingen worden eerst aan u getoond voordat ze worden doorgevoerd.'
                    : 'KlikKlaar automatically analyzes your website and implements SEO optimizations such as improving meta descriptions, H1 tags, alt texts and technical SEO elements. All changes are shown to you first before they are implemented.'
                  }
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {language === 'nl' ? 'Kan ik optimalisaties zelf aanpassen?' : 'Can I customize optimizations myself?'}
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'nl'
                    ? 'Ja, absoluut! In het "Aanpassingen" menu kunt u alle automatische optimalisaties bekijken en naar wens personaliseren. U behoudt altijd volledige controle over uw website content.'
                    : 'Yes, absolutely! In the "Adjustments" menu you can view all automatic optimizations and personalize them as desired. You always retain full control over your website content.'
                  }
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  {language === 'nl' ? 'Hoe snel zie ik resultaten?' : 'How quickly will I see results?'}
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'nl'
                    ? 'Technische verbeteringen zijn vaak binnen 24-48 uur zichtbaar in zoekresultaten. Voor ranking verbeteringen rekenen we gemiddeld 4-12 weken, afhankelijk van de concurrentie in uw sector en locatie.'
                    : 'Technical improvements are often visible in search results within 24-48 hours. For ranking improvements, we calculate an average of 4-12 weeks, depending on the competition in your sector and location.'
                  }
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  {language === 'nl' ? 'Welke websites worden ondersteund?' : 'Which websites are supported?'}
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'nl'
                    ? 'KlikKlaar werkt met de meeste moderne websites, inclusief WordPress, Shopify, Wix, en custom HTML/CSS sites. Tijdens de setup controleren we of uw website compatibel is.'
                    : 'KlikKlaar works with most modern websites, including WordPress, Shopify, Wix, and custom HTML/CSS sites. During setup we check if your website is compatible.'
                  }
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  {language === 'nl' ? 'Kan ik mijn abonnement opzeggen?' : 'Can I cancel my subscription?'}
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'nl'
                    ? 'Ja, u kunt uw abonnement op elk moment opzeggen zonder opzegtermijn. Alle doorgevoerde optimalisaties blijven actief op uw website, maar nieuwe analyses en optimalisaties worden gestopt.'
                    : 'Yes, you can cancel your subscription at any time without notice. All implemented optimizations remain active on your website, but new analyses and optimizations are stopped.'
                  }
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  {language === 'nl' ? 'Hoe werkt de audit functie?' : 'How does the audit function work?'}
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'nl'
                    ? 'Onze audit tool scant uw complete website op 50+ SEO factoren, inclusief technische SEO, content kwaliteit, gebruikerservaring en lokale SEO. U krijgt een gedetailleerd rapport met prioriteit scores en actiepunten.'
                    : 'Our audit tool scans your complete website for 50+ SEO factors, including technical SEO, content quality, user experience and local SEO. You get a detailed report with priority scores and action items.'
                  }
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