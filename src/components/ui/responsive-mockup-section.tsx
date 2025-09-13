import { DesktopMockup } from "./desktop-mockup";
import { MobileMockup } from "./mobile-mockup";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface ResponsiveMockupSectionProps {
  className?: string;
  desktopImage?: string;
  mobileImage?: string;
}

export const ResponsiveMockupSection = ({ 
  className, 
  desktopImage = "/dashboard-desktop.png",
  mobileImage = "/dashboard-mobile.png"
}: ResponsiveMockupSectionProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={cn("w-full flex justify-center py-8", className)}>
        <MobileMockup dashboardImage={mobileImage} />
      </div>
    );
  }

  return (
    <div className={cn("w-full flex items-end justify-center gap-16 py-8", className)}>
      {/* Desktop Mockup */}
      <div className="flex-shrink-0">
        <DesktopMockup dashboardImage={desktopImage} />
      </div>
      
      {/* Mobile Mockup */}
      <div className="flex-shrink-0">
        <MobileMockup 
          dashboardImage={mobileImage}
          className="transform scale-75"
        />
      </div>
    </div>
  );
};