import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Calendar,
  Eye,
  Edit3,
  Save,
  X,
  Plus,
  Trash2,
  Copy,
  Search,
  Filter,
  Monitor,
  Smartphone,
  ChevronLeft,
  ChevronRight,
import {
  weeklyMailTemplates,
  templateTypeLabels,
  templateTypeEmoji,
  type WeeklyMailTemplate,
} from "@/data/weeklyMailTemplates";
import { toast } from "sonner";
import LiveEmailPreview from "./LiveEmailPreview";

const typeColors: Record<WeeklyMailTemplate["type"], string> = {
  rapport: "bg-primary/10 text-primary border-primary/20",
  tips: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  "google-update": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "case-study": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "marketing-tip": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
};

const typeColorsDot: Record<WeeklyMailTemplate["type"], string> = {
  rapport: "bg-primary",
  tips: "bg-amber-500",
  "google-update": "bg-blue-500",
  "case-study": "bg-emerald-500",
  "marketing-tip": "bg-purple-500",
};

const WeeklyMailManager = () => {
  const [templates, setTemplates] = useState<WeeklyMailTemplate[]>([...weeklyMailTemplates]);
  const [editingTemplate, setEditingTemplate] = useState<WeeklyMailTemplate | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");

  const filteredTemplates = templates.filter((t) => {
    const matchesSearch =
      searchQuery === "" ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.headerTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || t.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const openEditor = (template: WeeklyMailTemplate) => {
    setEditingTemplate(JSON.parse(JSON.stringify(template)));
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!editingTemplate) return;
    setTemplates((prev) =>
      prev.map((t) => (t.weekNumber === editingTemplate.weekNumber ? editingTemplate : t))
    );
    setDialogOpen(false);
    toast.success(`Template Week ${editingTemplate.weekNumber} opgeslagen`);
  };

  const handleDuplicate = (template: WeeklyMailTemplate) => {
    const newWeek = templates.length + 1;
    const duplicate: WeeklyMailTemplate = {
      ...JSON.parse(JSON.stringify(template)),
      weekNumber: newWeek,
      subject: `${template.subject} (kopie)`,
    };
    setTemplates((prev) => [...prev, duplicate]);
    toast.success(`Template gedupliceerd als Week ${newWeek}`);
  };

  const handleDelete = (weekNumber: number) => {
    setTemplates((prev) => prev.filter((t) => t.weekNumber !== weekNumber));
    toast.success("Template verwijderd");
  };

  const updateSection = (index: number, field: string, value: string) => {
    if (!editingTemplate) return;
    const updated = { ...editingTemplate };
    updated.sections = [...updated.sections];
    updated.sections[index] = { ...updated.sections[index], [field]: value };
    setEditingTemplate(updated);
  };

  const addSection = () => {
    if (!editingTemplate) return;
    setEditingTemplate({
      ...editingTemplate,
      sections: [...editingTemplate.sections, { title: "", content: "" }],
    });
  };

  const removeSection = (index: number) => {
    if (!editingTemplate) return;
    setEditingTemplate({
      ...editingTemplate,
      sections: editingTemplate.sections.filter((_, i) => i !== index),
    });
  };

  const toggleSectionHighlight = (index: number) => {
    if (!editingTemplate) return;
    const updated = { ...editingTemplate };
    updated.sections = [...updated.sections];
    updated.sections[index] = {
      ...updated.sections[index],
      highlight: !updated.sections[index].highlight,
    };
    setEditingTemplate(updated);
  };

  // Stats
  const typeCounts = templates.reduce(
    (acc, t) => {
      acc[t.type] = (acc[t.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Card className="p-3 border border-border text-center">
          <div className="text-2xl font-bold text-foreground">{templates.length}</div>
          <div className="text-xs text-muted-foreground">Totaal</div>
        </Card>
        {(Object.keys(templateTypeLabels) as WeeklyMailTemplate["type"][]).map((type) => (
          <Card key={type} className="p-3 border border-border text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <div className={`w-2 h-2 rounded-full ${typeColorsDot[type]}`} />
              <span className="text-2xl font-bold text-foreground">{typeCounts[type] || 0}</span>
            </div>
            <div className="text-xs text-muted-foreground">{templateTypeLabels[type]}</div>
          </Card>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-1 w-full sm:w-auto">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Zoek template..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[160px]">
              <Filter className="w-3.5 h-3.5 mr-1.5" />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle types</SelectItem>
              {(Object.keys(templateTypeLabels) as WeeklyMailTemplate["type"][]).map((type) => (
                <SelectItem key={type} value={type}>
                  {templateTypeEmoji[type]} {templateTypeLabels[type]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Template List */}
      <ScrollArea className="max-h-[calc(100vh-400px)]">
        <div className="space-y-2">
          {filteredTemplates.map((template) => (
            <Card
              key={template.weekNumber}
              className="p-0 border border-border hover:border-primary/30 transition-colors overflow-hidden"
            >
              <div className="flex items-center gap-0">
                <div className={`w-1.5 self-stretch ${typeColorsDot[template.type]}`} />
                <div className="flex items-center gap-3 flex-1 px-4 py-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-foreground">
                      W{template.weekNumber}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-medium text-foreground truncate">
                        {template.subject.replace("{{weekNumber}}", String(template.weekNumber))}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-xs ${typeColors[template.type]}`}>
                        {templateTypeEmoji[template.type]} {templateTypeLabels[template.type]}
                      </Badge>
                      {template.personalized && (
                        <Badge variant="outline" className="text-xs">🎯 Gepersonaliseerd</Badge>
                      )}
                      <span className="text-xs text-muted-foreground hidden sm:inline">
                        {template.sections.length} secties
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEditor(template)} title="Bewerken">
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDuplicate(template)} title="Dupliceren">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => handleDelete(template.weekNumber)} title="Verwijderen">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Geen templates gevonden</p>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Edit Dialog with Live Preview */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-[95vw] w-full h-[92vh] p-0 gap-0 overflow-hidden flex flex-col">
          {editingTemplate && (
            <div className="flex flex-1 min-h-0">
              {/* Left: Editor */}
              <div className="w-full lg:w-[420px] xl:w-[460px] shrink-0 border-r border-border flex flex-col min-h-0">
                {/* Editor Header */}
                <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-xs font-bold text-foreground">W{editingTemplate.weekNumber}</span>
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-foreground">Template bewerken</h2>
                      <p className="text-xs text-muted-foreground">Week {editingTemplate.weekNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Editor Body */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-5 space-y-5">
                    {/* Type & Personalized */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label className="text-xs">Type</Label>
                        <Select
                          value={editingTemplate.type}
                          onValueChange={(v: WeeklyMailTemplate["type"]) =>
                            setEditingTemplate({ ...editingTemplate, type: v })
                          }
                        >
                          <SelectTrigger className="h-9">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {(Object.keys(templateTypeLabels) as WeeklyMailTemplate["type"][]).map((type) => (
                              <SelectItem key={type} value={type}>
                                {templateTypeEmoji[type]} {templateTypeLabels[type]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs">Gepersonaliseerd</Label>
                        <div className="flex items-center gap-2 h-9">
                          <Switch
                            checked={editingTemplate.personalized}
                            onCheckedChange={(v) =>
                              setEditingTemplate({ ...editingTemplate, personalized: v })
                            }
                          />
                          <span className="text-xs text-muted-foreground">
                            {editingTemplate.personalized ? "Ja" : "Nee"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <Label className="text-xs">Onderwerp</Label>
                      <Input
                        value={editingTemplate.subject}
                        onChange={(e) =>
                          setEditingTemplate({ ...editingTemplate, subject: e.target.value })
                        }
                        className="h-9"
                      />
                    </div>

                    {/* Header */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label className="text-xs">Header titel</Label>
                        <Input
                          value={editingTemplate.headerTitle}
                          onChange={(e) =>
                            setEditingTemplate({ ...editingTemplate, headerTitle: e.target.value })
                          }
                          className="h-9"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs">Header subtitel</Label>
                        <Input
                          value={editingTemplate.headerSubtitle}
                          onChange={(e) =>
                            setEditingTemplate({ ...editingTemplate, headerSubtitle: e.target.value })
                          }
                          className="h-9"
                        />
                      </div>
                    </div>

                    {/* Greeting */}
                    <div className="space-y-1.5">
                      <Label className="text-xs">Begroeting</Label>
                      <Textarea
                        value={editingTemplate.greeting}
                        onChange={(e) =>
                          setEditingTemplate({ ...editingTemplate, greeting: e.target.value })
                        }
                        rows={2}
                        className="text-sm"
                      />
                    </div>

                    {/* Sections */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xs font-semibold">Secties</Label>
                        <Button variant="outline" size="sm" className="h-7 text-xs" onClick={addSection}>
                          <Plus className="w-3 h-3 mr-1" />
                          Toevoegen
                        </Button>
                      </div>

                      {editingTemplate.sections.map((section, i) => (
                        <Card
                          key={i}
                          className={`p-3 border space-y-2 ${
                            section.highlight ? "border-primary/30 bg-primary/5" : "border-border"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-muted-foreground">Sectie {i + 1}</span>
                            <div className="flex items-center gap-0.5">
                              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => toggleSectionHighlight(i)}>
                                <Eye className={`w-3 h-3 ${section.highlight ? "text-primary" : ""}`} />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive" onClick={() => removeSection(i)}>
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <Input
                            placeholder="Titel (optioneel)"
                            value={section.title || ""}
                            onChange={(e) => updateSection(i, "title", e.target.value)}
                            className="text-sm h-8"
                          />
                          <Textarea
                            placeholder="Inhoud..."
                            value={section.content}
                            onChange={(e) => updateSection(i, "content", e.target.value)}
                            rows={2}
                            className="text-sm"
                          />
                        </Card>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="space-y-1.5">
                      <Label className="text-xs">CTA tekst</Label>
                      <Input
                        value={editingTemplate.ctaText}
                        onChange={(e) =>
                          setEditingTemplate({ ...editingTemplate, ctaText: e.target.value })
                        }
                        className="h-9"
                      />
                    </div>
                  </div>
                </div>

                {/* Editor Footer */}
                <div className="px-5 py-3 border-t border-border flex gap-2">
                  <Button className="flex-1 bg-kk-gradient text-white hover:opacity-90" onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Opslaan
                  </Button>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Annuleren
                  </Button>
                </div>
              </div>

              {/* Right: Live Preview */}
              <div className="hidden lg:flex flex-col flex-1 bg-muted/30">
                {/* Preview Header */}
                <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-background">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Live Preview</span>
                  </div>
                  <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
                    <Button
                      variant={previewDevice === "desktop" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => setPreviewDevice("desktop")}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant={previewDevice === "mobile" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => setPreviewDevice("mobile")}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Preview Body */}
                <ScrollArea className="flex-1">
                  <div className="p-6">
                    <LiveEmailPreview template={editingTemplate} deviceView={previewDevice} />
                  </div>
                </ScrollArea>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WeeklyMailManager;
