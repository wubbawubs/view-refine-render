import { Card } from "@/components/ui/card";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";

const ActionsAlerts = () => {
  const actions = [
    {
      severity: "warning",
      icon: AlertTriangle,
      title: "Verbind Google Search Console",
      description: "Voor nauwkeurige ranking- en klikgegevens",
      cta: "Verbinden",
      route: "/integrations"
    },
    {
      severity: "info", 
      icon: Info,
      title: "Toplayer mist op 1 pagina",
      description: "Contactpagina",
      cta: "Fixen",
      route: "/implementation"
    },
    {
      severity: "warning",
      icon: AlertTriangle,
      title: "Langzaam: /services (LCP 4,1s)",
      description: "Laadtijd beïnvloedt rankings",
      cta: "Bekijken",
      route: "/technical"
    }
  ];

  return (
    <Card className="p-6 shadow-card animate-fade-in rounded-2xl border border-slate-200">
      <div className="mb-6">
        <h3 className="text-kk-h2 text-[hsl(var(--kk-eggplant))]">Belangrijke acties</h3>
        <p className="text-kk-caption text-[hsl(var(--kk-gray-500))] mt-1">Items die aandacht vragen</p>
      </div>
      
      <div className="space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const isWarning = action.severity === "warning";
          
          return (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50/50 border border-slate-200">
              <Icon className={`w-5 h-5 mt-0.5 ${isWarning ? 'text-[hsl(var(--kk-warning))]' : 'text-[hsl(var(--kk-violet))]'}`} />
              
              <div className="flex-1">
                <h4 className="text-kk-label font-semibold text-[hsl(var(--kk-eggplant))] mb-1">
                  {action.title}
                </h4>
                <p className="text-kk-caption text-[hsl(var(--kk-gray-500))]">
                  {action.description}
                </p>
              </div>
              
              <button className="px-3 py-1.5 text-kk-caption font-medium text-[hsl(var(--kk-violet))] bg-white border border-[hsl(var(--kk-violet))] rounded-lg hover:bg-[hsl(var(--kk-violet))] hover:text-white transition-colors">
                {action.cta}
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ActionsAlerts;