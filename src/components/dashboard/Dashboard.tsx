import { Eye, Users, Target, Download, Clock, Settings, TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "./Sidebar";
import HeroMetric from "./HeroMetric";
import KPICard from "./KPICard";
import VisitorsChart from "./VisitorsChart";
import UpdatesFeed from "./UpdatesFeed";
import ActionsAlerts from "./ActionsAlerts";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <h1 className="text-kk-h1 text-foreground mb-1">SEO Dashboard</h1>
            <div className="flex items-center gap-2 text-kk-label text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Laatst bijgewerkt: 9 september 2025, 14:32</span>
            </div>
          </div>
          
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <button className="px-4 py-2 text-kk-label font-medium text-muted-foreground bg-card border border-border rounded-lg hover:bg-accent transition-colors">
              Deze week
            </button>
            <button className="px-4 py-2 text-kk-label font-medium text-[hsl(var(--kk-violet))] bg-card border border-[hsl(var(--kk-violet))] rounded-lg">
              Deze maand
            </button>
            <button className="px-4 py-2 text-kk-label font-medium text-white bg-kk-gradient rounded-lg hover:opacity-90 transition-opacity shadow-card flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download rapport (PDF)
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
            label="SEO Score"
            value="3,8"
            delta="+0,3 deze week"
            deltaType="up"
            helpText="Hoe Google jou ziet"
          />
          <KPICard
            icon={<Settings />}
            label="Totale aanpassingen gemaakt"
            value="127"
            delta="+8 deze week"
            deltaType="up"
            helpText="Automatische optimalisaties"
          />
          <KPICard
            icon={<TrendingUp />}
            label="Geschatte groei aankomende maand"
            value="+78%"
            delta="Prognose op basis van trending"
            deltaType="up"
            helpText="Verwachte verbetering"
          />
          <KPICard
            icon={<Users />}
            label="Totaal aantal bezoekers"
            value="8.542"
            delta="+15,2% deze maand"
            deltaType="up"
            helpText="Alle verkeersbronnen"
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