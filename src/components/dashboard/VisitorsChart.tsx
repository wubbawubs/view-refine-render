import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '1 Sep', visitors: 45, benchmark: 38 },
  { date: '2 Sep', visitors: 52, benchmark: 41 },
  { date: '3 Sep', visitors: 38, benchmark: 35 },
  { date: '4 Sep', visitors: 67, benchmark: 43 },
  { date: '5 Sep', visitors: 89, benchmark: 48 },
  { date: '6 Sep', visitors: 76, benchmark: 45 },
  { date: '7 Sep', visitors: 95, benchmark: 52 },
  { date: '8 Sep', visitors: 114, benchmark: 58 },
  { date: '9 Sep', visitors: 128, benchmark: 62 },
  { date: '10 Sep', visitors: 142, benchmark: 65 },
  { date: '11 Sep', visitors: 156, benchmark: 68 },
  { date: '12 Sep', visitors: 167, benchmark: 72 },
  { date: '13 Sep', visitors: 145, benchmark: 69 },
  { date: '14 Sep', visitors: 178, benchmark: 75 },
  { date: '15 Sep', visitors: 189, benchmark: 78 },
  { date: '16 Sep', visitors: 195, benchmark: 80 }
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

const VisitorsChart = () => {
  return (
    <Card className="glass-card p-4 sm:p-6 lg:p-8 shadow-luxury animate-fade-in rounded-2xl border border-border smooth-hover hover:shadow-elevated hover:scale-[1.01]">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h3 className="text-lg sm:text-xl lg:text-kk-h2 text-foreground mb-2">Organische bezoekers</h3>
        <p className="text-xs sm:text-sm lg:text-kk-caption text-muted-foreground">Ontwikkeling 1-16 september vs. benchmark</p>
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
          <div className="text-xs lg:text-kk-caption text-muted-foreground">558 deze maand</div>
        </div>
        <div className="text-center">
          <div className="text-sm lg:text-kk-label font-semibold text-[hsl(var(--kk-success))]">Groei</div>
          <div className="text-xs lg:text-kk-caption text-muted-foreground">+160% vs vorige maand</div>
        </div>
        <div className="text-center">
          <div className="text-sm lg:text-kk-label font-semibold text-[hsl(var(--kk-violet))]">Best day</div>
          <div className="text-xs lg:text-kk-caption text-muted-foreground">16 Sep: 195</div>
        </div>
      </div>
    </Card>
  );
};

export default VisitorsChart;