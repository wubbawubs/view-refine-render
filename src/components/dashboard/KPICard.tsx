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
        "group relative overflow-hidden bg-card/95 backdrop-blur-xl border border-border",
        "h-44 w-full", // Fixed height for consistent sizing
        "shadow-sm hover:shadow-md transition-all duration-300 ease-out cursor-pointer rounded-xl",
        "hover:scale-[1.02]"
      )}
      onClick={onClick}
    >
      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--kk-violet))]/3 via-transparent to-[hsl(var(--kk-violet))]/3 rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="relative p-5 flex flex-col justify-between h-full">
        {/* Header with icon and label */}
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-[hsl(var(--kk-violet))]/10 to-[hsl(var(--kk-fuchsia))]/10 rounded-lg flex items-center justify-center border border-border/40">
              <div className="w-4 h-4 text-[hsl(var(--kk-violet))] stroke-[1.5] flex items-center justify-center">
                {icon}
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-foreground leading-tight">
              {label}
            </h3>
          </div>
        </div>
        
        {/* Main value */}
        <div>
          <div className="text-2xl font-bold text-foreground leading-none">
            {value}
          </div>
        </div>
        
        {/* Delta indicator */}
        <div>
          <div className={cn(
            "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium w-fit",
            (deltaType === "up" || deltaType === "neutral") && "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
            deltaType === "down" && "bg-red-50 text-red-700 border border-red-200/60"
          )}>
            {deltaType === "up" && <ArrowUp className="w-3 h-3 shrink-0 stroke-2" />}
            {deltaType === "down" && <ArrowDown className="w-3 h-3 shrink-0 stroke-2" />}
            <span className="whitespace-nowrap">{delta}</span>
          </div>
        </div>
        
        {/* Help text - contained with proper spacing */}
        <div className="flex-1">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {helpText}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;