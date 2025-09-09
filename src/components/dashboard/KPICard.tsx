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
        "p-6 bg-white border-kk-gray-200 shadow-card transition-all duration-200 hover:shadow-elevated animate-fade-in",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-kk-gray-100 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 text-kk-gray-600">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="text-h1 text-foreground">
          {value}
        </div>
        
        <div className="text-small font-medium text-kk-gray-600">
          {label}
        </div>
        
        <div className="text-xs-custom text-kk-gray-500">
          {helpText}
        </div>
        
        <div className={cn(
          "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs-custom font-medium",
          deltaColors[deltaType]
        )}>
          {deltaType === "up" && <ArrowUp className="w-3 h-3" />}
          {deltaType === "down" && <ArrowDown className="w-3 h-3" />}
          {delta}
        </div>
      </div>
    </Card>
  );
};

export default KPICard;