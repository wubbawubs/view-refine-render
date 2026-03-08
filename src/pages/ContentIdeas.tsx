import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Globe, Lightbulb, FileText, Share2, Mail, TrendingUp, Eye, Clock, Sparkles, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useContentIdeas } from "@/hooks/useDashboardData";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageBanner from "@/components/ui/page-banner";
import { GradientCard } from "@/components/ui/gradient-card";
import { Progress } from "@/components/ui/progress";

// Enriched mock content ideas
const mockIdeas = [
  { id: "1", type: "blog", title: "10 SEO Tips voor MKB in 2026", description: "Een uitgebreide gids met praktische SEO tips specifiek voor kleine en middelgrote bedrijven.", keywords: ["seo tips", "mkb seo", "zoekmachine optimalisatie"], estimatedImpact: "+450 bezoekers/maand", priority: "high", status: "planned", readTime: "8 min", searchVolume: 1200, difficulty: 35, aiInsight: "Dit topic heeft een hoog zoekvolume met lage concurrentie. Perfecte kans om authority op te bouwen." },
  { id: "2", type: "page", title: "Diensten Pagina Herschrijven", description: "De huidige diensten pagina mist belangrijke zoekwoorden en overtuigende copy.", keywords: ["diensten", "webdesign", "SEO diensten"], estimatedImpact: "+180 bezoekers/maand", priority: "high", status: "draft", readTime: "5 min", searchVolume: 880, difficulty: 42, aiInsight: "Je diensten pagina scoort momenteel op positie 14. Met betere content kun je top 5 bereiken." },
  { id: "3", type: "blog", title: "Lokale SEO: Complete Handleiding", description: "Alles wat je moet weten over lokale zoekmachine optimalisatie voor fysieke winkels.", keywords: ["lokale seo", "google maps", "lokaal gevonden worden"], estimatedImpact: "+320 bezoekers/maand", priority: "medium", status: "planned", readTime: "12 min", searchVolume: 960, difficulty: 28, aiInsight: "Lokale SEO content is trending. Er is weinig Nederlandstalige content over dit onderwerp." },
  { id: "4", type: "social", title: "Instagram Reels: SEO Before/After", description: "Korte video's die voor-en-na resultaten laten zien van SEO optimalisaties.", keywords: ["seo resultaten", "before after", "seo case study"], estimatedImpact: "+2.500 impressies", priority: "medium", status: "planned", readTime: "30 sec", searchVolume: 0, difficulty: 0, aiInsight: "Visuele content op social media trekt 3x meer engagement dan tekst-only posts." },
  { id: "5", type: "email", title: "Maandelijkse SEO Nieuwsbrief", description: "Educatieve nieuwsbrief met SEO trends, tips en klant success stories.", keywords: ["seo nieuws", "google updates", "seo trends"], estimatedImpact: "+15% retentie", priority: "low", status: "published", readTime: "4 min", searchVolume: 0, difficulty: 0, aiInsight: "E-mail marketing heeft een gemiddelde ROI van 4200%. Nieuwsbrieven verhogen klantloyaliteit." },
  { id: "6", type: "blog", title: "Core Web Vitals Uitgelegd", description: "Technische uitleg over Core Web Vitals en waarom ze belangrijk zijn voor je ranking.", keywords: ["core web vitals", "pagina snelheid", "LCP CLS"], estimatedImpact: "+280 bezoekers/maand", priority: "medium", status: "draft", readTime: "10 min", searchVolume: 720, difficulty: 55, aiInsight: "Technische content trekt developers en beslissers aan. Hoge conversie kans." },
];

const mockContentStats = {
  totalIdeas: 24,
  published: 8,
  planned: 12,
  drafts: 4,
  estimatedTraffic: "+1.750",
};

