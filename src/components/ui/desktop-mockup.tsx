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
        {/* Monitor Frame - Angular Design */}
        <div className="relative bg-zinc-800 rounded-sm p-2 shadow-2xl">
          {/* Ultra-thin Screen Bezel */}
          <div className="bg-zinc-900 rounded-sm p-1">
            {/* Screen Content */}
            <div className="relative bg-black overflow-hidden aspect-[16/9]">
              <div className="relative w-full h-full bg-white overflow-hidden">
                {dashboardImage ? (
                  <img 
                    src={dashboardImage} 
                    alt="KlikKlaar Dashboard" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-50 flex items-center justify-center">
                    <span className="text-zinc-400 font-medium">Dashboard Preview</span>
                  </div>
                )}
                
                {/* Subtle Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Monitor Stand - Simple Rectangular Design */}
        <div className="relative flex flex-col items-center">
          {/* Stand Neck */}
          <div className="w-6 h-8 bg-zinc-700"></div>
          
          {/* Stand Base - Rectangular */}
          <div className="w-40 h-8 bg-zinc-700 rounded-sm shadow-lg"></div>
        </div>
        
        {/* Clean Drop Shadow */}
        <div className="absolute inset-0 -z-10 bg-black/20 blur-xl transform translate-y-6 scale-95"></div>
      </div>
    </div>
  );
};