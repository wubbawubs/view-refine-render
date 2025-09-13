import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MobileMockupProps {
  children?: ReactNode;
  className?: string;
  dashboardImage?: string;
}

export const MobileMockup = ({ className, dashboardImage }: MobileMockupProps) => {
  return (
    <div className={cn("relative w-full max-w-xs mx-auto", className)}>
      {/* iPhone Frame */}
      <div className="relative">
        {/* Phone Body */}
        <div className="relative bg-zinc-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* Screen */}
          <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
            {/* Screen Content */}
            <div className="relative w-full h-full bg-white rounded-[2rem] overflow-hidden">
              {dashboardImage ? (
                <img 
                  src={dashboardImage} 
                  alt="KlikKlaar Mobile Dashboard" 
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              ) : (
                <div className="w-full h-full bg-zinc-50 flex items-center justify-center rounded-[2rem]">
                  <span className="text-zinc-400 font-medium text-sm">Mobile Preview</span>
                </div>
              )}
              
              {/* Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2rem] pointer-events-none"></div>
            </div>
          </div>
          
          {/* Dynamic Island */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full"></div>
        </div>
        
        {/* Phone Shadow */}
        <div className="absolute inset-0 -z-10 bg-black/20 blur-xl transform translate-y-4 scale-95 rounded-[2.5rem]"></div>
      </div>
    </div>
  );
};