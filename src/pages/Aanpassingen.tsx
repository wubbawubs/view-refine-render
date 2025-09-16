import { Settings, Edit3, Eye, Save, Globe, Menu, X, CheckCircle, Clock, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Aanpassingen = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [h1Content, setH1Content] = useState('Master jouw SEO met de Power van AI - KlikKlaar');
  const [metaContent, setMetaContent] = useState('Dé eerste volledig automatische SEO software. KlikKlaar automatiseert al je SEO-taken met AI. Geen gedoe, wel blijvende zichtbaarheid en groei voor B2B bedrijven.');

  const texts = {
    nl: {
      title: 'Aanpassingen',
      subtitle: 'Bekijk en beheer alle automatische AI-gedreven SEO optimalisaties',
      save: 'Wijzigingen opslaan',
      totalOptimizations: 'Totaal optimalisaties',
      activeOptimizations: 'Actief',
      completedOptimizations: 'Voltooid',
      scheduledOptimizations: 'Gepland',
      h1Title: 'H1 Optimalisatie',
      h1Subtitle: 'AI-gegenereerde hoofdtitel geoptimaliseerd voor SEO',
      metaTitle: 'Meta Beschrijving',
      metaSubtitle: 'AI-geoptimaliseerde pagina beschrijving voor betere CTR',
      originalTitle: 'Originele titel:',
      originalDescription: 'Originele beschrijving:',
      optimizedTitle: 'Geoptimaliseerde titel:',
      optimizedDescription: 'Geoptimaliseerde beschrijving:',
      edit: 'Bewerken',
      examples: 'Voorbeelden',
      active: 'Actief',
      completed: 'Voltooid',
      scheduled: 'Gepland',
      pending: 'Wachtend',
      editH1: 'H1 Titel Bewerken',
      editMeta: 'Meta Beschrijving Bewerken',
      cancel: 'Annuleren',
      language: 'Taal',
      optimizationsOverview: 'Optimalisaties Overzicht',
      recentOptimizations: 'Recente Optimalisaties'
    },
    en: {
      title: 'Adjustments',
      subtitle: 'View and manage all automatic AI-driven SEO optimizations',
      save: 'Save Changes',
      totalOptimizations: 'Total optimizations',
      activeOptimizations: 'Active',
      completedOptimizations: 'Completed',
      scheduledOptimizations: 'Scheduled',
      h1Title: 'H1 Optimization',
      h1Subtitle: 'AI-generated main title optimized for SEO',
      metaTitle: 'Meta Description',
      metaSubtitle: 'AI-optimized page description for better CTR',
      originalTitle: 'Original title:',
      originalDescription: 'Original description:',
      optimizedTitle: 'Optimized title:',
      optimizedDescription: 'Optimized description:',
      edit: 'Edit',
      examples: 'Examples',
      active: 'Active',
      completed: 'Completed',
      scheduled: 'Scheduled',
      pending: 'Pending',
      editH1: 'Edit H1 Title',
      editMeta: 'Edit Meta Description',
      cancel: 'Cancel',
      language: 'Language',
      optimizationsOverview: 'Optimizations Overview',
      recentOptimizations: 'Recent Optimizations'
    }
  };

  const t = texts[language];

  const optimizations = [
    { id: 1, type: 'H1', page: 'Homepage', title: 'H1 geoptimaliseerd voor "SEO software Nederland"', status: 'completed', date: '16 sep', impact: '+12% CTR' },
    { id: 2, type: 'Meta', page: 'Homepage', title: 'Meta description aangepast voor "automatische SEO"', status: 'completed', date: '16 sep', impact: '+8% impressies' },
    { id: 3, type: 'Alt', page: 'Homepage', title: 'Alt teksten toegevoegd aan dashboard screenshots', status: 'completed', date: '15 sep', impact: 'Toegankelijkheid +100%' },
    { id: 4, type: 'Schema', page: 'Prijzen', title: 'Schema markup voor SaaS producten toegevoegd', status: 'completed', date: '15 sep', impact: 'Rich snippets actief' },
    { id: 5, type: 'Internal', page: 'Contact', title: 'Interne links naar "SEO software" geoptimaliseerd', status: 'completed', date: '14 sep', impact: '+5% link juice' },
    { id: 6, type: 'Title', page: 'Over Ons', title: 'Page title aangepast voor "AI SEO automatisering"', status: 'completed', date: '14 sep', impact: '+15% ranking' },
    { id: 7, type: 'Content', page: 'Blog', title: 'Content geoptimaliseerd voor "B2B SEO tools"', status: 'completed', date: '13 sep', impact: '+22% tijd op pagina' },
    { id: 8, type: 'Speed', page: 'Alle paginas', title: 'Afbeeldingen gecomprimeerd voor snelheid', status: 'completed', date: '13 sep', impact: '+0.8s laadtijd' },
    { id: 9, type: 'Keywords', page: 'Homepage', title: 'Keyword density geoptimaliseerd voor "SEO automatisering"', status: 'completed', date: '12 sep', impact: '+3 posities' },
    { id: 10, type: 'Headings', page: 'Features', title: 'H2/H3 structuur verbeterd voor leesbaarheid', status: 'completed', date: '12 sep', impact: '+18% gebruikerssignaal' },
    { id: 11, type: 'Links', page: 'Prijzen', title: 'Externe links naar autoriteitsites toegevoegd', status: 'completed', date: '11 sep', impact: '+E-A-T score' },
    { id: 12, type: 'Mobile', page: 'Dashboard', title: 'Mobile viewport en responsive verbeteringen', status: 'completed', date: '11 sep', impact: 'Mobile score: 95/100' },
    { id: 13, type: 'Canonical', page: 'Alle paginas', title: 'Canonical URLs toegevoegd tegen duplicaat content', status: 'completed', date: '10 sep', impact: 'Geen duplicate content' },
    { id: 14, type: 'Robots', page: 'Sitewide', title: 'Robots.txt geoptimaliseerd voor crawling', status: 'completed', date: '10 sep', impact: '+20% geïndexeerde paginas' },
    { id: 15, type: 'Sitemap', page: 'XML', title: 'XML sitemap automatisch gegenereerd en ingediend', status: 'completed', date: '9 sep', impact: 'Indexatie versneld' },
    { id: 16, type: 'OpenGraph', page: 'Sociale media', title: 'Open Graph tags toegevoegd voor social sharing', status: 'completed', date: '9 sep', impact: '+35% social clicks' },
    { id: 17, type: 'Breadcrumbs', page: 'Navigatie', title: 'Breadcrumb navigatie geïmplementeerd', status: 'active', date: '8 sep', impact: 'Betere UX' },
    { id: 18, type: 'Analytics', page: 'Tracking', title: 'Google Analytics 4 en Search Console gekoppeld', status: 'completed', date: '8 sep', impact: 'Volledige data tracking' },
    { id: 19, type: 'SSL', page: 'Security', title: 'HTTPS certificaat geïnstalleerd en geforceerd', status: 'completed', date: '7 sep', impact: 'Veiligheidsscore +100%' },
    { id: 20, type: 'Compress', page: 'Technisch', title: 'GZIP compressie ingeschakeld voor alle assets', status: 'completed', date: '7 sep', impact: '+40% snelheid' },
    { id: 21, type: 'Cache', page: 'Performance', title: 'Browser caching geoptimaliseerd (1 jaar)', status: 'completed', date: '6 sep', impact: 'Return visits +60% sneller' },
    { id: 22, type: 'CDN', page: 'Global', title: 'Content Delivery Network geactiveerd', status: 'completed', date: '6 sep', impact: 'Wereldwijde snelheid +80%' },
    { id: 23, type: 'JSON-LD', page: 'Structured Data', title: 'JSON-LD structured data voor software toegevoegd', status: 'completed', date: '5 sep', impact: 'Rich results eligible' },
    { id: 24, type: 'FAQ', page: 'Support', title: 'FAQ schema markup toegevoegd aan veelgestelde vragen', status: 'active', date: '5 sep', impact: 'FAQ rich snippets' },
    { id: 25, type: 'Video', page: 'Demo', title: 'Video schema markup voor product demo\'s', status: 'scheduled', date: '4 sep', impact: 'Video rich results' },
    { id: 26, type: 'Reviews', page: 'Testimonials', title: 'Review schema voor klantbeoordelingen', status: 'active', date: '4 sep', impact: 'Sterren in SERP' },
    { id: 27, type: 'LocalBiz', page: 'Contact', title: 'Local Business schema (remote-first bedrijf)', status: 'completed', date: '3 sep', impact: 'Lokale vindbaarheid' },
    { id: 28, type: 'Authors', page: 'Blog', title: 'Auteur schema en bylines toegevoegd', status: 'completed', date: '3 sep', impact: '+E-A-T autoriteitsscore' },
    { id: 29, type: 'Pagination', page: 'Blog', title: 'Pagination schema voor blog overzichten', status: 'scheduled', date: '2 sep', impact: 'Betere crawling' },
    { id: 30, type: 'Hreflang', page: 'Internationaal', title: 'Hreflang tags voor NL/EN taalversies', status: 'pending', date: '2 sep', impact: 'Internationale SEO' },
    { id: 31, type: 'Core Vitals', page: 'Performance', title: 'Largest Contentful Paint geoptimaliseerd', status: 'active', date: '1 sep', impact: 'LCP: 1.2s (was 3.1s)' },
    { id: 32, type: 'Accessibility', page: 'A11y', title: 'ARIA labels en focus management verbeterd', status: 'scheduled', date: '1 sep', impact: 'WCAG 2.1 AA compliant' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">{t.completed}</Badge>;
      case 'active':
        return <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">{t.active}</Badge>;
      case 'scheduled':
        return <Badge className="bg-orange-50 text-orange-700 border-orange-200 text-xs">{t.scheduled}</Badge>;
      case 'pending':
        return <Badge className="bg-gray-50 text-gray-700 border-gray-200 text-xs">{t.pending}</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'active':
        return <Zap className="w-4 h-4 text-blue-600" />;
      case 'scheduled':
        return <Clock className="w-4 h-4 text-orange-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const completedCount = optimizations.filter(opt => opt.status === 'completed').length;
  const activeCount = optimizations.filter(opt => opt.status === 'active').length;
  const scheduledCount = optimizations.filter(opt => opt.status === 'scheduled').length;

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
        fixed lg:relative lg:block z-50 h-full transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar />
        {/* Mobile Close Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <main className="flex-1 px-3 sm:px-4 lg:px-8 py-4 sm:py-6 overflow-x-hidden overflow-y-auto relative z-10 w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 lg:mb-8 pb-3 sm:pb-4 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden shrink-0 p-1.5"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl lg:text-kk-h1 text-foreground mb-1 truncate">{t.title}</h1>
              <p className="text-xs sm:text-sm lg:text-kk-label text-muted-foreground truncate">
                {t.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 items-center shrink-0 w-full sm:w-auto">
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[60px] sm:w-[80px] lg:w-[120px] text-xs lg:text-sm h-8 lg:h-9">
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
            <Button className="bg-kk-gradient text-white hover:opacity-90 text-xs lg:text-sm px-2 sm:px-3 lg:px-4 h-8 lg:h-9 flex-1 sm:flex-none">
              <Save className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 shrink-0" />
              <span className="hidden sm:inline truncate">{t.save}</span>
              <span className="sm:hidden">Save</span>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{optimizations.length}</div>
              <div className="text-sm text-muted-foreground">{t.totalOptimizations}</div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedCount}</div>
              <div className="text-sm text-muted-foreground">{t.completedOptimizations}</div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{activeCount}</div>
              <div className="text-sm text-muted-foreground">{t.activeOptimizations}</div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{scheduledCount}</div>
              <div className="text-sm text-muted-foreground">{t.scheduledOptimizations}</div>
            </div>
          </Card>
        </div>

        {/* Key Optimizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* H1 Optimization */}
          <Card className="border border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                    <Edit3 className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(var(--kk-violet))] flex-shrink-0" />
                    <span className="truncate">{t.h1Title}</span>
                  </CardTitle>
                  <CardDescription className="text-xs lg:text-sm text-muted-foreground mt-1">
                    {t.h1Subtitle}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 text-xs whitespace-nowrap">
                  {t.active}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div>
                <p className="text-xs lg:text-sm text-muted-foreground mb-2">{t.originalTitle}</p>
                <div className="p-3 bg-muted/30 rounded-md border">
                  <p className="text-xs lg:text-sm font-medium">Welkom bij onze SEO software</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs lg:text-sm text-muted-foreground mb-2">{t.optimizedTitle}</p>
                <div className="p-3 bg-[hsl(var(--kk-violet))]/5 rounded-md border border-[hsl(var(--kk-violet))]/20">
                  <p className="text-xs lg:text-sm font-medium break-words">{h1Content}</p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1 text-xs lg:text-sm">
                      <Edit3 className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                      {t.edit}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-base lg:text-lg">{t.editH1}</DialogTitle>
                      <DialogDescription className="text-xs lg:text-sm">
                        Pas de H1 titel aan naar uw wensen
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2">
                      <Label htmlFor="h1-content" className="text-sm">H1 Titel</Label>
                      <Textarea 
                        id="h1-content"
                        value={h1Content}
                        onChange={(e) => setH1Content(e.target.value)}
                        className="min-h-[80px] text-sm"
                      />
                    </div>
                    <DialogFooter className="flex gap-2">
                      <Button variant="outline" className="text-sm">{t.cancel}</Button>
                      <Button className="bg-kk-gradient text-white text-sm">
                        {t.save}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="sm" className="flex-1 text-xs lg:text-sm">
                  <Eye className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  {t.examples}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Meta Description */}
          <Card className="border border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                    <Settings className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(var(--kk-violet))] flex-shrink-0" />
                    <span className="truncate">{t.metaTitle}</span>
                  </CardTitle>
                  <CardDescription className="text-xs lg:text-sm text-muted-foreground mt-1">
                    {t.metaSubtitle}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 text-xs whitespace-nowrap">
                  {t.active}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div>
                <p className="text-xs lg:text-sm text-muted-foreground mb-2">{t.originalDescription}</p>
                <div className="p-3 bg-muted/30 rounded-md border">
                  <p className="text-xs lg:text-sm">Een website voor SEO diensten en automatisering</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs lg:text-sm text-muted-foreground mb-2">{t.optimizedDescription}</p>
                <div className="p-3 bg-[hsl(var(--kk-violet))]/5 rounded-md border border-[hsl(var(--kk-violet))]/20">
                  <p className="text-xs lg:text-sm break-words">{metaContent}</p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1 text-xs lg:text-sm">
                      <Edit3 className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                      {t.edit}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-base lg:text-lg">{t.editMeta}</DialogTitle>
                      <DialogDescription className="text-xs lg:text-sm">
                        Pas de meta beschrijving aan naar uw wensen
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2">
                      <Label htmlFor="meta-content" className="text-sm">Meta Beschrijving</Label>
                      <Textarea 
                        id="meta-content"
                        value={metaContent}
                        onChange={(e) => setMetaContent(e.target.value)}
                        className="min-h-[100px] text-sm"
                        placeholder="Voer uw meta beschrijving in..."
                      />
                    </div>
                    <DialogFooter className="flex gap-2">
                      <Button variant="outline" className="text-sm">{t.cancel}</Button>
                      <Button className="bg-kk-gradient text-white text-sm">
                        {t.save}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="sm" className="flex-1 text-xs lg:text-sm">
                  <Eye className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  {t.examples}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Optimizations List */}
        <Card className="border border-border/50">
          <CardHeader>
            <CardTitle className="text-base lg:text-lg">{t.recentOptimizations}</CardTitle>
            <CardDescription className="text-xs lg:text-sm">
              Alle AI-gedreven SEO optimalisaties van de afgelopen weken
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {optimizations.map((opt) => (
                <div key={opt.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/30 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    {getStatusIcon(opt.status)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">{opt.type}</Badge>
                        <span className="text-xs text-muted-foreground">{opt.page}</span>
                      </div>
                      <h4 className="text-sm font-medium text-foreground leading-tight mb-1">
                        {opt.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {opt.impact}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-muted-foreground">{opt.date}</span>
                    {getStatusBadge(opt.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Aanpassingen;