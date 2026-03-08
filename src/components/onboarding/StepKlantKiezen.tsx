import { Plus, FolderOpen, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepKlantKiezenProps {
  onNewClient: () => void;
  onNextStep: () => void;
}

const StepKlantKiezen = ({ onNewClient, onNextStep }: StepKlantKiezenProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Klant Kiezen</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nieuwe Klant */}
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            <h3 className="text-lg font-semibold text-foreground">Nieuwe Klant</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Start onboarding voor een nieuwe klant
          </p>
          <Button onClick={onNewClient} className="mt-2">
            Nieuwe klant onboarden
          </Button>
        </div>

        {/* Bestaande Klanten */}
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            <h3 className="text-lg font-semibold text-foreground">Bestaande Klanten</h3>
          </div>
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground mt-3">
              Klanten worden geladen...
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <Button onClick={onNextStep}>
          Volgende ➡
        </Button>
      </div>
    </div>
  );
};

export default StepKlantKiezen;
