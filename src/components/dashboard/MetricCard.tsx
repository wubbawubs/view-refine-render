import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  gradient?: "brand" | "growth" | "warning" | "neutral";
  className?: string;
}

const MetricCard = ({ 
  icon, 
  value, 
  label, 
  change, 
  trend = "neutral", 
  gradient = "neutral",
  className 
}: MetricCardProps) => {
  const gradientClasses = {
    brand: "bg-white border border-warning/20 shadow-enterprise",
    growth: "bg-white border border-success/20 shadow-enterprise", 
    warning: "bg-white border border-warning/20 shadow-enterprise",
    neutral: "bg-white border border-border shadow-enterprise"
  };

  const trendColors = {
    up: "text-growth bg-success/10",
    down: "text-destructive bg-destructive/10", 
    neutral: "text-muted-foreground bg-muted"
  };

  const iconColors = {
    brand: "bg-warning/10 text-warning",
    growth: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    neutral: "bg-muted text-muted-foreground"
  };

  return (
    <Card className={cn(
      "p-6 transition-all duration-200 hover:shadow-lg animate-fade-in",
      gradientClasses[gradient],
      className
    )}>
      <div className="flex items-start justify-between mb-6">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          iconColors[gradient]
        )}>
          <div className="w-6 h-6">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="text-2xl font-semibold text-foreground">
          {value}
        </div>
        
        <div className="text-sm font-medium text-muted-foreground">
          {label}
        </div>
        
        {change && (
          <div className={cn(
            "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
            trendColors[trend]
          )}>
            {trend === "up" && "↗"} {trend === "down" && "↘"} {change}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;