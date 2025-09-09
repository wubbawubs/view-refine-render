import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from 'recharts';
import { Card } from "@/components/ui/card";

const data = [
  { date: '26 Sep', visitors: 146 },
  { date: '1 Okt', visitors: 178 },
  { date: '8 Okt', visitors: 234 },
  { date: '15 Okt', visitors: 312 },
  { date: '22 Okt', visitors: 437 },
  { date: '29 Okt', visitors: 482 },
  { date: '5 Nov', visitors: 582 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border border-border rounded-lg shadow-lg">
        <p className="text-sm font-medium text-card-foreground">{`${label}`}</p>
        <p className="text-sm text-primary">
          {`Bezoekers: ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

const VisitorsChart = () => {
  return (
    <Card className="p-6 border bg-card shadow-md animate-slide-up">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-1">Aantal Bezoekers</h3>
        <p className="text-sm text-muted-foreground">Ontwikkeling afgelopen maand</p>
      </div>
      
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(25 95% 53%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(280 87% 65%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="hsl(25 95% 53%)"
              strokeWidth={3}
              fill="url(#colorVisitors)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-semibold text-warning">9,847</div>
          <div className="text-xs text-muted-foreground">Totaal afgelopen maand</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-success">+74%</div>
          <div className="text-xs text-muted-foreground">Groei t.o.v. vorige maand</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-primary">582</div>
          <div className="text-xs text-muted-foreground">Beste dag</div>
        </div>
      </div>
    </Card>
  );
};

export default VisitorsChart;