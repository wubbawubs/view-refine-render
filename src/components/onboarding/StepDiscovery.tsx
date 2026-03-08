import { Loader2 } from "lucide-react";

interface StepDiscoveryProps {
  clientName?: string;
}

const StepDiscovery = ({ clientName }: StepDiscoveryProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Discovery</h2>

      <div className="flex flex-col items-center justify-center py-16">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground mt-4">
          Discovery wordt uitgevoerd...
        </p>
      </div>
    </div>
  );
};

export default StepDiscovery;
