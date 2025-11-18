import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const SEOPlan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const seoTasks = [
    {
      category: "Technische SEO",
      progress: 60,
      tasks: [
        { title: "Meta descriptions optimaliseren", status: "completed", priority: "high" },
        { title: "Alt-teksten toevoegen aan afbeeldingen", status: "in-progress", priority: "high" },
        { title: "Pagina snelheid verbeteren", status: "pending", priority: "medium" },
        { title: "Mobile responsiveness testen", status: "completed", priority: "high" },
      ]
    },
    {
      category: "Content Optimalisatie",
      progress: 40,
      tasks: [
        { title: "Keyword research uitvoeren", status: "completed", priority: "high" },
        { title: "Blog artikelen schrijven", status: "in-progress", priority: "medium" },
        { title: "Product beschrijvingen updaten", status: "pending", priority: "medium" },
        { title: "FAQ sectie uitbreiden", status: "pending", priority: "low" },
      ]
    },
    {
      category: "Link Building",
      progress: 25,
      tasks: [
        { title: "Backlink analyse", status: "completed", priority: "medium" },
        { title: "Gastblog mogelijkheden", status: "pending", priority: "medium" },
        { title: "Lokale directories", status: "pending", priority: "low" },
        { title: "Partner links opzetten", status: "pending", priority: "low" },
      ]
    }
  ];

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
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="premium-glass-card border-b border-border/40 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  SEO Plan
                </h1>
                <p className="text-sm text-muted-foreground">
                  Jouw gepersonaliseerde SEO roadmap
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="premium-glass-card border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Totale Voortgang</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">42%</div>
                <Progress value={42} className="mt-2" />
              </CardContent>
            </Card>
            <Card className="premium-glass-card border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Taken Voltooid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5/12</div>
                <p className="text-xs text-muted-foreground mt-2">7 taken te gaan</p>
              </CardContent>
            </Card>
            <Card className="premium-glass-card border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Hoge Prioriteit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-2">Aandacht vereist</p>
              </CardContent>
            </Card>
          </div>

          {/* SEO Tasks by Category */}
          <div className="space-y-6">
            {seoTasks.map((category) => (
              <Card key={category.category} className="premium-glass-card border-border/40">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{category.category}</CardTitle>
                      <CardDescription className="mt-1">
                        {category.progress}% voltooid
                      </CardDescription>
                    </div>
                    <Progress value={category.progress} className="w-32" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.tasks.map((task, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-lg border border-border/40 bg-card/50 hover:bg-card/80 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            task.status === 'completed' ? 'bg-green-500' :
                            task.status === 'in-progress' ? 'bg-yellow-500' :
                            'bg-gray-400'
                          }`} />
                          <div>
                            <p className="font-medium">{task.title}</p>
                            <div className="flex gap-2 mt-1">
                              <Badge variant={getStatusColor(task.status)} className="text-xs">
                                {getStatusText(task.status)}
                              </Badge>
                              <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                                {task.priority === 'high' ? 'Hoog' : task.priority === 'medium' ? 'Gemiddeld' : 'Laag'}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SEOPlan;
