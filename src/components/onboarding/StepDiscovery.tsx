import { Loader2, Search, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StepDiscoveryProps {
  clientName?: string;
}

const messages = [
  "Website crawlen...",
  "Pagina's indexeren...",
  "Meta data ophalen...",
  "Structuur analyseren...",
  "Bijna klaar...",
];

const StepDiscovery = ({ clientName }: StepDiscoveryProps) => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-foreground">Discovery</h2>
        <p className="text-sm text-muted-foreground">We analyseren de website en verzamelen alle benodigde gegevens.</p>
      </div>

      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--kk-violet)/0.15)] to-[hsl(var(--kk-fuchsia)/0.1)] flex items-center justify-center">
            <Globe className="w-10 h-10 text-[hsl(var(--kk-violet))]" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-1 -right-1 p-1.5 bg-card rounded-full border border-border shadow-sm"
          >
            <Search className="w-4 h-4 text-[hsl(var(--kk-fuchsia))]" />
          </motion.div>
        </motion.div>

        <div className="text-center space-y-2">
          <Loader2 className="w-5 h-5 animate-spin text-[hsl(var(--kk-violet))] mx-auto" />
          <motion.p
            key={msgIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-foreground"
          >
            {messages[msgIndex]}
          </motion.p>
          {clientName && (
            <p className="text-xs text-muted-foreground">
              voor <span className="font-semibold text-[hsl(var(--kk-violet))]">{clientName}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepDiscovery;
