import { type WeeklyMailTemplate } from "@/data/weeklyMailTemplates";

interface LiveEmailPreviewProps {
  template: WeeklyMailTemplate;
  deviceView?: "desktop" | "mobile";
}

const LiveEmailPreview = ({ template, deviceView = "desktop" }: LiveEmailPreviewProps) => {
  const weekNum = String(template.weekNumber);
  const subject = template.subject.replace("{{weekNumber}}", weekNum);
  const headerTitle = template.headerTitle.replace("{{weekNumber}}", weekNum);
  const headerSubtitle = template.headerSubtitle.replace("{{weekNumber}}", weekNum);

  const renderContent = (content: string) => {
    if (content.startsWith("{{") && content.endsWith("}}")) {
      const placeholders: Record<string, React.ReactNode> = {
        "{{seoScoreBlock}}": (
          <div className="flex items-center gap-4 py-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              87
            </div>
            <div>
              <div className="font-bold text-foreground text-lg">87%</div>
              <div className="text-sm text-emerald-600">↑ 4% t.o.v. vorige week</div>
            </div>
          </div>
        ),
        "{{keywordChangesBlock}}": (
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between"><span>bakkerij amsterdam</span><span className="text-emerald-600 font-medium">↑ 3 → #5</span></div>
            <div className="flex justify-between"><span>vers brood bestellen</span><span className="text-emerald-600 font-medium">↑ 1 → #8</span></div>
            <div className="flex justify-between"><span>ambachtelijk brood</span><span className="text-amber-600 font-medium">→ #12</span></div>
          </div>
        ),
        "{{optimizationsBlock}}": (
          <div className="space-y-1.5 text-sm">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Meta titel homepage geoptimaliseerd</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Alt-teksten afbeeldingen toegevoegd</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500" /> Interne links worden verbeterd</div>
          </div>
        ),
      };
      return placeholders[content] || <span className="text-muted-foreground italic text-sm">{content}</span>;
    }
    return <span>{content}</span>;
  };

  return (
    <div className={`mx-auto ${deviceView === "mobile" ? "max-w-[375px]" : "max-w-[600px]"}`}>
      {/* Email metadata bar */}
      <div className="bg-muted/50 border border-border rounded-t-lg px-4 py-2.5 text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
        <span>✉️ Van: <strong className="text-foreground">KlikKlaar SEO</strong> &lt;hello@klikklaarseo.nl&gt;</span>
        <span>Onderwerp: <strong className="text-foreground">{subject}</strong></span>
      </div>

      {/* Email body */}
      <div className="border border-t-0 border-border rounded-b-lg bg-background overflow-hidden">
        {/* Header gradient */}
        <div
          className="py-8 px-6 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(251, 100%, 65%), hsl(334, 100%, 66%), hsl(15, 100%, 61%))",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/klikklaar-logo-gradient-new.png" alt="KlikKlaar" className="h-7 opacity-90" />
          </div>
          <h1 className="text-xl font-bold text-white">{headerTitle}</h1>
          <p className="text-white/80 text-sm mt-1">{headerSubtitle}</p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-5">
          {/* Greeting */}
          <div>
            <p className="text-foreground">
              Hoi <strong>Bakkerij De Groot</strong>,
            </p>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              {template.greeting}
            </p>
          </div>

          {/* Sections */}
          {template.sections.map((section, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 ${
                section.highlight
                  ? "bg-primary/5 border border-primary/20"
                  : "border border-border"
              }`}
            >
              {section.title && (
                <h3 className="font-semibold text-foreground text-sm mb-2 uppercase tracking-wide">
                  {section.title}
                </h3>
              )}
              <div className="text-sm text-muted-foreground leading-relaxed">
                {renderContent(section.content)}
              </div>
              {section.items && (
                <ul className="mt-2 space-y-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* CTA */}
          <div className="text-center pt-2">
            <div
              className="inline-block px-8 py-3 rounded-lg text-white font-medium text-sm"
              style={{
                background: "linear-gradient(135deg, hsl(251, 100%, 65%), hsl(334, 100%, 66%))",
              }}
            >
              {template.ctaText}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border pt-4 text-center text-xs text-muted-foreground space-y-1">
            <p>KlikKlaar SEO | hello@klikklaarseo.nl</p>
            <p>Je ontvangt deze mail omdat je klant bent bij KlikKlaar SEO.</p>
            <p className="underline cursor-pointer">Uitschrijven</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEmailPreview;
