import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface EmailRecipient {
  name: string;
  email: string;
}

interface EmailRequest {
  recipients: EmailRecipient[];
  template: "weekly-report" | "progress-update" | "announcement";
  data: Record<string, unknown>;
}

function generateWeeklyReportHTML(data: Record<string, unknown>, recipientName: string): string {
  const seoScore = (data.seoScore as number) || 0;
  const seoScoreDelta = (data.seoScoreDelta as number) || 0;
  const optimizationsCount = (data.optimizationsCount as number) || 0;
  const weekNumber = (data.weekNumber as number) || 1;
  const scoreColor = seoScore >= 80 ? "#10b981" : seoScore >= 60 ? "#f59e0b" : "#ef4444";
  const deltaIcon = seoScoreDelta >= 0 ? "↑" : "↓";
  const deltaColor = seoScoreDelta >= 0 ? "#10b981" : "#ef4444";

  const keywordChanges = (data.topKeywordChanges as Array<{ keyword: string; oldPosition: number; newPosition: number }>) || [];
  const tips = (data.tips as string[]) || [];

  let keywordsHTML = "";
  if (keywordChanges.length > 0) {
    keywordsHTML = `
      <tr><td style="padding:24px 32px;">
        <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">Ranking Veranderingen</h2>
        ${keywordChanges.map(kw => {
          const improved = kw.newPosition < kw.oldPosition;
          return `<div style="display:flex;justify-content:space-between;padding:8px 12px;background:#f9fafb;border-radius:8px;margin-bottom:8px;">
            <span style="font-size:14px;font-weight:500;">"${kw.keyword}"</span>
            <span style="font-size:14px;font-weight:600;color:${improved ? '#10b981' : '#ef4444'};">
              ${improved ? '↑' : '↓'} Positie ${kw.newPosition} (was ${kw.oldPosition})
            </span>
          </div>`;
        }).join('')}
      </td></tr>`;
  }

  let tipsHTML = "";
  if (tips.length > 0) {
    tipsHTML = `
      <tr><td style="padding:24px 32px;">
        <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">💡 Tips voor deze week</h2>
        ${tips.map(tip => `<div style="font-size:14px;margin-bottom:8px;">
          <span style="color:#f97316;font-weight:bold;">•</span> ${tip}
        </div>`).join('')}
      </td></tr>`;
  }

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr><td style="background:linear-gradient(135deg,#7c3aed,#d946ef,#f97316);padding:32px;text-align:center;border-radius:16px 16px 0 0;">
    <img src="https://klikklaar.io/logo-white.png" alt="KlikKlaar" height="40" style="margin-bottom:12px;">
    <h1 style="color:#fff;font-size:20px;font-weight:bold;margin:0;">Wekelijks SEO Rapport</h1>
    <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Week ${weekNumber}</p>
  </td></tr>
  <tr><td style="background:#fff;padding:24px 32px;border-bottom:1px solid #e5e7eb;">
    <p style="font-size:16px;margin:0;">Hoi <strong>${recipientName}</strong>,</p>
    <p style="font-size:14px;color:#6b7280;margin:8px 0 0;">Hier is je wekelijkse SEO update. We hebben weer hard gewerkt aan het verbeteren van jouw online zichtbaarheid!</p>
  </td></tr>
  <tr><td style="background:#fff;padding:24px 32px;border-bottom:1px solid #e5e7eb;">
    <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">SEO Score</h2>
    <table><tr>
      <td style="width:80px;height:80px;background:${scoreColor};border-radius:16px;text-align:center;color:#fff;font-size:24px;font-weight:bold;">${seoScore}</td>
      <td style="padding-left:16px;">
        <p style="font-size:18px;font-weight:600;margin:0;">${seoScore}%</p>
        <p style="font-size:14px;color:${deltaColor};margin:4px 0 0;">${deltaIcon} ${Math.abs(seoScoreDelta)}% t.o.v. vorige week</p>
      </td>
    </tr></table>
  </td></tr>
  <tr><td style="background:#fff;padding:24px 32px;border-bottom:1px solid #e5e7eb;">
    <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">Optimalisaties</h2>
    <div style="background:rgba(124,58,237,0.08);border-radius:12px;padding:16px;display:flex;align-items:center;">
      <div style="width:48px;height:48px;background:#7c3aed;border-radius:12px;text-align:center;line-height:48px;color:#fff;font-size:18px;font-weight:bold;">${optimizationsCount}</div>
      <div style="padding-left:12px;">
        <p style="font-weight:500;margin:0;">optimalisaties uitgevoerd</p>
        <p style="font-size:12px;color:#6b7280;margin:4px 0 0;">deze week automatisch toegepast</p>
      </div>
    </div>
  </td></tr>
  ${keywordsHTML}
  ${tipsHTML}
  <tr><td style="background:#fff;padding:32px;text-align:center;border-radius:0 0 16px 16px;">
    <a href="${data.dashboardUrl || 'https://dashboard.klikklaar.io'}" style="display:inline-block;padding:14px 28px;background:linear-gradient(135deg,#7c3aed,#d946ef);color:#fff;font-weight:600;font-size:14px;text-decoration:none;border-radius:12px;">Bekijk je volledige dashboard →</a>
    <p style="font-size:12px;color:#9ca3af;margin:16px 0 0;">Dit is een automatisch gegenereerd rapport van KlikKlaar.io</p>
  </td></tr>
</table>
</body></html>`;
}

function generateUpdateHTML(data: Record<string, unknown>, recipientName: string): string {
  const title = (data.title as string) || "Update";
  const message = (data.message as string) || "";
  const type = (data.type as string) || "update";
  const emoji = type === "announcement" ? "📢" : "🔧";

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr><td style="background:linear-gradient(135deg,#7c3aed,#d946ef,#f97316);padding:32px;text-align:center;border-radius:16px 16px 0 0;">
    <img src="https://klikklaar.io/logo-white.png" alt="KlikKlaar" height="40" style="margin-bottom:12px;">
    <h1 style="color:#fff;font-size:20px;font-weight:bold;margin:0;">${emoji} ${title}</h1>
  </td></tr>
  <tr><td style="background:#fff;padding:32px;border-radius:0 0 16px 16px;">
    <p style="font-size:16px;margin:0 0 16px;">Hoi <strong>${recipientName}</strong>,</p>
    <div style="font-size:14px;color:#374151;line-height:1.6;">${message}</div>
    <div style="text-align:center;margin-top:32px;">
      <a href="${data.dashboardUrl || 'https://dashboard.klikklaar.io'}" style="display:inline-block;padding:14px 28px;background:linear-gradient(135deg,#7c3aed,#d946ef);color:#fff;font-weight:600;font-size:14px;text-decoration:none;border-radius:12px;">Naar je dashboard →</a>
    </div>
    <p style="font-size:12px;color:#9ca3af;margin:24px 0 0;text-align:center;">Dit is een automatisch bericht van KlikKlaar.io</p>
  </td></tr>
</table>
</body></html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured. Add it via Cloud → Secrets.");
    }

    const { recipients, template, data } = (await req.json()) as EmailRequest;

    if (!recipients?.length) {
      throw new Error("No recipients provided");
    }

    const results = [];

    for (const recipient of recipients) {
      let html: string;
      let subject: string;

      switch (template) {
        case "weekly-report":
          html = generateWeeklyReportHTML(data, recipient.name);
          subject = `Wekelijks SEO Rapport — Week ${data.weekNumber || ""}`;
          break;
        case "progress-update":
          html = generateUpdateHTML({ ...data, type: "update" }, recipient.name);
          subject = `${data.title || "Update"} — KlikKlaar.io`;
          break;
        case "announcement":
          html = generateUpdateHTML({ ...data, type: "announcement" }, recipient.name);
          subject = `📢 ${data.title || "Nieuws"} — KlikKlaar.io`;
          break;
        default:
          throw new Error(`Unknown template: ${template}`);
      }

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "KlikKlaar.io <noreply@klikklaar.io>",
          to: [recipient.email],
          subject,
          html,
        }),
      });

      const resData = await res.json();
      results.push({
        email: recipient.email,
        success: res.ok,
        id: resData.id || null,
        error: res.ok ? null : resData.message || "Unknown error",
      });
    }

    const successCount = results.filter(r => r.success).length;

    return new Response(
      JSON.stringify({ 
        success: true, 
        sent: successCount, 
        failed: results.length - successCount,
        results 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Email send error:", message);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
