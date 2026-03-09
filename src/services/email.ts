import { supabase } from "@/integrations/supabase/client";

interface EmailRecipient {
  name: string;
  email: string;
  clientId?: string;
}

export type EmailTemplate = 
  | "weekly-report" 
  | "biweekly-report" 
  | "progress-update" 
  | "monthly-update" 
  | "monthly-tips" 
  | "announcement" 
  | "custom";

interface SendEmailParams {
  recipients: EmailRecipient[];
  template: EmailTemplate;
  data: Record<string, unknown>;
}

interface SendEmailResult {
  success: boolean;
  sent?: number;
  failed?: number;
  results?: Array<{
    email: string;
    success: boolean;
    id: string | null;
    error: string | null;
  }>;
  error?: string;
}

export const sendBulkEmail = async (params: SendEmailParams): Promise<SendEmailResult> => {
  const { data, error } = await supabase.functions.invoke("send-email", {
    body: params,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return data as SendEmailResult;
};

export const sendCustomEmail = async (
  recipients: EmailRecipient[],
  subject: string,
  body: string,
  dashboardUrl?: string
): Promise<SendEmailResult> => {
  return sendBulkEmail({
    recipients,
    template: "custom",
    data: { subject, body, dashboardUrl: dashboardUrl || "https://dashboard.klikklaar.io" },
  });
};

export interface EmailLogEntry {
  id: string;
  recipient_email: string;
  subject: string;
  template_type: string;
  status: string;
  error_message: string | null;
  sent_at: string;
  client_id: string | null;
}

export const fetchEmailLogs = async (limit = 50): Promise<EmailLogEntry[]> => {
  const { data, error } = await supabase
    .from("email_logs")
    .select("*")
    .order("sent_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return (data || []) as EmailLogEntry[];
};
