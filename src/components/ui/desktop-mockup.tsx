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
      {/* MacBook Container with 3D Perspective */}
      <div className="relative transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 ease-out group" style={{ perspective: '1200px' }}>
        
        {/* Ambient Glow Effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/5 via-purple-500/3 to-blue-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
        
        {/* Main Laptop Body */}
        <div className="relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-5deg)' }}>
          
          {/* Laptop Screen/Lid */}
          <div className="relative bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 rounded-t-xl p-2 shadow-2xl border border-zinc-300">
            
            {/* Ultra-thin Screen Bezel */}
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-lg p-1">
              
              {/* Screen Content */}
              <div className="relative bg-black rounded-md overflow-hidden aspect-[16/10]">
                <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
                  {dashboardImage ? (
                    <img 
                      src={dashboardImage} 
                      alt="KlikKlaar Dashboard" 
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center rounded-md">
                      <span className="text-zinc-400 font-medium">Dashboard Preview</span>
                    </div>
                  )}
                  
                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent via-40% to-transparent rounded-md pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-tl-md pointer-events-none"></div>
                </div>
              </div>
            </div>
            
            {/* Apple Logo Area */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-b from-zinc-400 to-zinc-500 rounded-sm shadow-inner opacity-60"></div>
          </div>
          
          {/* Laptop Base/Keyboard */}
          <div className="relative bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 rounded-b-xl px-6 py-4 shadow-xl border-x border-b border-zinc-300" style={{ transform: 'rotateX(-5deg)' }}>
            
            {/* Keyboard Area */}
            <div className="bg-gradient-to-b from-zinc-100 to-zinc-200 rounded-lg p-4 shadow-inner">
              
              {/* Keyboard Keys Pattern */}
              <div className="space-y-2">
                {/* Function Row */}
                <div className="flex justify-between space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-6 h-4 bg-gradient-to-b from-white to-zinc-100 rounded shadow-sm border border-zinc-200"></div>
                  ))}
                </div>
                
                {/* Main Keyboard Rows */}
                {[...Array(4)].map((row, i) => (
                  <div key={i} className="flex justify-center space-x-1">
                    {[...Array(i === 3 ? 1 : 13)].map((_, j) => (
                      <div 
                        key={j} 
                        className={cn(
                          "bg-gradient-to-b from-white to-zinc-100 rounded shadow-sm border border-zinc-200",
                          i === 3 ? "w-32 h-4" : "w-6 h-4"
                        )}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Trackpad */}
            <div className="mt-4 mx-auto w-24 h-16 bg-gradient-to-b from-zinc-100 to-zinc-200 rounded-lg shadow-inner border border-zinc-300"></div>
            
            {/* Speaker Grilles */}
            <div className="absolute top-2 left-8 right-8 flex justify-between">
              <div className="flex space-x-0.5">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 bg-zinc-400 rounded-full"></div>
                ))}
              </div>
              <div className="flex space-x-0.5">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 bg-zinc-400 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Realistic Shadow System */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/8 blur-xl transform translate-y-8 scale-95 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/4 blur-2xl transform translate-y-12 scale-90 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};