

# Uitgebreid Upgrade Plan: Dashboard + Mailing + Google Integratie + Admin Bulk

## Overzicht

Dit plan breidt het eerder goedgekeurde plan uit met drie aanvullingen:
1. **"We zijn bezig" update mails** - automatische tussentijdse mails dat we werken aan verbeteringen en dat Google tijd nodig heeft
2. **Google Search Console / Analytics integratie per klant** - zodat de VisitorsChart echte data toont
3. **Admin bulk e-mail & klantbeheer** - bulk mails versturen en klanten verwijderen

---

## Fase 1: Dashboard Upgrade (ongewijzigd)

- WelcomeBanner, DashboardChart, WeeklySummaryCard, SuccessInsights toevoegen
- KPI cards interactief maken met detail-dialogs
- Styling upgrade: glassmorphism, animaties, dark mode verfijning

---

## Fase 2: Wekelijkse Mailing (uitgebreid)

### E-mail Template Types
1. **Wekelijks rapport** - metrics, optimalisaties, tips
2. **Welkomstmail** - onboarding nieuwe klant
3. **Alert mail** - urgente SEO issues
4. **"We zijn bezig" update** (NIEUW) - tussentijdse mail met:
   - "We werken actief aan uw SEO verbeteringen"
   - Uitleg dat Google 3-6 maanden nodig heeft om grote veranderingen te indexeren
   - Wat er concreet is gedaan sinds de laatste mail
   - Verwachtingsmanagement: "resultaten worden binnenkort zichtbaar"
   - CTA naar dashboard
5. **Bulk announcement mail** (NIEUW) - voor grote updates, rebranding, nieuwe features

### Admin E-mail Template Builder
- Visuele preview van alle template types
- Mogelijkheid om "we zijn bezig" mails in te plannen op vaste intervallen (bijv. om de 2 weken)
- Variabelen: klantnaam, recente acties, SEO score, weken actief

### Technisch
- Edge function `send-weekly-report` via Lovable Cloud
- HTML templates met KlikKlaar branding
- Personalisatie per klant

---

## Fase 3: Google Search Console / Analytics Integratie

### Per-klant Google koppeling
Dit is een significant onderdeel. Elke klant heeft eigen Google data nodig.

**Aanpak:**
- In de Admin klant-detail panel: veld voor Google Search Console property URL per klant
- Edge function die via Google Search Console API data ophaalt (clicks, impressions, queries, positions)
- Opslag van API credentials in Lovable Cloud secrets
- Dashboard VisitorsChart toont dan echte data i.p.v. mock data

**Wat we bouwen:**
- `src/components/admin/GoogleConnectionSettings.tsx` - per-klant Google property configuratie in Admin panel
- `supabase/functions/fetch-google-data/index.ts` - edge function die GSC API aanroept
- Type uitbreiding in `dashboard.ts` voor Google data
- VisitorsChart updaten om echte data te accepteren via de hook

**Vereisten:**
- Google Cloud project met Search Console API enabled
- Service account credentials (JSON key) opgeslagen als secret
- Elke klant krijgt een property URL in hun profiel

**Belangrijk:** De Google API credentials worden centraal opgeslagen (1 service account). Per klant sla je alleen de property URL op (bijv. `sc-domain:klantnaam.nl`).

---

## Fase 4: Admin Bulk Acties (NIEUW)

### Bulk E-mail
- Nieuw tabblad "Mailing" in Admin pagina
- Klanten selecteren via checkboxes (selecteer alle / individueel)
- Template kiezen uit dropdown (rapport, update, announcement, custom)
- Preview van de mail voordat je verstuurt
- Verzendknop met bevestigingsdialog
- Verzendgeschiedenis log

### Klant Verwijderen
- Delete knop in klant-detail Sheet panel
- Bevestigingsdialog met waarschuwing
- Verwijdert klant uit het systeem (mock data nu, later database)

### Bulk Klant Acties
- Selecteer meerdere klanten
- Bulk status wijzigen (actief/gepauzeerd)
- Bulk plan wijzigen
- Bulk verwijderen met bevestiging

---

## Bestanden

### Nieuw
- `src/components/dashboard/WelcomeBanner.tsx`
- `src/components/dashboard/DashboardChart.tsx`
- `src/components/dashboard/WeeklySummaryCard.tsx`
- `src/components/email/EmailPreview.tsx` - template preview
- `src/components/email/WeeklyReportTemplate.tsx`
- `src/components/email/UpdateTemplate.tsx` - "we zijn bezig" template
- `src/components/email/BulkMailDialog.tsx` - bulk mail modal
- `src/components/admin/GoogleConnectionSettings.tsx`
- `src/components/admin/BulkActionsBar.tsx`
- `supabase/functions/send-weekly-report/index.ts`
- `supabase/functions/fetch-google-data/index.ts`

### Aangepast
- `src/components/dashboard/Dashboard.tsx` - nieuwe widgets
- `src/pages/Admin.tsx` - mailing tab, bulk acties, delete klant, Google settings per klant
- `src/pages/Account.tsx` - mail voorkeuren
- `src/types/dashboard.ts` - nieuwe types
- `src/index.css` - styling upgrade
- `src/hooks/useDashboardData.ts` - nieuwe hooks
- `src/services/api.ts` - nieuwe API functies
- `src/components/dashboard/VisitorsChart.tsx` - echte data support

---

## Vereisten

1. **Lovable Cloud** moet geactiveerd zijn voor edge functions en e-mail
2. **Google Service Account** credentials nodig voor Search Console API
3. Beide worden als secrets opgeslagen via Lovable Cloud

## Volgorde van bouwen

1. Dashboard styling + nieuwe widgets (geen externe deps)
2. E-mail templates + preview (UI only, geen verzending)
3. Admin bulk acties + klant delete
4. Lovable Cloud activeren
5. Edge functions voor mailing
6. Google Search Console integratie

