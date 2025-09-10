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
        "min-h-44 w-full", // Flexible height that adjusts to content
        "shadow-sm hover:shadow-md transition-all duration-300 ease-out cursor-pointer rounded-xl",
        "hover:scale-[1.02]"
      )}
      onClick={onClick}
    >
      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--kk-violet))]/3 via-transparent to-[hsl(var(--kk-violet))]/3 rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="relative p-6 flex flex-col space-y-4">
        {/* Header with icon and label */}
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--kk-violet))]/10 to-[hsl(var(--kk-fuchsia))]/10 rounded-lg flex items-center justify-center border border-border/40">
              <div className="w-5 h-5 text-[hsl(var(--kk-violet))] stroke-[1.5] flex items-center justify-center">
                {icon}
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-foreground leading-tight">
              {label}
            </h3>
          </div>
        </div>
        
        {/* Main value - responsive sizing */}
        <div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-none">
            {value}
          </div>
        </div>
        
        {/* Delta indicator */}
        <div>
          <div className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium w-fit",
            (deltaType === "up" || deltaType === "neutral") && "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
            deltaType === "down" && "bg-red-50 text-red-700 border border-red-200/60"
          )}>
            {deltaType === "up" && <ArrowUp className="w-3 h-3 shrink-0 stroke-2" />}
            {deltaType === "down" && <ArrowDown className="w-3 h-3 shrink-0 stroke-2" />}
            <span className="whitespace-nowrap">{delta}</span>
          </div>
        </div>
        
        {/* Help text - with better spacing */}
        <div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {helpText}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;