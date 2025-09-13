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
      <div className="relative bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
        {/* Screen Bezel - Thinner and more modern */}
        <div className="bg-black rounded-xl p-0.5">
          {/* Screen Content */}
          <div className="bg-background rounded-lg overflow-hidden relative aspect-[16/10]">
            {/* Dashboard content with better scaling */}
            <div className="absolute inset-0 scale-90 origin-center transform-gpu">
              <div className="w-[111.11%] h-[111.11%] -translate-x-[5.56%] -translate-y-[5.56%]">
                {children}
              </div>
            </div>
          </div>
        </div>
        
        {/* Keyboard Base - More subtle */}
        <div className="h-4 bg-gray-700 rounded-b-2xl -mx-3 mt-2"></div>
      </div>
      
      {/* Trackpad - Smaller and more realistic */}
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-600 rounded-md shadow-inner opacity-80"></div>
    </div>
  );
};