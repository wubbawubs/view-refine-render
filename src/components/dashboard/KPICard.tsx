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
      className="p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {/* Icon and label */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center shrink-0">
          <div className="w-4 h-4 text-muted-foreground">
            {icon}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-foreground">{label}</h3>
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
    </Card>
  );
};

export default KPICard;