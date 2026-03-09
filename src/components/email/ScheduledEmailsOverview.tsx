import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail } from "lucide-react";

const schedules = [
  {
    name: "2-Wekelijks SEO Rapport",
    emoji: "📊",
    frequency: "Elke 2 weken (maandag 09:00)",
    description: "SEO score, ranking veranderingen, optimalisaties en tips",
    template: "biweekly-report",
    status: "active" as const,
  },
  {
    name: "Maandelijkse Update",
    emoji: "🔧",
    frequency: "1x per maand (1e van de maand)",
    description: "Overzicht van uitgevoerde acties, volgende stappen en Google-geduld uitleg",
    template: "monthly-update",
    status: "active" as const,
  },
  {
    name: "Maandelijkse Tips & Tops",
    emoji: "💡",
    frequency: "1x per maand (15e van de maand)",
    description: "SEO tips, Google trends en inzichten voor betere rankings",
    template: "monthly-tips",
    status: "active" as const,
  },
];

const ScheduledEmailsOverview = () => {
  return (
    <Card className="p-6 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
        <h3 className="text-lg font-semibold text-foreground">Geplande Mailings</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Deze mailings worden automatisch verstuurd naar klanten met wekelijkse rapporten ingeschakeld.
      </p>

      <div className="space-y-4">
        {schedules.map(schedule => (
          <div key={schedule.template} className="p-4 rounded-xl bg-muted/30 border border-border">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{schedule.emoji}</span>
                <h4 className="font-semibold text-foreground text-sm">{schedule.name}</h4>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0 text-xs">
                Actief
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{schedule.description}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{schedule.frequency}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
        <div className="flex items-start gap-2">
          <Mail className="w-4 h-4 text-primary mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Klanten ontvangen alleen mailings als <strong>"Wekelijkse Rapporten"</strong> is ingeschakeld in hun accountinstellingen. 
            Je kunt dit per klant beheren via het klantoverzicht.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ScheduledEmailsOverview;
