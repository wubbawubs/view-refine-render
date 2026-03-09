import { supabase } from "@/integrations/supabase/client";

interface EmailRecipient {
  name: string;
  email: string;
}

interface SendEmailParams {
  recipients: EmailRecipient[];
  template: "weekly-report" | "progress-update" | "announcement";
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
