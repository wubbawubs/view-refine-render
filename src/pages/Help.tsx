import { useState } from "react";
import { HelpCircle, Play, BookOpen, Settings, BarChart3, FileText, Lightbulb, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import PageBanner from "@/components/ui/page-banner";
import { GradientCard } from "@/components/ui/gradient-card";

interface VideoCard {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  icon: React.ElementType;
}

const videoCards: VideoCard[] = [
  { id: "1", title: "Dashboard Overzicht", description: "Leer hoe je het dashboard gebruikt en alle belangrijke metrics begrijpt.", duration: "5:30", category: "Basis", icon: BarChart3 },
  { id: "2", title: "SEO Aanpassingen", description: "Ontdek hoe AI automatisch je website optimaliseert voor zoekmachines.", duration: "8:15", category: "SEO", icon: Settings },
  { id: "3", title: "SEO Plan Begrijpen", description: "Stapsgewijze uitleg van je persoonlijke SEO strategie en roadmap.", duration: "6:45", category: "Strategie", icon: FileText },
  { id: "4", title: "Content Ideeën Gebruiken", description: "Hoe je AI-gegenereerde content suggesties omzet naar resultaten.", duration: "7:20", category: "Content", icon: Lightbulb },
  { id: "5", title: "Rapporten & Analytics", description: "Begrijp je voortgang en leer rapporten downloaden en analyseren.", duration: "4:50", category: "Analytics", icon: BarChart3 },
  { id: "6", title: "Account Instellingen", description: "Beheer je profiel, notificaties en abonnement instellingen.", duration: "3:30", category: "Account", icon: Settings },
];

const Help = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            description="Leer hoe je het meeste uit KlikKlaar haalt. Bekijk onze video tutorials en veelgestelde vragen."
            icon={<HelpCircle className="w-4 h-4 text-white" />}
          />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((video) => {
            const Icon = video.icon;
            return (
              <GradientCard key={video.id} className="group cursor-pointer">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">{video.duration}</div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 rounded text-xs text-primary-foreground font-medium">{video.category}</div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{video.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                    </div>
                  </div>
                </div>
              </GradientCard>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Veelgestelde Vragen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: "Hoe vaak worden mijn SEO aanpassingen bijgewerkt?", a: "Onze AI analyseert je website dagelijks en past optimalisaties automatisch toe wanneer nodig." },
              { q: "Kan ik aanpassingen ongedaan maken?", a: "Ja, alle wijzigingen worden opgeslagen en je kunt altijd terugkeren naar eerdere versies." },
              { q: "Hoe lang duurt het voordat ik resultaten zie?", a: "SEO resultaten zijn meestal zichtbaar binnen 2-4 weken, afhankelijk van je branche en concurrentie." },
              { q: "Kan ik mijn abonnement upgraden?", a: "Ja, ga naar Account instellingen om je abonnement te bekijken en te upgraden." },
            ].map((faq, i) => (
              <GradientCard key={i}>
                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;
