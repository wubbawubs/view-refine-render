import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const FROM_EMAIL = "KlikKlaar SEO <hello@klikklaarseo.nl>";

interface EmailRecipient {
  name: string;
  email: string;
  clientId?: string;
}

interface EmailRequest {
  recipients: EmailRecipient[];
  template: "weekly-report" | "biweekly-report" | "progress-update" | "monthly-update" | "monthly-tips" | "announcement" | "custom";
  data: Record<string, unknown>;
  auto?: boolean; // When true, fetch recipients from DB
}

function getSupabaseClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );
}

// ── Fetch active clients with weekly_report enabled ──
async function fetchAutoRecipients(supabase: ReturnType<typeof createClient>) {
  const { data: clients, error } = await supabase
    .from("clients")
    .select("id, name, email, seo_score, website_url")
    .eq("status", "actief")
    .eq("weekly_report", true)
    .not("email", "is", null);

  if (error) throw new Error(`Failed to fetch clients: ${error.message}`);
  return clients || [];
}

// ── Fetch per-client keyword changes ──
async function fetchKeywordChanges(supabase: ReturnType<typeof createClient>, clientId: string) {
  const { data } = await supabase
    .from("keywords")
    .select("keyword, position, previous_position")
    .eq("client_id", clientId)
    .not("previous_position", "is", null)
    .order("last_updated", { ascending: false })
    .limit(5);

  return (data || [])
    .filter((k: { position: number | null; previous_position: number | null }) => k.position !== null && k.previous_position !== null)
    .map((k: { keyword: string; position: number; previous_position: number }) => ({
      keyword: k.keyword,
      oldPosition: k.previous_position,
      newPosition: k.position,
    }));
}

// ── Fetch per-client optimization count (last 14 days) ──
async function fetchRecentOptimizations(supabase: ReturnType<typeof createClient>, clientId: string) {
  const twoWeeksAgo = new Date(Date.now() - 14 * 86400000).toISOString();
  const { count } = await supabase
    .from("optimizations")
    .select("id", { count: "exact", head: true })
    .eq("client_id", clientId)
    .eq("status", "completed")
    .gte("completed_at", twoWeeksAgo);

  return count || 0;
}

// ── Fetch recent optimization descriptions for monthly update ──
async function fetchRecentActions(supabase: ReturnType<typeof createClient>, clientId: string) {
  const oneMonthAgo = new Date(Date.now() - 30 * 86400000).toISOString();
  const { data } = await supabase
    .from("optimizations")
    .select("title, type, page_url")
    .eq("client_id", clientId)
    .eq("status", "completed")
    .gte("completed_at", oneMonthAgo)
    .order("completed_at", { ascending: false })
    .limit(6);

  return (data || []).map((o: { title: string; page_url: string | null }) =>
    `${o.title}${o.page_url ? ` (${o.page_url})` : ""}`
  );
}

