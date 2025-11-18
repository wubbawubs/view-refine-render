import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import type { Keyword } from "@/types/dashboard";
import { EmptyState } from "@/components/ui/empty-state";
import { KeywordsTableSkeleton } from "@/components/ui/loading-skeleton";

interface TopKeywordsProps {
  keywords?: Keyword[];
  loading?: boolean;
  error?: Error | null;
}

const TopKeywords = ({ keywords = [], loading = false, error = null }: TopKeywordsProps) => {
  if (loading) {
    return <KeywordsTableSkeleton />;
  }

  if (error) {
    return (
      <Card className="p-8">
        <EmptyState
          title="Fout bij laden"
          description="Er is een fout opgetreden bij het laden van keywords."
          icon="alert"
        />
      </Card>
    );
  }

  if (!keywords || keywords.length === 0) {
    return (
      <Card className="p-8">
        <EmptyState
          title="Geen keywords"
          description="Verbind uw backend om keyword data te laden."
        />
      </Card>
    );
  }
  return (
    <Card className="glass-card p-8 shadow-luxury animate-slide-up rounded-2xl border border-white/20 smooth-hover hover:shadow-elevated hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-kk-h2 text-kk-eggplant mb-2">Top keywords</h3>
          <p className="text-kk-caption text-kk-gray-500">Prestaties afgelopen 7 dagen</p>
        </div>
        <button className="text-kk-label text-kk-violet hover:text-kk-orange smooth-hover font-semibold hover:scale-105">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-kk-gray-200/50">
              <th className="text-left text-kk-caption font-semibold text-kk-gray-700 pb-4 uppercase tracking-wide">Keyword</th>
              <th className="text-center text-kk-caption font-semibold text-kk-gray-700 pb-4 uppercase tracking-wide">Positie</th>
              <th className="text-center text-kk-caption font-semibold text-kk-gray-700 pb-4 uppercase tracking-wide">Δ Positie</th>
              <th className="text-center text-kk-caption font-semibold text-kk-gray-700 pb-4 uppercase tracking-wide">CTR</th>
              <th className="text-right text-kk-caption font-semibold text-kk-gray-700 pb-4 uppercase tracking-wide">Bezoeken</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((keyword, index) => (
              <tr key={index} className="border-b border-kk-gray-100/30 smooth-hover hover:bg-gradient-to-r hover:from-kk-violet/5 hover:via-kk-fuchsia/5 hover:to-kk-orange/5 hover:scale-[1.01] cursor-pointer group">
                <td className="py-4 text-kk-label text-kk-eggplant font-semibold group-hover:text-kk-violet smooth-hover">{keyword.term}</td>
                <td className="py-4 text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-kk-gray-100 text-kk-eggplant font-bold rounded-full text-sm group-hover:bg-kk-violet group-hover:text-white smooth-hover">
                    {keyword.position}
                  </span>
                </td>
                <td className="py-4 text-center">
                  <div className="flex items-center justify-center">
                    {keyword.deltaType === "up" && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-kk-success/10 text-kk-success rounded-full">
                        <ArrowUp className="w-4 h-4" />
                        <span className="text-kk-caption font-bold">+{keyword.delta}</span>
                      </div>
                    )}
                    {keyword.deltaType === "down" && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-kk-warning/10 text-kk-warning rounded-full">
                        <ArrowDown className="w-4 h-4" />
                        <span className="text-kk-caption font-bold">{keyword.delta}</span>
                      </div>
                    )}
                    {keyword.deltaType === "neutral" && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-kk-gray-200 text-kk-gray-500 rounded-full">
                        <Minus className="w-4 h-4" />
                        <span className="text-kk-caption font-medium">0</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 text-center text-kk-label text-kk-gray-600 font-medium">{keyword.ctr}%</td>
                <td className="py-4 text-right text-kk-label text-kk-eggplant font-bold group-hover:text-kk-orange smooth-hover">{keyword.visits.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TopKeywords;