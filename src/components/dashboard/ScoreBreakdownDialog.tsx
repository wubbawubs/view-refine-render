import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Shield, FileText, Link2, Zap, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

interface ScoreCategory {
  label: string;
  score: number;
  maxScore: number;
  icon: React.ReactNode;
  details: string;
  status: "good" | "warning" | "critical";
}

const mockCategories: ScoreCategory[] = [
  {
    label: "Technische SEO",
    score: 82,
    maxScore: 100,
    icon: <Shield className="w-4 h-4" />,
    details: "SSL actief, sitemap aanwezig, robots.txt correct. Aandachtspunt: 3 pagina's laden traag (>3s).",
    status: "good",
  },
  {
    label: "Content & On-Page",
    score: 68,
    maxScore: 100,
    icon: <FileText className="w-4 h-4" />,
    details: "85% van de pagina's heeft geoptimaliseerde meta descriptions. 4 pagina's missen nog unieke H1 tags.",
    status: "warning",
  },
  {
    label: "Backlinks",
    score: 55,
    maxScore: 100,
    icon: <Link2 className="w-4 h-4" />,
    details: "23 kwalitatieve backlinks gevonden. Concurrenten hebben gemiddeld 45. Hier ligt groeipotentieel.",
    status: "warning",
  },
  {
    label: "Snelheid & Core Web Vitals",
    score: 78,
    maxScore: 100,
    icon: <Zap className="w-4 h-4" />,
    details: "LCP: 2.1s (goed), CLS: 0.05 (goed), INP: 180ms (verbeterpunt). Mobiel scoort lager dan desktop.",
    status: "good",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "good": return "text-emerald-600 dark:text-emerald-400";
    case "warning": return "text-[hsl(var(--kk-orange))]";
    case "critical": return "text-red-500";
    default: return "text-muted-foreground";
  }
};

const getStatusBg = (status: string) => {
  switch (status) {
    case "good": return "bg-emerald-100 dark:bg-emerald-900/30";
    case "warning": return "bg-orange-100 dark:bg-orange-900/30";
    case "critical": return "bg-red-100 dark:bg-red-900/30";
    default: return "bg-muted";
  }
};

const getProgressColor = (score: number) => {
  if (score >= 75) return "[&>div]:bg-emerald-500";
  if (score >= 50) return "[&>div]:bg-[hsl(var(--kk-orange))]";
  return "[&>div]:bg-red-500";
};

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "good") return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
  if (status === "warning") return <AlertTriangle className="w-4 h-4 text-[hsl(var(--kk-orange))]" />;
  return <AlertTriangle className="w-4 h-4 text-red-500" />;
};

interface ScoreBreakdownDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalScore: number;
}

const ScoreBreakdownDialog = ({ open, onOpenChange, totalScore }: ScoreBreakdownDialogProps) => {
  const avgScore = Math.round(mockCategories.reduce((sum, c) => sum + c.score, 0) / mockCategories.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
            SEO Score Breakdown
          </DialogTitle>
          <DialogDescription>
            Gedetailleerde analyse van je SEO prestaties per categorie.
          </DialogDescription>
        </DialogHeader>

        {/* Overall Score */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border/50">
          <div className="relative w-16 h-16 shrink-0">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke="hsl(var(--kk-violet))"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${totalScore * 2.64} ${264 - totalScore * 2.64}`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-foreground">{totalScore}</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Totale SEO Score</p>
            <p className="text-xs text-muted-foreground">
              Gemiddelde van {mockCategories.length} categorieën. Laatst berekend: vandaag 07:30.
            </p>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-3">
          {mockCategories.map((cat) => (
            <div key={cat.label} className="p-4 rounded-xl border border-border/50 bg-card hover:bg-muted/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${getStatusBg(cat.status)}`}>
                    <span className={getStatusColor(cat.status)}>{cat.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{cat.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">{cat.score}</span>
                  <span className="text-xs text-muted-foreground">/ {cat.maxScore}</span>
                  <StatusIcon status={cat.status} />
                </div>
              </div>
              <Progress value={cat.score} className={`h-1.5 mb-2 ${getProgressColor(cat.score)}`} />
              <p className="text-xs text-muted-foreground leading-relaxed">{cat.details}</p>
            </div>
          ))}
        </div>

        {/* Footer tip */}
        <div className="p-3 rounded-lg bg-[hsl(var(--kk-violet)/0.05)] border border-[hsl(var(--kk-violet)/0.1)]">
          <p className="text-xs text-[hsl(var(--kk-violet))] font-medium">
            💡 Tip: Focus op Backlinks en Content — daar liggen de grootste groeikansen voor jouw website.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScoreBreakdownDialog;
