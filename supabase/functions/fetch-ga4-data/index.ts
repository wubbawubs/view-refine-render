import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface GA4Request {
  propertyId: string;
  dateRange?: { startDate: string; endDate: string };
  metrics?: string[];
}

async function getAccessToken(serviceAccountKey: string): Promise<string> {
  const key = JSON.parse(serviceAccountKey);
  
  // Create JWT header
  const header = btoa(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  
  const now = Math.floor(Date.now() / 1000);
  const claim = btoa(JSON.stringify({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  }));

  // Import private key
  const pemContents = key.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\n/g, "");
  
  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
  
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureInput = new TextEncoder().encode(`${header}.${claim}`);
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", cryptoKey, signatureInput);
  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)));

  const jwt = `${header}.${claim}.${signatureB64}`;

  // Exchange JWT for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok) {
    throw new Error(`Token exchange failed: ${JSON.stringify(tokenData)}`);
  }

  return tokenData.access_token;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GA4_SERVICE_ACCOUNT_KEY = Deno.env.get("GA4_SERVICE_ACCOUNT_KEY");
    if (!GA4_SERVICE_ACCOUNT_KEY) {
      throw new Error("GA4_SERVICE_ACCOUNT_KEY is not configured. Add your Google service account JSON via Cloud → Secrets.");
    }

    const { propertyId, dateRange, metrics } = (await req.json()) as GA4Request;

    if (!propertyId) {
      throw new Error("propertyId is required");
    }

    const accessToken = await getAccessToken(GA4_SERVICE_ACCOUNT_KEY);

    const startDate = dateRange?.startDate || "30daysAgo";
    const endDate = dateRange?.endDate || "today";
    const requestedMetrics = metrics || [
      "activeUsers",
      "sessions",
      "screenPageViews",
      "bounceRate",
      "averageSessionDuration",
      "newUsers",
    ];

    // Fetch report data
    const reportRes = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateRanges: [{ startDate, endDate }],
          metrics: requestedMetrics.map(name => ({ name })),
          dimensions: [{ name: "date" }],
          orderBys: [{ dimension: { dimensionName: "date" }, desc: false }],
        }),
      }
    );

    const reportData = await reportRes.json();
    if (!reportRes.ok) {
      throw new Error(`GA4 API error [${reportRes.status}]: ${JSON.stringify(reportData)}`);
    }

    // Also fetch realtime data
    const realtimeRes = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          metrics: [{ name: "activeUsers" }],
        }),
      }
    );

    let realtimeData = null;
    if (realtimeRes.ok) {
      realtimeData = await realtimeRes.json();
    }

    // Parse rows into structured data
    const rows = reportData.rows?.map((row: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => {
      const date = row.dimensionValues[0].value;
      const metricsObj: Record<string, number> = {};
      requestedMetrics.forEach((metric, i) => {
        metricsObj[metric] = parseFloat(row.metricValues[i]?.value || "0");
      });
      return { date, ...metricsObj };
    }) || [];

    // Calculate totals
    const totals: Record<string, number> = {};
    requestedMetrics.forEach(metric => {
      totals[metric] = rows.reduce((sum: number, row: Record<string, number>) => sum + (row[metric] || 0), 0);
    });

    // Average for rate metrics
    if (totals.bounceRate && rows.length) {
      totals.bounceRate = totals.bounceRate / rows.length;
    }
    if (totals.averageSessionDuration && rows.length) {
      totals.averageSessionDuration = totals.averageSessionDuration / rows.length;
    }

    const activeNow = realtimeData?.rows?.[0]?.metricValues?.[0]?.value || "0";

    return new Response(
      JSON.stringify({
        success: true,
        propertyId,
        dateRange: { startDate, endDate },
        rows,
        totals,
        activeUsersNow: parseInt(activeNow),
        rowCount: reportData.rowCount || 0,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("GA4 fetch error:", message);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
