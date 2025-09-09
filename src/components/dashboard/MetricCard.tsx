import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  gradient?: "brand" | "success" | "warning" | "neutral";
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
    brand: "gradient-brand shadow-brand",
    success: "bg-success text-success-foreground shadow-md", 
    warning: "bg-warning text-warning-foreground shadow-orange",
    neutral: "bg-card border border-border shadow-md"
  };

  const trendColors = {
    up: "text-green-600 bg-green-50",
    down: "text-red-600 bg-red-50", 
    neutral: "text-gray-600 bg-gray-50"
  };

  return (
    <Card className={cn(
      "p-6 border transition-all duration-200 hover:shadow-lg animate-fade-in",
      gradientClasses[gradient],
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          gradient === "neutral" ? "bg-accent" : "bg-white/20"
        )}>
          <div className={cn(
            "w-6 h-6",
            gradient === "neutral" ? "text-accent-foreground" : "text-white"
          )}>
            {icon}
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className={cn(
          "text-3xl font-bold",
          gradient === "neutral" ? "text-gray-900" : "text-white"
        )}>
          {value}
        </div>
        
        <div className={cn(
          "text-sm font-medium",
          gradient === "neutral" ? "text-muted-foreground" : "text-white/90"
        )}>
          {label}
        </div>
        
        {change && (
          <div className={cn(
            "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
            gradient === "neutral" ? trendColors[trend] : "bg-white/20 text-white"
          )}>
            {trend === "up" && "↗"} {trend === "down" && "↘"} {change}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;