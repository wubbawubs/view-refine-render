import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { 
  LayoutDashboard, 
  Settings, 
  User, 
  LogOut,
  Target,
  Lightbulb,
  HelpCircle,
  Shield,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ElementType;
  danger?: boolean;
  adminOnly?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Aanpassingen", path: "/aanpassingen", icon: Settings },
  { name: "SEO Plan", path: "/seo-plan", icon: Target },
  { name: "Content Ideeen", path: "/content-ideas", icon: Lightbulb },
  { name: "Help", path: "/help", icon: HelpCircle },
  { name: "Account", path: "/account", icon: User },
  { name: "Admin", path: "/admin", icon: Shield, adminOnly: true },
  { name: "Uitloggen", path: "/logout", icon: LogOut, danger: true },
];

const Sidebar = () => {
  const location = useLocation();
  const { theme } = useTheme();
  
  const logoSrc = theme === 'dark' ? '/klikklaar-logo-gradient.png' : '/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png';

  return (
    <div className="w-64 premium-sidebar-bg h-screen flex flex-col sticky top-0 border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3 h-14">
          <img 
            src={logoSrc}
            alt="KlikKlaar SEO Logo"
            className="h-16 w-auto"
          />
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