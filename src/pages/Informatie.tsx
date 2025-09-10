import { Info, Building, Settings, Globe, Target, Save, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Informatie = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const texts = {
    nl: {
      title: 'Informatie & Instellingen',
      subtitle: 'Bedrijfsgegevens en configuratie van de optimalisatie-engine',
      save: 'Wijzigingen opslaan',
      businessInfo: 'Bedrijfsinformatie',
      businessInfoDesc: 'Deze informatie wordt gebruikt voor lokale SEO optimalisatie',
      businessName: 'Bedrijfsnaam',
      businessType: 'Bedrijfstype',
      address: 'Adres',
      phone: 'Telefoonnummer',
      description: 'Bedrijfsomschrijving',
      descriptionPlaceholder: 'Korte beschrijving van uw bedrijf en diensten...',
      seoEngine: 'Optimalisatie-engine',
      seoEngineDesc: 'Configureer hoe de automatische SEO optimalisaties werken',
      autoOptimizations: 'Automatische optimalisaties',
      autoOptimizationsDesc: 'Sta toe dat KlikKlaar automatisch SEO-verbeteringen doorvoert',
      contentGeneration: 'Content generatie',
      contentGenerationDesc: 'Automatisch genereren van meta descriptions en alt-teksten',
      weeklyReports: 'Wekelijkse rapporten',
      weeklyReportsDesc: 'Ontvang wekelijks een samenvatting van optimalisaties',
      targetKeywords: 'Doelzoekwoorden',
      targetKeywordsDesc: 'Primaire zoekwoorden waar u op wilt ranken',
      primaryKeywords: 'Primaire zoekwoorden (gescheiden door komma\'s)',
      locationKeywords: 'Locatie zoekwoorden',
      websiteSettings: 'Website instellingen',
      websiteSettingsDesc: 'Technische instellingen voor uw website',
      websiteUrl: 'Website URL',
      googleAnalytics: 'Google Analytics ID',
      language: 'Taal'
    },
    en: {
      title: 'Information & Settings',
      subtitle: 'Business data and optimization engine configuration',
      save: 'Save Changes',
      businessInfo: 'Business Information',
      businessInfoDesc: 'This information is used for local SEO optimization',
      businessName: 'Business Name',
      businessType: 'Business Type',
      address: 'Address',
      phone: 'Phone Number',
      description: 'Business Description',
      descriptionPlaceholder: 'Brief description of your business and services...',
      seoEngine: 'Optimization Engine',
      seoEngineDesc: 'Configure how automatic SEO optimizations work',
      autoOptimizations: 'Automatic Optimizations',
      autoOptimizationsDesc: 'Allow KlikKlaar to automatically implement SEO improvements',
      contentGeneration: 'Content Generation',
      contentGenerationDesc: 'Automatically generate meta descriptions and alt texts',
      weeklyReports: 'Weekly Reports',
      weeklyReportsDesc: 'Receive weekly summary of optimizations',
      targetKeywords: 'Target Keywords',
      targetKeywordsDesc: 'Primary keywords you want to rank for',
      primaryKeywords: 'Primary keywords (separated by commas)',
      locationKeywords: 'Location keywords',
      websiteSettings: 'Website Settings',
      websiteSettingsDesc: 'Technical settings for your website',
      websiteUrl: 'Website URL',
      googleAnalytics: 'Google Analytics ID',
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
      
      <main className="flex-1 px-3 sm:px-4 lg:px-8 py-4 sm:py-6 overflow-x-hidden overflow-y-auto relative z-10 w-full min-w-0">
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
            <Button className="bg-kk-gradient text-white hover:opacity-90 text-xs lg:text-sm px-3 lg:px-4">
              <Save className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden sm:inline">{t.save}</span>
              <span className="sm:hidden">Save</span>
            </Button>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Business Information */}
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                {t.businessInfo}
              </CardTitle>
              <CardDescription>
                {t.businessInfoDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="business-name">{t.businessName}</Label>
                  <Input id="business-name" placeholder="KlikKlaar Kapsalon" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-type">{t.businessType}</Label>
                  <Input id="business-type" placeholder="Kapsalon" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">{t.address}</Label>
                  <Input id="address" placeholder="Hoofdstraat 123, 1621 AA Hoorn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input id="phone" placeholder="+31 229 123456" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">{t.description}</Label>
                <Textarea 
                  id="description" 
                  placeholder={t.descriptionPlaceholder}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* SEO Engine Settings */}
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                {t.seoEngine}
              </CardTitle>
              <CardDescription>
                {t.seoEngineDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>{t.autoOptimizations}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.autoOptimizationsDesc}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>{t.contentGeneration}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.contentGenerationDesc}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>{t.weeklyReports}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.weeklyReportsDesc}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Target Keywords */}
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                {t.targetKeywords}
              </CardTitle>
              <CardDescription>
                {t.targetKeywordsDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primary-keywords">{t.primaryKeywords}</Label>
                <Input 
                  id="primary-keywords" 
                  placeholder="kapper hoorn, kapsalon hoorn, haar knippen hoorn"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location-keywords">{t.locationKeywords}</Label>
                <Input 
                  id="location-keywords" 
                  placeholder="hoorn, west-friesland, noord-holland"
                />
              </div>
            </CardContent>
          </Card>

          {/* Website Settings */}
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                {t.websiteSettings}
              </CardTitle>
              <CardDescription>
                {t.websiteSettingsDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website-url">{t.websiteUrl}</Label>
                  <Input id="website-url" placeholder="https://www.uwbedrijf.nl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="google-analytics">{t.googleAnalytics}</Label>
                  <Input id="google-analytics" placeholder="G-XXXXXXXXXX" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Informatie;