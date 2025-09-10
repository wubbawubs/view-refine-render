import { Eye, Users, Target, Download, Settings } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "./Sidebar";
import HeroMetric from "./HeroMetric";
import KPICard from "./KPICard";
import VisitorsChart from "./VisitorsChart";
import UpdatesFeed from "./UpdatesFeed";
import ActionsAlerts from "./ActionsAlerts";
import TimeframeControl from "./TimeframeControl";
import DataFreshnessIndicator from "./DataFreshnessIndicator";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">KlikKlaar · Overzicht</h1>
            <DataFreshnessIndicator />
          </div>
          
          <div className="flex gap-3 items-center">
            <TimeframeControl />
            <ThemeToggle />
            <div className="relative">
              <button className="px-4 py-2 text-sm font-medium text-white bg-kk-gradient rounded-lg hover:opacity-90 transition-opacity shadow-card flex items-center gap-2">
                <Download className="w-4 h-4" />
                Exporteren
              </button>
            </div>
          </div>
        </div>

        {/* Hero Metric */}
        <div className="mb-6">
          <HeroMetric />
        </div>

        {/* KPI Cards Grid - 4 columns for compact layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            icon={<Eye />}
            label="SEO-score (0–10)"
            value="3,8"
            delta="+0,3"
            deltaType="up"
            helpText="Schaal 0–10 op basis van techniek, content en autoriteit"
            sparklineData={[3.2, 3.4, 3.5, 3.6, 3.7, 3.8]}
            compact
          />
          <KPICard
            icon={<Target />}
            label="Zichtbaarheid"
            value="+64%"
            delta="+12% vs benchmark"
            deltaType="up"
            helpText="Zichtbaarheidsindex vs concurrenten"
            sparklineData={[45, 52, 48, 58, 62, 64]}
            compact
          />
          <KPICard
            icon={<Users />}
            label="Organische bezoekers"
            value="2.347"
            delta="+12,7% · +31,2% YoY"
            deltaType="up"
            helpText="Absolute bezoekers huidige periode"
            sparklineData={[1800, 2100, 1950, 2200, 2300, 2347]}
            compact
          />
          <KPICard
            icon={<Settings />}
            label="Verwachte klantgroei"
            value="38%"
            delta="Betrouwbaarheid: hoog (±6%)"
            deltaType="up"
            helpText="Gebaseerd op CTR-trend, rankings en conversieratio van de afgelopen 8 weken"
            sparklineData={[32, 34, 36, 37, 38, 38]}
            compact
          />
        </div>

        {/* Main Content Grid - 8/4 column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Left Column - Chart (8 columns) */}
          <div className="lg:col-span-8">
            <VisitorsChart />
          </div>

          {/* Right Column - Updates Feed (4 columns) */}
          <div className="lg:col-span-4">
            <UpdatesFeed />
          </div>
        </div>

        {/* Bottom Section - Additional modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ActionsAlerts />
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Concurrentievergelijking</h3>
            <p className="text-sm text-muted-foreground">Coming soon</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Datakwaliteit & tracking status</h3>
            <p className="text-sm text-muted-foreground">Coming soon</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;