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
      title: 'SEO Dashboard',
      lastUpdated: 'Laatst bijgewerkt: 9 september 2025, 14:32',
      thisWeek: 'Deze week',
      thisMonth: 'Deze maand',
      downloadReport: 'Download rapport (PDF)',
      seoScore: 'SEO Score',
      seoScoreHelp: 'Hoe Google jou ziet',
      totalAdjustments: 'Totale aanpassingen gemaakt',
      totalAdjustmentsHelp: 'Automatische optimalisaties',
      estimatedGrowth: 'Geschatte groei aankomende maand',
      estimatedGrowthHelp: 'Verwachte verbetering',
      totalVisitors: 'Totaal aantal bezoekers',
      totalVisitorsHelp: 'Alle verkeersbronnen',
      weekDelta: 'deze week',
      monthDelta: 'deze maand',
      prognosisBased: 'Prognose op basis van trending',
      language: 'Taal'
    },
    en: {
      title: 'SEO Dashboard',
      lastUpdated: 'Last updated: September 9, 2025, 2:32 PM',
      thisWeek: 'This week',  
      thisMonth: 'This month',
      downloadReport: 'Download report (PDF)',
      seoScore: 'SEO Score',
      seoScoreHelp: 'How Google sees you',
      totalAdjustments: 'Total adjustments made',
      totalAdjustmentsHelp: 'Automatic optimizations',
      estimatedGrowth: 'Estimated growth next month',
      estimatedGrowthHelp: 'Expected improvement',
      totalVisitors: 'Total visitors',
      totalVisitorsHelp: 'All traffic sources',
      weekDelta: 'this week',
      monthDelta: 'this month',
      prognosisBased: 'Forecast based on trending',
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
      
      <main className="flex-1 px-3 sm:px-4 lg:px-8 py-4 sm:py-6 overflow-auto relative z-10 max-w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden shrink-0 p-2"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            {/* Mobile Branding - Only show when sidebar is closed */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <div className="w-7 h-7 bg-kk-gradient rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xs">K</span>
              </div>
              <span className="text-base font-bold text-foreground">KlikKlaar</span>
            </div>
            
            {/* Title Section */}
            <div className="min-w-0 flex-1 lg:flex-initial">
              <h1 className="text-lg sm:text-xl lg:text-kk-h1 text-foreground mb-1 lg:mb-1 truncate">{t.title}</h1>
              <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-kk-label text-muted-foreground">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" />
                <span className="hidden sm:inline truncate">{t.lastUpdated}</span>
                <span className="sm:hidden">Sep 9, 2025</span>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex gap-2 lg:gap-3 items-center justify-center sm:justify-end flex-wrap">
            {/* Language Selector */}
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[80px] sm:w-[100px] lg:w-[140px] text-xs lg:text-sm shrink-0">
                <Globe className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">NL</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Time Period Buttons - Hidden on mobile */}
            <div className="hidden md:flex gap-2 lg:gap-3">
              <button className="px-3 lg:px-4 py-2 text-xs lg:text-kk-label font-medium text-muted-foreground bg-card border border-border rounded-lg hover:bg-accent transition-colors whitespace-nowrap">
                {t.thisWeek}
              </button>
              <button className="px-3 lg:px-4 py-2 text-xs lg:text-kk-label font-medium text-[hsl(var(--kk-violet))] bg-card border border-[hsl(var(--kk-violet))] rounded-lg whitespace-nowrap">
                {t.thisMonth}
              </button>
            </div>
            
            {/* Download Button */}
            <button className="px-3 lg:px-4 py-2 text-xs lg:text-kk-label font-medium text-white bg-kk-gradient rounded-lg hover:opacity-90 transition-opacity shadow-card hidden sm:flex items-center gap-2 shrink-0 whitespace-nowrap">
              <Download className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">{t.downloadReport}</span>
              <span className="lg:hidden">PDF</span>
            </button>
          </div>
        </div>

        {/* Hero Metric */}
        <div className="mb-4 sm:mb-6 w-full max-w-none">
          <HeroMetric language={language} />
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 mt-4 sm:mt-6 w-full max-w-none">
          <KPICard
            icon={<Eye />}
            label={t.seoScore}
            value="3,8"
            delta={`+0,3 ${t.weekDelta}`}
            deltaType="up"
            helpText={t.seoScoreHelp}
          />
          <KPICard
            icon={<Settings />}
            label={t.totalAdjustments}
            value="127"
            delta={`+8 ${t.weekDelta}`}
            deltaType="up"
            helpText={t.totalAdjustmentsHelp}
          />
          <KPICard
            icon={<TrendingUp />}
            label={t.estimatedGrowth}
            value="+78%"
            delta={t.prognosisBased}
            deltaType="up"
            helpText={t.estimatedGrowthHelp}
          />
          <KPICard
            icon={<Users />}
            label={t.totalVisitors}
            value="8.542"
            delta={`+15,2% ${t.monthDelta}`}
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