import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Mail, Users, AlertTriangle } from "lucide-react";
import EmailPreview from "./EmailPreview";
import { toast } from "sonner";
import { sendBulkEmail } from "@/services/email";

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
  plan: string;
}

interface BulkMailDialogProps {
  customers: Customer[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BulkMailDialog = ({ customers, open, onOpenChange }: BulkMailDialogProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [templateType, setTemplateType] = useState<string>("weekly-report");
  const [step, setStep] = useState<"select" | "preview" | "confirm">("select");
  const [sending, setSending] = useState(false);

  const activeCustomers = customers.filter(c => c.status === "active" || c.status === "pending");

  const toggleCustomer = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedIds.length === activeCustomers.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(activeCustomers.map(c => c.id));
    }
  };

  const handleSend = async () => {
    setSending(true);
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSending(false);
    toast.success(`E-mail verstuurd naar ${selectedIds.length} klanten`, {
      description: `Template: ${templateType}`
    });
    onOpenChange(false);
    setStep("select");
    setSelectedIds([]);
  };

  const templateLabels: Record<string, string> = {
    "weekly-report": "Wekelijks Rapport",
    "progress-update": "We zijn bezig (update)",
    "announcement": "Aankondiging / Nieuws",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
            Bulk E-mail Versturen
          </DialogTitle>
          <DialogDescription>
            Selecteer klanten en een template om een bulk e-mail te versturen
          </DialogDescription>
        </DialogHeader>

        {step === "select" && (
          <div className="space-y-4">
            {/* Template Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Template</label>
              <Select value={templateType} onValueChange={setTemplateType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly-report">📊 Wekelijks Rapport</SelectItem>
                  <SelectItem value="progress-update">🔧 We zijn bezig (update)</SelectItem>
                  <SelectItem value="announcement">📢 Aankondiging / Nieuws</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Customer Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Klanten selecteren</label>
                <Button variant="ghost" size="sm" className="text-xs" onClick={toggleAll}>
                  {selectedIds.length === activeCustomers.length ? "Deselecteer alles" : "Selecteer alles"}
                </Button>
              </div>
              
              <div className="border border-border rounded-lg max-h-[300px] overflow-y-auto divide-y divide-border">
                {activeCustomers.map(customer => (
                  <label 
                    key={customer.id} 
                    className="flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <Checkbox 
                      checked={selectedIds.includes(customer.id)}
                      onCheckedChange={() => toggleCustomer(customer.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-foreground">{customer.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">{customer.email}</span>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">{customer.plan}</Badge>
                  </label>
                ))}
              </div>

              <p className="text-xs text-muted-foreground">
                <Users className="w-3 h-3 inline mr-1" />
                {selectedIds.length} van {activeCustomers.length} klanten geselecteerd
              </p>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => onOpenChange(false)}>Annuleren</Button>
              <Button 
                onClick={() => setStep("preview")}
                disabled={selectedIds.length === 0}
              >
                Preview bekijken →
              </Button>
            </DialogFooter>
          </div>
        )}

        {step === "preview" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Badge variant="secondary">{templateLabels[templateType]}</Badge>
              <span>→ {selectedIds.length} klanten</span>
            </div>

            <EmailPreview selectedCustomerName="[Klantnaam]" />

            <DialogFooter>
              <Button variant="outline" onClick={() => setStep("select")}>← Terug</Button>
              <Button 
                onClick={() => setStep("confirm")}
                className="bg-kk-gradient text-white hover:opacity-90"
              >
                Versturen bevestigen
              </Button>
            </DialogFooter>
          </div>
        )}

        {step === "confirm" && (
          <div className="space-y-4">
            <Card className="p-4 border-[hsl(var(--kk-warning))] bg-[hsl(var(--kk-warning)/0.05)]">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-[hsl(var(--kk-warning))] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Bevestig verzending</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Je staat op het punt om een <strong>{templateLabels[templateType]}</strong> e-mail 
                    te versturen naar <strong>{selectedIds.length} klanten</strong>. 
                    Dit kan niet ongedaan worden gemaakt.
                  </p>
                </div>
              </div>
            </Card>

            <div className="border border-border rounded-lg p-3">
              <h5 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Ontvangers</h5>
              <div className="flex flex-wrap gap-1">
                {customers
                  .filter(c => selectedIds.includes(c.id))
                  .map(c => (
                    <Badge key={c.id} variant="secondary" className="text-xs">{c.name}</Badge>
                  ))}
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setStep("preview")}>← Terug</Button>
              <Button 
                onClick={handleSend}
                disabled={sending}
                className="bg-kk-gradient text-white hover:opacity-90"
              >
                {sending ? (
                  <>Versturen...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Definitief versturen
                  </>
                )}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BulkMailDialog;
