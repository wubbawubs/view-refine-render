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
        {/* Monitor Frame - Thick Realistic Bezels */}
        <div className="relative bg-zinc-800 rounded-lg p-6 shadow-2xl">
          {/* Screen Content */}
          <div className="relative bg-black overflow-hidden aspect-[16/9] rounded-sm">
            <div className="relative w-full h-full bg-white overflow-hidden rounded-sm">
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
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent pointer-events-none rounded-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Monitor Stand - Realistic Design */}
        <div className="relative flex flex-col items-center">
          {/* Stand Neck - Connected to back of monitor */}
          <div className="w-12 h-16 bg-zinc-700 shadow-lg" style={{ marginTop: '-8px' }}></div>
          
          {/* Stand Base - Wide and Sturdy */}
          <div className="w-56 h-12 bg-zinc-700 rounded-lg shadow-xl"></div>
        </div>
        
        {/* Clean Drop Shadow */}
        <div className="absolute inset-0 -z-10 bg-black/25 blur-2xl transform translate-y-8 scale-95"></div>
      </div>
    </div>
  );
};