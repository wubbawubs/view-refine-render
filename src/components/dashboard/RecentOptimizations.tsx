import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

const optimizations = [
  {
    name: "3 zoekwoorden toegevoegd",
    page: "Home pagina",
    reason: "Hierdoor vinden meer mensen je website als ze zoeken naar jouw diensten",
    impact: "Meer bezoekers verwacht",
    date: "06-06-2025",
    status: "bezig" as const
  },
  {
    name: "Tekstje aangepast", 
    page: "Over ons",
    reason: "Duidelijkere uitleg zodat bezoekers beter begrijpen wat je doet",
    impact: "15% meer interesse",
    date: "05-06-2025", 
    status: "voltooid" as const
  },
  {
    name: "Website sneller gemaakt",
    page: "Alle pagina's", 
    reason: "Snellere website = bezoekers blijven langer",
    impact: "25% snellere website",
    date: "04-06-2025",
    status: "voltooid" as const
  }
];

const statusStyles = {
  bezig: "bg-yellow-100 text-yellow-800 border-yellow-200",
  voltooid: "bg-green-100 text-green-800 border-green-200"
};

const RecentOptimizations = () => {
  return (
    <Card className="p-6 border-0 bg-white shadow-md animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recente aanpassingen</h3>
          <p className="text-sm text-gray-600">Overzicht van de laatste optimalisaties aan je website</p>
        </div>
        <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
          Oktober →
        </button>
      </div>

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">
                Aanpassing
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">
                Pagina
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">
                Reden
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">
                Impact
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">
                Datum
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">
                Status
              </th>
              <th className="w-8 pb-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {optimizations.map((opt, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 text-sm font-medium text-gray-900">{opt.name}</td>
                <td className="py-4 text-sm text-gray-600">{opt.page}</td>
                <td className="py-4 text-sm text-gray-600 max-w-xs">{opt.reason}</td>
                <td className="py-4 text-sm font-medium text-gray-900">{opt.impact}</td>
                <td className="py-4 text-sm text-gray-600">{opt.date}</td>
                <td className="py-4">
                  <Badge variant="outline" className={statusStyles[opt.status]}>
                    {opt.status}
                  </Badge>
                </td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
          Bekijk alle aanpassingen →
        </button>
      </div>
    </Card>
  );
};

export default RecentOptimizations;