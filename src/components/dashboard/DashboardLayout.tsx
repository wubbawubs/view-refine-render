import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen premium-dashboard-bg">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      
      <div className={`fixed lg:block z-50 h-screen transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="relative h-full">
          <Sidebar />
          <Button variant="ghost" size="sm" className="absolute top-4 right-4 lg:hidden text-sidebar-foreground hover:bg-sidebar-accent z-10" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <main className="flex-1 lg:ml-64 px-3 sm:px-4 lg:px-8 py-4 sm:py-6 overflow-x-hidden overflow-y-auto relative z-10 w-full min-w-0">
        {/* Mobile menu button - accessible via context */}
        <div className="lg:hidden mb-3">
          <Button variant="ghost" size="sm" className="p-1.5" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-4 h-4" />
          </Button>
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
