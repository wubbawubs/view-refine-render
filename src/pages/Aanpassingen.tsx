import { Settings, Edit3, Eye, Save, Globe, Menu, X, CheckCircle, Clock, Zap, Type, Image, FileText, Code, Brain, Search, Lightbulb, Atom, CalendarCheck, Binoculars, TrendingUp, ScanSearch } from "lucide-react";
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
  const [h2Content, setH2Content] = useState('Wat KlikKlaar SEO voor jou doet');
  const [altContent, setAltContent] = useState('KlikKlaar SEO Dashboard showing +64% visibility improvement, SEO score 3.8, 127 total adjustments, +78% estimated growth, and 8,542 visitors');
  const [contentContent, setContentContent] = useState('KlikKlaar is de eerste tool die SEO en AI volledig automatisch optimaliseert. Jij zet het één keer op, wij zorgen dat je website altijd vindbaar blijft. Terwijl jij je focust op je bedrijf, bouwen wij continu door achter de schermen. Geen ingewikkelde instellingen, geen gedoe, wél blijvende zichtbaarheid en groei.');
  const [schemaContent, setSchemaContent] = useState('{"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "KlikKlaar SEO", "applicationCategory": "BusinessApplication", "offers": {"@type": "Offer", "price": "49", "priceCurrency": "EUR"}}');

  const texts = {
    nl: {
      title: 'Aanpassingen',
      subtitle: 'Bekijk en beheer alle automatische AI-gedreven SEO optimalisaties',
      save: 'Wijzigingen opslaan',
      h1Title: 'H1 Optimalisatie',
      h1Subtitle: 'AI-gegenereerde hoofdtitel geoptimaliseerd voor SEO',
      metaTitle: 'Meta Beschrijving',
      metaSubtitle: 'AI-geoptimaliseerde pagina beschrijving voor betere CTR',
      h2Title: 'H2 Optimalisatie',
      h2Subtitle: 'AI-gegenereerde subkoppen geoptimaliseerd voor structuur',
      altTitle: 'Alt Teksten',
      altSubtitle: 'AI-gegenereerde alt teksten voor betere toegankelijkheid',
      contentTitle: 'Content Optimalisatie',
      contentSubtitle: 'AI-geoptimaliseerde content voor betere leesbaarheid',
      schemaTitle: 'Schema Markup',
      schemaSubtitle: 'Gestructureerde data voor betere SERP weergave',
      originalTitle: 'Originele titel:',
      originalDescription: 'Originele beschrijving:',
      originalH2: 'Originele H2:',
      originalAlt: 'Originele alt tekst:',
      originalContent: 'Originele content:',
      originalSchema: 'Originele schema:',
      optimizedTitle: 'Geoptimaliseerde titel:',
      optimizedDescription: 'Geoptimaliseerde beschrijving:',
      optimizedH2: 'Geoptimaliseerde H2:',
      optimizedAlt: 'Geoptimaliseerde alt tekst:',
      optimizedContent: 'Geoptimaliseerde content:',
      optimizedSchema: 'Geoptimaliseerde schema:',
      edit: 'Bewerken',
      examples: 'Voorbeelden',
      active: 'Actief',
      completed: 'Voltooid',
      scheduled: 'Gepland',
      pending: 'Wachtend',
      editH1: 'H1 Titel Bewerken',
      editMeta: 'Meta Beschrijving Bewerken',
      editH2: 'H2 Titel Bewerken',
      editAlt: 'Alt Tekst Bewerken',
      editContent: 'Content Bewerken',
      editSchema: 'Schema Bewerken',
      cancel: 'Annuleren',
      language: 'Taal',
      recentOptimizations: 'Recente Optimalisaties'
    },
    en: {
      title: 'Adjustments',
      subtitle: 'View and manage all automatic AI-driven SEO optimizations',
      save: 'Save Changes',
      h1Title: 'H1 Optimization',
      h1Subtitle: 'AI-generated main title optimized for SEO',
      metaTitle: 'Meta Description',
      metaSubtitle: 'AI-optimized page description for better CTR',
      h2Title: 'H2 Optimization',
      h2Subtitle: 'AI-generated subheadings optimized for structure',
      altTitle: 'Alt Texts',
      altSubtitle: 'AI-generated alt texts for better accessibility',
      contentTitle: 'Content Optimization',
      contentSubtitle: 'AI-optimized content for better readability',
      schemaTitle: 'Schema Markup',
      schemaSubtitle: 'Structured data for better SERP display',
      originalTitle: 'Original title:',
      originalDescription: 'Original description:',
      originalH2: 'Original H2:',
      originalAlt: 'Original alt text:',
      originalContent: 'Original content:',
      originalSchema: 'Original schema:',
      optimizedTitle: 'Optimized title:',
      optimizedDescription: 'Optimized description:',
      optimizedH2: 'Optimized H2:',
      optimizedAlt: 'Optimized alt text:',
      optimizedContent: 'Optimized content:',
      optimizedSchema: 'Optimized schema:',
      edit: 'Edit',
      examples: 'Examples',
      active: 'Active',
      completed: 'Completed',
      scheduled: 'Scheduled',
      pending: 'Pending',
      editH1: 'Edit H1 Title',
      editMeta: 'Edit Meta Description',
      editH2: 'Edit H2 Title',
      editAlt: 'Edit Alt Text',
      editContent: 'Edit Content',
      editSchema: 'Edit Schema',
      cancel: 'Cancel',
      language: 'Language',
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

  const OptimizationCard = ({ 
    icon: Icon, 
    title, 
    subtitle, 
    originalLabel, 
    originalValue, 
    optimizedLabel, 
    optimizedValue, 
    editTitle, 
    editDescription,
    content,
    setContent 
  }: {
    icon: any;
    title: string;
    subtitle: string;
    originalLabel: string;
    originalValue: string;
    optimizedLabel: string;
    optimizedValue: string;
    editTitle: string;
    editDescription: string;
    content: string;
    setContent: (value: string) => void;
  }) => (
    <Card className="border border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
              <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(var(--kk-violet))] flex-shrink-0" />
              <span className="truncate">{title}</span>
            </CardTitle>
            <CardDescription className="text-xs lg:text-sm text-muted-foreground mt-1">
              {subtitle}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 text-xs whitespace-nowrap">
            {t.active}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 lg:space-y-6">
        <div>
          <p className="text-xs lg:text-sm text-muted-foreground mb-2">{originalLabel}</p>
          <div className="p-3 bg-muted/30 rounded-md border">
            <p className="text-xs lg:text-sm font-medium">{originalValue}</p>
          </div>
        </div>
        
        <div>
          <p className="text-xs lg:text-sm text-muted-foreground mb-2">{optimizedLabel}</p>
          <div className="p-3 bg-[hsl(var(--kk-violet))]/5 rounded-md border border-[hsl(var(--kk-violet))]/20">
            <p className="text-xs lg:text-sm font-medium break-words">{optimizedValue}</p>
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
                <DialogTitle className="text-base lg:text-lg">{editTitle}</DialogTitle>
                <DialogDescription className="text-xs lg:text-sm">
                  {editDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="content" className="text-sm">{title}</Label>
                <Textarea 
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
  );

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

        {/* Key Optimizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* H1 Optimization */}
          <OptimizationCard
            icon={Edit3}
            title={t.h1Title}
            subtitle={t.h1Subtitle}
            originalLabel={t.originalTitle}
            originalValue="Welkom bij onze SEO software"
            optimizedLabel={t.optimizedTitle}
            optimizedValue={h1Content}
            editTitle={t.editH1}
            editDescription="Pas de H1 titel aan naar uw wensen"
            content={h1Content}
            setContent={setH1Content}
          />

          {/* Meta Description */}
          <OptimizationCard
            icon={Settings}
            title={t.metaTitle}
            subtitle={t.metaSubtitle}
            originalLabel={t.originalDescription}
            originalValue="Een website voor SEO diensten en automatisering"
            optimizedLabel={t.optimizedDescription}
            optimizedValue={metaContent}
            editTitle={t.editMeta}
            editDescription="Pas de meta beschrijving aan naar uw wensen"
            content={metaContent}
            setContent={setMetaContent}
          />

          {/* H2 Optimization */}
          <OptimizationCard
            icon={Type}
            title={t.h2Title}
            subtitle={t.h2Subtitle}
            originalLabel={t.originalH2}
            originalValue="Onze diensten"
            optimizedLabel={t.optimizedH2}
            optimizedValue={h2Content}
            editTitle={t.editH2}
            editDescription="Pas de H2 titel aan naar uw wensen"
            content={h2Content}
            setContent={setH2Content}
          />

          {/* Alt Texts Header Logo */}
          <OptimizationCard
            icon={Image}
            title="Alt text - Header Logo"
            subtitle="AI-geoptimaliseerde alt tekst voor header logo afbeelding"
            originalLabel="Originele alt tekst:"
            originalValue="KlikKlaar SEO Logo"
            optimizedLabel="Geoptimaliseerde alt tekst:"
            optimizedValue="KlikKlaar SEO Logo - Automatische SEO software voor B2B bedrijven"
            editTitle="Alt Tekst Header Logo Bewerken"
            editDescription="Pas de alt tekst voor de header logo aan naar uw wensen"
            content="KlikKlaar SEO Logo - Automatische SEO software voor B2B bedrijven"
            setContent={() => {}}
          />

          {/* Alt Texts Dashboard Screenshot */}
          <OptimizationCard
            icon={Image}
            title="Alt text - Dashboard Screenshot"
            subtitle="AI-geoptimaliseerde alt tekst voor dashboard screenshot"
            originalLabel="Originele alt tekst:"
            originalValue="KlikKlaar SEO Dashboard showing +64% visibility improvement, SEO score 3.8, 127 total adjustments, +78% estimated growth, and 8,542 visitors"
            optimizedLabel="Geoptimaliseerde alt tekst:"
            optimizedValue="KlikKlaar SEO Dashboard toont +64% zichtbaarheidsverbetering, SEO score 3.8, 127 totale optimalisaties, +78% geschatte groei en 8.542 bezoekers - automatische SEO software"
            editTitle="Alt Tekst Dashboard Bewerken"
            editDescription="Pas de alt tekst voor de dashboard screenshot aan naar uw wensen"
            content="KlikKlaar SEO Dashboard toont +64% zichtbaarheidsverbetering, SEO score 3.8, 127 totale optimalisaties, +78% geschatte groei en 8.542 bezoekers - automatische SEO software"
            setContent={() => {}}
          />

          {/* Alt Texts Blog Image */}
          <OptimizationCard
            icon={Image}
            title="Alt text - Blog Afbeelding"
            subtitle="AI-geoptimaliseerde alt tekst voor blog afbeelding"
            originalLabel="Originele alt tekst:"
            originalValue="Abstract watercolor art with blue, purple, and orange tones"
            optimizedLabel="Geoptimaliseerde alt tekst:"
            optimizedValue="SEO blog afbeelding met abstracte aquarel kunst in blauwe, paarse en oranje tinten - KlikKlaar SEO tips"
            editTitle="Alt Tekst Blog Afbeelding Bewerken"
            editDescription="Pas de alt tekst voor de blog afbeelding aan naar uw wensen"
            content="SEO blog afbeelding met abstracte aquarel kunst in blauwe, paarse en oranje tinten - KlikKlaar SEO tips"
            setContent={() => {}}
          />

          {/* Alt Texts Footer Logo */}
          <OptimizationCard
            icon={Image}
            title="Alt text - Footer Logo"
            subtitle="AI-geoptimaliseerde alt tekst voor footer logo afbeelding"
            originalLabel="Originele alt tekst:"
            originalValue="KlikKlaar SEO Logo"
            optimizedLabel="Geoptimaliseerde alt tekst:"
            optimizedValue="KlikKlaar SEO Logo - Automatische SEO optimalisatie voor B2B bedrijven"
            editTitle="Alt Tekst Footer Logo Bewerken"
            editDescription="Pas de alt tekst voor de footer logo aan naar uw wensen"
            content="KlikKlaar SEO Logo - Automatische SEO optimalisatie voor B2B bedrijven"
            setContent={() => {}}
          />

          {/* Content Card Feature */}
          <OptimizationCard
            icon={FileText}
            title="Content Card"
            subtitle="AI-gegenereerde content optimalisatie voor betere leesbaarheid"
            originalLabel="Originele content:"
            originalValue="Standaard content zonder AI optimalisatie"
            optimizedLabel="Geoptimaliseerde content:"
            optimizedValue="AI-geoptimaliseerde content die je doelgroep aanspreekt, beter converteert en hoger rankt. Altijd relevant en gericht op je specifieke branche."
            editTitle="Content Card Bewerken"
            editDescription="Pas de AI content optimalisatie aan naar uw wensen"
            content="AI-geoptimaliseerde content die je doelgroep aanspreekt, beter converteert en hoger rankt. Altijd relevant en gericht op je specifieke branche."
            setContent={() => {}}
          />

          {/* Keyword Content Optimization */}
          <OptimizationCard
            icon={Search}
            title="Keyword Content Optimalisatie"
            subtitle="AI-geoptimaliseerde content voor je belangrijkste zoekwoorden"
            originalLabel="Originele content aanpak:"
            originalValue="Content geschreven zonder keyword strategie en SEO focus"
            optimizedLabel="Geoptimaliseerde content:"
            optimizedValue="Elke pagina wordt geoptimaliseerd voor je beste keywords. Onze AI zorgt dat je content natuurlijk leest én hoog rankt voor de zoektermen die klanten gebruiken."
            editTitle="Keyword Content Optimalisatie Bewerken"
            editDescription="Pas de keyword content optimalisatie aan naar uw wensen"
            content="Elke pagina wordt geoptimaliseerd voor je beste keywords. Onze AI zorgt dat je content natuurlijk leest én hoog rankt voor de zoektermen die klanten gebruiken."
            setContent={() => {}}
          />

          {/* Content Ideeën Generatie */}
          <OptimizationCard
            icon={Lightbulb}
            title="Content Ideeën Generatie"
            subtitle="AI genereert relevante content ideeën voor je doelgroep"
            originalLabel="Originele content planning:"
            originalValue="Handmatige brainstormsessies zonder data of inzichten"
            optimizedLabel="Geoptimaliseerde content planning:"
            optimizedValue="Onze AI analyseert je branche en genereert wekelijks concrete content ideeën die aansluiten bij wat je klanten zoeken. Nooit meer een leeg scherm."
            editTitle="Content Ideeën Generatie Bewerken"
            editDescription="Pas de content ideeën generatie aan naar uw wensen"
            content="Onze AI analyseert je branche en genereert wekelijks concrete content ideeën die aansluiten bij wat je klanten zoeken. Nooit meer een leeg scherm."
            setContent={() => {}}
          />

          {/* AI Content Herschrijving */}
          <OptimizationCard
            icon={Atom}
            title="AI Content Herschrijving"
            subtitle="Bestaande content automatisch optimaliseren voor betere prestaties"
            originalLabel="Originele content updates:"
            originalValue="Content blijft statisch en veroudert langzaam"
            optimizedLabel="Geoptimaliseerde content updates:"
            optimizedValue="Onze AI analyseert je bestaande content en herwerkt deze automatisch voor betere SEO prestaties, leesbaarheid en conversie. Altijd up-to-date content."
            editTitle="AI Content Herschrijving Bewerken"
            editDescription="Pas de AI content herschrijving aan naar uw wensen"
            content="Onze AI analyseert je bestaande content en herwerkt deze automatisch voor betere SEO prestaties, leesbaarheid en conversie. Altijd up-to-date content."
            setContent={() => {}}
          />

          {/* Automatische Content Updates */}
          <OptimizationCard
            icon={CalendarCheck}
            title="Automatische Content Updates"
            subtitle="Content wordt continu geoptimaliseerd op basis van performance data"
            originalLabel="Originele content beheer:"
            originalValue="Content wordt zelden bijgewerkt na publicatie"
            optimizedLabel="Geoptimaliseerde content beheer:"
            optimizedValue="Onze AI monitort de prestaties van elke pagina en past automatisch titels, beschrijvingen en content aan voor betere resultaten. Set-and-forget content optimalisatie."
            editTitle="Automatische Content Updates Bewerken"
            editDescription="Pas de automatische content updates aan naar uw wensen"
            content="Onze AI monitort de prestaties van elke pagina en past automatisch titels, beschrijvingen en content aan voor betere resultaten. Set-and-forget content optimalisatie."
            setContent={() => {}}
          />

          {/* Concurrent Content Analyse */}
          <OptimizationCard
            icon={Binoculars}
            title="Concurrent Content Analyse"
            subtitle="Leer van je concurrenten en creëer betere content"
            originalLabel="Originele content strategie:"
            originalValue="Geen inzicht in wat concurrenten doen qua content"
            optimizedLabel="Geoptimaliseerde content strategie:"
            optimizedValue="Onze AI analyseert de content van je concurrenten en toont precies waar jij kansen hebt. Creëer content die beter is dan de rest en win marktaandeel."
            editTitle="Concurrent Content Analyse Bewerken"
            editDescription="Pas de concurrent content analyse aan naar uw wensen"
            content="Onze AI analyseert de content van je concurrenten en toont precies waar jij kansen hebt. Creëer content die beter is dan de rest en win marktaandeel."
            setContent={() => {}}
          />

          {/* Content Performance Tracking */}
          <OptimizationCard
            icon={TrendingUp}
            title="Content Performance Tracking"
            subtitle="Meet en optimaliseer de prestaties van elke content pagina"
            originalLabel="Originele content monitoring:"
            originalValue="Geen inzicht in welke content werkt en welke niet"
            optimizedLabel="Geoptimaliseerde content monitoring:"
            optimizedValue="Zie precies welke content het beste presteert, waar bezoekers afhaken en welke pagina's meer traffic verdienen. Data-gedreven content optimalisatie."
            editTitle="Content Performance Tracking Bewerken"
            editDescription="Pas de content performance tracking aan naar uw wensen"
            content="Zie precies welke content het beste presteert, waar bezoekers afhaken en welke pagina's meer traffic verdienen. Data-gedreven content optimalisatie."
            setContent={() => {}}
          />

          {/* Content SEO Audit */}
          <OptimizationCard
            icon={ScanSearch}
            title="Content SEO Audit"
            subtitle="Diepgaande analyse van je content voor SEO optimalisatie"
            originalLabel="Originele content controle:"
            originalValue="Sporadische handmatige checks zonder systematische aanpak"
            optimizedLabel="Geoptimaliseerde content controle:"
            optimizedValue="Onze AI scant elke pagina op SEO-problemen: van ontbrekende titels tot slechte interne links. Alles wordt automatisch gedetecteerd en opgelost."
            editTitle="Content SEO Audit Bewerken"
            editDescription="Pas de content SEO audit aan naar uw wensen"
            content="Onze AI scant elke pagina op SEO-problemen: van ontbrekende titels tot slechte interne links. Alles wordt automatisch gedetecteerd en opgelost."
            setContent={() => {}}
          />

          {/* Content Optimization */}
          <OptimizationCard
            icon={FileText}
            title={t.contentTitle}
            subtitle={t.contentSubtitle}
            originalLabel={t.originalContent}
            originalValue="Wij bieden SEO diensten aan voor bedrijven die hun online zichtbaarheid willen verbeteren."
            optimizedLabel={t.optimizedContent}
            optimizedValue={contentContent}
            editTitle={t.editContent}
            editDescription="Pas de content aan naar uw wensen"
            content={contentContent}
            setContent={setContentContent}
          />

          {/* Schema Markup */}
          <OptimizationCard
            icon={Code}
            title={t.schemaTitle}
            subtitle={t.schemaSubtitle}
            originalLabel={t.originalSchema}
            originalValue="Geen schema markup"
            optimizedLabel={t.optimizedSchema}
            optimizedValue={schemaContent}
            editTitle={t.editSchema}
            editDescription="Pas de schema markup aan naar uw wensen"
            content={schemaContent}
            setContent={setSchemaContent}
          />

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