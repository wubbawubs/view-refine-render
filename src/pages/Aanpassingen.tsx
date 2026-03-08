import { Menu, X, Globe, Settings, CheckCircle2, Clock, Zap, ArrowUpRight, TrendingUp, Eye, ChevronDown, ChevronUp, Sparkles, Pencil } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useSEOOptimizations } from "@/hooks/useDashboardData";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import PageBanner from "@/components/ui/page-banner";
import { GradientCard } from "@/components/ui/gradient-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock enriched data for the Aanpassingen page
const mockStats = {
  total: 47,
  completed: 38,
  active: 6,
  pending: 3,
  avgImpact: "+14%",
  thisMonth: 12,
};

const mockOptimizations = [
  { id: 1, type: "Meta Title", page: "/producten", original: "Producten - Website", optimized: "Premium Producten | Beste Kwaliteit Online Kopen", status: "completed", impact: "+18% CTR", date: "Vandaag", category: "on-page", aiReason: "De originele title was te generiek en miste zoekwoorden met hoog volume." },
  { id: 2, type: "Meta Description", page: "/diensten", original: "Onze diensten pagina", optimized: "Ontdek onze professionele diensten ✓ Gratis offerte ✓ Binnen 24u reactie ✓ 5-sterren reviews", status: "completed", impact: "+22% CTR", date: "Gisteren", category: "on-page", aiReason: "Call-to-actions en social proof toevoegen verhoogt de CTR significant." },
  { id: 3, type: "H1 Tag", page: "/over-ons", original: "Over ons", optimized: "Over Ons – Al 15 Jaar Uw Betrouwbare Partner", status: "active", impact: "+8% ranking", date: "2 dagen geleden", category: "on-page", aiReason: "Het toevoegen van USPs aan de H1 verbetert relevantie voor zoekintentie." },
  { id: 4, type: "Alt Text", page: "/gallery", original: "afbeelding1.jpg", optimized: "Moderne keuken renovatie met marmeren aanrechtblad", status: "completed", impact: "+12% image SEO", date: "3 dagen geleden", category: "technical", aiReason: "Beschrijvende alt-tekst helpt Google de afbeelding te begrijpen en te indexeren." },
  { id: 5, type: "Schema Markup", page: "/", original: "Geen schema", optimized: "LocalBusiness + FAQPage schema toegevoegd", status: "active", impact: "+25% rich results", date: "4 dagen geleden", category: "technical", aiReason: "Schema markup vergroot de kans op rich snippets in zoekresultaten." },
  { id: 6, type: "Internal Links", page: "/blog/seo-tips", original: "0 interne links", optimized: "5 relevante interne links toegevoegd", status: "completed", impact: "+15% pageviews", date: "5 dagen geleden", category: "content", aiReason: "Interne links verbeteren de site-structuur en verdelen link authority." },
  { id: 7, type: "Content Optimalisatie", page: "/diensten/webdesign", original: "280 woorden, geen headers", optimized: "850 woorden, 4 H2s, FAQ sectie toegevoegd", status: "active", impact: "+30% traffic", date: "1 week geleden", category: "content", aiReason: "Langere, gestructureerde content scoort beter op competitieve zoektermen." },
  { id: 8, type: "Page Speed", page: "/", original: "Score: 62/100", optimized: "Score: 94/100 - Afbeeldingen geoptimaliseerd", status: "completed", impact: "+5% conversie", date: "1 week geleden", category: "technical", aiReason: "Snellere laadtijden verlagen bounce rate en verbeteren gebruikerservaring." },
];

