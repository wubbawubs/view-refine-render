import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '1 Sep', visitors: 1200, benchmark: 950 },
  { date: '3 Sep', visitors: 1350, benchmark: 980 },
  { date: '5 Sep', visitors: 1180, benchmark: 920 },
  { date: '7 Sep', visitors: 1420, benchmark: 1100 },
  { date: '9 Sep', visitors: 1650, benchmark: 1200 },
  { date: '11 Sep', visitors: 1380, benchmark: 1050 },
  { date: '13 Sep', visitors: 1750, benchmark: 1300 },
  { date: '15 Sep', visitors: 1890, benchmark: 1350 },
  { date: '17 Sep', visitors: 2100, benchmark: 1400 },
  { date: '19 Sep', visitors: 1980, benchmark: 1380 },
  { date: '21 Sep', visitors: 2250, benchmark: 1500 },
  { date: '23 Sep', visitors: 2347, benchmark: 1520 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const visitors = payload[0]?.value || 0;
    const benchmark = payload[1]?.value || 0;
    const diff = ((visitors - benchmark) / benchmark * 100).toFixed(1);
    
    return (
      <div className="bg-card p-3 border border-border rounded-lg shadow-card">
        <p className="text-kk-caption text-muted-foreground mb-1">{label}</p>
        <p className="text-kk-label font-semibold text-foreground">
          Jouw bezoekers: {visitors.toLocaleString()} sessies
        </p>
        <p className="text-kk-caption text-muted-foreground">
          Concurrenten: {benchmark.toLocaleString()} sessies
        </p>
        <p className="text-kk-caption text-[hsl(var(--kk-success))]">
          Δ vs vorige week · Δ vs concurrenten: +{diff}%
        </p>
      </div>
    );
  }
  return null;
};

const VisitorsChart = () => {
  return (
    <Card className="glass-card p-8 shadow-luxury animate-fade-in rounded-2xl border border-border smooth-hover hover:shadow-elevated hover:scale-[1.01]">
      <div className="mb-8">
        <h3 className="text-kk-h2 text-foreground mb-2">Organische bezoekers</h3>
        <p className="text-kk-caption text-muted-foreground">Jij vs Gemiddelde concurrenten (top 3)</p>
      </div>
      
      <div className="h-64 mb-4">
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
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}k sessies`}
              label={{ value: 'Sessies', angle: -90, position: 'insideLeft' }}
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
      
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-kk-label font-semibold text-foreground">Totaal bezoekers</div>
          <div className="text-kk-caption text-muted-foreground">21.450 deze maand</div>
        </div>
        <div className="text-center">
          <div className="text-kk-label font-semibold text-[hsl(var(--kk-success))]">Groei</div>
          <div className="text-kk-caption text-muted-foreground">+24,7% vs vorige maand</div>
        </div>
        <div className="text-center">
          <div className="text-kk-label font-semibold text-[hsl(var(--kk-violet))]">Best day</div>
          <div className="text-kk-caption text-muted-foreground">23 Sep: 2.347</div>
        </div>
      </div>
    </Card>
  );
};

export default VisitorsChart;