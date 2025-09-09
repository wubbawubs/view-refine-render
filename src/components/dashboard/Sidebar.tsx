import { useState } from "react";
import { 
  LayoutDashboard, 
  HelpCircle, 
  Settings, 
  BarChart3, 
  CreditCard, 
  Package, 
  Sliders, 
  LogOut,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: HelpCircle, label: "Hulp" },
  { icon: Settings, label: "Aanpassingen" },
  { icon: BarChart3, label: "Website Analyse" },
  { icon: CreditCard, label: "Factuureen" },
  { icon: Package, label: "Pakket" },
  { icon: Sliders, label: "Instellingen" },
  { icon: LogOut, label: "Uitloggen", danger: true },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="w-64 bg-white border-r border-border h-screen flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center shadow-brand">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            KlikKlaar
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group",
                isActive 
                  ? "gradient-brand text-white shadow-brand" 
                  : item.danger
                  ? "hover:bg-red-50 text-red-600 hover:text-red-700"
                  : "hover:bg-accent text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-transform duration-200 group-hover:scale-110",
                isActive && "text-white"
              )} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;