import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DesktopMockupProps {
  children: ReactNode;
  className?: string;
}

export const DesktopMockup = ({ children, className }: DesktopMockupProps) => {
  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      {/* Laptop Frame */}
      <div className="relative bg-slate-800 rounded-t-xl p-2 shadow-2xl">
        {/* Screen Bezel */}
        <div className="bg-black rounded-lg p-1">
          {/* Screen Content */}
          <div className="bg-background rounded-md overflow-hidden relative aspect-[16/10]">
            <div className="absolute inset-0 scale-75 origin-top-left transform-gpu">
              <div className="w-[133.33%] h-[133.33%]">
                {children}
              </div>
            </div>
          </div>
        </div>
        
        {/* Keyboard Base */}
        <div className="h-6 bg-slate-700 rounded-b-xl -mx-2 mt-1"></div>
      </div>
      
      {/* Trackpad */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-slate-600 rounded-lg shadow-inner"></div>
    </div>
  );
};