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
      <h2 className="text-xl font-bold text-foreground">Klant Kiezen</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-6 space-y-3 cursor-pointer transition-shadow hover:shadow-md"
          onClick={onNewClient}
        >
          <div className="p-2.5 rounded-lg bg-primary/10 w-fit">
            <UserPlus className="w-5 h-5 text-primary" />
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
          className="rounded-xl border border-border bg-gradient-to-br from-accent/5 to-transparent p-6 space-y-3 transition-shadow hover:shadow-md"
        >
          <div className="p-2.5 rounded-lg bg-accent/10 w-fit">
            <FolderOpen className="w-5 h-5 text-accent-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Bestaande Klanten</h3>
          <div className="flex flex-col items-center justify-center py-6">
            <Loader2 className="w-7 h-7 animate-spin text-primary" />
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
