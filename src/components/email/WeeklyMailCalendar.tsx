import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Eye, ChevronRight, ChevronDown } from "lucide-react";
import {
  weeklyMailTemplates,
  templateTypeLabels,
  templateTypeEmoji,
  type WeeklyMailTemplate,
} from "@/data/weeklyMailTemplates";

const typeColors: Record<WeeklyMailTemplate["type"], string> = {
  rapport: "bg-primary/10 text-primary border-primary/20",
  tips: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  "google-update": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "case-study": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "marketing-tip": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
};

const WeeklyMailCalendar = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const toggleWeek = (week: number) => {
    setExpandedWeek(prev => (prev === week ? null : week));
  };

  return (
    <Card className="p-6 border border-border">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
        <h3 className="text-lg font-semibold text-foreground">25-Weken Mailing Kalender</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Een mix van gepersonaliseerde rapporten, SEO tips, Google updates, succesverhalen en marketing tips.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(templateTypeLabels) as WeeklyMailTemplate["type"][]).map(type => (
          <Badge key={type} variant="outline" className={`text-xs ${typeColors[type]}`}>
            {templateTypeEmoji[type]} {templateTypeLabels[type]}
          </Badge>
        ))}
      </div>

      {/* Timeline */}
      <ScrollArea className="max-h-[600px]">
        <div className="space-y-2">
          {weeklyMailTemplates.map(template => {
            const isExpanded = expandedWeek === template.weekNumber;

            return (
              <div key={template.weekNumber} className="border border-border rounded-xl overflow-hidden">
                {/* Header row */}
                <button
                  onClick={() => toggleWeek(template.weekNumber)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-foreground">W{template.weekNumber}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground truncate">
                        {template.subject.replace("{{weekNumber}}", String(template.weekNumber))}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className={`text-xs ${typeColors[template.type]}`}>
                        {templateTypeEmoji[template.type]} {templateTypeLabels[template.type]}
                      </Badge>
                      {template.personalized && (
                        <Badge variant="outline" className="text-xs">Per klant</Badge>
                      )}
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-border bg-muted/20">
                    <div className="pt-3 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Begroeting</p>
                        <p className="text-sm text-foreground">{template.greeting}</p>
                      </div>

                      {template.sections.map((section, i) => (
                        <div key={i} className={`rounded-lg p-3 ${section.highlight ? "bg-primary/5 border border-primary/10" : "bg-card border border-border"}`}>
                          {section.title && (
                            <h4 className="text-sm font-semibold text-foreground mb-1">{section.title}</h4>
                          )}
                          {!section.content.startsWith("{{") && (
                            <p className="text-xs text-muted-foreground leading-relaxed">{section.content}</p>
                          )}
                          {section.content.startsWith("{{") && (
                            <p className="text-xs text-primary italic">Dynamisch gevuld met klantdata</p>
                          )}
                          {section.items && (
                            <ul className="mt-2 space-y-1">
                              {section.items.map((item, j) => (
                                <li key={j} className="text-xs text-muted-foreground flex gap-1.5">
                                  <span className="text-primary shrink-0">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-muted-foreground">CTA: "{template.ctaText}"</span>
                        <Button variant="outline" size="sm" className="text-xs h-7" disabled>
                          <Eye className="w-3 h-3 mr-1" /> Preview (binnenkort)
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default WeeklyMailCalendar;
