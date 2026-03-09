export interface UpdateEmailData {
  customerName: string;
  weeksActive: number;
  recentActions: string[];
  nextSteps: string[];
  dashboardUrl?: string;
  type: "progress" | "announcement";
  announcementTitle?: string;
  announcementBody?: string;
}

interface UpdateTemplateProps {
  data: UpdateEmailData;
}

const UpdateTemplate = ({ data }: UpdateTemplateProps) => {
  const isAnnouncement = data.type === "announcement";

  return (
    <div className="max-w-[600px] mx-auto font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-[hsl(var(--kk-violet))] via-[hsl(var(--kk-fuchsia))] to-[hsl(var(--kk-orange))] rounded-t-2xl p-6 text-center">
        <img 
          src="/lovable-uploads/746a8291-90ca-4e7e-a087-4feae21cec1d.png" 
          alt="KlikKlaar" 
          className="h-10 mx-auto mb-3"
        />
        <h1 className="text-white text-xl font-bold">
          {isAnnouncement ? "📢 Belangrijk Nieuws" : "🔧 We werken voor je"}
        </h1>
      </div>

      {/* Body */}
      <div className="bg-card border border-t-0 border-border rounded-b-2xl">
        {/* Greeting */}
        <div className="p-6 border-b border-border">
          <p className="text-foreground text-base">
            Hoi <strong>{data.customerName}</strong>,
          </p>
          
          {isAnnouncement ? (
            <div className="mt-3">
              <h2 className="text-lg font-bold text-foreground mb-2">{data.announcementTitle}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.announcementBody}</p>
            </div>
          ) : (
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              We willen je even laten weten dat we actief bezig zijn met het verbeteren van jouw SEO. 
              Je bent nu <strong>{data.weeksActive} weken</strong> klant bij ons en we zien mooie progressie!
            </p>
          )}
        </div>

        {/* Google Patience Notice - Only for progress updates */}
        {!isAnnouncement && (
          <div className="p-6 border-b border-border">
            <div className="bg-[hsl(var(--kk-orange)/0.08)] rounded-xl p-4 border border-[hsl(var(--kk-orange)/0.2)]">
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                ⏳ Wist je dat...
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Google heeft gemiddeld <strong>3 tot 6 maanden</strong> nodig om grote SEO verbeteringen volledig te verwerken en weer te geven in de zoekresultaten. 
                Dit is normaal en betekent dat de verbeteringen die we nu doorvoeren, binnenkort zichtbaar worden in je rankings.
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Geduld loont, we zien bij al onze klanten dat consistente optimalisatie uiteindelijk resulteert in significante groei.
              </p>
            </div>
          </div>
        )}

        {/* Recent Actions */}
        {data.recentActions.length > 0 && (
          <div className="p-6 border-b border-border">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {isAnnouncement ? "Wat is er nieuw" : "Wat we recent hebben gedaan"}
            </h2>
            <div className="space-y-2">
              {data.recentActions.map((action, i) => (
                <div key={i} className="flex gap-2 text-sm text-foreground items-start">
                  <span className="text-[hsl(var(--kk-success))] shrink-0 mt-0.5">✓</span>
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        {data.nextSteps.length > 0 && (
          <div className="p-6 border-b border-border">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Volgende stappen
            </h2>
            <div className="space-y-2">
              {data.nextSteps.map((step, i) => (
                <div key={i} className="flex gap-2 text-sm text-foreground items-start">
                  <span className="text-[hsl(var(--kk-violet))] shrink-0 font-bold">{i + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-6 text-center">
          <a
            href={data.dashboardUrl || "#"}
            className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] hover:opacity-90 transition-opacity shadow-md"
          >
            Bekijk je dashboard →
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Vragen? Antwoord direct op deze e-mail of neem contact op via info@klikklaar.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateTemplate;

export const sampleProgressData: UpdateEmailData = {
  customerName: "Bakkerij De Groot",
  weeksActive: 8,
  recentActions: [
    "Meta descriptions geoptimaliseerd voor 5 productpagina's",
    "Schema markup toegevoegd voor lokale zoekresultaten",
    "Afbeeldingen gecomprimeerd voor snellere laadtijden",
    "Interne linkstructuur verbeterd op de homepage",
  ],
  nextSteps: [
    "Content optimalisatie voor seizoensgebonden zoekwoorden",
    "Google Business Profile koppeling verbeteren",
    "Nieuwe blog posts plannen rond trending keywords",
  ],
  type: "progress",
  dashboardUrl: "https://dashboard.klikklaar.io",
};

export const sampleAnnouncementData: UpdateEmailData = {
  customerName: "Bakkerij De Groot",
  weeksActive: 8,
  recentActions: [
    "Compleet vernieuwd dashboard met realtime inzichten",
    "Wekelijkse e-mail rapporten met jouw SEO metrics",
    "Verbeterde AI-gestuurde content suggesties",
    "Nieuw: Google Search Console integratie",
  ],
  nextSteps: [
    "Log in op je dashboard om de nieuwe features te ontdekken",
    "Check je e-mail voorkeuren in Account instellingen",
  ],
  type: "announcement",
  announcementTitle: "🚀 Grote KlikKlaar Update!",
  announcementBody: "We hebben ons platform grondig vernieuwd! Met een nieuw dashboard, slimmere optimalisaties en wekelijkse e-mail rapporten zorgen we ervoor dat je altijd op de hoogte bent van jouw SEO prestaties.",
  dashboardUrl: "https://dashboard.klikklaar.io",
};