const ContentIdeas = () => {
  
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [filterType, setFilterType] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const texts = {
    nl: {
      title: 'Content Ideeën',
      subtitle: 'AI-gegenereerde content suggesties op basis van jouw SEO data, zoektrends en concurrentie analyse.',
      all: 'Alle', blog: 'Blog', page: 'Pagina', social: 'Social', email: 'Email',
    },
    en: {
      title: 'Content Ideas',
      subtitle: 'AI-generated content suggestions based on your SEO data, search trends and competitor analysis.',
      all: 'All', blog: 'Blog', page: 'Page', social: 'Social', email: 'Email',
    }
  };

  const t = texts[language];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'page': return FileText;
      case 'social': return Share2;
      case 'email': return Mail;
      default: return Lightbulb;
    }
  };

  const getStatusConfig = (status: string) => {
    if (status === 'published') return { label: 'Gepubliceerd', className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' };
    if (status === 'planned') return { label: 'Gepland', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' };
    return { label: 'Concept', className: 'bg-muted text-muted-foreground' };
  };

  const getPriorityConfig = (priority: string) => {
    if (priority === 'high') return { label: 'Hoge prioriteit', className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' };
    if (priority === 'medium') return { label: 'Medium', className: 'bg-[hsl(var(--kk-orange)/0.1)] text-[hsl(var(--kk-orange))]' };
    return { label: 'Laag', className: 'bg-muted text-muted-foreground' };
  };

  const filteredIdeas = mockIdeas.filter(idea => filterType === 'all' ? true : idea.type === filterType);

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
          <div />
          <div className="flex gap-2 items-center">
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[60px] sm:w-[70px] lg:w-[120px] text-xs h-8 lg:h-9">
                <Globe className="w-3 h-3 sm:mr-1" />
                <SelectValue className="hidden sm:inline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">NL</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
            <ThemeToggle />
          </div>
        </div>

        <main className="space-y-6">
          {/* Page Banner */}
          <div className="mb-6">
            <PageBanner
              label="Content Ideeën"
              title={t.title}
              description={t.subtitle}
              icon={<Lightbulb className="w-4 h-4 text-white" />}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{mockContentStats.totalIdeas}</p>
                <p className="text-xs text-muted-foreground">Totaal ideeën</p>
              </div>
            </GradientCard>
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{mockContentStats.published}</p>
                <p className="text-xs text-muted-foreground">Gepubliceerd</p>
              </div>
            </GradientCard>
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{mockContentStats.planned}</p>
                <p className="text-xs text-muted-foreground">Gepland</p>
              </div>
            </GradientCard>
            <GradientCard>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold text-[hsl(var(--kk-violet))]">{mockContentStats.estimatedTraffic}</p>
                <p className="text-xs text-muted-foreground">Verwacht traffic</p>
              </div>
            </GradientCard>
          </div>

          {/* Filter Tabs */}
          <Tabs value={filterType} onValueChange={setFilterType} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">{t.all}</TabsTrigger>
              <TabsTrigger value="blog">{t.blog}</TabsTrigger>
              <TabsTrigger value="page">{t.page}</TabsTrigger>
              <TabsTrigger value="social">{t.social}</TabsTrigger>
              <TabsTrigger value="email">{t.email}</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Content Ideas */}
          <div className="space-y-3">
            {filteredIdeas.map((idea) => {
              const TypeIcon = getTypeIcon(idea.type);
              const statusConfig = getStatusConfig(idea.status);
              const priorityConfig = getPriorityConfig(idea.priority);
              const isExpanded = expandedId === idea.id;

              return (
                <GradientCard key={idea.id} className="animate-fade-in">
                  <div 
                    className="p-4 sm:p-5 cursor-pointer"
                    onClick={() => setExpandedId(isExpanded ? null : idea.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-[hsl(var(--kk-violet)/0.1)] flex items-center justify-center shrink-0">
                          <TypeIcon className="w-4 h-4 text-[hsl(var(--kk-violet))]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-foreground">{idea.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{idea.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Badge className={`text-[10px] border-0 ${priorityConfig.className}`}>{priorityConfig.label}</Badge>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </div>

                    {/* Quick stats */}
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <Badge className={`border-0 ${statusConfig.className}`}>{statusConfig.label}</Badge>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" /> {idea.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                        <TrendingUp className="w-3 h-3" /> {idea.estimatedImpact}
                      </span>
                      {idea.searchVolume > 0 && (
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Eye className="w-3 h-3" /> {idea.searchVolume}/maand
                        </span>
                      )}
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {idea.keywords.map((kw, i) => (
                        <Badge key={i} variant="outline" className="text-[10px]">{kw}</Badge>
                      ))}
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="mt-4 space-y-3 animate-fade-in">
                        {idea.searchVolume > 0 && (
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Zoekvolume</p>
                              <p className="text-lg font-bold text-foreground">{idea.searchVolume}</p>
                              <p className="text-[10px] text-muted-foreground">zoekopdrachten/maand</p>
                            </div>
                            <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Moeilijkheidsgraad</p>
                              <p className="text-lg font-bold text-foreground">{idea.difficulty}/100</p>
                              <Progress value={idea.difficulty} className="h-1.5 mt-1" />
                            </div>
                          </div>
                        )}
                        <div className="p-3 rounded-lg bg-[hsl(var(--kk-violet)/0.05)] border border-[hsl(var(--kk-violet)/0.1)]">
                          <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-[hsl(var(--kk-violet))] shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-semibold text-[hsl(var(--kk-violet))] mb-1">AI Inzicht</p>
                              <p className="text-xs text-muted-foreground">{idea.aiInsight}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </GradientCard>
              );
            })}
          </div>

          {filteredIdeas.length === 0 && (
            <GradientCard>
              <CardContent className="pt-6">
                <EmptyState title="Geen ideeën gevonden" description="Er zijn geen content ideeën in deze categorie." icon="database" />
              </CardContent>
            </GradientCard>
          )}
        </main>
      </div>
    </div>
  );
};

export default ContentIdeas;
