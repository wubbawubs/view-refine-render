import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import type { ChartDataPoint } from "@/types/dashboard";

interface VisitorsChartProps {
  data?: ChartDataPoint[];
  loading?: boolean;
  error?: Error | null;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const visitors = payload[0]?.value || 0;
    const benchmark = payload[1]?.value || 0;
    const diff = benchmark > 0 ? ((visitors - benchmark) / benchmark * 100).toFixed(1) : '0';
    
    return (
      <div className="bg-card p-3 border border-border rounded-lg shadow-card">
        <p className="text-kk-caption text-muted-foreground mb-1">{label}</p>
        <p className="text-kk-label font-semibold text-foreground">
          Jouw bezoekers: {visitors.toLocaleString()}
        </p>
        <p className="text-kk-caption text-muted-foreground">
          Benchmark: {benchmark.toLocaleString()}
        </p>
        <p className="text-kk-caption text-[hsl(var(--kk-success))]">
          +{diff}% vs gemiddeld
        </p>
      </div>
    );
  }
  return null;
};

const VisitorsChart = ({ data = [], loading = false, error = null }: VisitorsChartProps) => {
  if (loading) {
    return (
      <Card className="glass-card p-4 sm:p-6 lg:p-8 shadow-luxury animate-fade-in rounded-2xl border border-border smooth-hover">
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-48 sm:h-56 lg:h-64 w-full" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="glass-card p-4 sm:p-6 lg:p-8 shadow-luxury animate-fade-in rounded-2xl border border-border">
        <EmptyState
          title="Unable to load chart"
          description="There was an error loading the visitors chart. Please try again."
          icon="alert"
        />
      </Card>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Card className="glass-card p-4 sm:p-6 lg:p-8 shadow-luxury animate-fade-in rounded-2xl border border-border smooth-hover">
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h3 className="text-lg sm:text-xl lg:text-kk-h2 text-foreground mb-2">Organische bezoekers</h3>
          <p className="text-xs sm:text-sm lg:text-kk-caption text-muted-foreground">Ontwikkeling vs. benchmark</p>
        </div>
        <EmptyState
          title="Geen data beschikbaar"
          description="Er zijn momenteel geen bezoekersgegevens om weer te geven."
          icon="database"
        />
      </Card>
    );
  }

  // Calculate summary stats
  const totalVisitors = data.reduce((sum, d) => sum + d.visitors, 0);
  const avgBenchmark = data.reduce((sum, d) => sum + d.benchmark, 0) / data.length;
  const avgVisitors = totalVisitors / data.length;
  const growth = avgBenchmark > 0 ? ((avgVisitors - avgBenchmark) / avgBenchmark * 100).toFixed(1) : 'N/A';
  const bestDay = data.reduce((max, d) => d.visitors > max.visitors ? d : max, data[0]);

  return (
    <Card className="glass-card p-4 sm:p-6 lg:p-8 shadow-luxury animate-fade-in rounded-2xl border border-border smooth-hover hover:shadow-elevated hover:scale-[1.01]">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-kk-h2 text-foreground mb-2">Organische bezoekers</h3>
        <p className="text-xs sm:text-sm lg:text-kk-caption text-muted-foreground">Ontwikkeling vs. benchmark</p>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64 mb-4 w-full overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--kk-violet))" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="hsl(var(--kk-violet))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="benchmark"
              stroke="hsl(var(--kk-gray-300))"
              strokeWidth={2}
              strokeDasharray="4 4"
              fill="transparent"
              name="Benchmark"
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="hsl(var(--kk-violet))"
              strokeWidth={3}
              fill="url(#visitorsGradient)"
              name="Jouw bezoekers"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-sm lg:text-kk-label font-semibold text-foreground">Totaal bezoekers</div>
          <div className="text-xs lg:text-kk-caption text-muted-foreground">3,676 deze maand</div>
        </div>
        <div className="text-center">
          <div className="text-sm lg:text-kk-label font-semibold text-[hsl(var(--kk-success))]">Groei</div>
          <div className="text-xs lg:text-kk-caption text-muted-foreground">+245% vs vorige maand</div>
        </div>
        <div className="text-center">
          <div className="text-sm lg:text-kk-label font-semibold text-[hsl(var(--kk-violet))]">Best day</div>
          <div className="text-xs lg:text-kk-caption text-muted-foreground">24 Sep: 256</div>
        </div>
      </div>
    </Card>
  );
};

export default VisitorsChart;