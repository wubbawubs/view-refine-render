import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Target, Search, TrendingUp, ExternalLink } from "lucide-react";

interface OpportunityDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockOpportunities = [
  { keyword: "seo automatisering", position: 9, volume: 320, difficulty: "Laag", potential: "Hoog" },
  { keyword: "website optimalisatie tool", position: 11, volume: 480, difficulty: "Gemiddeld", potential: "Hoog" },
  { keyword: "seo voor mkb", position: 8, volume: 590, difficulty: "Gemiddeld", potential: "Zeer hoog" },
  { keyword: "automatische seo", position: 14, volume: 210, difficulty: "Laag", potential: "Gemiddeld" },
  { keyword: "google ranking verbeteren", position: 12, volume: 720, difficulty: "Hoog", potential: "Hoog" },
  { keyword: "seo software nederland", position: 10, volume: 260, difficulty: "Laag", potential: "Hoog" },
];

const getDifficultyColor = (d: string) => {
  if (d === "Laag") return "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30";
  if (d === "Gemiddeld") return "text-[hsl(var(--kk-orange))] bg-orange-100 dark:bg-orange-900/30";
  return "text-red-500 bg-red-100 dark:bg-red-900/30";
};

const getPotentialColor = (p: string) => {
  if (p === "Zeer hoog" || p === "Hoog") return "text-emerald-600 dark:text-emerald-400";
  return "text-[hsl(var(--kk-orange))]";
};

const OpportunityDetailDialog = ({ open, onOpenChange }: OpportunityDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
            Long-tail Keyword Kansen
          </DialogTitle>
          <DialogDescription>
            Keywords waar je op positie 8-15 staat — met gerichte optimalisatie kun je deze naar de top 5 brengen.
          </DialogDescription>
        </DialogHeader>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-muted/40 border border-border/50 text-center">
            <p className="text-lg font-bold text-foreground">{mockOpportunities.length}</p>
            <p className="text-[10px] text-muted-foreground">Keywords</p>
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border/50 text-center">
            <p className="text-lg font-bold text-foreground">2.580</p>
            <p className="text-[10px] text-muted-foreground">Maandelijks volume</p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 text-center">
            <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">+340</p>
            <p className="text-[10px] text-muted-foreground">Potentiële bezoekers</p>
          </div>
        </div>

        {/* Keyword list */}
        <div className="space-y-2">
          {mockOpportunities.map((kw) => (
            <div key={kw.keyword} className="p-3 rounded-xl border border-border/50 bg-card hover:bg-muted/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{kw.keyword}</span>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">#{kw.position}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">{kw.volume}/maand</span>
                <span className="text-muted-foreground">•</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${getDifficultyColor(kw.difficulty)}`}>
                  {kw.difficulty}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className={`font-medium ${getPotentialColor(kw.potential)}`}>
                  <TrendingUp className="w-3 h-3 inline mr-0.5" />{kw.potential}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-lg bg-[hsl(var(--kk-violet)/0.05)] border border-[hsl(var(--kk-violet)/0.1)]">
          <p className="text-xs text-[hsl(var(--kk-violet))] font-medium">
            🎯 KlikKlaar optimaliseert automatisch content voor deze keywords. Verwachte resultaten binnen 4-6 weken.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OpportunityDetailDialog;
