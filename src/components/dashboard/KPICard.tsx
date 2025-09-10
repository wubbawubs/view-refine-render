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
  const deltaColors = {
    up: "text-kk-success bg-kk-success/10",
    down: "text-kk-warning bg-kk-warning/10",
    neutral: "text-kk-gray-500 bg-kk-gray-100"
  };

  return (
    <Card 
      className={cn(
        "p-5 shadow-card transition-all duration-200 hover:shadow-elevated animate-fade-in cursor-pointer rounded-xl",
        onClick && "hover:shadow-elevated"
      )}
      onClick={onClick}
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="p-2 rounded-lg bg-kk-gray-100">
          <div className="w-4 h-4 text-kk-gray-700">
            {icon}
          </div>
        </span>
        <span className="text-kk-label font-medium text-kk-gray-500">{label}</span>
      </div>
      
      <div className="space-y-2">
        <div className="text-kk-kpi text-kk-eggplant">
          {value}
        </div>
        
        <div className={cn(
          "inline-flex items-center gap-1 px-2 py-1 rounded-full text-kk-caption font-medium",
          deltaColors[deltaType]
        )}>
          {deltaType === "up" && <ArrowUp className="w-3 h-3" />}
          {deltaType === "down" && <ArrowDown className="w-3 h-3" />}
          {delta}
        </div>
        
        <div className="text-kk-caption text-kk-gray-500 mt-1">
          {helpText}
        </div>
      </div>
    </Card>
  );
};

export default KPICard;