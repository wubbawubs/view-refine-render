import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeframeOption {
  value: string;
  label: string;
  active?: boolean;
}

const TimeframeControl = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d");
  
  const timeframes: TimeframeOption[] = [
    { value: "7d", label: "7 dagen" },
    { value: "30d", label: "30 dagen", active: true },
    { value: "90d", label: "90 dagen" },
    { value: "custom", label: "Aangepast" }
  ];

  return (
    <div className="flex items-center gap-2">
      {timeframes.map((timeframe) => (
        <button
          key={timeframe.value}
          onClick={() => setSelectedTimeframe(timeframe.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-lg transition-colors border",
            selectedTimeframe === timeframe.value
              ? "text-[hsl(var(--kk-violet))] bg-card border-[hsl(var(--kk-violet))]"
              : "text-muted-foreground bg-card border-border hover:bg-accent"
          )}
        >
          {timeframe.label}
        </button>
      ))}
    </div>
  );
};

export default TimeframeControl;