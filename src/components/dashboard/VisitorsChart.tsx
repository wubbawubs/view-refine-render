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
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-900">{`${label}`}</p>
        <p className="text-sm text-purple-600">
          {`Bezoekers: ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

const VisitorsChart = () => {
  return (
    <Card className="p-6 border-0 bg-white shadow-md animate-slide-up">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Aantal Bezoekers</h3>
        <p className="text-sm text-gray-600">Ontwikkeling afgelopen maand</p>
      </div>
      
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(280 100% 60%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(280 100% 60%)" stopOpacity={0}/>
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
              stroke="hsl(280 100% 60%)"
              strokeWidth={3}
              fill="url(#colorVisitors)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-500">9,847</div>
          <div className="text-xs text-gray-600">Totaal afgelopen maand</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">+74%</div>
          <div className="text-xs text-gray-600">Groei t.o.v. vorige maand</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">582</div>
          <div className="text-xs text-gray-600">Beste dag</div>
        </div>
      </div>
    </Card>
  );
};

export default VisitorsChart;