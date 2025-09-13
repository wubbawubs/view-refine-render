import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DesktopMockupProps {
  children?: ReactNode;
  className?: string;
  dashboardImage?: string;
}

export const DesktopMockup = ({ className, dashboardImage }: DesktopMockupProps) => {
  return (
    <div className={cn("relative w-full max-w-5xl mx-auto", className)}>
      {/* Clean MacBook Container */}
      <div className="relative">
        {/* Laptop Screen */}
        <div className="relative bg-zinc-200 rounded-t-lg p-1.5 shadow-xl">
          {/* Ultra-thin Screen Bezel */}
          <div className="bg-zinc-900 rounded-md p-0.5">
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
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-sm pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Laptop Base */}
        <div className="relative bg-zinc-200 rounded-b-lg px-8 py-3 shadow-lg">
          {/* Simple Keyboard Area */}
          <div className="bg-zinc-100 rounded-md p-3 shadow-inner">
            <div className="h-16 bg-zinc-50 rounded"></div>
          </div>
          
          {/* Trackpad */}
          <div className="mt-3 mx-auto w-20 h-12 bg-zinc-50 rounded-lg shadow-inner"></div>
        </div>
        
        {/* Clean Drop Shadow */}
        <div className="absolute inset-0 -z-10 bg-black/10 blur-xl transform translate-y-6 scale-95 rounded-2xl"></div>
      </div>
    </div>
  );
};