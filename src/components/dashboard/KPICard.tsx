import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Sparkline from "./Sparkline";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface KPICardProps {
  label: string;
  value: string | number;
  delta: string;
  deltaType?: "up" | "down" | "neutral";
  helpText: string;
  onClick?: () => void;
  icon: ReactNode;
  sparklineData?: number[];
  compact?: boolean;
}

const KPICard = ({ 
  label, 
  value, 
  delta, 
  deltaType = "up", 
  helpText, 
  onClick,
  icon,
  sparklineData,
  compact = false
}: KPICardProps) => {
  return (
    <TooltipProvider>
      <Card 
        className={cn(
          "group relative overflow-hidden bg-card/95 backdrop-blur-xl border border-border",
          compact 
            ? "shadow-sm hover:shadow-md transition-all duration-200 rounded-xl p-4"
            : "shadow-[0_8px_32px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out cursor-pointer rounded-3xl hover:-translate-y-2 hover:scale-[1.02]",
          !compact && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-background/50 before:via-transparent before:to-background/20 before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
          !compact && "after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-transparent after:via-[hsl(var(--kk-violet))]/5 after:to-transparent after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100"
        )}
        onClick={onClick}
      >
        {!compact && (
          <>
            {/* Premium top accent with animated gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-kk-gradient opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
            
            {/* Full-width gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--kk-violet))]/3 via-transparent to-[hsl(var(--kk-fuchsia))]/3 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Floating glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--kk-violet))]/10 via-transparent to-[hsl(var(--kk-violet))]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </>
        )}
        
        <div className={cn("relative", compact ? "space-y-3" : "p-8")}>
          {/* Header with enhanced icon and label */}
          <div className={cn(
            "flex items-center justify-between",
            compact ? "mb-2" : "gap-4 mb-8"
          )}>
            <div className="flex items-center gap-2">
              <div className={cn(
                "bg-gradient-to-br from-muted via-background to-muted/80 rounded-lg flex items-center justify-center border border-border",
                compact ? "w-8 h-8" : "w-12 h-12 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
              )}>
                <div className={cn(
                  "text-muted-foreground transition-all duration-500",
                  compact ? "w-4 h-4" : "w-6 h-6 group-hover:text-[hsl(var(--kk-violet))] group-hover:scale-110"
                )}>
                  {icon}
                </div>
              </div>
              <h3 className={cn(
                "font-semibold text-foreground transition-colors duration-300",
                compact ? "text-xs" : "text-sm uppercase tracking-wider group-hover:text-[hsl(var(--kk-violet))]"
              )}>
                {label}
              </h3>
              {compact && (
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-3 h-3 text-muted-foreground hover:text-foreground transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-48">{helpText}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
            
            {compact && sparklineData && (
              <Sparkline data={sparklineData} trend={deltaType} />
            )}
          </div>
          
          {/* Value section */}
          <div className={cn("space-y-2", compact ? "space-y-1" : "space-y-4")}>
            <div className={cn(
              "font-bold text-foreground leading-none tracking-tight transition-colors duration-500",
              compact ? "text-xl" : "text-4xl group-hover:text-[hsl(var(--kk-violet))]"
            )}>
              {value}
            </div>
            
            {/* Delta indicator */}
            <div className={cn(
              "inline-flex items-center gap-1 rounded-full font-medium transition-all duration-300",
              compact 
                ? "px-2 py-1 text-xs" 
                : "px-4 py-2 text-sm font-semibold group-hover:scale-105",
              (deltaType === "up" || deltaType === "neutral") && "bg-gradient-to-r from-emerald-50 to-emerald-100/80 text-emerald-700 border border-emerald-200/60 shadow-sm",
              deltaType === "down" && "bg-gradient-to-r from-red-50 to-red-100/80 text-red-700 border border-red-200/60 shadow-sm"
            )}>
              {deltaType === "up" && <ArrowUp className={compact ? "w-3 h-3" : "w-4 h-4"} />}
              {deltaType === "down" && <ArrowDown className={compact ? "w-3 h-3" : "w-4 h-4"} />}
              <span>{delta}</span>
            </div>
            
            {/* Help text - only show in non-compact mode */}
            {!compact && (
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {helpText}
              </p>
            )}
          </div>
        </div>
      </Card>
    </TooltipProvider>
  );
};

export default KPICard;