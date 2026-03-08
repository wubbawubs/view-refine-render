import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface KPICardProps {
  label: string | ReactNode;
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
      className="relative overflow-hidden bg-card border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full group"
      onClick={onClick}
    >
      {/* Gradient top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[hsl(var(--kk-violet))] via-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))]"></div>
      
      <div className="p-4 lg:p-5 h-full flex flex-col justify-between">
        <div className="space-y-3">
          {/* Icon, label, and help */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-5 h-5 text-primary flex items-center justify-center">
                  {icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground leading-snug truncate">{label}</h3>
              </div>
            </div>
            
            {/* Help tooltip */}
            <Popover>
              <PopoverTrigger asChild>
                <button 
                  className="w-6 h-6 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center shrink-0 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent side="top" className="max-w-[220px] p-3">
                <p className="text-xs text-muted-foreground">{helpText}</p>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Value */}
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">{value}</div>
          </div>
          
          {/* Delta */}
          <div>
            <div className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all",
              deltaType === "up" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
              deltaType === "down" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
              deltaType === "neutral" && "bg-muted text-muted-foreground"
            )}>
              {deltaType === "up" && <ArrowUp className="w-3 h-3" />}
              {deltaType === "down" && <ArrowDown className="w-3 h-3" />}
              <span>{delta}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;