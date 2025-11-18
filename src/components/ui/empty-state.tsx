import { Card } from "@/components/ui/card";
import { FileQuestion, Database, AlertCircle } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: "file" | "database" | "alert";
  className?: string;
}

export const EmptyState = ({
  title = "Geen data beschikbaar",
  description = "Er is momenteel geen data om weer te geven. Verbind uw backend om data te laden.",
  icon = "database",
  className = "",
}: EmptyStateProps) => {
  const icons = {
    file: FileQuestion,
    database: Database,
    alert: AlertCircle,
  };

  const Icon = icons[icon];

  return (
    <Card className={`p-12 text-center ${className}`}>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-kk-gray-100 flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-kk-gray-400" />
        </div>
        <h3 className="text-kk-h3 text-kk-eggplant mb-2">{title}</h3>
        <p className="text-kk-body text-kk-gray-500 max-w-md">{description}</p>
      </div>
    </Card>
  );
};

export const ErrorState = ({
  title = "Er is iets misgegaan",
  description = "We konden de data niet laden. Probeer het later opnieuw.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) => {
  return (
    <Card className="p-12 text-center border-kk-warning/30">
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-kk-warning/10 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-kk-warning" />
        </div>
        <h3 className="text-kk-h3 text-kk-eggplant mb-2">{title}</h3>
        <p className="text-kk-body text-kk-gray-500 max-w-md mb-4">{description}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-kk-violet text-white rounded-lg hover:bg-kk-violet/90 transition-colors"
          >
            Opnieuw proberen
          </button>
        )}
      </div>
    </Card>
  );
};
