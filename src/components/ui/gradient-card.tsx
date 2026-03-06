import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A Card wrapper that adds the gradient top bar consistently.
 * Use this instead of plain Card when you want the premium gradient accent.
 */
const GradientCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
      {children}
    </div>
  )
);
GradientCard.displayName = "GradientCard";

export { GradientCard };
