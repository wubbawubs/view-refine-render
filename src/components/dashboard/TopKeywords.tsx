import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const keywords = [
  { term: "kapper hoorn", position: 3, delta: 2, deltaType: "up", ctr: 8.4, visits: 234 },
  { term: "kapsalon hoorn centrum", position: 1, delta: 0, deltaType: "neutral", ctr: 12.1, visits: 189 },
  { term: "hair salon hoorn", position: 7, delta: -1, deltaType: "down", ctr: 4.2, visits: 87 },
  { term: "kapper hoorn stationsstraat", position: 2, delta: 1, deltaType: "up", ctr: 9.8, visits: 156 },
  { term: "kapsalon hoorn", position: 4, delta: 3, deltaType: "up", ctr: 7.3, visits: 123 },
  { term: "herenkapper hoorn", position: 5, delta: 0, deltaType: "neutral", ctr: 6.1, visits: 98 },
  { term: "hairstylist hoorn", position: 8, delta: -2, deltaType: "down", ctr: 3.8, visits: 67 },
  { term: "kapper hoorn online afspraak", position: 6, delta: 1, deltaType: "up", ctr: 5.4, visits: 89 }
];

const TopKeywords = () => {
  return (
    <Card className="p-6 bg-white border-kk-gray-200 shadow-card animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-h3 text-foreground mb-1">Top keywords</h3>
          <p className="text-small text-kk-gray-500">Prestaties afgelopen 7 dagen</p>
        </div>
        <button className="text-small text-kk-primary hover:underline">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-kk-gray-200">
              <th className="text-left text-xs-custom font-medium text-kk-gray-500 pb-3">Keyword</th>
              <th className="text-center text-xs-custom font-medium text-kk-gray-500 pb-3">Positie</th>
              <th className="text-center text-xs-custom font-medium text-kk-gray-500 pb-3">Δ Positie</th>
              <th className="text-center text-xs-custom font-medium text-kk-gray-500 pb-3">CTR</th>
              <th className="text-right text-xs-custom font-medium text-kk-gray-500 pb-3">Bezoeken</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((keyword, index) => (
              <tr key={index} className="border-b border-kk-gray-100 hover:bg-kk-gray-50">
                <td className="py-3 text-small text-foreground font-medium">{keyword.term}</td>
                <td className="py-3 text-center text-small text-foreground">#{keyword.position}</td>
                <td className="py-3 text-center">
                  <div className="flex items-center justify-center">
                    {keyword.deltaType === "up" && (
                      <div className="flex items-center gap-1 text-kk-success">
                        <ArrowUp className="w-3 h-3" />
                        <span className="text-xs-custom font-medium">+{keyword.delta}</span>
                      </div>
                    )}
                    {keyword.deltaType === "down" && (
                      <div className="flex items-center gap-1 text-kk-warning">
                        <ArrowDown className="w-3 h-3" />
                        <span className="text-xs-custom font-medium">{keyword.delta}</span>
                      </div>
                    )}
                    {keyword.deltaType === "neutral" && (
                      <div className="flex items-center gap-1 text-kk-gray-400">
                        <Minus className="w-3 h-3" />
                        <span className="text-xs-custom">0</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-3 text-center text-small text-kk-gray-600">{keyword.ctr}%</td>
                <td className="py-3 text-right text-small text-foreground font-medium">{keyword.visits.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TopKeywords;