import { UserPlus, FolderOpen, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface StepKlantKiezenProps {
  onNewClient: () => void;
  onNextStep: () => void;
}

const StepKlantKiezen = ({ onNewClient, onNextStep }: StepKlantKiezenProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-foreground">Klant Kiezen</h2>
        <p className="text-sm text-muted-foreground">Start een nieuwe onboarding of ga verder met een bestaande klant.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          whileHover={{ y: -2 }}
          className="relative overflow-hidden rounded-xl border border-[hsl(var(--kk-violet)/0.2)] bg-gradient-to-br from-[hsl(var(--kk-violet)/0.05)] via-card to-[hsl(var(--kk-fuchsia)/0.03)] p-6 space-y-3 cursor-pointer transition-shadow hover:shadow-lg hover:shadow-[hsl(var(--kk-violet)/0.1)]"
          onClick={onNewClient}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))]" />
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-[hsl(var(--kk-violet)/0.12)] to-[hsl(var(--kk-fuchsia)/0.08)] w-fit">
            <UserPlus className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Nieuwe Klant</h3>
          <p className="text-sm text-muted-foreground">
            Start onboarding voor een nieuwe klant
          </p>
          <Button onClick={onNewClient} className="gap-2">
            Nieuwe klant onboarden
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-[hsl(var(--kk-orange)/0.04)] via-card to-transparent p-6 space-y-3 transition-shadow hover:shadow-md"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))] opacity-50" />
          <div className="p-2.5 rounded-lg bg-[hsl(var(--kk-orange)/0.08)] w-fit">
            <FolderOpen className="w-5 h-5 text-[hsl(var(--kk-orange))]" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Bestaande Klanten</h3>
          <div className="flex flex-col items-center justify-center py-6">
            <Loader2 className="w-7 h-7 animate-spin text-[hsl(var(--kk-violet))]" />
            <p className="text-sm text-muted-foreground mt-3">
              Klanten worden geladen...
            </p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border pt-4">
        <Button variant="outline" onClick={onNextStep} className="gap-2">
          Volgende
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StepKlantKiezen;
