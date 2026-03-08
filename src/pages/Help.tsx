import { useState } from "react";
import { HelpCircle, Play, BookOpen, Settings, BarChart3, FileText, Lightbulb, Search, MessageCircle, Mail, Phone, ChevronDown, ChevronUp, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PageBanner from "@/components/ui/page-banner";
import { GradientCard } from "@/components/ui/gradient-card";
import { Badge } from "@/components/ui/badge";

interface VideoCard {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  icon: React.ElementType;
  popular?: boolean;
}

const videoCards: VideoCard[] = [
  { id: "1", title: "Dashboard Overzicht", description: "Leer hoe je het dashboard gebruikt en alle belangrijke metrics begrijpt.", duration: "5:30", category: "Basis", icon: BarChart3, popular: true },
  { id: "2", title: "SEO Aanpassingen", description: "Ontdek hoe AI automatisch je website optimaliseert voor zoekmachines.", duration: "8:15", category: "SEO", icon: Settings },
  { id: "3", title: "SEO Plan Begrijpen", description: "Stapsgewijze uitleg van je persoonlijke SEO strategie en roadmap.", duration: "6:45", category: "Strategie", icon: FileText, popular: true },
  { id: "4", title: "Content Ideeën Gebruiken", description: "Hoe je AI-gegenereerde content suggesties omzet naar resultaten.", duration: "7:20", category: "Content", icon: Lightbulb },
  { id: "5", title: "Rapporten & Analytics", description: "Begrijp je voortgang en leer rapporten downloaden en analyseren.", duration: "4:50", category: "Analytics", icon: BarChart3 },
  { id: "6", title: "Account Instellingen", description: "Beheer je profiel, notificaties en abonnement instellingen.", duration: "3:30", category: "Account", icon: Settings },
];

const faqs = [
  { q: "Hoe vaak worden mijn SEO aanpassingen bijgewerkt?", a: "Onze AI analyseert je website dagelijks en past optimalisaties automatisch toe wanneer nodig. Je kunt alle wijzigingen bekijken op de Aanpassingen pagina.", category: "SEO" },
  { q: "Kan ik aanpassingen ongedaan maken?", a: "Ja, alle wijzigingen worden opgeslagen en je kunt altijd terugkeren naar eerdere versies. Neem contact op met ons team als je hulp nodig hebt.", category: "SEO" },
  { q: "Hoe lang duurt het voordat ik resultaten zie?", a: "SEO resultaten zijn meestal zichtbaar binnen 2-4 weken, afhankelijk van je branche en concurrentie. Sommige technische optimalisaties hebben direct effect.", category: "Resultaten" },
  { q: "Kan ik mijn abonnement upgraden?", a: "Ja, ga naar Account instellingen om je abonnement te bekijken en te upgraden. Upgrades gaan direct in.", category: "Account" },
  { q: "Wat betekent de SEO Score precies?", a: "De SEO Score is een gewogen gemiddelde van 4 categorieën: Technische SEO, Content & On-Page, Backlinks en Snelheid. Klik op de score cirkel in het dashboard voor een volledige breakdown.", category: "SEO" },
  { q: "Hoe werkt de AI content suggestie?", a: "Onze AI analyseert je zoekwoorden, concurrenten en trending topics om relevante content ideeën te genereren. Elk idee bevat zoekvolume, moeilijkheidsgraad en verwachte impact.", category: "Content" },
  { q: "Worden mijn gegevens veilig bewaard?", a: "Absoluut. We gebruiken end-to-end encryptie en slaan gegevens op in beveiligde EU-datacenters. We delen nooit data met derden.", category: "Privacy" },
  { q: "Kan ik meerdere websites beheren?", a: "Ja, afhankelijk van je abonnement kun je tot 5 websites beheren vanuit één dashboard. Enterprise klanten hebben onbeperkte websites.", category: "Account" },
];

const Help = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === "" || 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const faqCategories = ["all", ...Array.from(new Set(faqs.map(f => f.category)))];

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      
      <div className={`fixed lg:relative lg:block z-50 h-screen transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="relative h-full">
          <Sidebar />
          <Button variant="ghost" size="sm" className="absolute top-4 right-4 lg:hidden text-sidebar-foreground hover:bg-sidebar-accent z-10" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <main className="flex-1 px-4 lg:px-8 py-6 overflow-y-auto relative z-10 w-full min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="lg:hidden shrink-0 p-1.5" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-4 h-4" />
            </Button>
          </div>
          <ThemeToggle />
        </div>

        {/* Page Banner */}
        <div className="mb-8">
          <PageBanner
            label="Help & Tutorials"
            title="Help & Tutorials"
            description="Leer hoe je het meeste uit KlikKlaar haalt. Bekijk onze video tutorials, veelgestelde vragen en neem contact op."
            icon={<HelpCircle className="w-4 h-4 text-white" />}
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          <GradientCard>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-[hsl(var(--kk-violet)/0.1)] flex items-center justify-center">
                <Play className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
              </div>
              <p className="text-xl font-bold text-foreground">{videoCards.length}</p>
              <p className="text-xs text-muted-foreground">Video tutorials</p>
            </div>
          </GradientCard>
          <GradientCard>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-xl font-bold text-foreground">{faqs.length}</p>
              <p className="text-xs text-muted-foreground">FAQ artikelen</p>
            </div>
          </GradientCard>
          <GradientCard>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-xl font-bold text-foreground">&lt;2u</p>
              <p className="text-xs text-muted-foreground">Gem. reactietijd</p>
            </div>
          </GradientCard>
        </div>

        {/* Video Grid */}
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Play className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
          Video Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {videoCards.map((video) => {
            const Icon = video.icon;
            return (
              <GradientCard key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">{video.duration}</div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 rounded text-xs text-primary-foreground font-medium">{video.category}</div>
                  {video.popular && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-[hsl(var(--kk-orange))] rounded text-xs text-white font-medium">
                      <Star className="w-3 h-3" /> Populair
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors text-sm">{video.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{video.description}</p>
                    </div>
                  </div>
                </div>
              </GradientCard>
            );
          })}
        </div>

        {/* FAQ Section */}
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
          Veelgestelde Vragen
        </h2>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Zoek in veelgestelde vragen..." 
              className="pl-9 h-9 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-1 flex-wrap">
            {faqCategories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                className="text-xs h-9"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "all" ? "Alle" : cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-10">
          {filteredFaqs.map((faq, i) => {
            const isExpanded = expandedFaq === i;
            return (
              <GradientCard key={i}>
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => setExpandedFaq(isExpanded ? null : i)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <h3 className="font-medium text-foreground text-sm">{faq.q}</h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="outline" className="text-[10px]">{faq.category}</Badge>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  </div>
                  {isExpanded && (
                    <p className="text-sm text-muted-foreground mt-3 animate-fade-in">{faq.a}</p>
                  )}
                </div>
              </GradientCard>
            );
          })}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">Geen resultaten gevonden voor "{searchQuery}"</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
          Contact & Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GradientCard>
            <div className="p-5 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[hsl(var(--kk-violet)/0.1)] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[hsl(var(--kk-violet))]" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">E-mail Support</h3>
              <p className="text-xs text-muted-foreground mb-3">Stuur ons een bericht en we reageren binnen 2 uur.</p>
              <Button variant="outline" size="sm" className="text-xs">
                support@klikklaar.io
              </Button>
            </div>
          </GradientCard>
          <GradientCard>
            <div className="p-5 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">Telefonisch</h3>
              <p className="text-xs text-muted-foreground mb-3">Bereikbaar ma-vr van 9:00 tot 17:00 uur.</p>
              <Button variant="outline" size="sm" className="text-xs">
                +31 6 31354936
              </Button>
            </div>
          </GradientCard>
          <GradientCard>
            <div className="p-5 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">Live Chat</h3>
              <p className="text-xs text-muted-foreground mb-3">Direct chatten met ons support team.</p>
              <Button size="sm" className="bg-kk-gradient text-white hover:opacity-90 text-xs">
                Start chat
              </Button>
            </div>
          </GradientCard>
        </div>
      </main>
    </div>
  );
};

export default Help;
