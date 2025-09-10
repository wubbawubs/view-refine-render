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
        "p-5 shadow-card transition-all duration-200 hover:shadow-elevated animate-fade-in cursor-pointer rounded-2xl border border-slate-200",
        onClick && "hover:shadow-elevated"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="p-2 rounded-lg bg-slate-100">
          <div className="w-4 h-4 text-[hsl(var(--kk-gray-700))]">
            {icon}
          </div>
        </span>
        <span className="text-kk-label text-[hsl(var(--kk-gray-500))]">{label}</span>
      </div>
      
      <div className="space-y-2">
        <div className="text-kk-kpi text-[hsl(var(--kk-eggplant))]">
          {value}
        </div>
        
        <div className="flex items-center gap-1 text-sm text-[hsl(var(--kk-success))]">
          {deltaType === "up" && <ArrowUp className="w-3 h-3" />}
          {deltaType === "down" && <ArrowDown className="w-3 h-3" />}
          {delta}
        </div>
        
        <div className="text-kk-caption text-[hsl(var(--kk-gray-500))] mt-1">
          {helpText}
        </div>
      </div>
    </Card>
  );
};

export default KPICard;