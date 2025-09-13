import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DesktopMockupProps {
  children?: ReactNode;
  className?: string;
  dashboardImage?: string;
}

export const DesktopMockup = ({ className, dashboardImage }: DesktopMockupProps) => {
  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      {/* Desktop Monitor Container */}
      <div className="relative">
        {/* Monitor Screen */}
        <div className="relative bg-zinc-900 rounded-lg p-2 shadow-2xl">
          {/* Ultra-thin Screen Bezel */}
          <div className="bg-zinc-800 rounded-md p-1">
            {/* Screen Content */}
            <div className="relative bg-black rounded-sm overflow-hidden aspect-[16/10]">
              <div className="relative w-full h-full bg-white rounded-sm overflow-hidden">
                {dashboardImage ? (
                  <img 
                    src={dashboardImage} 
                    alt="KlikKlaar Dashboard" 
                    className="w-full h-full object-cover rounded-sm"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-50 flex items-center justify-center rounded-sm">
                    <span className="text-zinc-400 font-medium">Dashboard Preview</span>
                  </div>
                )}
                
                {/* Subtle Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-sm pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Monitor Stand */}
        <div className="relative flex flex-col items-center">
          {/* Neck */}
          <div className="w-8 h-12 bg-zinc-700 shadow-lg"></div>
          
          {/* Stand Base */}
          <div className="relative">
            {/* Base Ring */}
            <div className="w-32 h-6 bg-zinc-600 rounded-full shadow-lg"></div>
            {/* Base Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-zinc-700 rounded-full"></div>
          </div>
        </div>
        
        {/* Clean Drop Shadow */}
        <div className="absolute inset-0 -z-10 bg-black/15 blur-2xl transform translate-y-8 scale-95 rounded-2xl"></div>
      </div>
    </div>
  );
};