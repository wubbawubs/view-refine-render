import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
  selectedPlan: string;
  planPrice: string;
  isLoading: boolean;
  onCTAClick: () => void;
  className?: string;
}

export const StickyCTA = React.forwardRef<HTMLDivElement, StickyCTAProps>(
  ({ selectedPlan, planPrice, isLoading, onCTAClick, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 z-50",
          className
        )}
      >
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm">
              <span className="font-medium text-card-foreground">Gekozen:</span>{" "}
              <span className="text-muted-foreground">{selectedPlan} · {planPrice} excl. btw</span>
            </div>
            <Button
              onClick={onCTAClick}
              disabled={isLoading}
              className="bg-kk-gradient hover:opacity-90 text-white font-medium px-6"
              size="lg"
            >
              {isLoading ? "Bezig..." : "Doorgaan naar betaling"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

StickyCTA.displayName = "StickyCTA";