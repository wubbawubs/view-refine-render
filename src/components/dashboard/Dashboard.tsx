import { Eye, Users, Target, Download, Clock } from "lucide-react";
import Sidebar from "./Sidebar";
import HeroMetric from "./HeroMetric";
import KPICard from "./KPICard";
import VisitorsChart from "./VisitorsChart";
import UpdatesFeed from "./UpdatesFeed";
import ActionsAlerts from "./ActionsAlerts";
import TopKeywords from "./TopKeywords";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 px-8 py-6 overflow-auto bg-kk-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-kk-gray-300">
          <div>
            <h1 className="text-kk-h1 text-kk-eggplant mb-1">SEO Dashboard</h1>
            <div className="flex items-center gap-2 text-kk-label text-kk-gray-500">
              <Clock className="w-4 h-4" />
              <span>Laatst bijgewerkt: 9 september 2025, 14:32</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 text-kk-label font-medium text-kk-gray-700 bg-white border border-kk-gray-300 rounded-lg hover:bg-kk-gray-100 transition-colors">
              Deze week
            </button>
            <button className="px-4 py-2 text-kk-label font-medium text-kk-violet bg-white border border-kk-violet rounded-lg">
              Deze maand
            </button>
            <button className="px-4 py-2 text-kk-label font-medium text-white bg-kk-gradient rounded-lg hover:opacity-90 transition-opacity shadow-card flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download rapport (PDF)
            </button>
          </div>
        </div>

        {/* Hero Metric */}
        <HeroMetric />

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            icon={<Eye />}
            label="SEO-score"
            value="3,8"
            delta="+0,3 deze week"
            deltaType="up"
            helpText="Hoe Google jou ziet"
          />
          <KPICard
            icon={<Users />}
            label="Organische bezoekers"
            value="2.347"
            delta="+12,7% deze week"
            deltaType="up"
            helpText="Laatste 7 dagen"
          />
          <KPICard
            icon={<Target />}
            label="Verwachte klantengroei"
            value="38,0%"
            delta="Prognose op basis van trending"
            deltaType="neutral"
            helpText="Gebaseerd op CTR en rankings"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Chart */}
          <div className="lg:col-span-2">
            <VisitorsChart />
          </div>

          {/* Right Column - Updates Feed */}
          <div className="space-y-8">
            <UpdatesFeed />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ActionsAlerts />
          <TopKeywords />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;