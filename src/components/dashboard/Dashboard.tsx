import { Eye, Users, Target, Download, Clock, Settings, TrendingUp, Globe, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./Sidebar";
import HeroMetric from "./HeroMetric";
import KPICard from "./KPICard";
import VisitorsChart from "./VisitorsChart";
import UpdatesFeed from "./UpdatesFeed";
import ActionsAlerts from "./ActionsAlerts";

const Dashboard = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const texts = {
    nl: {
      title: 'KlikKlaar.io SEO Dashboard',
      lastUpdated: 'Laatst bijgewerkt: 16 september 2025, 14:45',
      thisWeek: 'Deze week',
      thisMonth: 'Deze maand',
      downloadReport: 'Download rapport (PDF)',
      seoScore: 'SEO Score',
      seoScoreHelp: 'Technische SEO prestaties voor KlikKlaar.io',
      totalAdjustments: 'Automatische optimalisaties',
      totalAdjustmentsHelp: 'AI-gedreven SEO verbeteringen toegepast',
      estimatedGrowth: 'Organische groei',
      estimatedGrowthHelp: 'Geschatte traffic verbetering door SEO',
      totalVisitors: 'Website bezoekers',
      totalVisitorsHelp: 'Unieke bezoekers KlikKlaar.io website',
      weekDelta: 'deze week',
      monthDelta: 'deze maand',
      prognosisBased: 'Prognose op basis van SEO trending',
      language: 'Taal'
    },
    en: {
      title: 'KlikKlaar.io SEO Dashboard',
      lastUpdated: 'Last updated: September 16, 2025, 2:45 PM',
      thisWeek: 'This week',  
      thisMonth: 'This month',
      downloadReport: 'Download report (PDF)',
      seoScore: 'SEO Score',
      seoScoreHelp: 'Technical SEO performance for KlikKlaar.io',
      totalAdjustments: 'Automatic optimizations',
      totalAdjustmentsHelp: 'AI-driven SEO improvements applied',
      estimatedGrowth: 'Organic growth',
      estimatedGrowthHelp: 'Estimated traffic improvement through SEO',
      totalVisitors: 'Website visitors',
      totalVisitorsHelp: 'Unique visitors to KlikKlaar.io website',
      weekDelta: 'this week',
      monthDelta: 'this month',
      prognosisBased: 'Forecast based on SEO trending',
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
        fixed lg:relative lg:block z-50 h-screen transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="relative h-full">
          <Sidebar />
          {/* Mobile Close Button */}
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
            
            {/* Mobile Branding */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <img 
                src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
                alt="KlikKlaar.io SEO automatisatie software logo - dashboard voor B2B bedrijven"
                className="h-12 w-auto"
              />
            </div>
            
            {/* Title Section - Desktop */}
            <div className="hidden lg:block min-w-0 flex-1">
              <div className="bg-muted/30 rounded-lg px-4 py-2 inline-block">
                <h1 className="text-xl lg:text-kk-h1 text-foreground mb-1 truncate">{t.title}</h1>
              </div>
              <div className="flex items-center gap-2 text-sm lg:text-kk-label text-muted-foreground">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="truncate">{t.lastUpdated}</span>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex gap-2 items-center shrink-0">
            {/* Language Selector */}
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
            
            {/* Theme Toggle */}
            <div className="[&>button]:h-8 [&>button]:w-8 lg:[&>button]:h-9 lg:[&>button]:w-9 shrink-0">
              <ThemeToggle />
            </div>
            
            {/* Time Period Buttons - Hidden on mobile */}
            <div className="hidden md:flex gap-2">
              <button className="px-2 lg:px-3 py-1.5 text-xs font-medium text-muted-foreground bg-card border border-border rounded-md hover:bg-accent transition-colors whitespace-nowrap">
                {t.thisWeek}
              </button>
              <button className="px-2 lg:px-3 py-1.5 text-xs font-medium text-[hsl(var(--kk-violet))] bg-card border border-[hsl(var(--kk-violet))] rounded-md whitespace-nowrap">
                {t.thisMonth}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Metric */}
        <div className="mb-4 sm:mb-6 w-full max-w-none">
          <HeroMetric language={language} />
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 mt-4 w-full max-w-none grid-rows-1">
          <KPICard
            icon={<Eye />}
            label={t.seoScore}
            value="4,2"
            delta={`+0,8 ${t.weekDelta}`}
            deltaType="up"
            helpText={t.seoScoreHelp}
          />
          <KPICard
            icon={<Settings />}
            label={t.totalAdjustments}
            value="89"
            delta={`+12 ${t.weekDelta}`}
            deltaType="up"
            helpText={t.totalAdjustmentsHelp}
          />
          <KPICard
            icon={<TrendingUp />}
            label={t.estimatedGrowth}
            value="+160%"
            delta={t.prognosisBased}
            deltaType="up"
            helpText={t.estimatedGrowthHelp}
          />
          <KPICard
            icon={<Users />}
            label={t.totalVisitors}
            value="558"
            delta={`+160% ${t.monthDelta}`}
            deltaType="up"
            helpText={t.totalVisitorsHelp}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-6 w-full max-w-none">
          {/* Left Column - Chart */}
          <div className="lg:col-span-2 w-full">
            <VisitorsChart />
          </div>

          {/* Right Column - Updates Feed */}
          <div className="space-y-4 lg:space-y-6 w-full">
            <UpdatesFeed />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;