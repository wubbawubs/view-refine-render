import { TrendingUp, Sparkles, Target, ArrowUpRight, Brain } from "lucide-react";
import { GradientCard } from "@/components/ui/gradient-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import ScoreBreakdownDialog from "./ScoreBreakdownDialog";
import PrognoseDetailDialog from "./PrognoseDetailDialog";
import OpportunityDetailDialog from "./OpportunityDetailDialog";
import type { HeroMetricData } from "@/types/dashboard";

interface HeroMetricProps {
  language?: 'nl' | 'en';
  data?: HeroMetricData | null;
  loading?: boolean;
}

// Mock AI insights data — later replaced by Lovable AI edge function
const mockInsights = {
  score: 72,
  scoreLabel: "Goed",
  scoreDelta: "+8",
  scoreExplanation: "Je technische SEO is sterk verbeterd. Meta descriptions en H1 tags zijn geoptimaliseerd op 85% van je pagina's.",
  prognose: "+18%",
  prognoseLabel: "Verwachte traffic groei",
  prognoseDetail: "Op basis van huidige ranking trends en seizoenspatronen verwachten we een stijging van 18% organisch verkeer komende maand.",
  topKans: "Long-tail keywords",
  topKansDetail: "Er liggen kansen bij 12 long-tail zoektermen waar je nu op positie 8-15 staat.",
};

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-emerald-600 dark:text-emerald-400";
  if (score >= 60) return "text-[hsl(var(--kk-orange))]";
  return "text-red-500";
};

const getScoreTrackColor = (score: number) => {
  if (score >= 80) return "[&>div]:bg-emerald-500";
  if (score >= 60) return "[&>div]:bg-[hsl(var(--kk-orange))]";
  return "[&>div]:bg-red-500";
};

const HeroMetric = ({ language = 'nl', data = null, loading = false }: HeroMetricProps) => {
  const [scoreDialogOpen, setScoreDialogOpen] = useState(false);
  const [prognoseDialogOpen, setPrognoseDialogOpen] = useState(false);
  const [opportunityDialogOpen, setOpportunityDialogOpen] = useState(false);
  if (loading) {
    return (
      <GradientCard className="bg-gradient-to-br from-card via-card to-muted/20">
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="w-5 h-5" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-40" />
            <Skeleton className="h-40" />
            <Skeleton className="h-40" />
          </div>
        </div>
      </GradientCard>
    );
  }

  const ins = mockInsights;

  return (
    <>
    <GradientCard className="bg-gradient-to-br from-card via-card to-[hsl(var(--kk-violet)/0.03)]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[hsl(var(--kk-violet)/0.08)] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[hsl(var(--kk-orange)/0.05)] to-transparent rounded-full blur-2xl" />
      
      <div className="relative p-5 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] flex items-center justify-center shadow-md">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--kk-violet))]">AI Insights</span>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          
          {/* Column 1: SEO Score */}
          <button 
            onClick={() => setScoreDialogOpen(true)}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-[hsl(var(--kk-violet)/0.3)] transition-all cursor-pointer group"
          >
            <div className="relative w-24 h-24 mb-3">
              <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <circle 
                  cx="50" cy="50" r="42" fill="none" 
                  stroke="hsl(var(--kk-violet))" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  strokeDasharray={`${ins.score * 2.64} ${264 - ins.score * 2.64}`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-2xl font-bold ${getScoreColor(ins.score)}`}>{ins.score}</span>
                <span className="text-[10px] text-muted-foreground font-medium">/100</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm font-semibold text-foreground">SEO Score</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded-full">{ins.scoreDelta}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{ins.scoreExplanation}</p>
            <span className="text-[10px] text-[hsl(var(--kk-violet))] font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Klik voor details →
            </span>
          </button>

          {/* Column 2: Prognose */}
          <div className="flex flex-col p-4 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <TrendingUp className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{ins.prognoseLabel}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{ins.prognose}</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{ins.prognoseDetail}</p>
            <div className="mt-3 pt-3 border-t border-border/50">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">Betrouwbaarheid</span>
                <span className="font-medium text-foreground">78%</span>
              </div>
              <Progress value={78} className={`h-1.5 ${getScoreTrackColor(78)}`} />
            </div>
          </div>

          {/* Column 3: Grootste Kans */}
          <div className="flex flex-col p-4 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[hsl(var(--kk-violet)/0.2)] to-[hsl(var(--kk-violet)/0.05)] rounded-xl flex items-center justify-center border border-[hsl(var(--kk-violet)/0.2)]">
                <Target className="w-4.5 h-4.5 text-[hsl(var(--kk-violet))]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Grootste kans</p>
                <span className="text-sm font-bold text-foreground">{ins.topKans}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{ins.topKansDetail}</p>
            <div className="mt-3 pt-3 border-t border-border/50">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[hsl(var(--kk-violet))]" />
                <span className="text-xs text-[hsl(var(--kk-violet))] font-medium">AI-gegenereerd op basis van jouw data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GradientCard>
    <ScoreBreakdownDialog open={scoreDialogOpen} onOpenChange={setScoreDialogOpen} totalScore={ins.score} />
    </>
  );
};

export default HeroMetric;
