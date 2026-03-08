import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import CommandPalette, { CommandPaletteProvider, useCommandPalette } from "./CommandPalette";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayoutInner = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setOpen: setCommandOpen } = useCommandPalette();
  const location = useLocation();

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
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between mb-3">
          <Button variant="ghost" size="sm" className="p-1.5" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs text-muted-foreground gap-1.5 h-8"
            onClick={() => setCommandOpen(true)}
          >
            <Search className="w-3 h-3" />
            Zoeken...
          </Button>
        </div>

        {/* Desktop search trigger */}
        <div className="hidden lg:flex justify-end mb-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs text-muted-foreground gap-2 h-8 px-3"
            onClick={() => setCommandOpen(true)}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Zoeken...</span>
            <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Page content with transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Command Palette */}
      <CommandPalette />
    </div>
  );
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <CommandPaletteProvider>
      <DashboardLayoutInner>{children}</DashboardLayoutInner>
    </CommandPaletteProvider>
  );
};

export default DashboardLayout;
