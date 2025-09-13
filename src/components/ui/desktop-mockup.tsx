import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DesktopMockupProps {
  children?: ReactNode;
  className?: string;
  dashboardImage?: string;
}

export const DesktopMockup = ({ className, dashboardImage }: DesktopMockupProps) => {
  return (
    <div className={cn("relative w-full max-w-5xl mx-auto perspective-1000", className)}>
      {/* Premium MacBook Container with floating effect */}
      <div className="relative transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 ease-out group">
        
        {/* Ambient Glow Effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* MacBook Lid - Premium Aluminum */}
        <div className="relative bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded-t-2xl p-2 shadow-2xl shadow-black/20 border border-slate-300/50">
          
          {/* Ultra-thin Screen Bezel */}
          <div className="bg-gradient-to-b from-slate-900 to-black rounded-xl p-0.5 shadow-inner">
            
            {/* Premium Screen with Glass Effect */}
            <div className="bg-black rounded-[10px] overflow-hidden relative aspect-[16/10] shadow-2xl">
              
              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-white">
                {dashboardImage ? (
                  <img 
                    src={dashboardImage} 
                    alt="KlikKlaar Dashboard" 
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center rounded-[10px]">
                    <span className="text-slate-400 font-medium">Dashboard Preview</span>
                  </div>
                )}
                
                {/* Screen Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[10px] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-tl-[10px] pointer-events-none"></div>
              </div>
              
              {/* Screen Rim Highlight */}
              <div className="absolute inset-0 rounded-[10px] ring-1 ring-white/20 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Laptop Hinge Detail */}
          <div className="absolute -bottom-1 left-2 right-2 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 rounded-full shadow-sm"></div>
        </div>
        
        {/* MacBook Base - Keyboard Section */}
        <div className="relative bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded-b-2xl px-4 py-3 shadow-xl shadow-black/15 border-x border-b border-slate-300/50">
          
          {/* Keyboard Area */}
          <div className="bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg p-3 shadow-inner">
            
            {/* Keyboard Rows */}
            <div className="space-y-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-center space-x-1">
                  {[...Array(i === 0 ? 13 : i === 3 ? 7 : 12)].map((_, j) => (
                    <div 
                      key={j} 
                      className={cn(
                        "bg-gradient-to-b from-slate-50 to-slate-100 rounded-sm shadow-sm border border-slate-300/50",
                        i === 3 && j === 3 ? "w-16 h-2" : "w-3 h-2"
                      )}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Trackpad */}
          <div className="mt-3 mx-auto w-20 h-12 bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg shadow-inner border border-slate-300/50"></div>
          
          {/* Bottom Edge Detail */}
          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent rounded-full"></div>
        </div>
        
        {/* Enhanced Shadow System */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/5 blur-xl transform translate-y-8 scale-95 rounded-3xl"></div>
          <div className="absolute inset-0 bg-black/3 blur-2xl transform translate-y-12 scale-90 rounded-3xl"></div>
          <div className="absolute inset-0 bg-primary/5 blur-3xl transform translate-y-16 scale-85 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </div>
  );
};