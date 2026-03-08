import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu, X, Target, CheckCircle2, Clock, AlertCircle, TrendingUp, Calendar, Sparkles, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSEOPlanCategories } from "@/hooks/useDashboardData";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import PageBanner from "@/components/ui/page-banner";
import { GradientCard } from "@/components/ui/gradient-card";

const mockRoadmap = [
  { month: "Maart 2026", phase: "Technische Basis", description: "Website snelheid, mobile-first en crawlbaarheid optimaliseren", progress: 95, status: "bijna klaar" },
  { month: "April 2026", phase: "On-Page SEO", description: "Meta tags, headers, interne links en content structuur", progress: 60, status: "bezig" },
  { month: "Mei 2026", phase: "Content Strategie", description: "Keyword-gedreven content creatie en blog planning", progress: 20, status: "gestart" },
  { month: "Juni 2026", phase: "Autoriteit Opbouwen", description: "Backlink strategie en lokale SEO versterken", progress: 0, status: "gepland" },
];

const mockCategories = [
  {
    category: "Technische SEO",
    progress: 92,
    icon: "⚙️",
    tasks: [
      { title: "Website snelheid optimalisatie", status: "completed", priority: "high", description: "Laadtijd teruggebracht van 4.2s naar 1.8s", impact: "+15% gebruikerservaring" },
      { title: "Mobile-first indexering", status: "completed", priority: "high", description: "Responsive design volledig geïmplementeerd", impact: "+20% mobiel verkeer" },
      { title: "XML Sitemap genereren", status: "completed", priority: "medium", description: "Automatisch bijgewerkte sitemap ingediend bij Google", impact: "+10% indexering" },
      { title: "Robots.txt optimalisatie", status: "completed", priority: "low", description: "Crawl budget efficiëntie verbeterd", impact: "+5% crawling" },
      { title: "Core Web Vitals verbeteren", status: "in-progress", priority: "high", description: "LCP en CLS scores verbeteren", impact: "+12% ranking signaal" },
    ]
  },
  {
    category: "On-Page SEO",
    progress: 65,
    icon: "📝",
    tasks: [
      { title: "Meta titles optimaliseren", status: "completed", priority: "high", description: "Alle pagina's voorzien van keyword-rijke titles", impact: "+18% CTR" },
      { title: "Meta descriptions schrijven", status: "completed", priority: "high", description: "Overtuigende beschrijvingen met call-to-action", impact: "+22% CTR" },
      { title: "Header structuur (H1-H6)", status: "in-progress", priority: "medium", description: "Logische hiërarchie implementeren", impact: "+8% content relevantie" },
      { title: "Interne linking strategie", status: "in-progress", priority: "medium", description: "Contextual links toevoegen", impact: "+15% pageviews" },
      { title: "Alt-teksten voor afbeeldingen", status: "pending", priority: "low", description: "Beschrijvende alt-teksten voor alle media", impact: "+10% image SEO" },
    ]
  },
  {
    category: "Content & Keywords",
    progress: 30,
    icon: "🎯",
    tasks: [
      { title: "Keyword research voltooien", status: "completed", priority: "high", description: "50+ relevante zoektermen geïdentificeerd", impact: "Basis voor strategie" },
      { title: "Content gap analyse", status: "in-progress", priority: "high", description: "Ontbrekende topics identificeren vs concurrenten", impact: "+25% topical authority" },
      { title: "Blog content planning", status: "pending", priority: "medium", description: "12 artikelen voor komende 3 maanden", impact: "+30% organisch verkeer" },
      { title: "FAQ pagina's opzetten", status: "pending", priority: "medium", description: "Veelgestelde vragen per dienst categorie", impact: "+20% featured snippets" },
    ]
  },
  {
    category: "Lokale SEO",
    progress: 45,
    icon: "📍",
    tasks: [
      { title: "Google Business Profile", status: "completed", priority: "high", description: "Profiel volledig ingevuld en geverifieerd", impact: "+35% lokale zichtbaarheid" },
      { title: "NAP consistentie", status: "in-progress", priority: "medium", description: "Naam, adres, telefoon uniform op alle platforms", impact: "+10% lokale ranking" },
      { title: "Lokale backlinks verkrijgen", status: "pending", priority: "medium", description: "Vermeldingen in lokale directories", impact: "+15% domain authority" },
      { title: "Review strategie", status: "pending", priority: "low", description: "Systematisch reviews verzamelen", impact: "+20% vertrouwen" },
    ]
  },
];

