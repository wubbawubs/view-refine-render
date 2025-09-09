import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Link, Zap } from "lucide-react";

const actions = [
  {
    severity: "warning",
    icon: Link,
    title: "Verbind Google Search Console",
    description: "Voor nauwkeurige ranking- en klikgegevens",
    cta: "Verbinden",
    route: "/integrations"
  },
  {
    severity: "info", 
    icon: AlertTriangle,
    title: "Toplayer ontbreekt op 1 pagina",
    description: "Contact-pagina mist lokale SEO optimalisaties",
    cta: "Fixen",
    route: "/implementation"
  },
  {
    severity: "warning",
    icon: Zap,
    title: "Langzame pagina: /services (LCP 4.1s)",
    description: "Laadtijd beïnvloedt rankings en gebruikerservaring",
    cta: "Bekijken", 
    route: "/performance"
  }
];

const severityStyles = {
  warning: "border-l-kk-warning bg-kk-warning/5",
  info: "border-l-kk-primary bg-kk-primary/5",
  error: "border-l-red-500 bg-red-50"
};

const ActionsAlerts = () => {
  return (
    <Card className="p-6 bg-white border-kk-gray-200 shadow-card animate-fade-in">
      <div className="mb-6">
        <h3 className="text-h3 text-foreground mb-1">Belangrijke acties</h3>
        <p className="text-small text-kk-gray-500">Items die jouw aandacht vragen</p>
      </div>

      <div className="space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <div 
              key={index}
              className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${severityStyles[action.severity as keyof typeof severityStyles]}`}
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-kk-gray-200">
                <Icon className="w-5 h-5 text-kk-gray-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-small mb-1">{action.title}</h4>
                <p className="text-xs-custom text-kk-gray-500 mb-3">{action.description}</p>
                
                <Button 
                  size="sm" 
                  className="bg-kk-primary hover:bg-kk-primary/90 text-white text-xs-custom px-3 py-1 h-auto"
                >
                  {action.cta}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ActionsAlerts;