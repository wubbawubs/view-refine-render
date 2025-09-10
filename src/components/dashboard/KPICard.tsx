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
        "shadow-sm lg:shadow-[0_8px_32px_rgba(15,23,42,0.08)] dark:lg:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "hover:shadow-md lg:hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)] dark:lg:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]",
        "transition-all duration-300 lg:duration-500 ease-out cursor-pointer rounded-xl lg:rounded-3xl",
        "hover:scale-[1.01] lg:hover:-translate-y-2 lg:hover:scale-[1.02]",
        // Mobile-first: simpler effects on mobile, premium on desktop
        "lg:before:absolute lg:before:inset-0 lg:before:bg-gradient-to-br lg:before:from-background/50 lg:before:via-transparent lg:before:to-background/20 lg:before:pointer-events-none lg:before:opacity-0 lg:before:transition-opacity lg:before:duration-500",
        "lg:hover:before:opacity-100",
        "lg:after:absolute lg:after:inset-0 lg:after:rounded-3xl lg:after:bg-gradient-to-r lg:after:from-transparent lg:after:via-[hsl(var(--kk-violet))]/5 lg:after:to-transparent lg:after:opacity-0 lg:after:transition-opacity lg:after:duration-500",
        "lg:hover:after:opacity-100"
      )}
      onClick={onClick}
    >
      {/* Premium top accent - hidden on mobile */}
      <div className="hidden lg:block absolute top-0 left-0 right-0 h-1 bg-kk-gradient opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
      
      {/* Simplified background for mobile, premium for desktop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--kk-violet))]/2 lg:from-[hsl(var(--kk-violet))]/3 via-transparent to-[hsl(var(--kk-violet))]/2 lg:to-[hsl(var(--kk-fuchsia))]/3 rounded-xl lg:rounded-3xl opacity-40 lg:opacity-60 lg:group-hover:opacity-80 transition-opacity duration-300 lg:duration-500"></div>
      
      {/* Floating glow effect - desktop only */}
      <div className="hidden lg:block absolute -inset-1 bg-gradient-to-r from-[hsl(var(--kk-violet))]/10 via-transparent to-[hsl(var(--kk-violet))]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative p-4 lg:p-8">
        {/* Responsive header */}
        <div className="flex items-center gap-2 lg:gap-4 mb-3 lg:mb-8">
          <div className="relative">
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-muted via-background to-muted/80 rounded-lg lg:rounded-2xl flex items-center justify-center border border-border shadow-sm lg:shadow-lg lg:group-hover:shadow-xl transition-all duration-300 lg:duration-500 lg:group-hover:scale-110">
              <div className="w-4 h-4 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-[hsl(var(--kk-violet))] transition-all duration-300 lg:duration-500 lg:group-hover:scale-110">
                {icon}
              </div>
            </div>
            {/* Premium glow effect - desktop only */}
            <div className="hidden lg:block absolute inset-0 rounded-2xl bg-[hsl(var(--kk-violet))] opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl scale-150"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs lg:text-sm font-semibold text-foreground uppercase tracking-wider group-hover:text-[hsl(var(--kk-violet))] transition-colors duration-300 truncate">
              {label}
            </h3>
          </div>
        </div>
        
        {/* Value section with responsive spacing */}
        <div className="space-y-2 lg:space-y-4">
          <div className="text-xl lg:text-4xl font-bold text-foreground leading-none tracking-tight group-hover:text-[hsl(var(--kk-violet))] transition-colors duration-300 lg:duration-500">
            {value}
          </div>
          
          {/* Responsive delta indicator */}
          <div className={cn(
            "inline-flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 lg:group-hover:scale-105",
            (deltaType === "up" || deltaType === "neutral") && "bg-gradient-to-r from-emerald-50 to-emerald-100/80 text-emerald-700 border border-emerald-200/60 shadow-sm",
            deltaType === "down" && "bg-gradient-to-r from-red-50 to-red-100/80 text-red-700 border border-red-200/60 shadow-sm"
          )}>
            {deltaType === "up" && <ArrowUp className="w-3 h-3 lg:w-4 lg:h-4" />}
            {deltaType === "down" && <ArrowDown className="w-3 h-3 lg:w-4 lg:h-4" />}
            <span className="truncate">{delta}</span>
          </div>
          
          {/* Help text - responsive */}
          <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 line-clamp-2">
            {helpText}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KPICard;