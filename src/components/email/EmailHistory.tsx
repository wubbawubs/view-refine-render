import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { fetchEmailLogs, type EmailLogEntry } from "@/services/email";

const templateLabels: Record<string, string> = {
  "weekly-report": "📊 Rapport",
  "biweekly-report": "📊 2-wekelijks",
  "monthly-update": "🔧 Maandupdate",
  "monthly-tips": "💡 Tips & Tops",
  "progress-update": "🔧 Update",
  "announcement": "📢 Nieuws",
  "custom": "✉️ Custom",
};

const EmailHistory = () => {
  const [logs, setLogs] = useState<EmailLogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadLogs = async () => {
    setLoading(true);
    try {
      const data = await fetchEmailLogs();
      setLogs(data);
    } catch {
      // silent
    }
    setLoading(false);
  };

  useEffect(() => { loadLogs(); }, []);

  if (loading) {
    return (
      <Card className="p-6 border border-border">
        <div className="text-center py-8 text-muted-foreground">
          <RefreshCw className="w-6 h-6 mx-auto mb-2 animate-spin" />
          <p className="text-sm">Laden...</p>
        </div>
      </Card>
    );
  }

  if (logs.length === 0) {
    return (
      <Card className="p-6 border border-border">
        <div className="text-center py-8 text-muted-foreground">
          <Mail className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Nog geen e-mails verstuurd</p>
          <p className="text-xs mt-1">Verstuurde e-mails verschijnen hier automatisch</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Verzendgeschiedenis</h3>
        <Button variant="ghost" size="sm" onClick={loadLogs}>
          <RefreshCw className="w-4 h-4 mr-1" /> Vernieuwen
        </Button>
      </div>

      <div className="divide-y divide-border max-h-[400px] overflow-y-auto">
        {logs.map(log => (
          <div key={log.id} className="py-3 flex items-center gap-3">
            {log.status === "sent" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 text-red-500 shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground truncate">{log.subject}</span>
                <Badge variant="outline" className="text-xs shrink-0">
                  {templateLabels[log.template_type] || log.template_type}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-muted-foreground">{log.recipient_email}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(log.sent_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              {log.error_message && (
                <p className="text-xs text-destructive mt-0.5">{log.error_message}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default EmailHistory;
