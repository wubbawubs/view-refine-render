import { useState } from "react";
import { 
  Shield, 
  Users, 
  TrendingUp, 
  TrendingDown,
  BarChart3, 
  Target, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  UserPlus,
  Activity,
  Eye,
  Menu,
  X
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/dashboard/Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock admin data
const adminStats = {
  totalCustomers: 156,
  newCustomersThisWeek: 12,
  activeCustomers: 142,
  churnedCustomers: 3,
  avgSeoScore: 78,
  avgRankingImprovement: 23,
  totalOptimizations: 2847,
  optimizationsThisWeek: 234
};

const customerStatuses = [
  { id: 1, name: "Bakkerij De Groot", status: "active", seoScore: 92, lastActivity: "2 uur geleden", plan: "Pro" },
  { id: 2, name: "Loodgieter Amsterdam", status: "active", seoScore: 85, lastActivity: "5 uur geleden", plan: "Starter" },
  { id: 3, name: "Restaurant Het Zonnetje", status: "pending", seoScore: 67, lastActivity: "1 dag geleden", plan: "Pro" },
  { id: 4, name: "Kapsalon Stijl", status: "active", seoScore: 78, lastActivity: "3 uur geleden", plan: "Starter" },
  { id: 5, name: "Garage Van Dijk", status: "inactive", seoScore: 54, lastActivity: "5 dagen geleden", plan: "Starter" },
  { id: 6, name: "Bloemenwinkel Flora", status: "active", seoScore: 88, lastActivity: "1 uur geleden", plan: "Pro" },
  { id: 7, name: "Advocatenkantoor Peters", status: "active", seoScore: 91, lastActivity: "30 min geleden", plan: "Enterprise" },
  { id: 8, name: "Tandarts Smile", status: "pending", seoScore: 72, lastActivity: "2 dagen geleden", plan: "Pro" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Actief</Badge>;
    case "pending":
      return <Badge className="bg-amber-100 text-amber-700 border-amber-200">In afwachting</Badge>;
    case "inactive":
      return <Badge className="bg-red-100 text-red-700 border-red-200">Inactief</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getPlanBadge = (plan: string) => {
  switch (plan) {
    case "Enterprise":
      return <Badge className="bg-purple-100 text-purple-700 border-purple-200">{plan}</Badge>;
    case "Pro":
      return <Badge className="bg-blue-100 text-blue-700 border-blue-200">{plan}</Badge>;
    default:
      return <Badge variant="outline">{plan}</Badge>;
  }
};

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      
      <main className="flex-1 px-4 lg:px-8 py-6 overflow-y-auto relative z-10 w-full min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden shrink-0 p-1.5"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Klant overzicht en statistieken</p>
              </div>
            </div>
          </div>
          
          <ThemeToggle />
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Total Customers */}
          <Card className="p-4 bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Totaal Klanten</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.totalCustomers}</div>
            <div className="flex items-center gap-1 mt-1 text-sm text-emerald-600">
              <TrendingUp className="w-3 h-3" />
              <span>+{adminStats.newCustomersThisWeek} deze week</span>
            </div>
          </Card>

          {/* New Customers This Week */}
          <Card className="p-4 bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Nieuwe Klanten</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.newCustomersThisWeek}</div>
            <div className="text-sm text-muted-foreground mt-1">Deze week</div>
          </Card>

          {/* Average SEO Score */}
          <Card className="p-4 bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Gem. SEO Score</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.avgSeoScore}%</div>
            <Progress value={adminStats.avgSeoScore} className="mt-2 h-2" />
          </Card>

          {/* Total Optimizations */}
          <Card className="p-4 bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Optimalisaties</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.totalOptimizations.toLocaleString()}</div>
            <div className="flex items-center gap-1 mt-1 text-sm text-emerald-600">
              <TrendingUp className="w-3 h-3" />
              <span>+{adminStats.optimizationsThisWeek} deze week</span>
            </div>
          </Card>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 bg-card border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Actieve Klanten</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-xl font-bold text-foreground">{adminStats.activeCustomers}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {Math.round((adminStats.activeCustomers / adminStats.totalCustomers) * 100)}% van totaal
            </div>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Gem. Ranking Verbetering</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-xl font-bold text-foreground">+{adminStats.avgRankingImprovement} posities</div>
            <div className="text-xs text-muted-foreground mt-1">Gemiddeld per klant</div>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Churn Deze Maand</span>
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-xl font-bold text-foreground">{adminStats.churnedCustomers}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {((adminStats.churnedCustomers / adminStats.totalCustomers) * 100).toFixed(1)}% churn rate
            </div>
          </Card>
        </div>

        {/* Customer Table */}
        <Card className="p-6 bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Klant Overzicht</h2>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Bekijk Alle
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bedrijf</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>SEO Score</TableHead>
                <TableHead>Laatste Activiteit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerStatuses.map((customer) => (
                <TableRow key={customer.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell>{getPlanBadge(customer.plan)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{customer.seoScore}%</span>
                      <Progress value={customer.seoScore} className="w-16 h-2" />
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{customer.lastActivity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
