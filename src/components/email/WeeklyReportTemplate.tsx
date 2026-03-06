import { Card } from "@/components/ui/card";

export interface WeeklyReportData {
  customerName: string;
  seoScore: number;
  seoScoreDelta: number;
  optimizationsCount: number;
  topKeywordChanges: { keyword: string; oldPosition: number; newPosition: number }[];
  tips: string[];
  weekNumber: number;
  dashboardUrl?: string;
}

interface WeeklyReportTemplateProps {
  data: WeeklyReportData;
  previewMode?: boolean;
}

const WeeklyReportTemplate = ({ data, previewMode = true }: WeeklyReportTemplateProps) => {
  const scoreColor = data.seoScore >= 80 ? "#10b981" : data.seoScore >= 60 ? "#f59e0b" : "#ef4444";
  const deltaIcon = data.seoScoreDelta >= 0 ? "↑" : "↓";
  const deltaColor = data.seoScoreDelta >= 0 ? "#10b981" : "#ef4444";

  if (!previewMode) {
    // Return raw HTML string for email sending
    return null;
  }

  return (
    <div className="max-w-[600px] mx-auto font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-[hsl(var(--kk-violet))] via-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))] rounded-t-2xl p-6 text-center">
        <img 
          src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
          alt="KlikKlaar" 
          className="h-10 mx-auto mb-3"
        />
        <h1 className="text-white text-xl font-bold">Wekelijks SEO Rapport</h1>
        <p className="text-white/80 text-sm">Week {data.weekNumber}</p>
      </div>

      {/* Body */}
      <div className="bg-card border border-t-0 border-border rounded-b-2xl">
        {/* Greeting */}
        <div className="p-6 border-b border-border">
          <p className="text-foreground text-base">
            Hoi <strong>{data.customerName}</strong>,
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Hier is je wekelijkse SEO update. We hebben weer hard gewerkt aan het verbeteren van jouw online zichtbaarheid!
          </p>
        </div>

        {/* SEO Score Card */}
        <div className="p-6 border-b border-border">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">SEO Score</h2>
          <div className="flex items-center gap-4">
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              style={{ backgroundColor: scoreColor }}
            >
              {data.seoScore}
            </div>
            <div>
              <p className="text-foreground font-semibold text-lg">
                {data.seoScore}%
              </p>
              <p className="text-sm" style={{ color: deltaColor }}>
                {deltaIcon} {Math.abs(data.seoScoreDelta)}% t.o.v. vorige week
              </p>
            </div>
          </div>
        </div>

        {/* Optimizations */}
        <div className="p-6 border-b border-border">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Optimalisaties</h2>
          <div className="bg-[hsl(var(--kk-violet)/0.08)] rounded-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--kk-violet))] flex items-center justify-center text-white text-lg font-bold">
              {data.optimizationsCount}
            </div>
            <div>
              <p className="text-foreground font-medium">optimalisaties uitgevoerd</p>
              <p className="text-muted-foreground text-xs">deze week automatisch toegepast</p>
            </div>
          </div>
        </div>

        {/* Keyword Changes */}
        {data.topKeywordChanges.length > 0 && (
          <div className="p-6 border-b border-border">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Ranking Veranderingen</h2>
            <div className="space-y-2">
              {data.topKeywordChanges.map((kw, i) => {
                const improved = kw.newPosition < kw.oldPosition;
                return (
                  <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/30">
                    <span className="text-sm text-foreground font-medium">"{kw.keyword}"</span>
                    <span className={`text-sm font-semibold ${improved ? 'text-emerald-600' : 'text-red-500'}`}>
                      {improved ? '↑' : '↓'} Positie {kw.newPosition}
                      <span className="text-muted-foreground text-xs ml-1">(was {kw.oldPosition})</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tips */}
        {data.tips.length > 0 && (
          <div className="p-6 border-b border-border">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">💡 Tips voor deze week</h2>
            <div className="space-y-2">
              {data.tips.map((tip, i) => (
                <div key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="text-[hsl(var(--kk-orange))] font-bold shrink-0">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-6 text-center">
          <a
            href={data.dashboardUrl || "#"}
            className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] hover:opacity-90 transition-opacity shadow-md"
          >
            Bekijk je volledige dashboard →
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Dit is een automatisch gegenereerd rapport van KlikKlaar.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReportTemplate;

// Helper to generate sample data for preview
export const sampleWeeklyReportData: WeeklyReportData = {
  customerName: "Bakkerij De Groot",
  seoScore: 87,
  seoScoreDelta: 4,
  optimizationsCount: 12,
  topKeywordChanges: [
    { keyword: "ambachtelijk brood", oldPosition: 8, newPosition: 4 },
    { keyword: "bakkerij amsterdam", oldPosition: 15, newPosition: 11 },
    { keyword: "verse croissants", oldPosition: 22, newPosition: 18 },
  ],
  tips: [
    "Voeg meer interne links toe naar je productpagina's voor betere indexering",
    "Overweeg een blog post over seizoensgebonden producten voor meer organisch verkeer",
  ],
  weekNumber: 12,
  dashboardUrl: "https://dashboard.klikklaar.io",
};
