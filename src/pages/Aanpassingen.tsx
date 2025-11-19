import { Menu, X, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useSEOOptimizations } from "@/hooks/useDashboardData";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";

const Aanpassingen = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: seoOptimizations, isLoading } = useSEOOptimizations();

  const texts = {
    nl: {
      title: 'Aanpassingen',
      subtitle: 'Bekijk en beheer alle automatische AI-gedreven SEO optimalisaties',
      language: 'Taal',
      noData: 'Geen data beschikbaar',
      noDataDesc: 'Er zijn momenteel geen SEO optimalisaties om weer te geven.',
    },
    en: {
      title: 'Adjustments',
      subtitle: 'View and manage all automatic AI-driven SEO optimizations',
      language: 'Language',
      noData: 'No data available',
      noDataDesc: 'There are currently no SEO optimizations to display.',
    }
  };

  const t = texts[language];

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
      
      <main className="flex-1 px-3 sm:px-4 lg:px-8 py-4 sm:py-6 overflow-x-hidden overflow-y-auto relative z-10 w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 lg:mb-8 pb-3 sm:pb-4 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden shrink-0 p-1.5"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            
            <div className="min-w-0 flex-1">
              <h1 className="text-xl lg:text-kk-h1 text-foreground mb-1 truncate">
                {t.title}
              </h1>
              <p className="text-sm lg:text-kk-label text-muted-foreground truncate">
                {t.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 items-center shrink-0">
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

        {/* Content */}
        {isLoading ? (
          <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
            <div className="space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          </Card>
        ) : !seoOptimizations || seoOptimizations.length === 0 ? (
          <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
            <EmptyState
              title={t.noData}
              description={t.noDataDesc}
              icon="database"
            />
          </Card>
        ) : (
          <div className="space-y-4">
            {seoOptimizations.map((opt, index) => (
              <Card key={index} className="p-6 shadow-card animate-fade-in rounded-2xl border border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {opt.type.toUpperCase()} - {opt.page}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Original:</span> {opt.original}
                      </p>
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Optimized:</span> {opt.optimized}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    opt.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    opt.status === 'active' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                  }`}>
                    {opt.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Aanpassingen;
