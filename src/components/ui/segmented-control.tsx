import * as React from "react";
import { cn } from "@/lib/utils";

interface SegmentedControlOption {
  value: string;
  label: string;
  subtitle?: string;
  description?: string;
}

interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const SegmentedControl = React.forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(({ options, value, onValueChange, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("space-y-3", className)}
      role="radiogroup"
    >
      {options.map((option, index) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onValueChange(option.value)}
          className={cn(
            "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 smooth-hover",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kk-orange focus-visible:ring-offset-2",
            value === option.value
              ? "border-kk-orange bg-kk-orange/5 shadow-card"
              : "border-border bg-card hover:border-kk-orange/30"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-4 h-4 rounded-full border-2 transition-colors",
                value === option.value
                  ? "bg-kk-orange border-kk-orange"
                  : "border-muted-foreground/30"
              )}>
                {value === option.value && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
              <div>
                <div className="font-medium text-card-foreground">
                  {option.label}
                </div>
                {option.subtitle && (
                  <div className="text-sm text-muted-foreground">
                    {option.subtitle}
                  </div>
                )}
              </div>
            </div>
            {option.description && (
              <div className="text-sm font-medium text-kk-orange">
                {option.description}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
});

SegmentedControl.displayName = "SegmentedControl";