import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DesktopMockupProps {
  children?: ReactNode;
  className?: string;
  dashboardImage?: string;
}

export const DesktopMockup = ({ className, dashboardImage }: DesktopMockupProps) => {
  return (
    <div className={cn("relative w-full max-w-lg mx-auto", className)}>
      {/* Black MacBook Container */}
      <div className="relative">
        {/* Laptop Screen */}
        <div className="relative bg-zinc-900 rounded-t-xl p-3 shadow-2xl">
          {/* Screen Content */}
          <div className="relative bg-black rounded-lg overflow-hidden aspect-[16/10]">
            <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">
              {dashboardImage ? (
                <img 
                  src={dashboardImage} 
                  alt="KlikKlaar Dashboard" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-zinc-50 flex items-center justify-center rounded-lg">
                  <span className="text-zinc-400 font-medium">Dashboard Preview</span>
                </div>
              )}
              
              {/* Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Laptop Base */}
        <div className="relative bg-zinc-900 rounded-b-xl px-6 py-2 shadow-2xl">
          {/* Simple Base */}
          <div className="h-4 bg-zinc-800 rounded"></div>
        </div>
        
        {/* Drop Shadow */}
        <div className="absolute inset-0 -z-10 bg-black/20 blur-xl transform translate-y-4 scale-95 rounded-xl"></div>
      </div>
    </div>
  );
};