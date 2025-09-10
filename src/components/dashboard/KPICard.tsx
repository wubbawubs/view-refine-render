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
      className="relative overflow-hidden bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={onClick}
    >
      {/* Gradient top bar for branding */}
      <div className="h-1 w-full bg-kk-gradient"></div>
      
      <div className="p-4">
        {/* Icon and label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--kk-violet))]/10 to-[hsl(var(--kk-fuchsia))]/10 rounded-xl flex items-center justify-center border border-[hsl(var(--kk-violet))]/20 shrink-0">
            <div className="w-5 h-5 text-[hsl(var(--kk-violet))] flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-foreground leading-snug">{label}</h3>
          </div>
        </div>
        
        {/* Value */}
        <div className="mb-3">
          <div className="text-2xl font-bold text-foreground">{value}</div>
        </div>
        
        {/* Delta */}
        <div className="mb-3">
          <div className={cn(
            "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
            deltaType === "up" && "bg-emerald-50 text-emerald-600 border border-emerald-100",
            deltaType === "down" && "bg-red-50 text-red-600 border border-red-100",
            deltaType === "neutral" && "bg-gray-50 text-gray-600 border border-gray-100"
          )}>
            {deltaType === "up" && <ArrowUp className="w-3 h-3" />}
            {deltaType === "down" && <ArrowDown className="w-3 h-3" />}
            <span>{delta}</span>
          </div>
        </div>
        
        {/* Help text */}
        <div>
          <p className="text-xs text-muted-foreground leading-relaxed">{helpText}</p>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;