import { Eye, Users, Target, Clock, Settings, TrendingUp, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import HeroMetric from "./HeroMetric";
import KPICard from "./KPICard";
import UpdatesFeed from "./UpdatesFeed";
import VisitorsChart from "./VisitorsChart";
import WeeklySummary from "./WeeklySummary";
import WelcomeBanner from "./WelcomeBanner";
import NotificationsPopover from "./NotificationsPopover";
import { 
  useDashboardMetrics, 
  useUpdates, 
  useVisitorsChart, 
  useWeeklySummary, 
} from "@/hooks/useDashboardData";

const Dashboard = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: dashboardMetrics, isLoading: metricsLoading } = useDashboardMetrics();
  const { data: updates, isLoading: updatesLoading } = useUpdates();
  const { data: visitorsChart, isLoading: chartLoading } = useVisitorsChart();
  const { data: weeklySummary, isLoading: summaryLoading } = useWeeklySummary();

  const texts = {
    nl: {
      title: 'KlikKlaar.io SEO Dashboard',
      lastUpdated: 'Laatst bijgewerkt: 24 september 2025, 07:30',
      seoScore: 'SEO Score',
      seoScoreHelp: 'Dit cijfer laat zien hoe goed jouw website scoort in Google. Hoe hoger, hoe makkelijker mensen je vinden.',
      totalAdjustments: 'Automatische optimalisaties',
      totalAdjustmentsHelp: 'Dit zijn verbeteringen die we automatisch op jouw website hebben gedaan zodat je hoger in Google komt.',
      estimatedGrowth: 'Organische groei',
      estimatedGrowthHelp: 'Hoeveel meer mensen jouw website bezoeken dankzij de verbeteringen die we hebben gedaan.',
      totalVisitors: 'Website bezoekers',
      totalVisitorsHelp: 'Het aantal mensen dat jouw website heeft bezocht. Meer bezoekers = meer potentiële klanten!',
    },
    en: {
      title: 'KlikKlaar.io SEO Dashboard',
      lastUpdated: 'Last updated: September 24, 2025, 7:30 AM',
      seoScore: 'SEO Score',
      seoScoreHelp: 'This number shows how well your website scores in Google. The higher, the easier people can find you.',
      totalAdjustments: 'Automatic optimizations',
      totalAdjustmentsHelp: 'These are improvements we automatically made to your website so you rank higher in Google.',
      estimatedGrowth: 'Organic growth',
      estimatedGrowthHelp: 'How many more people visit your website thanks to the improvements we made.',
      totalVisitors: 'Website visitors',
      totalVisitorsHelp: 'The number of people who visited your website. More visitors = more potential customers!',
    }
  };

  const t = texts[language];

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      
      <div className={`fixed lg:block z-50 h-screen transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="relative h-full">
          <Sidebar />
          <Button variant="ghost" size="sm" className="absolute top-4 right-4 lg:hidden text-sidebar-foreground hover:bg-sidebar-accent z-10" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <main className="flex-1 lg:ml-64 px-3 sm:px-4 lg:px-8 py-4 sm:py-6 overflow-x-hidden overflow-y-auto relative z-10 w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 lg:mb-8 pb-3 sm:pb-4 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <Button variant="ghost" size="sm" className="lg:hidden shrink-0 p-1.5" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <img src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" alt="KlikKlaar.io" className="h-12 w-auto" />
            </div>
            <div className="hidden lg:block min-w-0 flex-1">
              <div className="bg-muted/30 rounded-lg px-4 py-2 inline-block">
                <h1 className="text-xl lg:text-kk-h1 text-foreground mb-1 truncate">
                  <span className="text-muted-foreground">KlikKlaar.io</span> SEO Dashboard
                </h1>
              </div>
              <div className="flex items-center gap-2 text-sm lg:text-kk-label text-muted-foreground">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="truncate">{t.lastUpdated}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <NotificationsPopover />
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

        {/* Welcome Banner */}
        <div className="mb-4 sm:mb-6 w-full max-w-none animate-stagger-1">
          <WelcomeBanner />
        </div>

        {/* Hero Metric */}
        <div className="mb-4 sm:mb-6 w-full max-w-none animate-stagger-2">
          <HeroMetric language={language} data={dashboardMetrics?.heroMetric ?? null} loading={metricsLoading} />
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 mt-4 w-full max-w-none grid-rows-1">
          {[
            { icon: <Eye />, label: t.seoScore, idx: 0, help: t.seoScoreHelp },
            { icon: <Settings />, label: t.totalAdjustments, idx: 1, help: t.totalAdjustmentsHelp },
            { icon: <TrendingUp />, label: t.estimatedGrowth, idx: 2, help: t.estimatedGrowthHelp },
            { icon: <Users />, label: t.totalVisitors, idx: 3, help: t.totalVisitorsHelp },
          ].map((kpi, i) => (
            <div key={kpi.idx} className={`animate-stagger-${i + 3}`}>
              <KPICard
                icon={kpi.icon}
                label={kpi.label}
                value={dashboardMetrics?.kpiMetrics?.[kpi.idx]?.value ?? 'N/A'}
                delta={dashboardMetrics?.kpiMetrics?.[kpi.idx]?.delta ?? 'N/A'}
                deltaType={dashboardMetrics?.kpiMetrics?.[kpi.idx]?.deltaType ?? 'neutral'}
                helpText={dashboardMetrics?.kpiMetrics?.[kpi.idx]?.helpText ?? kpi.help}
              />
            </div>
          ))}
        </div>

        {/* Visitors Chart - Full width */}
        <div className="mb-4 sm:mb-6 w-full max-w-none">
          <VisitorsChart data={visitorsChart} loading={chartLoading} />
        </div>

        {/* Content Grid - Updates + Monthly Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full max-w-none">
          <UpdatesFeed updates={updates} loading={updatesLoading} />
          <WeeklySummary summary={weeklySummary} loading={summaryLoading} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
