import { Eye, TrendingUp, Users, Target } from "lucide-react";
import Sidebar from "./Sidebar";
import MetricCard from "./MetricCard";
import VisitorsChart from "./VisitorsChart";
import SuccessInsights from "./SuccessInsights"; 
import RecentOptimizations from "./RecentOptimizations";
import WeeklySummary from "./WeeklySummary";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welkom terug! Hier zie je hoe jouw website deze week presteerde.</p>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-medium text-warning bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              Deze week
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              Deze maand
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-brand">
              Stuur naar email
            </button>
          </div>
        </div>

        {/* Growth Banner */}
        <div className="mb-8 p-6 gradient-brand rounded-xl text-white shadow-brand animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Jouw website groeit elke dag!</h2>
              <p className="text-white/90 mb-3">Zichtbaarheid in Google ten opzichte van vorige maand.</p>
              <div className="flex items-center gap-2 text-sm">
                <span>Je bent nu</span>
                <span className="font-semibold text-2xl">64% beter vindbaar</span>
                <span>dan vorige maand</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-semibold mb-1">+64%</div>
              <div className="text-white/80 text-sm">groei deze maand</div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={<Eye />}
            value="3,8"
            label="Hoe Google jou ziet"
            change="+8.5% beter dan vorige week"
            trend="up"
            gradient="brand"
          />
          <MetricCard
            icon={<TrendingUp />}
            value="114"
            label="Slimme verbeteringen deze week"
            change="Nieuwe verbeteringen deze week"
            trend="up"
            gradient="success"
          />
          <MetricCard
            icon={<Users />}
            value="2,347"
            label="Nieuwe websitebezoekers"
            change="+12.7% meer dan vorige week"
            trend="up"
            gradient="warning"
          />
          <MetricCard
            icon={<Target />}
            value="38.0%"
            label="Verwachte klantengroei"
            change="Verwachte groei in nieuwe klanten"
            trend="up"
            gradient="neutral"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Tables */}
          <div className="lg:col-span-2 space-y-8">
            <VisitorsChart />
            <RecentOptimizations />
          </div>

          {/* Right Column - Insights and Summary */}
          <div className="space-y-8">
            <SuccessInsights />
            <WeeklySummary />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;