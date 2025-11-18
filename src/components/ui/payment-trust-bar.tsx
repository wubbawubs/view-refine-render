import * as React from "react";
import { Shield, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentTrustBarProps {
  className?: string;
}

export const PaymentTrustBar = React.forwardRef<HTMLDivElement, PaymentTrustBarProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4 py-3 text-sm text-muted-foreground",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span>Veilig betalen via Mollie</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <CreditCard className="h-4 w-4 opacity-60" />
            <span className="text-xs">iDEAL</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard className="h-4 w-4 opacity-60" />
            <span className="text-xs">Bancontact</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard className="h-4 w-4 opacity-60" />
            <span className="text-xs">Apple Pay</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard className="h-4 w-4 opacity-60" />
            <span className="text-xs">Creditcard</span>
          </div>
        </div>
      </div>
    );
  }
);

PaymentTrustBar.displayName = "PaymentTrustBar";