import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface SparklineProps {
  data: number[];
  trend?: "up" | "down" | "neutral";
  className?: string;
}

const Sparkline = ({ data, trend = "neutral", className }: SparklineProps) => {
  const chartData = data.map((value, index) => ({ value, index }));
  
  const strokeColor = {
    up: "hsl(var(--kk-success))",
    down: "hsl(var(--destructive))",
    neutral: "hsl(var(--kk-violet))"
  }[trend];

  return (
    <div className={`w-16 h-8 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Sparkline;