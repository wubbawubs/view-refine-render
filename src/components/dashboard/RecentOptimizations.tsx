import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import type { Optimization } from "@/types/dashboard";
import { EmptyState } from "@/components/ui/empty-state";
import { TableSkeleton } from "@/components/ui/loading-skeleton";

const statusStyles = {
  bezig: "bg-yellow-100 text-yellow-800 border-yellow-200",
  voltooid: "bg-green-100 text-green-800 border-green-200"
};

interface RecentOptimizationsProps {
  optimizations?: Optimization[];
  loading?: boolean;
  error?: Error | null;
}

const RecentOptimizations = ({ optimizations = [], loading = false, error = null }: RecentOptimizationsProps) => {
  if (loading) {
    return (
      <Card className="p-6 border bg-card shadow-md animate-slide-up">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-card-foreground">Recente aanpassingen</h3>
          <p className="text-sm text-muted-foreground">Overzicht van de laatste optimalisaties aan je website</p>
        </div>
        <TableSkeleton />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-8">
        <EmptyState
          title="Fout bij laden"
          description="Er is een fout opgetreden bij het laden van optimalisaties."
          icon="alert"
        />
      </Card>
    );
  }

  if (!optimizations || optimizations.length === 0) {
    return (
      <Card className="p-8">
        <EmptyState
          title="Geen optimalisaties"
          description="Verbind uw backend om optimalisatie data te laden."
        />
      </Card>
    );
  }
  return (
    <Card className="p-6 border bg-card shadow-md animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Recente aanpassingen</h3>
          <p className="text-sm text-muted-foreground">Overzicht van de laatste optimalisaties aan je website</p>
        </div>
        <button className="text-warning hover:text-warning/80 text-sm font-medium transition-colors">
          Oktober →
        </button>
      </div>

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Aanpassing
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Pagina
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Reden
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Impact
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Datum
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Status
              </th>
              <th className="w-8 pb-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {optimizations.map((opt, index) => (
              <tr key={index} className="hover:bg-muted/50 transition-colors">
                <td className="py-4 text-sm font-medium text-card-foreground">{opt.name}</td>
                <td className="py-4 text-sm text-muted-foreground">{opt.page}</td>
                <td className="py-4 text-sm text-muted-foreground max-w-xs">{opt.reason}</td>
                <td className="py-4 text-sm font-medium text-card-foreground">{opt.impact}</td>
                <td className="py-4 text-sm text-muted-foreground">{opt.date}</td>
                <td className="py-4">
                  <Badge variant="outline" className={statusStyles[opt.status]}>
                    {opt.status}
                  </Badge>
                </td>
                <td className="py-4">
                  <button className="text-muted-foreground hover:text-card-foreground transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button className="text-warning hover:text-warning/80 text-sm font-medium transition-colors">
          Bekijk alle aanpassingen →
        </button>
      </div>
    </Card>
  );
};

export default RecentOptimizations;