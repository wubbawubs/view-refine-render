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
      {/* Premium Display Container */}
      <div className="relative transform hover:scale-[1.02] hover:-translate-y-3 transition-all duration-700 ease-out group">
        
        {/* Ambient Premium Lighting */}
        <div className="absolute -inset-16 bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
        <div className="absolute -inset-12 bg-gradient-to-b from-transparent via-black/[0.02] to-black/[0.08] blur-2xl transform translate-y-8"></div>
        
        {/* Monitor Frame - Premium Aluminum */}
        <div className="relative bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-300 rounded-2xl p-3 shadow-2xl shadow-black/20 border border-zinc-300/60">
          
          {/* Inner Frame Detail */}
          <div className="bg-gradient-to-b from-zinc-200 to-zinc-300 rounded-xl p-2 shadow-inner">
            
            {/* Screen Bezel - Ultra Premium */}  
            <div className="bg-gradient-to-b from-zinc-800 via-zinc-900 to-black rounded-lg p-1 shadow-inner border border-zinc-700/50">
              
              {/* Premium Screen Glass */}
              <div className="relative bg-black rounded-md overflow-hidden aspect-[16/10] shadow-2xl shadow-black/40">
                
                {/* Screen Content */}
                <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
                  {dashboardImage ? (
                    <img 
                      src={dashboardImage} 
                      alt="KlikKlaar Dashboard" 
                      className="w-full h-full object-cover rounded-md filter contrast-[1.05] saturate-[1.1] brightness-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center rounded-md">
                      <span className="text-zinc-400 font-medium">Dashboard Preview</span>
                    </div>
                  )}
                  
                  {/* Premium Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.03] via-30% to-transparent rounded-md pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-white/[0.08] to-transparent rounded-tl-md pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-br-md pointer-events-none"></div>
                </div>
                
                {/* Screen Anti-Glare Coating Effect */}
                <div className="absolute inset-0 rounded-md ring-1 ring-white/5 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Brushed Metal Accent */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-400 rounded-full shadow-sm"></div>
          </div>
          
          {/* Premium Brand Badge */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-b from-zinc-400 to-zinc-500 rounded-full shadow-inner"></div>
        </div>
        
        {/* Professional Monitor Stand */}
        <div className="relative flex justify-center mt-2">
          {/* Stand Neck - Premium Metal */}
          <div className="relative">
            <div className="w-3 h-16 bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 rounded-full shadow-lg"></div>
            <div className="absolute inset-0 w-3 h-16 bg-gradient-to-r from-white/20 via-transparent to-black/10 rounded-full"></div>
            
            {/* Adjustment Ring Detail */}
            <div className="absolute top-8 -left-1 w-5 h-3 bg-gradient-to-b from-zinc-300 to-zinc-400 rounded-full shadow-md border border-zinc-400/50"></div>
          </div>
          
          {/* Stand Base - Heavy Premium Base */}
          <div className="absolute -bottom-1 flex justify-center">
            <div className="relative w-40 h-6 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 rounded-full shadow-xl shadow-black/30">
              {/* Base Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20 rounded-full"></div>
              {/* Base Ring Details */}
              <div className="absolute top-1 left-4 right-4 h-1 bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-zinc-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Professional Shadow System */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.08] blur-xl transform translate-y-6 scale-[0.95] rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.04] blur-2xl transform translate-y-12 scale-[0.90] rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02] blur-3xl transform translate-y-16 scale-[0.85] rounded-3xl"></div>
        </div>
        
        {/* Floating Effect Enhancement */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-purple-500/[0.04] blur-2xl transform translate-y-8 scale-[0.92] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};