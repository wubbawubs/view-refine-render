import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  HelpCircle, 
  Settings, 
  FileSearch, 
  Info, 
  User, 
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
  { name: "Aanpassingen", path: "/aanpassingen", icon: Settings },
  { name: "Audit", path: "/audit", icon: FileSearch },
  { name: "Informatie", path: "/informatie", icon: Info },
  { name: "Hulp", path: "/hulp", icon: HelpCircle },
  { name: "Account", path: "/account", icon: User },
  { name: "Uitloggen", path: "/logout", icon: LogOut, danger: true },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 premium-sidebar-bg h-screen flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3 h-14">
          <div className="w-8 h-8 bg-kk-gradient rounded-lg flex items-center justify-center premium-glow-border shadow-lg">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">KlikKlaar</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 relative block",
                isActive
                  ? "bg-kk-gradient-muted text-foreground shadow-lg border-l-2 border-white/20"
                  : item.danger
                  ? "text-destructive hover:bg-gradient-to-r hover:from-destructive/10 hover:to-destructive/5"
                  : "text-sidebar-foreground hover:bg-gradient-to-r hover:from-sidebar-accent/70 hover:to-sidebar-accent/30"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;