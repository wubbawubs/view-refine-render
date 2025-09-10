import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  label: string;
  value: string | number;
  delta: string;
  deltaType?: "up" | "down" | "neutral";
  helpText: string;
  onClick?: () => void;
  icon: ReactNode;
}

const KPICard = ({ 
  label, 
  value, 
  delta, 
  deltaType = "up", 
  helpText, 
  onClick,
  icon 
}: KPICardProps) => {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden bg-white/95 backdrop-blur-xl border border-slate-200/60",
        "shadow-[0_8px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)]",
        "transition-all duration-500 ease-out cursor-pointer rounded-3xl",
        "hover:-translate-y-2 hover:scale-[1.02]",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:via-transparent before:to-white/20 before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-transparent after:via-[hsl(var(--kk-violet))]/5 after:to-transparent after:opacity-0 after:transition-opacity after:duration-500",
        "hover:after:opacity-100"
      )}
      onClick={onClick}
    >
      {/* Premium top accent with animated gradient */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-kk-gradient opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-full"></div>
      
      {/* Floating glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--kk-violet))]/10 via-transparent to-[hsl(var(--kk-violet))]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative p-8">
        {/* Header with enhanced icon and label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-50 via-white to-slate-100/80 rounded-2xl flex items-center justify-center border border-slate-200/70 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
              <div className="w-6 h-6 text-[hsl(var(--kk-gray-700))] group-hover:text-[hsl(var(--kk-violet))] transition-all duration-500 group-hover:scale-110">
                {icon}
              </div>
            </div>
            {/* Premium glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-[hsl(var(--kk-violet))] opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl scale-150"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[hsl(var(--kk-gray-600))] uppercase tracking-wider group-hover:text-[hsl(var(--kk-gray-700))] transition-colors duration-300">
              {label}
            </h3>
          </div>
        </div>
        
        {/* Value section with improved spacing */}
        <div className="space-y-4">
          <div className="text-4xl font-bold text-[hsl(var(--kk-eggplant))] leading-none tracking-tight group-hover:text-[hsl(var(--kk-violet))] transition-colors duration-500">
            {value}
          </div>
          
          {/* Enhanced delta indicator */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 group-hover:scale-105",
            deltaType === "up" && "bg-gradient-to-r from-emerald-50 to-emerald-100/80 text-emerald-700 border border-emerald-200/60 shadow-sm",
            deltaType === "down" && "bg-gradient-to-r from-red-50 to-red-100/80 text-red-700 border border-red-200/60 shadow-sm",
            deltaType === "neutral" && "bg-gradient-to-r from-slate-50 to-slate-100/80 text-slate-700 border border-slate-200/60 shadow-sm"
          )}>
            {deltaType === "up" && <ArrowUp className="w-4 h-4" />}
            {deltaType === "down" && <ArrowDown className="w-4 h-4" />}
            <span>{delta}</span>
          </div>
          
          {/* Enhanced help text */}
          <p className="text-sm text-[hsl(var(--kk-gray-500))] leading-relaxed group-hover:text-[hsl(var(--kk-gray-600))] transition-colors duration-300">
            {helpText}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;