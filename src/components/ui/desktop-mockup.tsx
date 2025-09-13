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
      {/* Monitor Frame */}
      <div className="relative bg-gray-200 rounded-2xl p-4 shadow-2xl">
        {/* Screen Bezel */}
        <div className="bg-black rounded-xl p-1">
          {/* Screen Content */}
          <div className="bg-white rounded-lg overflow-hidden relative aspect-[16/10]">
            {dashboardImage ? (
              <img 
                src={dashboardImage} 
                alt="KlikKlaar Dashboard" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Dashboard Preview</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Monitor Stand */}
      <div className="relative flex justify-center">
        {/* Stand Neck */}
        <div className="w-4 h-8 bg-gray-300 rounded-b-sm"></div>
        {/* Stand Base */}
        <div className="absolute -bottom-2 w-32 h-4 bg-gray-300 rounded-full shadow-md"></div>
      </div>
    </div>
  );
};