// ── Shared HTML wrapper ──
function wrapEmail(headerTitle: string, headerSubtitle: string, bodyHtml: string, ctaUrl?: string, ctaText?: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr><td style="background:linear-gradient(135deg,#7c3aed,#d946ef,#f97316);padding:32px;text-align:center;border-radius:16px 16px 0 0;">
    <img src="https://klikklaarseo.nl/logo-white.png" alt="KlikKlaar SEO" height="36" style="margin-bottom:12px;">
    <h1 style="color:#fff;font-size:20px;font-weight:bold;margin:0;">${headerTitle}</h1>
    ${headerSubtitle ? `<p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">${headerSubtitle}</p>` : ''}
  </td></tr>
  <tr><td style="background:#ffffff;">
    ${bodyHtml}
  </td></tr>
  <tr><td style="background:#ffffff;padding:32px;text-align:center;border-radius:0 0 16px 16px;">
    ${ctaUrl ? `<a href="${ctaUrl}" style="display:inline-block;padding:14px 28px;background:linear-gradient(135deg,#7c3aed,#d946ef);color:#fff;font-weight:600;font-size:14px;text-decoration:none;border-radius:12px;">${ctaText || 'Naar je dashboard →'}</a>` : ''}
    <p style="font-size:11px;color:#9ca3af;margin:16px 0 0;">KlikKlaar SEO | hello@klikklaarseo.nl<br>Je ontvangt dit bericht omdat je klant bent bij KlikKlaar SEO.</p>
  </td></tr>
</table>
</body></html>`;
}

// ── Template generators ──
function generateWeeklyReportHTML(data: Record<string, unknown>, name: string): { html: string; subject: string } {
  const seoScore = (data.seoScore as number) || 0;
  const seoScoreDelta = (data.seoScoreDelta as number) || 0;
  const optimizationsCount = (data.optimizationsCount as number) || 0;
  const weekNumber = (data.weekNumber as number) || 1;
  const scoreColor = seoScore >= 80 ? "#10b981" : seoScore >= 60 ? "#f59e0b" : "#ef4444";
  const deltaIcon = seoScoreDelta >= 0 ? "↑" : "↓";
  const deltaColor = seoScoreDelta >= 0 ? "#10b981" : "#ef4444";
  const keywordChanges = (data.topKeywordChanges as Array<{ keyword: string; oldPosition: number; newPosition: number }>) || [];
  const tips = (data.tips as string[]) || [];

  let keywordsSection = "";
  if (keywordChanges.length > 0) {
    keywordsSection = `<tr><td style="padding:24px 32px;border-top:1px solid #e5e7eb;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">Ranking Veranderingen</h2>
      ${keywordChanges.map(kw => {
        const improved = kw.newPosition < kw.oldPosition;
        return `<div style="padding:8px 12px;background:#f9fafb;border-radius:8px;margin-bottom:8px;font-size:14px;">
          <strong>"${kw.keyword}"</strong> — <span style="color:${improved ? '#10b981' : '#ef4444'};font-weight:600;">${improved ? '↑' : '↓'} Positie ${kw.newPosition}</span> <span style="color:#9ca3af;">(was ${kw.oldPosition})</span>
        </div>`;
      }).join('')}
    </td></tr>`;
  }

  let tipsSection = "";
  if (tips.length > 0) {
    tipsSection = `<tr><td style="padding:24px 32px;border-top:1px solid #e5e7eb;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">💡 Tips</h2>
      ${tips.map(tip => `<div style="font-size:14px;margin-bottom:8px;"><span style="color:#f97316;font-weight:bold;">•</span> ${tip}</div>`).join('')}
    </td></tr>`;
  }

  const body = `
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <p style="font-size:16px;margin:0;">Hoi <strong>${name}</strong>,</p>
      <p style="font-size:14px;color:#6b7280;margin:8px 0 0;">Hier is je SEO update!</p>
    </td></tr>
    <tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">SEO Score</h2>
      <table><tr>
        <td style="width:72px;height:72px;background:${scoreColor};border-radius:16px;text-align:center;color:#fff;font-size:24px;font-weight:bold;">${seoScore}</td>
        <td style="padding-left:16px;">
          <p style="font-size:18px;font-weight:600;margin:0;">${seoScore}%</p>
          <p style="font-size:14px;color:${deltaColor};margin:4px 0 0;">${deltaIcon} ${Math.abs(seoScoreDelta)}% t.o.v. vorige periode</p>
        </td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">Optimalisaties</h2>
      <div style="background:rgba(124,58,237,0.08);border-radius:12px;padding:16px;">
        <span style="display:inline-block;width:48px;height:48px;background:#7c3aed;border-radius:12px;text-align:center;line-height:48px;color:#fff;font-size:18px;font-weight:bold;vertical-align:middle;">${optimizationsCount}</span>
        <span style="padding-left:12px;vertical-align:middle;">
          <strong>optimalisaties</strong> uitgevoerd deze periode
        </span>
      </div>
    </td></tr>
    ${keywordsSection}
    ${tipsSection}
    </table>`;

  const subject = `Wekelijks SEO Rapport — Week ${weekNumber}`;
  return { html: wrapEmail("📊 SEO Rapport", `Week ${weekNumber}`, body, data.dashboardUrl as string), subject };
}

function generateMonthlyUpdateHTML(data: Record<string, unknown>, name: string): { html: string; subject: string } {
  const actions = (data.recentActions as string[]) || [];
  const nextSteps = (data.nextSteps as string[]) || [];
  const month = (data.month as string) || new Date().toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' });

  const body = `
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <p style="font-size:16px;margin:0;">Hoi <strong>${name}</strong>,</p>
      <p style="font-size:14px;color:#6b7280;margin:8px 0 0;">Hier is je maandelijkse update over wat we voor jouw website hebben gedaan.</p>
    </td></tr>
    <tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <div style="background:rgba(249,115,22,0.08);border-radius:12px;padding:16px;border:1px solid rgba(249,115,22,0.2);">
        <h3 style="font-size:14px;font-weight:600;margin:0 0 8px;">⏳ Wist je dat...</h3>
        <p style="font-size:13px;color:#4b5563;margin:0;line-height:1.6;">Google heeft gemiddeld <strong>3 tot 6 maanden</strong> nodig om SEO verbeteringen volledig te verwerken. De verbeteringen die we nu doorvoeren worden binnenkort zichtbaar in je rankings.</p>
      </div>
    </td></tr>
    ${actions.length > 0 ? `<tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">Wat we hebben gedaan</h2>
      ${actions.map(a => `<div style="font-size:14px;margin-bottom:8px;"><span style="color:#10b981;">✓</span> ${a}</div>`).join('')}
    </td></tr>` : ''}
    ${nextSteps.length > 0 ? `<tr><td style="padding:24px 32px;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">Volgende stappen</h2>
      ${nextSteps.map((s, i) => `<div style="font-size:14px;margin-bottom:8px;"><span style="color:#7c3aed;font-weight:bold;">${i + 1}.</span> ${s}</div>`).join('')}
    </td></tr>` : ''}
    </table>`;

  return { html: wrapEmail("🔧 Maandelijkse Update", month, body, data.dashboardUrl as string), subject: `Maandelijkse Update — ${month}` };
}

function generateMonthlyTipsHTML(data: Record<string, unknown>, name: string): { html: string; subject: string } {
  const tips = (data.tips as Array<{ title: string; description: string }>) || [];
  const topTrends = (data.topTrends as string[]) || [];
  const month = (data.month as string) || new Date().toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' });

  const body = `
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <p style="font-size:16px;margin:0;">Hoi <strong>${name}</strong>,</p>
      <p style="font-size:14px;color:#6b7280;margin:8px 0 0;">Hier zijn onze tips & inzichten over Google en SEO voor deze maand!</p>
    </td></tr>
    ${tips.map(tip => `<tr><td style="padding:20px 32px;border-bottom:1px solid #f3f4f6;">
      <h3 style="font-size:15px;font-weight:600;color:#111827;margin:0 0 6px;">💡 ${tip.title}</h3>
      <p style="font-size:13px;color:#4b5563;margin:0;line-height:1.6;">${tip.description}</p>
    </td></tr>`).join('')}
    ${topTrends.length > 0 ? `<tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">📈 Trends in Google</h2>
      ${topTrends.map(t => `<div style="font-size:14px;margin-bottom:8px;background:#f9fafb;padding:8px 12px;border-radius:8px;">🔍 ${t}</div>`).join('')}
    </td></tr>` : ''}
    </table>`;

  return { html: wrapEmail("💡 Maandelijkse Tips & Tops", month, body, data.dashboardUrl as string, "Bekijk je dashboard →"), subject: `SEO Tips & Tops — ${month}` };
}

function generateAnnouncementHTML(data: Record<string, unknown>, name: string): { html: string; subject: string } {
  const title = (data.title as string) || "Nieuws";
  const message = (data.message as string) || "";
  const items = (data.recentActions as string[]) || [];

  const body = `
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
      <p style="font-size:16px;margin:0;">Hoi <strong>${name}</strong>,</p>
      <h2 style="font-size:18px;font-weight:bold;margin:12px 0 8px;">${title}</h2>
      <div style="font-size:14px;color:#374151;line-height:1.6;">${message}</div>
    </td></tr>
    ${items.length > 0 ? `<tr><td style="padding:24px 32px;">
      <h2 style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 16px;">Wat is er nieuw</h2>
      ${items.map(a => `<div style="font-size:14px;margin-bottom:8px;"><span style="color:#10b981;">✓</span> ${a}</div>`).join('')}
    </td></tr>` : ''}
    </table>`;

  return { html: wrapEmail("📢 Belangrijk Nieuws", "", body, data.dashboardUrl as string), subject: `📢 ${title} — KlikKlaar SEO` };
}

function generateCustomHTML(data: Record<string, unknown>, name: string): { html: string; subject: string } {
  const subject = (data.subject as string) || "Bericht van KlikKlaar SEO";
  const bodyText = (data.body as string) || "";
  const htmlBody = bodyText.replace(/\n/g, '<br>');

  const body = `
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:24px 32px;">
      <p style="font-size:16px;margin:0 0 16px;">Hoi <strong>${name}</strong>,</p>
      <div style="font-size:14px;color:#374151;line-height:1.7;">${htmlBody}</div>
    </td></tr>
    </table>`;

  return { html: wrapEmail("✉️ Bericht van KlikKlaar SEO", "", body, data.dashboardUrl as string), subject };
}

// ── Default tips for monthly-tips auto emails ──
const defaultMonthlyTips = [
  { title: "Houd je content up-to-date", description: "Google geeft de voorkeur aan verse, actuele content. Controleer of je belangrijkste pagina's nog kloppen en update ze regelmatig." },
  { title: "Optimaliseer voor mobiel", description: "Meer dan 60% van de zoekopdrachten komt van mobiele apparaten. Zorg dat je website snel laadt en makkelijk te navigeren is op telefoons." },
  { title: "Interne links zijn goud waard", description: "Link relevante pagina's aan elkaar op je website. Dit helpt Google je sitestructuur te begrijpen en verdeelt 'autoriteit' over je pagina's." },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const supabase = getSupabaseClient();
    const { recipients: manualRecipients, template, data, auto } = (await req.json()) as EmailRequest;

    // ── Auto mode: fetch recipients + per-client data from DB ──
    if (auto) {
      const clients = await fetchAutoRecipients(supabase);
      if (clients.length === 0) {
        return new Response(
          JSON.stringify({ success: true, sent: 0, message: "No active clients with weekly_report enabled" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const results = [];
      for (const client of clients) {
        if (!client.email) continue;

        let templateData: Record<string, unknown> = { ...data, dashboardUrl: "https://dashboard.klikklaar.io" };

        // Enrich with per-client data based on template type
        if (template === "biweekly-report" || template === "weekly-report") {
          const [keywordChanges, optCount] = await Promise.all([
            fetchKeywordChanges(supabase, client.id),
            fetchRecentOptimizations(supabase, client.id),
          ]);
          templateData = {
            ...templateData,
            seoScore: client.seo_score || 0,
            seoScoreDelta: 0, // Could compute from historical data
            optimizationsCount: optCount,
            topKeywordChanges: keywordChanges,
            weekNumber: Math.ceil((Date.now() - new Date(new Date().getFullYear(), 0, 1).getTime()) / 604800000),
            tips: [],
          };
        } else if (template === "monthly-update") {
          const actions = await fetchRecentActions(supabase, client.id);
          templateData = {
            ...templateData,
            recentActions: actions.length > 0 ? actions : ["We monitoren je website en werken aan verbeteringen"],
            nextSteps: ["Content optimalisaties plannen", "Keyword posities blijven monitoren"],
            month: new Date().toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' }),
          };
        } else if (template === "monthly-tips") {
          templateData = {
            ...templateData,
            tips: defaultMonthlyTips,
            topTrends: [],
            month: new Date().toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' }),
          };
        }

        let html: string;
        let subject: string;

        switch (template) {
          case "weekly-report":
          case "biweekly-report":
            ({ html, subject } = generateWeeklyReportHTML(templateData, client.name));
            break;
          case "monthly-update":
          case "progress-update":
            ({ html, subject } = generateMonthlyUpdateHTML(templateData, client.name));
            break;
          case "monthly-tips":
            ({ html, subject } = generateMonthlyTipsHTML(templateData, client.name));
            break;
          case "announcement":
            ({ html, subject } = generateAnnouncementHTML(templateData, client.name));
            break;
          case "custom":
            ({ html, subject } = generateCustomHTML(templateData, client.name));
            break;
          default:
            throw new Error(`Unknown template: ${template}`);
        }

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
          body: JSON.stringify({ from: FROM_EMAIL, to: [client.email], subject, html }),
        });

        const resData = await res.json();
        const success = res.ok;

        results.push({ email: client.email, success, id: resData.id || null, error: success ? null : resData.message || "Unknown error" });

        await supabase.from("email_logs").insert({
          recipient_email: client.email,
          subject,
          template_type: template,
          status: success ? "sent" : "failed",
          error_message: success ? null : (resData.message || "Unknown error"),
          client_id: client.id,
        });
      }

      const successCount = results.filter(r => r.success).length;
      return new Response(
        JSON.stringify({ success: true, sent: successCount, failed: results.length - successCount, results }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── Manual mode: use provided recipients ──
    if (!manualRecipients?.length) {
      throw new Error("No recipients provided");
    }

    const results = [];
    for (const recipient of manualRecipients) {
      let html: string;
      let subject: string;

      switch (template) {
        case "weekly-report":
        case "biweekly-report":
          ({ html, subject } = generateWeeklyReportHTML(data, recipient.name));
          break;
        case "progress-update":
        case "monthly-update":
          ({ html, subject } = generateMonthlyUpdateHTML(data, recipient.name));
          break;
        case "monthly-tips":
          ({ html, subject } = generateMonthlyTipsHTML(data, recipient.name));
          break;
        case "announcement":
          ({ html, subject } = generateAnnouncementHTML(data, recipient.name));
          break;
        case "custom":
          ({ html, subject } = generateCustomHTML(data, recipient.name));
          break;
        default:
          throw new Error(`Unknown template: ${template}`);
      }

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({ from: FROM_EMAIL, to: [recipient.email], subject, html }),
      });

      const resData = await res.json();
      const success = res.ok;

      results.push({ email: recipient.email, success, id: resData.id || null, error: success ? null : resData.message || "Unknown error" });

      await supabase.from("email_logs").insert({
        recipient_email: recipient.email,
        subject,
        template_type: template,
        status: success ? "sent" : "failed",
        error_message: success ? null : (resData.message || "Unknown error"),
        client_id: recipient.clientId || null,
      });
    }

    const successCount = results.filter(r => r.success).length;
    return new Response(
      JSON.stringify({ success: true, sent: successCount, failed: results.length - successCount, results }),
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
