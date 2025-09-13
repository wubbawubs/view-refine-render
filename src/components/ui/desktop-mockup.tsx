import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DesktopMockupProps {
  children?: ReactNode;
  className?: string;
  dashboardImage?: string;
}

export const DesktopMockup = ({ className, dashboardImage }: DesktopMockupProps) => {
  return (
    <div className={cn("relative w-full max-w-6xl mx-auto", className)}>
      {/* Ultra Premium Laptop Container */}
      <div className="relative transform hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500 ease-out group">
        
        {/* Floating Effect Shadow Base */}
        <div className="absolute -inset-4 bg-gradient-to-b from-transparent via-black/[0.02] to-black/[0.08] blur-2xl transform translate-y-8 rounded-3xl"></div>
        <div className="absolute -inset-6 bg-gradient-to-b from-transparent to-black/[0.04] blur-3xl transform translate-y-12 rounded-3xl"></div>
        
        {/* Ambient Premium Glow */}
        <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/[0.03] via-purple-500/[0.02] to-blue-500/[0.03] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
        
        {/* Main Laptop Body */}
        <div className="relative transform rotate-x-[8deg] rotate-y-[2deg] perspective-1000">
          
          {/* Screen/Lid Section - Ultra Thin */}
          <div className="relative bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 rounded-t-[20px] p-1 shadow-2xl shadow-black/10 border border-zinc-200/80">
            
            {/* Minimal Bezel */}
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[16px] p-[2px] shadow-inner">
              
              {/* Screen Content Area */}
              <div className="relative bg-black rounded-[14px] overflow-hidden aspect-[16/10]">
                
                {/* Actual Dashboard Content */}
                <div className="relative w-full h-full bg-white rounded-[14px] overflow-hidden">
                  {dashboardImage ? (
                    <img 
                      src={dashboardImage} 
                      alt="KlikKlaar Dashboard" 
                      className="w-full h-full object-cover rounded-[14px] filter contrast-[1.05] saturate-[1.1]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center rounded-[14px]">
                      <span className="text-zinc-400 font-light text-sm">Dashboard Preview</span>
                    </div>
                  )}
                  
                  {/* Premium Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent via-30% to-transparent rounded-[14px] pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-1/4 h-1/3 bg-gradient-to-br from-white/[0.03] to-transparent rounded-tl-[14px] pointer-events-none"></div>
                </div>
                
                {/* Screen Edge Highlight */}
                <div className="absolute inset-0 rounded-[14px] ring-1 ring-white/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Base/Keyboard Section - Ultra Slim Profile */}
          <div className="relative bg-gradient-to-b from-zinc-100 via-zinc-150 to-zinc-200 rounded-b-[20px] px-6 py-2 shadow-xl shadow-black/8 border-x border-b border-zinc-200/80">
            
            {/* Keyboard Area - Minimal */}
            <div className="bg-gradient-to-b from-zinc-50 to-zinc-100 rounded-[12px] p-2 shadow-inner border border-zinc-200/50">
              
              {/* Simplified Keyboard Pattern */}
              <div className="grid grid-cols-12 gap-[1px] opacity-60">
                {[...Array(48)].map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "bg-gradient-to-b from-white to-zinc-50 rounded-[1px] h-[2px] shadow-sm border border-zinc-200/30",
                      i >= 36 && i <= 40 ? "col-span-2" : "col-span-1"
                    )}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Trackpad - Clean */}
            <div className="mt-2 mx-auto w-16 h-8 bg-gradient-to-b from-zinc-50 to-zinc-100 rounded-[8px] shadow-inner border border-zinc-200/40"></div>
          </div>
          
          {/* Subtle Hinge Line */}
          <div className="absolute top-[calc(100%-2.5rem)] left-1 right-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-300/50 to-transparent"></div>
        </div>
        
        {/* Enhanced Depth Shadows */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.06] blur-xl transform translate-y-6 scale-[0.98] rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.03] blur-2xl transform translate-y-10 scale-[0.95] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};