const SEOPlan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

  const totalTasks = mockCategories.reduce((sum, c) => sum + c.tasks.length, 0);
  const completedTasks = mockCategories.reduce((sum, c) => sum + c.tasks.filter(t => t.status === 'completed').length, 0);
  const overallProgress = Math.round((completedTasks / totalTasks) * 100);

  const getStatusConfig = (status: string) => {
    if (status === 'completed') return { icon: CheckCircle2, label: 'Voltooid', className: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30' };
    if (status === 'in-progress') return { icon: Zap, label: 'Bezig', className: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30' };
    return { icon: Clock, label: 'Te doen', className: 'text-muted-foreground bg-muted' };
  };

  const getPriorityConfig = (priority: string) => {
    if (priority === 'high') return { label: 'Hoog', className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' };
    if (priority === 'medium') return { label: 'Medium', className: 'bg-[hsl(var(--kk-orange)/0.1)] text-[hsl(var(--kk-orange))]' };
    return { label: 'Laag', className: 'bg-muted text-muted-foreground' };
  };

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="premium-glass-card border-b border-border/40 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">
          {/* Page Banner */}
          <div className="mb-6">
            <PageBanner
              label="SEO Plan"
              title="Jouw SEO Strategie"
              description="Een compleet overzicht van je SEO roadmap, voortgang per categorie en alle taken die we voor je uitvoeren."
              icon={<Target className="w-4 h-4 text-white" />}
            />
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{overallProgress}%</p>
                <p className="text-xs text-muted-foreground">Totale voortgang</p>
              </div>
            </GradientCard>
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{completedTasks}</p>
                <p className="text-xs text-muted-foreground">Taken voltooid</p>
              </div>
            </GradientCard>
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalTasks - completedTasks}</p>
                <p className="text-xs text-muted-foreground">Nog te doen</p>
              </div>
            </GradientCard>
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-[hsl(var(--kk-violet))]">{mockCategories.length}</p>
                <p className="text-xs text-muted-foreground">Categorieën</p>
              </div>
            </GradientCard>
          </div>

          {/* Roadmap Timeline */}
          <GradientCard className="mb-6">
            <div className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[hsl(var(--kk-violet))]" />
                SEO Roadmap
              </h3>
              <div className="space-y-3">
                {mockRoadmap.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-20 sm:w-24 shrink-0">
                      <p className="text-xs font-medium text-foreground">{item.month}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full shrink-0 ${item.progress >= 90 ? 'bg-emerald-500' : item.progress > 0 ? 'bg-blue-500' : 'bg-muted-foreground/30'}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-sm font-medium text-foreground truncate">{item.phase}</p>
                        <Badge variant="outline" className="text-[10px] shrink-0">{item.status}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 hidden sm:block">{item.description}</p>
                      <Progress value={item.progress} className="h-1.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GradientCard>

          {/* Categories with Tasks */}
          <div className="space-y-4">
            {mockCategories.map((category, index) => {
              const isExpanded = expandedCategory === index;
              return (
                <GradientCard key={index} className="animate-fade-in">
                  <div 
                    className="p-5 cursor-pointer"
                    onClick={() => setExpandedCategory(isExpanded ? null : index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.icon}</span>
                        <div>
                          <CardTitle className="text-base">{category.category}</CardTitle>
                          <p className="text-xs text-muted-foreground">{category.tasks.filter(t => t.status === 'completed').length}/{category.tasks.length} taken voltooid</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[hsl(var(--kk-violet))]">{category.progress}%</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </div>
                    <Progress value={category.progress} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-[hsl(var(--kk-violet))] [&>div]:to-[hsl(var(--kk-fuchsia))]" />
                  </div>
                  
                  {isExpanded && (
                    <div className="px-5 pb-5 space-y-2 animate-fade-in">
                      {category.tasks.map((task, taskIndex) => {
                        const statusConfig = getStatusConfig(task.status);
                        const priorityConfig = getPriorityConfig(task.priority);
                        const StatusIcon = statusConfig.icon;
                        return (
                          <div key={taskIndex} className="p-3 sm:p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex items-start gap-3">
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${statusConfig.className}`}>
                                  <StatusIcon className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground">{task.title}</p>
                                  <p className="text-xs text-muted-foreground mt-0.5">{task.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <Badge className={`text-[10px] border-0 ${priorityConfig.className}`}>{priorityConfig.label}</Badge>
                              </div>
                            </div>
                            {task.impact && (
                              <div className="flex items-center gap-1 ml-10">
                                <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{task.impact}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </GradientCard>
              );
            })}
          </div>

          {/* AI Tip */}
          <div className="mt-6 p-4 rounded-xl bg-[hsl(var(--kk-violet)/0.05)] border border-[hsl(var(--kk-violet)/0.1)]">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[hsl(var(--kk-violet))] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[hsl(var(--kk-violet))] mb-1">AI Inzicht</p>
                <p className="text-xs text-muted-foreground">Op basis van je huidige voortgang verwachten we dat je binnen 8 weken de technische en on-page SEO volledig afgerond hebt. Dit levert naar schatting +35% meer organisch verkeer op.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SEOPlan;
