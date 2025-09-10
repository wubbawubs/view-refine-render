import { Eye, Users, Target, Download, Clock, Settings, TrendingUp, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Sidebar from "./Sidebar";
import HeroMetric from "./HeroMetric";
import KPICard from "./KPICard";
import VisitorsChart from "./VisitorsChart";
import UpdatesFeed from "./UpdatesFeed";
import ActionsAlerts from "./ActionsAlerts";

const Dashboard = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');

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
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">{t.title}</h1>
            <div className="flex items-center gap-2 text-kk-label text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{t.lastUpdated}</span>
            </div>
          </div>
          
          <div className="flex gap-3 items-center">
            <Select value={language} onValueChange={(value: 'nl' | 'en') => setLanguage(value)}>
              <SelectTrigger className="w-[140px]">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">Nederlands</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
            <ThemeToggle />
            <button className="px-4 py-2 text-kk-label font-medium text-muted-foreground bg-card border border-border rounded-lg hover:bg-accent transition-colors">
              {t.thisWeek}
            </button>
            <button className="px-4 py-2 text-kk-label font-medium text-[hsl(var(--kk-violet))] bg-card border border-[hsl(var(--kk-violet))] rounded-lg">
              {t.thisMonth}
            </button>
            <button className="px-4 py-2 text-kk-label font-medium text-white bg-kk-gradient rounded-lg hover:opacity-90 transition-opacity shadow-card flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t.downloadReport}
            </button>
          </div>
        </div>

        {/* Hero Metric */}
        <div className="mb-6">
          <HeroMetric />
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Chart */}
          <div className="lg:col-span-2">
            <VisitorsChart />
          </div>

          {/* Right Column - Updates Feed */}
          <div className="space-y-6">
            <UpdatesFeed />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;