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
        "h-32 sm:h-36", // Fixed height for consistency
        "shadow-sm hover:shadow-md transition-all duration-300 ease-out cursor-pointer rounded-xl",
        "hover:scale-[1.02]"
      )}
      onClick={onClick}
    >
      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--kk-violet))]/3 via-transparent to-[hsl(var(--kk-violet))]/3 rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="relative p-3 sm:p-4 h-full flex flex-col">
        {/* Header with icon and label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[hsl(var(--kk-violet))]/10 to-[hsl(var(--kk-fuchsia))]/10 rounded-lg flex items-center justify-center border border-border/40">
              <div className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--kk-violet))] stroke-[1.5]">
                {icon}
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground/90 leading-tight line-clamp-1">
              {label}
            </h3>
          </div>
        </div>
        
        {/* Value and metrics section */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="text-lg sm:text-xl font-bold text-foreground leading-none mb-2">
            {value}
          </div>
          
          {/* Delta indicator */}
          <div className={cn(
            "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium self-start mb-2",
            (deltaType === "up" || deltaType === "neutral") && "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
            deltaType === "down" && "bg-red-50 text-red-700 border border-red-200/60"
          )}>
            {deltaType === "up" && <ArrowUp className="w-3 h-3 shrink-0 stroke-2" />}
            {deltaType === "down" && <ArrowDown className="w-3 h-3 shrink-0 stroke-2" />}
            <span className="truncate">{delta}</span>
          </div>
          
          {/* Help text */}
          <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-2">
            {helpText}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;