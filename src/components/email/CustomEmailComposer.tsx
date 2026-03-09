import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Eye, ArrowLeft, AlertTriangle, Users } from "lucide-react";
import { toast } from "sonner";
import { sendCustomEmail } from "@/services/email";

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
}

interface CustomEmailComposerProps {
  customers: Customer[];
}

const CustomEmailComposer = ({ customers }: CustomEmailComposerProps) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [step, setStep] = useState<"compose" | "preview" | "sending">("compose");
  const [sending, setSending] = useState(false);

  const activeCustomers = customers.filter(c => c.status === "active" || c.status === "pending");

  const toggleCustomer = (id: number) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleAll = () => {
    setSelectedIds(prev => prev.length === activeCustomers.length ? [] : activeCustomers.map(c => c.id));
  };

  const handleSend = async () => {
    setSending(true);
    try {
      const recipients = customers
        .filter(c => selectedIds.includes(c.id))
        .map(c => ({ name: c.name, email: c.email }));

      const result = await sendCustomEmail(recipients, subject, body);
      if (result.success) {
        toast.success(`E-mail verstuurd naar ${result.sent} klanten`);
        setSubject("");
        setBody("");
        setSelectedIds([]);
        setStep("compose");
      } else {
        toast.error("Versturen mislukt", { description: result.error });
      }
    } catch {
      toast.error("Versturen mislukt");
    }
    setSending(false);
  };

  if (step === "preview") {
    return (
      <div className="space-y-4">
        <Button variant="ghost" size="sm" onClick={() => setStep("compose")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Terug naar bewerken
        </Button>

        <Card className="overflow-hidden border border-border">
          <div className="bg-muted/50 px-4 py-2 border-b border-border text-xs text-muted-foreground">
            <strong>Van:</strong> KlikKlaar SEO &lt;hello@klikklaarseo.nl&gt; · <strong>Onderwerp:</strong> {subject}
          </div>
          <div className="bg-muted/20 p-6 max-w-[600px] mx-auto">
            <div className="bg-gradient-to-r from-[hsl(var(--kk-violet))] via-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))] rounded-t-2xl p-6 text-center">
              <h1 className="text-white text-xl font-bold">✉️ Bericht van KlikKlaar SEO</h1>
            </div>
            <div className="bg-card border border-t-0 border-border rounded-b-2xl p-6">
              <p className="text-foreground text-base mb-4">
                Hoi <strong>[Klantnaam]</strong>,
              </p>
              <div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{body}</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-[hsl(var(--kk-warning))] bg-[hsl(var(--kk-warning)/0.05)]">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-[hsl(var(--kk-warning))] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">Verstuur naar {selectedIds.length} klanten?</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {customers.filter(c => selectedIds.includes(c.id)).map(c => (
                  <Badge key={c.id} variant="secondary" className="text-xs">{c.name}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setStep("compose")}>Terug</Button>
          <Button onClick={handleSend} disabled={sending} className="bg-kk-gradient text-white hover:opacity-90">
            {sending ? "Versturen..." : <><Send className="w-4 h-4 mr-2" />Definitief versturen</>}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Compose form */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Onderwerp</Label>
          <Input 
            placeholder="Bijv: Belangrijke update over je website..." 
            value={subject} 
            onChange={e => setSubject(e.target.value)} 
          />
        </div>
        <div className="space-y-2">
          <Label>Bericht</Label>
          <Textarea 
            placeholder="Schrijf hier je bericht. [Klantnaam] wordt automatisch vervangen per ontvanger."
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={8}
          />
          <p className="text-xs text-muted-foreground">Tip: het bericht wordt automatisch verpakt in de KlikKlaar branded e-mail template.</p>
        </div>
      </div>

      {/* Recipients */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Ontvangers</Label>
          <Button variant="ghost" size="sm" className="text-xs" onClick={toggleAll}>
            {selectedIds.length === activeCustomers.length ? "Deselecteer alles" : "Selecteer alles"}
          </Button>
        </div>
        <div className="border border-border rounded-lg max-h-[200px] overflow-y-auto divide-y divide-border">
          {activeCustomers.map(customer => (
            <label key={customer.id} className="flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer transition-colors">
              <Checkbox checked={selectedIds.includes(customer.id)} onCheckedChange={() => toggleCustomer(customer.id)} />
              <span className="text-sm font-medium text-foreground">{customer.name}</span>
              <span className="text-xs text-muted-foreground">{customer.email}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          <Users className="w-3 h-3 inline mr-1" />{selectedIds.length} van {activeCustomers.length} klanten geselecteerd
        </p>
      </div>

      <div className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          disabled={!subject || !body || selectedIds.length === 0}
          onClick={() => setStep("preview")}
        >
          <Eye className="w-4 h-4 mr-1" /> Preview
        </Button>
        <Button 
          disabled={!subject || !body || selectedIds.length === 0}
          onClick={() => setStep("preview")}
          className="bg-kk-gradient text-white hover:opacity-90"
        >
          Doorgaan →
        </Button>
      </div>
    </div>
  );
};

export default CustomEmailComposer;
