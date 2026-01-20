import { useState } from "react";
import { HelpCircle, Play, BookOpen, Settings, BarChart3, FileText, Lightbulb, Menu, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";

interface VideoCard {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  icon: React.ElementType;
}

const videoCards: VideoCard[] = [
  {
    id: "1",
    title: "Dashboard Overzicht",
    description: "Leer hoe je het dashboard gebruikt en alle belangrijke metrics begrijpt.",
    duration: "5:30",
    category: "Basis",
    icon: BarChart3
  },
  {
    id: "2",
    title: "SEO Aanpassingen",
    description: "Ontdek hoe AI automatisch je website optimaliseert voor zoekmachines.",
    duration: "8:15",
    category: "SEO",
    icon: Settings
  },
  {
    id: "3",
    title: "SEO Plan Begrijpen",
    description: "Stapsgewijze uitleg van je persoonlijke SEO strategie en roadmap.",
    duration: "6:45",
    category: "Strategie",
    icon: FileText
  },
  {
    id: "4",
    title: "Content Ideeën Gebruiken",
    description: "Hoe je AI-gegenereerde content suggesties omzet naar resultaten.",
    duration: "7:20",
    category: "Content",
    icon: Lightbulb
  },
  {
    id: "5",
    title: "Rapporten & Analytics",
    description: "Begrijp je voortgang en leer rapporten downloaden en analyseren.",
    duration: "4:50",
    category: "Analytics",
    icon: BarChart3
  },
  {
    id: "6",
    title: "Account Instellingen",
    description: "Beheer je profiel, notificaties en abonnement instellingen.",
    duration: "3:30",
    category: "Account",
    icon: Settings
  }
];

const Help = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative lg:block z-50 h-screen transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="relative h-full">
          <Sidebar />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 lg:hidden text-sidebar-foreground hover:bg-sidebar-accent z-10"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <main className="flex-1 px-4 lg:px-8 py-6 overflow-y-auto relative z-10 w-full min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden shrink-0 p-1.5"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Help & Tutorials</h1>
                <p className="text-sm text-muted-foreground">Leer hoe je het meeste uit KlikKlaar haalt</p>
              </div>
            </div>
          </div>
          
          <ThemeToggle />
        </div>

        {/* Introduction Card */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">Welkom bij de Help sectie</h2>
              <p className="text-muted-foreground">
                Hier vind je video tutorials die je stap voor stap door alle functies van KlikKlaar leiden. 
                Klik op een video om te starten met leren.
              </p>
            </div>
          </div>
        </Card>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((video) => {
            const Icon = video.icon;
            return (
              <Card 
                key={video.id}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 rounded text-xs text-primary-foreground font-medium">
                    {video.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Veelgestelde Vragen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-card border border-border">
              <h3 className="font-medium text-foreground mb-2">Hoe vaak worden mijn SEO aanpassingen bijgewerkt?</h3>
              <p className="text-sm text-muted-foreground">
                Onze AI analyseert je website dagelijks en past optimalisaties automatisch toe wanneer nodig.
              </p>
            </Card>
            <Card className="p-4 bg-card border border-border">
              <h3 className="font-medium text-foreground mb-2">Kan ik aanpassingen ongedaan maken?</h3>
              <p className="text-sm text-muted-foreground">
                Ja, alle wijzigingen worden opgeslagen en je kunt altijd terugkeren naar eerdere versies.
              </p>
            </Card>
            <Card className="p-4 bg-card border border-border">
              <h3 className="font-medium text-foreground mb-2">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-sm text-muted-foreground">
                SEO resultaten zijn meestal zichtbaar binnen 2-4 weken, afhankelijk van je branche en concurrentie.
              </p>
            </Card>
            <Card className="p-4 bg-card border border-border">
              <h3 className="font-medium text-foreground mb-2">Kan ik mijn abonnement upgraden?</h3>
              <p className="text-sm text-muted-foreground">
                Ja, ga naar Account instellingen om je abonnement te bekijken en te upgraden.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;
