import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, ArrowUpRight, Calendar, BarChart3, Sun, CloudRain } from "lucide-react";

interface PrognoseDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockPrognoseData = {
  monthlyForecast: [
    { month: "April", growth: "+12%", confidence: 72 },
    { month: "Mei", growth: "+18%", confidence: 78 },
    { month: "Juni", growth: "+22%", confidence: 65 },
  ],
  factors: [
    { label: "Ranking verbeteringen", impact: "+8%", positive: true },
    { label: "Seizoenspatroon (lente)", impact: "+6%", positive: true },
    { label: "Content optimalisaties", impact: "+4%", positive: true },
    { label: "Concurrentie activiteit", impact: "-2%", positive: false },
  ],
  currentTraffic: "1.247",
  projectedTraffic: "1.471",
};

const PrognoseDetailDialog = ({ open, onOpenChange }: PrognoseDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Traffic Prognose Details
          </DialogTitle>
          <DialogDescription>
            Verwachte organische groei op basis van ranking trends, seizoenspatronen en optimalisaties.
          </DialogDescription>
        </DialogHeader>

        {/* Current vs Projected */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-muted/40 border border-border/50 text-center">
            <p className="text-xs text-muted-foreground mb-1">Huidig (maandelijks)</p>
            <p className="text-2xl font-bold text-foreground">{mockPrognoseData.currentTraffic}</p>
            <p className="text-xs text-muted-foreground">bezoekers</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 text-center">
            <p className="text-xs text-muted-foreground mb-1">Verwacht volgende maand</p>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{mockPrognoseData.projectedTraffic}</p>
            <div className="flex items-center justify-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-emerald-500" />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">+18%</span>
            </div>
          </div>
        </div>

        {/* Factors */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
            Groei factoren
          </h4>
          <div className="space-y-2">
            {mockPrognoseData.factors.map((factor) => (
              <div key={factor.label} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card">
                <span className="text-sm text-foreground">{factor.label}</span>
                <span className={`text-sm font-semibold ${factor.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                  {factor.impact}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3-month forecast */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            3-maanden vooruitzicht
          </h4>
          <div className="space-y-3">
            {mockPrognoseData.monthlyForecast.map((m) => (
              <div key={m.month} className="p-3 rounded-lg border border-border/50 bg-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{m.month}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{m.growth}</span>
                    <span className="text-xs text-muted-foreground">({m.confidence}% zeker)</span>
                  </div>
                </div>
                <Progress value={m.confidence} className="h-1.5 [&>div]:bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
          <p className="text-xs text-muted-foreground">
            ⚡ Deze prognose wordt dagelijks bijgewerkt op basis van nieuwe ranking data en zoektrends.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrognoseDetailDialog;
