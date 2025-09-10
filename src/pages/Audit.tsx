import { FileSearch, AlertTriangle, CheckCircle, Clock, Target, Globe, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Audit = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const texts = {
    nl: {
      title: 'SEO Audit',
      subtitle: 'Volledige analyse van uw website prestaties en optimalisatie mogelijkheden',
      lastAudit: 'Laatste audit: 9 september 2025',
      technicalSeo: 'Technische SEO',
      contentQuality: 'Content Kwaliteit',
      userExperience: 'Gebruikerservaring',
      score: 'Score',
      checksPassedOf: 'van',
      checksPassed: 'controles geslaagd',
      wellExecuted: 'Goed uitgevoerd',
      wellExecutedDesc: 'Deze elementen zijn correct geoptimaliseerd',
      attentionPoints: 'Aandachtspunten',
      attentionPointsDesc: 'Deze punten kunnen worden verbeterd',
      metaTitlesPresent: 'Meta titles aanwezig op alle pagina\'s',
      sslActive: 'SSL certificaat actief',
      mobileFriendly: 'Mobile-friendly design',
      altTextsMissing: 'Alt-teksten ontbreken bij afbeeldingen',
      altTextsDesc: '5 afbeeldingen zonder alt-tekst gevonden',
      pageSpeedSlow: 'Pagina laadsnelheid kan beter',
      pageSpeedDesc: 'Huidige score: 3.2s, doel: <2.5s',
      medium: 'Middel',
      high: 'Hoog',
      language: 'Taal'
    },
    en: {
      title: 'SEO Audit',
      subtitle: 'Complete analysis of your website performance and optimization opportunities',
      lastAudit: 'Last audit: September 9, 2025',
      technicalSeo: 'Technical SEO',
      contentQuality: 'Content Quality',
      userExperience: 'User Experience',
      score: 'Score',
      checksPassedOf: 'of',
      checksPassed: 'checks passed',
      wellExecuted: 'Well Executed',
      wellExecutedDesc: 'These elements are correctly optimized',
      attentionPoints: 'Attention Points',
      attentionPointsDesc: 'These points can be improved',
      metaTitlesPresent: 'Meta titles present on all pages',
      sslActive: 'SSL certificate active',
      mobileFriendly: 'Mobile-friendly design',
      altTextsMissing: 'Alt texts missing from images',
      altTextsDesc: '5 images without alt text found',
      pageSpeedSlow: 'Page loading speed can be better',
      pageSpeedDesc: 'Current score: 3.2s, goal: <2.5s',
      medium: 'Medium',
      high: 'High',
      language: 'Language'
    }
  };

  const t = texts[language];

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
      
      <main className="flex-1 px-4 lg:px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 lg:mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl lg:text-kk-h1 text-foreground mb-1">{t.title}</h1>
              <p className="text-sm lg:text-kk-label text-muted-foreground">
                {t.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 lg:gap-3 items-center">
            <div className="flex items-center gap-2 text-xs lg:text-kk-label text-muted-foreground">
              <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden sm:inline">{t.lastAudit}</span>
              <span className="sm:hidden">Sep 9, 2025</span>
            </div>
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[100px] lg:w-[140px] text-xs lg:text-sm">
                <Globe className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">NL</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
            <ThemeToggle />
          </div>
        </div>

        {/* Audit Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="border border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {t.technicalSeo}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t.score}</span>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">8.5/10</Badge>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground">23 {t.checksPassedOf} 27 {t.checksPassed}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                {t.contentQuality}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t.score}</span>
                  <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-200">6.2/10</Badge>
                </div>
                <Progress value={62} className="h-2" />
                <p className="text-xs text-muted-foreground">12 {t.checksPassedOf} 19 {t.checksPassed}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                {t.userExperience}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t.score}</span>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">7.8/10</Badge>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-xs text-muted-foreground">15 {t.checksPassedOf} 18 {t.checksPassed}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Results */}
        <div className="space-y-8">
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {t.wellExecuted}
              </CardTitle>
              <CardDescription>{t.wellExecutedDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-sm">{t.metaTitlesPresent}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">✓</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-sm">{t.sslActive}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">✓</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-sm">{t.mobileFriendly}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">✓</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                {t.attentionPoints}
              </CardTitle>
              <CardDescription>{t.attentionPointsDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <span className="text-sm font-medium">{t.altTextsMissing}</span>
                    <p className="text-xs text-muted-foreground">{t.altTextsDesc}</p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{t.medium}</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <span className="text-sm font-medium">{t.pageSpeedSlow}</span>
                    <p className="text-xs text-muted-foreground">{t.pageSpeedDesc}</p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{t.high}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Audit;