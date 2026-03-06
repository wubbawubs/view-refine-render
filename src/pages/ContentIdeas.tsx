import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu, X, Globe, Lightbulb, FileText, Share2, Mail } from "lucide-react";
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

const ContentIdeas = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [filterType, setFilterType] = useState<'all' | 'blog' | 'page' | 'social' | 'email'>('all');
  const { data: contentIdeas, isLoading } = useContentIdeas();

  const texts = {
    nl: {
      title: 'Content Ideeën',
      subtitle: 'AI-gegenereerde content suggesties op basis van jouw SEO data. Gebruik deze ideeën om je online zichtbaarheid te vergroten.',
      all: 'Alle', blog: 'Blog', page: 'Pagina', social: 'Social Media', email: 'Email',
      noData: 'Geen content ideeen beschikbaar',
      noDataDesc: 'Er zijn momenteel geen content ideeen om weer te geven.',
      keywords: 'Zoekwoorden', impact: 'Geschatte impact',
    },
    en: {
      title: 'Content Ideas',
      subtitle: 'AI-generated content suggestions based on your SEO data. Use these ideas to boost your online visibility.',
      all: 'All', blog: 'Blog', page: 'Page', social: 'Social Media', email: 'Email',
      noData: 'No content ideas available',
      noDataDesc: 'There are currently no content ideas to display.',
      keywords: 'Keywords', impact: 'Estimated impact',
    }
  };

  const t = texts[language];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': case 'page': return FileText;
      case 'social': return Share2;
      case 'email': return Mail;
      default: return Lightbulb;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) { case 'high': return 'destructive'; case 'medium': return 'default'; case 'low': return 'secondary'; default: return 'outline'; }
  };

  const getStatusColor = (status: string) => {
    switch (status) { case 'published': return 'default'; case 'planned': return 'secondary'; default: return 'outline'; }
  };

  const getStatusText = (status: string) => {
    const map: Record<string, { nl: string; en: string }> = {
      published: { nl: 'Gepubliceerd', en: 'Published' },
      planned: { nl: 'Gepland', en: 'Planned' },
      draft: { nl: 'Concept', en: 'Draft' },
    };
    return map[status]?.[language] || status;
  };

  const filteredIdeas = contentIdeas?.filter(idea => filterType === 'all' ? true : idea.type === filterType) || [];

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

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="premium-glass-card border-b border-border/40 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
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
        </header>

        <main className="flex-1 p-6">
          {/* Page Banner */}
          <div className="mb-6">
            <PageBanner
              label="Content Ideeën"
              title={t.title}
              description={t.subtitle}
              icon={<Lightbulb className="w-4 h-4 text-white" />}
            />
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" value={filterType} onValueChange={(v) => setFilterType(v as any)} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">{t.all}</TabsTrigger>
              <TabsTrigger value="blog">{t.blog}</TabsTrigger>
              <TabsTrigger value="page">{t.page}</TabsTrigger>
              <TabsTrigger value="social">{t.social}</TabsTrigger>
              <TabsTrigger value="email">{t.email}</TabsTrigger>
            </TabsList>
          </Tabs>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <GradientCard key={i}>
                  <CardHeader><Skeleton className="h-6 w-3/4 mb-2" /><Skeleton className="h-4 w-full" /></CardHeader>
                  <CardContent><Skeleton className="h-20 w-full" /></CardContent>
                </GradientCard>
              ))}
            </div>
          ) : !filteredIdeas || filteredIdeas.length === 0 ? (
            <GradientCard>
              <CardContent className="pt-6">
                <EmptyState title={t.noData} description={t.noDataDesc} icon="database" />
              </CardContent>
            </GradientCard>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIdeas.map((idea) => {
                const TypeIcon = getTypeIcon(idea.type);
                return (
                  <GradientCard key={idea.id} className="group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <TypeIcon className="w-4 h-4 text-primary" />
                          </div>
                          <Badge variant="outline" className="text-xs">{idea.type}</Badge>
                        </div>
                        <Badge variant={getPriorityColor(idea.priority)}>{idea.priority}</Badge>
                      </div>
                      <CardTitle className="text-lg">{idea.title}</CardTitle>
                      <CardDescription>{idea.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-1">{t.keywords}</p>
                          <div className="flex flex-wrap gap-1">
                            {idea.keywords.map((keyword, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">{keyword}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <div className="text-xs text-muted-foreground">
                            {t.impact}: <span className="font-medium text-foreground">{idea.estimatedImpact}</span>
                          </div>
                          <Badge variant={getStatusColor(idea.status)}>{getStatusText(idea.status)}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </GradientCard>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ContentIdeas;
