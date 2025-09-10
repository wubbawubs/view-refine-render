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
        "group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-white/20 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer rounded-2xl",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:pointer-events-none",
        onClick && "hover:shadow-elevated hover:-translate-y-1"
      )}
      onClick={onClick}
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-kk-gradient opacity-60"></div>
      
      <div className="relative p-6">
        {/* Header with icon and label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center border border-slate-200/50 shadow-sm">
              <div className="w-5 h-5 text-[hsl(var(--kk-gray-700))] group-hover:text-[hsl(var(--kk-violet))] transition-colors duration-300">
                {icon}
              </div>
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-xl bg-[hsl(var(--kk-violet))] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md"></div>
          </div>
          <div>
            <h3 className="text-kk-label font-medium text-[hsl(var(--kk-gray-600))] uppercase tracking-wide">
              {label}
            </h3>
          </div>
        </div>
        
        {/* Value section */}
        <div className="space-y-3">
          <div className="text-kk-kpi font-bold text-[hsl(var(--kk-eggplant))] leading-none">
            {value}
          </div>
          
          {/* Delta indicator */}
          <div className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold",
            deltaType === "up" && "bg-emerald-50 text-emerald-700 border border-emerald-200",
            deltaType === "down" && "bg-red-50 text-red-700 border border-red-200",
            deltaType === "neutral" && "bg-slate-50 text-slate-700 border border-slate-200"
          )}>
            {deltaType === "up" && <ArrowUp className="w-3 h-3" />}
            {deltaType === "down" && <ArrowDown className="w-3 h-3" />}
            <span>{delta}</span>
          </div>
          
          {/* Help text */}
          <p className="text-kk-caption text-[hsl(var(--kk-gray-500))] leading-relaxed">
            {helpText}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;