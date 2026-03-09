import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Smartphone, Mail, Send } from "lucide-react";
import WeeklyReportTemplate, { sampleWeeklyReportData } from "./WeeklyReportTemplate";
import UpdateTemplate, { sampleProgressData, sampleAnnouncementData } from "./UpdateTemplate";

type TemplateType = "weekly-report" | "progress-update" | "announcement";

interface EmailPreviewProps {
  onSend?: (templateType: TemplateType) => void;
  selectedCustomerName?: string;
}

const EmailPreview = ({ onSend, selectedCustomerName }: EmailPreviewProps) => {
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>("weekly-report");
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const customerName = selectedCustomerName || sampleWeeklyReportData.customerName;

  const renderTemplate = () => {
    switch (activeTemplate) {
      case "weekly-report":
        return <WeeklyReportTemplate data={{ ...sampleWeeklyReportData, customerName }} />;
      case "progress-update":
        return <UpdateTemplate data={{ ...sampleProgressData, customerName }} />;
      case "announcement":
        return <UpdateTemplate data={{ ...sampleAnnouncementData, customerName }} />;
    }
  };

  const templateLabels: Record<TemplateType, string> = {
    "weekly-report": "Wekelijks Rapport",
    "progress-update": "We zijn bezig",
    "announcement": "Aankondiging",
  };

  return (
    <div className="space-y-4">
      {/* Template Selector */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <Tabs value={activeTemplate} onValueChange={(v) => setActiveTemplate(v as TemplateType)}>
          <TabsList className="h-9">
            <TabsTrigger value="weekly-report" className="text-xs">
              <Mail className="w-3 h-3 mr-1" />
              Rapport
            </TabsTrigger>
            <TabsTrigger value="progress-update" className="text-xs">
              🔧 Update
            </TabsTrigger>
            <TabsTrigger value="announcement" className="text-xs">
              📢 Nieuws
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          {/* Device toggle */}
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("desktop")}
              className={`p-2 transition-colors ${viewMode === "desktop" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("mobile")}
              className={`p-2 transition-colors ${viewMode === "mobile" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {onSend && (
            <Button 
              size="sm" 
              className="bg-kk-gradient text-white hover:opacity-90"
              onClick={() => onSend(activeTemplate)}
            >
              <Send className="w-3 h-3 mr-1" />
              Verstuur
            </Button>
          )}
        </div>
      </div>

      {/* Preview */}
      <Card className="border border-border overflow-hidden">
        {/* Email header bar */}
        <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center gap-2 text-xs text-muted-foreground">
          <Mail className="w-3 h-3" />
          <span className="font-medium">Van:</span> KlikKlaar SEO &lt;hello@klikklaarseo.nl&gt;
          <span className="mx-2">•</span>
          <span className="font-medium">Onderwerp:</span> {templateLabels[activeTemplate]} | {customerName}
        </div>
        
        <div 
          className={`bg-muted/20 p-4 sm:p-6 overflow-y-auto max-h-[600px] transition-all duration-300 ${
            viewMode === "mobile" ? "max-w-[375px] mx-auto" : ""
          }`}
        >
          {renderTemplate()}
        </div>
      </Card>
    </div>
  );
};

export default EmailPreview;
