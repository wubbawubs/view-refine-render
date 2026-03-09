import { useState } from "react";
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  AlertTriangle,
  UserPlus,
  Activity,
  Eye,
  Edit3,
  Save,
  ExternalLink,
  Globe,
  Mail,
  Phone,
  Calendar,
  BarChart3,
  Settings,
  ChevronRight,
  Trash2,
  Send
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import EmailPreview from "@/components/email/EmailPreview";
import BulkMailDialog from "@/components/email/BulkMailDialog";
import CustomEmailComposer from "@/components/email/CustomEmailComposer";
import EmailHistory from "@/components/email/EmailHistory";
import ScheduledEmailsOverview from "@/components/email/ScheduledEmailsOverview";
import WeeklyMailCalendar from "@/components/email/WeeklyMailCalendar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Extended customer data type
interface CustomerData {
  id: number;
  name: string;
  status: "active" | "pending" | "inactive";
  seoScore: number;
  lastActivity: string;
  plan: "Starter" | "Pro" | "Enterprise";
  email: string;
  phone: string;
  website: string;
  startDate: string;
  totalOptimizations: number;
  rankingImprovement: number;
  topKeywords: string[];
  notes: string;
  autoOptimize: boolean;
  weeklyReports: boolean;
  prioritySupport: boolean;
  optimizations: {
    id: number;
    type: string;
    page: string;
    status: "pending" | "applied" | "rejected";
    impact: string;
    date: string;
  }[];
}

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

