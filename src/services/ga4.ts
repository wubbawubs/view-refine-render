import { supabase } from "@/integrations/supabase/client";

interface GA4DateRange {
  startDate: string;
  endDate: string;
}

export interface GA4DataRow {
  date: string;
  activeUsers: number;
  sessions: number;
  screenPageViews: number;
  bounceRate: number;
  averageSessionDuration: number;
  newUsers: number;
  [key: string]: string | number;
}

export interface GA4Response {
  success: boolean;
  propertyId?: string;
  dateRange?: GA4DateRange;
  rows?: GA4DataRow[];
  totals?: Record<string, number>;
  activeUsersNow?: number;
  rowCount?: number;
  error?: string;
}

interface FetchGA4Params {
  propertyId: string;
  dateRange?: GA4DateRange;
  metrics?: string[];
}

export const fetchGA4Data = async (params: FetchGA4Params): Promise<GA4Response> => {
  const { data, error } = await supabase.functions.invoke("fetch-ga4-data", {
    body: params,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return data as GA4Response;
};