const Aanpassingen = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filterTab, setFilterTab] = useState('all');
  const { data: seoOptimizations, isLoading } = useSEOOptimizations();

  const texts = {
    nl: {
      title: 'Aanpassingen',
      subtitle: 'Bekijk en beheer alle automatische AI-gedreven SEO optimalisaties die we voor jouw website doorvoeren.',
      noData: 'Geen data beschikbaar',
      noDataDesc: 'Er zijn momenteel geen SEO optimalisaties om weer te geven.',
    },
    en: {
      title: 'Adjustments',
      subtitle: 'View and manage all automatic AI-driven SEO optimizations we apply to your website.',
      noData: 'No data available',
      noDataDesc: 'There are currently no SEO optimizations to display.',
    }
  };

  const t = texts[language];

  const filteredOptimizations = mockOptimizations.filter(opt => {
    if (filterTab === 'all') return true;
    if (filterTab === 'completed') return opt.status === 'completed';
    if (filterTab === 'active') return opt.status === 'active';
    return opt.category === filterTab;
  });

  const getStatusConfig = (status: string) => {
    if (status === 'completed') return { icon: CheckCircle2, label: 'Voltooid', className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' };
    if (status === 'active') return { icon: Zap, label: 'Actief', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' };
    return { icon: Clock, label: 'Gepland', className: 'bg-muted text-muted-foreground' };
  };

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 lg:mb-8 pb-3 sm:pb-4 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          </div>
          <div className="flex gap-2 items-center shrink-0">
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
            <div className="[&>button]:h-8 [&>button]:w-8 lg:[&>button]:h-9 lg:[&>button]:w-9 shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Page Banner */}
        <div className="mb-6">
          <PageBanner
            label="Aanpassingen"
            title={t.title}
            description={t.subtitle}
            icon={<Settings className="w-4 h-4 text-white" />}
          />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <GradientCard>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">{mockStats.completed}</p>
              <p className="text-xs text-muted-foreground">Voltooid</p>
            </div>
          </GradientCard>
          <GradientCard>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">{mockStats.active}</p>
              <p className="text-xs text-muted-foreground">Actief bezig</p>
            </div>
          </GradientCard>
          <GradientCard>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-[hsl(var(--kk-violet)/0.1)] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
              </div>
              <p className="text-2xl font-bold text-foreground">{mockStats.avgImpact}</p>
              <p className="text-xs text-muted-foreground">Gem. impact</p>
            </div>
          </GradientCard>
          <GradientCard>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-[hsl(var(--kk-orange)/0.1)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[hsl(var(--kk-orange))]" />
              </div>
              <p className="text-2xl font-bold text-foreground">{mockStats.thisMonth}</p>
              <p className="text-xs text-muted-foreground">Deze maand</p>
            </div>
          </GradientCard>
        </div>

        {/* Overall Progress */}
        <GradientCard className="mb-6">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">Totale voortgang optimalisaties</h3>
              <span className="text-sm font-bold text-[hsl(var(--kk-violet))]">{Math.round((mockStats.completed / mockStats.total) * 100)}%</span>
            </div>
            <Progress value={(mockStats.completed / mockStats.total) * 100} className="h-2.5 [&>div]:bg-gradient-to-r [&>div]:from-[hsl(var(--kk-violet))] [&>div]:to-[hsl(var(--kk-fuchsia))]" />
            <p className="text-xs text-muted-foreground mt-2">{mockStats.completed} van {mockStats.total} optimalisaties voltooid</p>
          </div>
        </GradientCard>

        {/* Filter Tabs */}
        <Tabs value={filterTab} onValueChange={setFilterTab} className="mb-6">
          <TabsList className="flex-wrap h-auto gap-1">
            <TabsTrigger value="all">Alle ({mockOptimizations.length})</TabsTrigger>
            <TabsTrigger value="completed">Voltooid</TabsTrigger>
            <TabsTrigger value="active">Actief</TabsTrigger>
            <TabsTrigger value="on-page">On-Page</TabsTrigger>
            <TabsTrigger value="technical">Technisch</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Optimization Cards */}
        <div className="space-y-3">
          {filteredOptimizations.map((opt) => {
            const statusConfig = getStatusConfig(opt.status);
            const StatusIcon = statusConfig.icon;
            const isExpanded = expandedId === opt.id;

            return (
              <GradientCard key={opt.id} className="animate-fade-in">
                <div 
                  className="p-4 sm:p-5 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : opt.id)}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${statusConfig.className}`}>
                        <StatusIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-semibold text-foreground">{opt.type}</h3>
                          <Badge variant="outline" className="text-[10px]">{opt.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{opt.page} • {opt.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge className={`text-xs border-0 ${statusConfig.className}`}>{statusConfig.label}</Badge>
                      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <ArrowUpRight className="w-3 h-3" />
                        <span className="text-xs font-semibold">{opt.impact}</span>
                      </div>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  </div>

                  {/* Before / After preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200/50 dark:border-red-800/20">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-red-500 mb-1">Origineel</p>
                      <p className="text-xs text-foreground line-clamp-2">{opt.original}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200/50 dark:border-emerald-800/20">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">Geoptimaliseerd</p>
                      <p className="text-xs text-foreground line-clamp-2">{opt.optimized}</p>
                    </div>
                  </div>

                  {/* Expanded: AI Explanation + Edit button */}
                  {isExpanded && (
                    <div className="mt-4 space-y-3 animate-fade-in">
                      <div className="p-3 rounded-lg bg-[hsl(var(--kk-violet)/0.05)] border border-[hsl(var(--kk-violet)/0.1)]">
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[hsl(var(--kk-violet))] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-[hsl(var(--kk-violet))] mb-1">Waarom deze aanpassing?</p>
                            <p className="text-xs text-muted-foreground">{opt.aiReason}</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs gap-1.5"
                        onClick={(e) => {
                          e.stopPropagation();
                          // TODO: open edit dialog
                        }}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Aanpassing bewerken
                      </Button>
                    </div>
                  )}
                </div>
              </GradientCard>
            );
          })}
        </div>

        {filteredOptimizations.length === 0 && (
          <GradientCard className="animate-fade-in">
            <div className="p-6">
              <EmptyState title="Geen aanpassingen gevonden" description="Er zijn geen optimalisaties in deze categorie." icon="database" />
            </div>
          </GradientCard>
        )}
      </main>
    </div>
  );
};

export default Aanpassingen;
