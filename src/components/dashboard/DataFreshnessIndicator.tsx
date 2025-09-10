import { Clock, Wifi } from "lucide-react";

const DataFreshnessIndicator = () => {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span>Laatst bijgewerkt: 9 sep 2025, 14:32</span>
      </div>
      <div className="w-px h-4 bg-border"></div>
      <div className="flex items-center gap-2">
        <Wifi className="w-4 h-4 text-green-500" />
        <span>Data vers: 12 min geleden</span>
      </div>
    </div>
  );
};

export default DataFreshnessIndicator;