const initialCustomers: CustomerData[] = [
  { 
    id: 1, 
    name: "Bakkerij De Groot", 
    status: "active", 
    seoScore: 92, 
    lastActivity: "2 uur geleden", 
    plan: "Pro",
    email: "info@bakkerijdegroot.nl",
    phone: "+31 20 123 4567",
    website: "www.bakkerijdegroot.nl",
    startDate: "15 jan 2024",
    totalOptimizations: 47,
    rankingImprovement: 34,
    topKeywords: ["ambachtelijk brood", "verse croissants", "bakkerij amsterdam"],
    notes: "Klant is erg tevreden met de resultaten. Overweegt upgrade naar Enterprise.",
    autoOptimize: true,
    weeklyReports: true,
    prioritySupport: false,
    optimizations: [
      { id: 1, type: "Meta Title", page: "/producten", status: "applied", impact: "+12% CTR", date: "Vandaag" },
      { id: 2, type: "H1 Tag", page: "/over-ons", status: "pending", impact: "+5% ranking", date: "Gisteren" },
      { id: 3, type: "Alt Text", page: "/gallery", status: "applied", impact: "+8% images", date: "2 dagen" },
    ]
  },
  { 
    id: 2, 
    name: "Loodgieter Amsterdam", 
    status: "active", 
    seoScore: 85, 
    lastActivity: "5 uur geleden", 
    plan: "Starter",
    email: "contact@loodgieteramsterdam.nl",
    phone: "+31 20 234 5678",
    website: "www.loodgieteramsterdam.nl",
    startDate: "3 feb 2024",
    totalOptimizations: 23,
    rankingImprovement: 18,
    topKeywords: ["loodgieter amsterdam", "spoed loodgieter", "cv ketel storing"],
    notes: "Goede progressie. Focus op lokale SEO.",
    autoOptimize: true,
    weeklyReports: false,
    prioritySupport: false,
    optimizations: [
      { id: 1, type: "Schema Markup", page: "/", status: "applied", impact: "+15% rich results", date: "Vandaag" },
      { id: 2, type: "Content", page: "/diensten", status: "pending", impact: "+10% traffic", date: "Gisteren" },
    ]
  },
  { 
    id: 3, 
    name: "Restaurant Het Zonnetje", 
    status: "pending", 
    seoScore: 67, 
    lastActivity: "1 dag geleden", 
    plan: "Pro",
    email: "reserveren@hetzonnetje.nl",
    phone: "+31 20 345 6789",
    website: "www.hetzonnetje.nl",
    startDate: "20 dec 2023",
    totalOptimizations: 34,
    rankingImprovement: 12,
    topKeywords: ["restaurant amsterdam", "italiaans eten", "lunch amsterdam"],
    notes: "Website migratie nodig. Wacht op goedkeuring klant.",
    autoOptimize: false,
    weeklyReports: true,
    prioritySupport: true,
    optimizations: [
      { id: 1, type: "Meta Description", page: "/menu", status: "rejected", impact: "+8% CTR", date: "3 dagen" },
      { id: 2, type: "H2 Tags", page: "/", status: "pending", impact: "+6% structure", date: "1 week" },
    ]
  },
  { 
    id: 4, 
    name: "Kapsalon Stijl", 
    status: "active", 
    seoScore: 78, 
    lastActivity: "3 uur geleden", 
    plan: "Starter",
    email: "info@kapsalonstijl.nl",
    phone: "+31 20 456 7890",
    website: "www.kapsalonstijl.nl",
    startDate: "8 mrt 2024",
    totalOptimizations: 19,
    rankingImprovement: 22,
    topKeywords: ["kapper amsterdam", "balayage specialist", "haircut"],
    notes: "",
    autoOptimize: true,
    weeklyReports: true,
    prioritySupport: false,
    optimizations: [
      { id: 1, type: "Image Alt", page: "/portfolio", status: "applied", impact: "+20% image SEO", date: "Vandaag" },
    ]
  },
  { 
    id: 5, 
    name: "Garage Van Dijk", 
    status: "inactive", 
    seoScore: 54, 
    lastActivity: "5 dagen geleden", 
    plan: "Starter",
    email: "service@garagevandijk.nl",
    phone: "+31 20 567 8901",
    website: "www.garagevandijk.nl",
    startDate: "1 nov 2023",
    totalOptimizations: 8,
    rankingImprovement: -3,
    topKeywords: ["autogarage", "apk keuring", "auto reparatie"],
    notes: "Klant reageert niet op e-mails. Follow-up nodig.",
    autoOptimize: false,
    weeklyReports: false,
    prioritySupport: false,
    optimizations: []
  },
  { 
    id: 6, 
    name: "Bloemenwinkel Flora", 
    status: "active", 
    seoScore: 88, 
    lastActivity: "1 uur geleden", 
    plan: "Pro",
    email: "bloemen@florawinkel.nl",
    phone: "+31 20 678 9012",
    website: "www.florawinkel.nl",
    startDate: "12 jan 2024",
    totalOptimizations: 52,
    rankingImprovement: 41,
    topKeywords: ["bloemen bezorgen", "bruidsboeket", "rouwbloemen"],
    notes: "Uitstekende resultaten. Case study kandidaat.",
    autoOptimize: true,
    weeklyReports: true,
    prioritySupport: true,
    optimizations: [
      { id: 1, type: "Content", page: "/blog", status: "applied", impact: "+25% organic", date: "Vandaag" },
      { id: 2, type: "Internal Links", page: "/", status: "applied", impact: "+15% pageviews", date: "Gisteren" },
    ]
  },
  { 
    id: 7, 
    name: "Advocatenkantoor Peters", 
    status: "active", 
    seoScore: 91, 
    lastActivity: "30 min geleden", 
    plan: "Enterprise",
    email: "info@petersadvocaten.nl",
    phone: "+31 20 789 0123",
    website: "www.petersadvocaten.nl",
    startDate: "5 sep 2023",
    totalOptimizations: 89,
    rankingImprovement: 56,
    topKeywords: ["advocaat amsterdam", "arbeidsrecht", "bedrijfsjurist"],
    notes: "Enterprise klant. Maandelijkse strategy calls.",
    autoOptimize: true,
    weeklyReports: true,
    prioritySupport: true,
    optimizations: [
      { id: 1, type: "Schema Markup", page: "/team", status: "applied", impact: "+30% SERP", date: "Vandaag" },
      { id: 2, type: "FAQ Content", page: "/faq", status: "pending", impact: "+20% featured", date: "Vandaag" },
      { id: 3, type: "Meta Title", page: "/diensten/arbeidsrecht", status: "applied", impact: "+18% CTR", date: "Gisteren" },
    ]
  },
  { 
    id: 8, 
    name: "Tandarts Smile", 
    status: "pending", 
    seoScore: 72, 
    lastActivity: "2 dagen geleden", 
    plan: "Pro",
    email: "afspraken@tandarts-smile.nl",
    phone: "+31 20 890 1234",
    website: "www.tandarts-smile.nl",
    startDate: "28 feb 2024",
    totalOptimizations: 15,
    rankingImprovement: 9,
    topKeywords: ["tandarts amsterdam", "implantaten", "orthodontist"],
    notes: "Nieuwe klant. Onboarding fase.",
    autoOptimize: false,
    weeklyReports: true,
    prioritySupport: false,
    optimizations: [
      { id: 1, type: "Local SEO", page: "/contact", status: "pending", impact: "+35% local", date: "Vandaag" },
    ]
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">Actief</Badge>;
    case "pending":
      return <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-0">In afwachting</Badge>;
    case "inactive":
      return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-0">Inactief</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getPlanBadge = (plan: string) => {
  switch (plan) {
    case "Enterprise":
      return <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-0">{plan}</Badge>;
    case "Pro":
      return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0">{plan}</Badge>;
    default:
      return <Badge variant="outline">{plan}</Badge>;
  }
};

const getOptimizationStatusBadge = (status: string) => {
  switch (status) {
    case "applied":
      return <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">Toegepast</Badge>;
    case "pending":
      return <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-0">In afwachting</Badge>;
    case "rejected":
      return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-0">Afgewezen</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const Admin = () => {
  
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerData | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [customers, setCustomers] = useState<CustomerData[]>(initialCustomers);
  const [editedCustomer, setEditedCustomer] = useState<CustomerData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("klanten");
  const [bulkMailOpen, setBulkMailOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<CustomerData | null>(null);

  const handleCustomerClick = (customer: CustomerData) => {
    setSelectedCustomer(customer);
    setEditedCustomer({ ...customer });
    setSheetOpen(true);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (editedCustomer) {
      setCustomers(prev => prev.map(c => c.id === editedCustomer.id ? editedCustomer : c));
      setSelectedCustomer(editedCustomer);
      setIsEditing(false);
      toast.success("Klantgegevens opgeslagen", {
        description: `${editedCustomer.name} is succesvol bijgewerkt.`
      });
    }
  };

  const handleOptimizationAction = (optId: number, action: "apply" | "reject") => {
    if (editedCustomer) {
      const updated = {
        ...editedCustomer,
        optimizations: editedCustomer.optimizations.map(opt => 
          opt.id === optId ? { ...opt, status: action === "apply" ? "applied" : "rejected" } as typeof opt : opt
        )
      };
      setEditedCustomer(updated);
      setCustomers(prev => prev.map(c => c.id === updated.id ? updated : c));
      setSelectedCustomer(updated);
      toast.success(action === "apply" ? "Optimalisatie toegepast" : "Optimalisatie afgewezen");
    }
  };

  const handleDeleteCustomer = (customer: CustomerData) => {
    setCustomerToDelete(customer);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (customerToDelete) {
      setCustomers(prev => prev.filter(c => c.id !== customerToDelete.id));
      setSheetOpen(false);
      setDeleteDialogOpen(false);
      toast.success("Klant verwijderd", {
        description: `${customerToDelete.name} is verwijderd uit het systeem.`
      });
      setCustomerToDelete(null);
    }
  };

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Klant overzicht en statistieken</p>
            </div>
          </div>
          
          <div className="flex gap-2 items-center">
            <Button 
              size="sm" 
              className="bg-kk-gradient text-white hover:opacity-90"
              onClick={() => setBulkMailOpen(true)}
            >
              <Send className="w-4 h-4 mr-2" />
              Bulk E-mail
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="h-10">
            <TabsTrigger value="klanten" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              Klanten
            </TabsTrigger>
            <TabsTrigger value="mailing" className="text-sm">
              <Mail className="w-4 h-4 mr-1" />
              Mailing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="klanten">

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-card border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Totaal Klanten</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.totalCustomers}</div>
            <div className="flex items-center gap-1 mt-1 text-sm text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="w-3 h-3" />
              <span>+{adminStats.newCustomersThisWeek} deze week</span>
            </div>
          </Card>

          <Card className="p-4 bg-card border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Nieuwe Klanten</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.newCustomersThisWeek}</div>
            <div className="text-sm text-muted-foreground mt-1">Deze week</div>
          </Card>

          <Card className="p-4 bg-card border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Gem. SEO Score</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.avgSeoScore}%</div>
            <Progress value={adminStats.avgSeoScore} className="mt-2 h-2" />
          </Card>

          <Card className="p-4 bg-card border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Optimalisaties</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{adminStats.totalOptimizations.toLocaleString()}</div>
            <div className="flex items-center gap-1 mt-1 text-sm text-emerald-600 dark:text-emerald-400">
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
            <p className="text-sm text-muted-foreground">Klik op een klant voor details</p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bedrijf</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>SEO Score</TableHead>
                <TableHead>Laatste Activiteit</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow 
                  key={customer.id} 
                  className="cursor-pointer hover:bg-muted/50 group"
                  onClick={() => handleCustomerClick(customer)}
                >
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
                  <TableCell>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
          </TabsContent>

          <TabsContent value="mailing">
            <div className="space-y-6">
              {/* Sub-tabs for mailing */}
              <Tabs defaultValue="templates" className="space-y-4">
                <TabsList className="h-9">
                  <TabsTrigger value="templates" className="text-xs">📧 Templates</TabsTrigger>
                  <TabsTrigger value="custom" className="text-xs">✉️ Custom Mail</TabsTrigger>
                  <TabsTrigger value="scheduled" className="text-xs">📅 Gepland</TabsTrigger>
                  <TabsTrigger value="history" className="text-xs">📋 Geschiedenis</TabsTrigger>
                </TabsList>

                <TabsContent value="templates">
                  <Card className="p-6 bg-card border border-border">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Mail className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
                          E-mail Templates & Preview
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bekijk en verstuur bestaande e-mail templates naar klanten
                        </p>
                      </div>
                      <Button 
                        className="bg-kk-gradient text-white hover:opacity-90"
                        onClick={() => setBulkMailOpen(true)}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Bulk versturen
                      </Button>
                    </div>
                    <EmailPreview />
                  </Card>
                </TabsContent>

                <TabsContent value="custom">
                  <Card className="p-6 bg-card border border-border">
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        ✉️ Custom E-mail Schrijven
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Schrijf een eigen bericht en verstuur het naar geselecteerde klanten
                      </p>
                    </div>
                    <CustomEmailComposer 
                      customers={customers.map(c => ({ id: c.id, name: c.name, email: c.email, status: c.status }))}
                    />
                  </Card>
                </TabsContent>

                <TabsContent value="scheduled">
                  <ScheduledEmailsOverview />
                </TabsContent>

                <TabsContent value="history">
                  <EmailHistory />
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>
        </Tabs>
      

      {/* Bulk Mail Dialog */}
      <BulkMailDialog 
        customers={customers.map(c => ({ id: c.id, name: c.name, email: c.email, status: c.status, plan: c.plan }))}
        open={bulkMailOpen}
        onOpenChange={setBulkMailOpen}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Klant verwijderen?</AlertDialogTitle>
            <AlertDialogDescription>
              Weet je zeker dat je <strong>{customerToDelete?.name}</strong> wilt verwijderen? 
              Dit kan niet ongedaan worden gemaakt.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuleren</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Verwijderen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Customer Detail Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          {selectedCustomer && editedCustomer && (
            <>
              <SheetHeader className="pb-4 border-b border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <SheetTitle className="text-xl">{selectedCustomer.name}</SheetTitle>
                    <SheetDescription className="flex items-center gap-2 mt-1">
                      {getStatusBadge(selectedCustomer.status)}
                      {getPlanBadge(selectedCustomer.plan)}
                    </SheetDescription>
                  </div>
                  <div className="flex gap-2">
                  <Button 
                    variant={isEditing ? "default" : "outline"} 
                    size="sm"
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  >
                    {isEditing ? (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Opslaan
                      </>
                    ) : (
                      <>
                        <Edit3 className="w-4 h-4 mr-2" />
                        Bewerken
                      </>
                    )}
                  </Button>
                  </div>
                </div>
              </SheetHeader>

              <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overzicht</TabsTrigger>
                  <TabsTrigger value="optimizations">Optimalisaties</TabsTrigger>
                  <TabsTrigger value="settings">Instellingen</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/30 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">SEO Score</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground">{selectedCustomer.seoScore}%</div>
                      <Progress value={selectedCustomer.seoScore} className="mt-2 h-1.5" />
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-muted-foreground">Ranking</span>
                      </div>
                      <div className={`text-2xl font-bold ${selectedCustomer.rankingImprovement >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                        {selectedCustomer.rankingImprovement >= 0 ? '+' : ''}{selectedCustomer.rankingImprovement}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">posities gemiddeld</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Contactgegevens</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        {isEditing ? (
                          <Input 
                            value={editedCustomer.email}
                            onChange={(e) => setEditedCustomer({...editedCustomer, email: e.target.value})}
                            className="flex-1"
                          />
                        ) : (
                          <span className="text-sm">{selectedCustomer.email}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        {isEditing ? (
                          <Input 
                            value={editedCustomer.phone}
                            onChange={(e) => setEditedCustomer({...editedCustomer, phone: e.target.value})}
                            className="flex-1"
                          />
                        ) : (
                          <span className="text-sm">{selectedCustomer.phone}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        {isEditing ? (
                          <Input 
                            value={editedCustomer.website}
                            onChange={(e) => setEditedCustomer({...editedCustomer, website: e.target.value})}
                            className="flex-1"
                          />
                        ) : (
                          <a href={`https://${selectedCustomer.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                            {selectedCustomer.website}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Klant sinds: {selectedCustomer.startDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Top Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCustomer.topKeywords.map((keyword, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Notities</h4>
                    {isEditing ? (
                      <Textarea 
                        value={editedCustomer.notes}
                        onChange={(e) => setEditedCustomer({...editedCustomer, notes: e.target.value})}
                        placeholder="Voeg notities toe..."
                        rows={3}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {selectedCustomer.notes || "Geen notities"}
                      </p>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="optimizations" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">Recente Optimalisaties</h4>
                      <Badge variant="secondary">{selectedCustomer.totalOptimizations} totaal</Badge>
                    </div>

                    {editedCustomer.optimizations.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Settings className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>Geen optimalisaties beschikbaar</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {editedCustomer.optimizations.map((opt) => (
                          <div key={opt.id} className="p-4 rounded-xl bg-muted/30 border border-border">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <span className="font-medium text-foreground">{opt.type}</span>
                                <p className="text-xs text-muted-foreground">{opt.page}</p>
                              </div>
                              {getOptimizationStatusBadge(opt.status)}
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{opt.impact}</span>
                                <span className="text-xs text-muted-foreground">• {opt.date}</span>
                              </div>
                              {opt.status === "pending" && (
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="h-7 text-xs"
                                    onClick={() => handleOptimizationAction(opt.id, "reject")}
                                  >
                                    Afwijzen
                                  </Button>
                                  <Button 
                                    size="sm"
                                    className="h-7 text-xs"
                                    onClick={() => handleOptimizationAction(opt.id, "apply")}
                                  >
                                    Toepassen
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="mt-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Account Instellingen</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-sm font-medium">Status</Label>
                            <p className="text-xs text-muted-foreground">Huidige account status</p>
                          </div>
                          {isEditing ? (
                            <Select 
                              value={editedCustomer.status} 
                              onValueChange={(value: "active" | "pending" | "inactive") => setEditedCustomer({...editedCustomer, status: value})}
                            >
                              <SelectTrigger className="w-[140px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Actief</SelectItem>
                                <SelectItem value="pending">In afwachting</SelectItem>
                                <SelectItem value="inactive">Inactief</SelectItem>
                              </SelectContent>
                            </Select>
                          ) : (
                            getStatusBadge(selectedCustomer.status)
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-sm font-medium">Plan</Label>
                            <p className="text-xs text-muted-foreground">Abonnement type</p>
                          </div>
                          {isEditing ? (
                            <Select 
                              value={editedCustomer.plan} 
                              onValueChange={(value: "Starter" | "Pro" | "Enterprise") => setEditedCustomer({...editedCustomer, plan: value})}
                            >
                              <SelectTrigger className="w-[140px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Starter">Starter</SelectItem>
                                <SelectItem value="Pro">Pro</SelectItem>
                                <SelectItem value="Enterprise">Enterprise</SelectItem>
                              </SelectContent>
                            </Select>
                          ) : (
                            getPlanBadge(selectedCustomer.plan)
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground">Automatisering</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-sm font-medium">Auto-optimalisatie</Label>
                            <p className="text-xs text-muted-foreground">Automatisch SEO verbeteringen toepassen</p>
                          </div>
                          <Switch 
                            checked={editedCustomer.autoOptimize}
                            onCheckedChange={(checked) => setEditedCustomer({...editedCustomer, autoOptimize: checked})}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-sm font-medium">Wekelijkse Rapporten</Label>
                            <p className="text-xs text-muted-foreground">E-mail rapporten versturen</p>
                          </div>
                          <Switch 
                            checked={editedCustomer.weeklyReports}
                            onCheckedChange={(checked) => setEditedCustomer({...editedCustomer, weeklyReports: checked})}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-sm font-medium">Priority Support</Label>
                            <p className="text-xs text-muted-foreground">Voorrang bij support tickets</p>
                          </div>
                          <Switch 
                            checked={editedCustomer.prioritySupport}
                            onCheckedChange={(checked) => setEditedCustomer({...editedCustomer, prioritySupport: checked})}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="space-y-4 pt-4 border-t border-destructive/20">
                      <h4 className="font-semibold text-destructive">Gevarenzone</h4>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                        <div>
                          <p className="text-sm font-medium text-foreground">Klant verwijderen</p>
                          <p className="text-xs text-muted-foreground">Dit verwijdert alle data permanent</p>
                        </div>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteCustomer(selectedCustomer)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Verwijderen
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </SheetContent>
      </Sheet>
    </DashboardLayout>
  );
};

export default Admin;
