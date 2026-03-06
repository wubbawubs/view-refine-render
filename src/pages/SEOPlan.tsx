import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu, X, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSEOPlanCategories } from "@/hooks/useDashboardData";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import PageBanner from "@/components/ui/page-banner";
import { GradientCard } from "@/components/ui/gradient-card";

const SEOPlan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: seoCategories, isLoading } = useSEOPlanCategories();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "default";
      case "in-progress": return "secondary";
      case "pending": return "outline";
      default: return "outline";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Voltooid";
      case "in-progress": return "Bezig";
      case "pending": return "Te doen";
      default: return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="premium-glass-card border-b border-border/40 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-6">
          {/* Page Banner */}
          <div className="mb-6">
            <PageBanner
              label="SEO Plan"
              title="Jouw SEO Strategie"
              description="Een overzicht van alle SEO taken en voortgang. We werken stap voor stap aan het verbeteren van jouw zoekmachine positie."
              icon={<Target className="w-4 h-4 text-white" />}
            />
          </div>

          {isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
          ) : !seoCategories || seoCategories.length === 0 ? (
            <GradientCard>
              <CardContent className="pt-6">
                <EmptyState title="Geen SEO plan beschikbaar" description="Er zijn momenteel geen SEO taken om weer te geven." icon="database" />
              </CardContent>
            </GradientCard>
          ) : (
            <div className="space-y-6">
              {seoCategories.map((category, index) => (
                <GradientCard key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle>{category.category}</CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">{category.progress}%</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{task.title}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={getPriorityColor(task.priority)}>{task.priority}</Badge>
                            <Badge variant={getStatusColor(task.status)}>{getStatusText(task.status)}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </GradientCard>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SEOPlan;
