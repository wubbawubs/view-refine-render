import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  HelpCircle, 
  Settings, 
  BarChart3, 
  CreditCard, 
  Package, 
  Sliders, 
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ElementType;
  danger?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Hulp", path: "/help", icon: HelpCircle },
  { name: "Aanpassingen", path: "/changes", icon: Settings },
  { name: "Website Analyse", path: "/analytics", icon: BarChart3 },
  { name: "Facturen", path: "/billing", icon: CreditCard },
  { name: "Pakket", path: "/package", icon: Package },
  { name: "Instellingen", path: "/settings", icon: Sliders },
  { name: "Uitloggen", path: "/logout", icon: LogOut, danger: true },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 premium-sidebar-bg min-h-screen flex flex-col relative z-20">
      {/* Logo */}
      <div className="p-5 border-b border-sidebar-border relative z-10">
        <div className="flex items-center gap-3 h-14">
          <div className="w-8 h-8 bg-kk-gradient rounded-lg flex items-center justify-center premium-glow-border shadow-lg">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">KlikKlaar</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 relative z-10">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors relative",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm border-l-2 border-[hsl(var(--kk-violet))]"
                  : item.danger
                  ? "text-destructive hover:bg-destructive/10"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;