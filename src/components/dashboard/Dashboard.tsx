import { Eye, TrendingUp, Users, Target, Download, Clock } from "lucide-react";
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
      
      <main className="flex-1 px-8 py-6 overflow-auto bg-background-subtle">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">SEO Dashboard</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Laatst bijgewerkt: 9 september 2025, 14:32</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground bg-white border border-border rounded-lg hover:bg-muted/50 transition-colors">
              Deze week
            </button>
            <button className="px-4 py-2 text-sm font-medium text-warning-accent bg-white border border-warning/20 rounded-lg hover:bg-warning/5 transition-colors">
              Deze maand
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-foreground rounded-lg hover:bg-foreground/90 transition-colors shadow-enterprise flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download rapport (PDF)
            </button>
          </div>
        </div>

        {/* Hero Metric */}
        <div className="mb-8 p-8 bg-white rounded-xl border border-border shadow-enterprise animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground mb-2">Jouw zichtbaarheid deze maand</h2>
              <div className="text-4xl font-bold text-foreground mb-3">+64%</div>
              <p className="text-muted-foreground mb-6">Verbetering t.o.v. vorige maand. Updates elke week.</p>
              
              {/* Benchmark */}
              <div className="flex items-center gap-4 p-4 gradient-hero rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">Jouw prestatie</div>
                  <div className="text-sm text-muted-foreground">+64% groei</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-muted-foreground">Gemiddelde concurrent</div>
                  <div className="text-sm text-muted-foreground">+26% groei</div>
                </div>
                <div className="text-sm text-growth font-medium">24% beter dan gemiddeld</div>
              </div>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-muted-foreground">Trending up</div>
            </div>
          </div>
        </div>

        {/* Supporting Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={<Eye />}
            value="3.8"
            label="SEO Score"
            change="+0.3 deze week"
            trend="up"
            gradient="neutral"
          />
          <MetricCard
            icon={<Users />}
            value="2,347"
            label="Organische bezoekers"
            change="+12.7% deze week"
            trend="up"
            gradient="growth"
          />
          <MetricCard
            icon={<Target />}
            value="38.0%"
            label="Verwachte klantengroei"
            change="Prognose op basis van trending"
            trend="up"
            gradient="warning"
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