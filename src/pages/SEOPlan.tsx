import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Target, ChevronDown, ChevronUp, Globe, Info, 
  FileText, Type, Heading1, Heading2, HelpCircle, Code, Image, 
  ListChecks, ArrowUp, ArrowDown, Minus, Sparkles, CheckCircle2,
  AlertTriangle, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PageBanner from "@/components/ui/page-banner";
import { GradientCard } from "@/components/ui/gradient-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// --- Mock SEO Plan data (mirrors the real API format) ---

const mockScores = [
  { label: "SEO Relevance Score", score: 8, max: 10, status: "Uitstekend", icon: Target, tooltip: "Past jouw website goed bij wat mensen zoeken in Google? Dit cijfer laat zien hoe goed jouw teksten aansluiten bij de zoekwoorden van je klanten." },
  { label: "Content Depth Score", score: 8, max: 10, status: "Uitstekend", icon: FileText, tooltip: "Staat er genoeg nuttige informatie op je website? We kijken of je teksten compleet genoeg zijn om bezoekers (en Google) te overtuigen." },
  { label: "Technical Score", score: 8, max: 10, status: "Uitstekend", icon: Code, tooltip: "Werkt je website lekker snel en goed op telefoons? Dit cijfer laat zien of alles technisch in orde is zodat Google je site goed kan lezen." },
  { label: "Competitive Gap Score", score: 8, max: 10, status: "Uitstekend", icon: ListChecks, tooltip: "Hoe doe je het vergeleken met je concurrenten? We kijken wat zij doen en waar jij nog kansen laat liggen om ze voorbij te gaan." },
];

interface StrategySection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

const mockPriorities = [
  { id: "P1", type: "meta", impact: "high", effort: "low", description: "Er is geen sterke meta-titel en -beschrijving die de abonnementspropositie en digitale talentpool scherp positioneren. Omdat dit de eerste aanraking in de zoekresultaten is, is optimalisatie cruciaal voor klikratio." },
  { id: "P2", type: "h1", impact: "high", effort: "low", description: "De huidige hoofdtitel is vooral de merknaam en claim, maar benoemt de kernpropositie niet expliciet. Een scherpere titel stuurt zowel bezoekers als zoekmachines direct naar het aanbod." },
  { id: "P3", type: "h2", impact: "high", effort: "medium", description: "Er zijn al meerdere tussenkoppen, maar ze zijn vooral slogans. De structuur mist nog duidelijke secties die uitleggen hoe het werkt, voor wie het is en wat de voordelen zijn." },
  { id: "P4", type: "faq", impact: "high", effort: "medium", description: "Er is nu geen FAQ-sectie, terwijl dit cruciaal is voor vertrouwen en conversie. Veelgestelde vragen helpen twijfelende bezoekers over de streep." },
  { id: "P5", type: "schema", impact: "medium", effort: "medium", description: "Er is nog geen gestructureerde data. Door de juiste schema's toe te voegen wordt beter gecommuniceerd wat je doet en ontstaat kans op rijkere zoekresultaten." },
  { id: "P6", type: "alt", impact: "medium", effort: "low", description: "Afbeeldingbeschrijvingen ontbreken of zijn niet strategisch ingevuld. Door ze te verbeteren wordt de context sterker en de site toegankelijker." },
];

const getScoreColor = (score: number, max: number) => {
  const pct = (score / max) * 100;
  if (pct >= 80) return "text-emerald-600 dark:text-emerald-400";
  if (pct >= 60) return "text-[hsl(var(--kk-orange))]";
  return "text-red-500";
};

const getScoreBarColor = (score: number, max: number) => {
  const pct = (score / max) * 100;
  if (pct >= 80) return "[&>div]:bg-emerald-500";
  if (pct >= 60) return "[&>div]:bg-[hsl(var(--kk-orange))]";
  return "[&>div]:bg-red-500";
};

const getStatusLabel = (score: number, max: number) => {
  const pct = (score / max) * 100;
  if (pct >= 80) return "Uitstekend";
  if (pct >= 60) return "Goed";
  if (pct >= 40) return "Kan beter";
  return "Actie nodig";
};

const getImpactBadge = (impact: string) => {
  if (impact === "high") return { label: "Hoge impact", className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" };
  if (impact === "medium") return { label: "Gemiddelde impact", className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" };
  return { label: "Lage impact", className: "bg-muted text-muted-foreground" };
};

const getEffortBadge = (effort: string) => {
  if (effort === "low") return { label: "Weinig moeite", className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" };
  if (effort === "medium") return { label: "Gemiddelde moeite", className: "bg-[hsl(var(--kk-orange)/0.1)] text-[hsl(var(--kk-orange))]" };
  return { label: "Veel moeite", className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" };
};

// --- Strategy section content components ---

const MetaContent = () => (
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">Doel</h4>
      <p className="text-sm text-muted-foreground">De meta-titel en -beschrijving moeten duidelijk maken wat je aanbiedt. Dit is de eerste aanraking in de zoekresultaten — maak het overtuigend met een combinatie van je propositie, voordelen en een duidelijke volgende stap.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Gewenste lengte</p>
        <p className="text-sm text-foreground">140 tekens (max 160)</p>
      </div>
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Toon</p>
        <p className="text-sm text-foreground">Helder, overtuigend, met duidelijke volgende stap</p>
      </div>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">Zoekwoorden</h4>
      <p className="text-sm text-muted-foreground">Zet je belangrijkste zoekterm aan het begin van de titel. Gebruik variaties natuurlijk in de beschrijving.</p>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-red-500 mb-1">Vermijd</h4>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Herhaling van dezelfde woordgroep</li>
        <li>Clickbait, hoofdletters voor hele woorden en vage claims</li>
      </ul>
    </div>
  </div>
);

const H1Content = () => (
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">Doel</h4>
      <p className="text-sm text-muted-foreground">De hoofdtitel moet in één krachtige zin duidelijk maken wat je aanbiedt. Combineer je merknaam met een scherpe beschrijving van je dienst.</p>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">Voorbeelden</h4>
      <div className="space-y-2">
        {[
          "Recruitment abonnement voor bedrijven – dezelfde vacature voortaan in eigen beheer",
          "Het abonnement voor recruitment waarmee je vacatures zelf invult",
          "De nieuwe standaard voor recruitment: abonnement met talentpool",
        ].map((example, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200/50 dark:border-emerald-800/20">
            <p className="text-sm text-foreground italic">"{example}"</p>
          </div>
        ))}
      </div>
    </div>
    <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
      <p className="text-xs font-semibold text-muted-foreground mb-1">Maximale lengte</p>
      <p className="text-sm text-foreground">65 tekens</p>
    </div>
  </div>
);

const H2Content = () => (
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">Doel</h4>
      <p className="text-sm text-muted-foreground">Maak duidelijke tussenkoppen die een logisch verhaal vertellen: wat je doet, hoe het werkt, voor wie en waarom. Onder elke kop hoort minimaal één alinea met concrete uitleg.</p>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Gewenst aantal</p>
        <p className="text-sm text-foreground">6 tussenkoppen</p>
      </div>
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Minimaal</p>
        <p className="text-sm text-foreground">4 tussenkoppen</p>
      </div>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">Verplichte onderwerpen</h4>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Wat je doet en welk probleem je oplost</li>
        <li>Hoe het werkt (stappenplan)</li>
        <li>Hoe klanten dit zelf kunnen gebruiken</li>
        <li>Je unieke voordelen</li>
      </ul>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">Optionele onderwerpen</h4>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Voordelen ten opzichte van traditionele alternatieven</li>
        <li>Abonnementen en niveaus</li>
        <li>Voor welke organisaties het geschikt is</li>
        <li>Veelgestelde vragen</li>
      </ul>
    </div>
  </div>
);

const FAQContent = () => (
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">Doel</h4>
      <p className="text-sm text-muted-foreground">Een FAQ-sectie is essentieel om drempels weg te nemen bij twijfelende bezoekers. Richt de vragen op praktische zorgen: kosten, looptijd, hoe het werkt en samenwerking met bestaande processen.</p>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Gewenst aantal</p>
        <p className="text-sm text-foreground">8 vragen</p>
      </div>
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Antwoord lengte</p>
        <p className="text-sm text-foreground">60-120 woorden</p>
      </div>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">Aanbevolen vragen</h4>
      <div className="space-y-2">
        {[
          "Wat bied je precies aan?",
          "Hoe werkt het vanaf het eerste contact?",
          "Wat is het verschil met een traditioneel alternatief?",
          "Voor welke organisaties is dit geschikt?",
          "Wat zijn de kosten en looptijd?",
        ].map((q, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-muted/30 border border-border/50 flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-[hsl(var(--kk-violet))] shrink-0" />
            <p className="text-sm text-foreground">{q}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SchemaContent = () => (
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">Doel</h4>
      <p className="text-sm text-muted-foreground">Gestructureerde data helpt zoekmachines begrijpen wat je website doet. Dit vergroot de kans op rijkere zoekresultaten met extra informatie.</p>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">Vereiste schema's</h4>
      <div className="flex flex-wrap gap-2">
        {["Organization", "WebSite", "WebPage", "Service", "FAQPage"].map((type) => (
          <Badge key={type} className="bg-[hsl(var(--kk-violet)/0.1)] text-[hsl(var(--kk-violet))] border-0">{type}</Badge>
        ))}
      </div>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">Optionele schema's</h4>
      <div className="flex flex-wrap gap-2">
        {["BreadcrumbList", "Review", "AggregateRating"].map((type) => (
          <Badge key={type} variant="outline" className="text-xs">{type}</Badge>
        ))}
      </div>
    </div>
    <div className="p-3 rounded-lg bg-[hsl(var(--kk-violet)/0.05)] border border-[hsl(var(--kk-violet)/0.1)]">
      <p className="text-xs text-muted-foreground">
        <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--kk-violet))] inline mr-1" />
        Tip: Controleer de markup altijd met de Rich Results Test van Google voordat je live gaat.
      </p>
    </div>
  </div>
);

const AltTextContent = () => (
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-1">Doel</h4>
      <p className="text-sm text-muted-foreground">Beschrijf bij elke afbeelding kort en feitelijk wat erop te zien is en hoe het aansluit bij je dienst. Dit helpt zoekmachines de context te begrijpen en maakt je site toegankelijker.</p>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Dekking</p>
        <p className="text-sm text-foreground">90% van afbeeldingen</p>
      </div>
      <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
        <p className="text-xs font-semibold text-muted-foreground mb-1">Max. lengte</p>
        <p className="text-sm text-foreground">108 tekens</p>
      </div>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Wel doen</h4>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Beschrijf de situatie en personen op de foto</li>
        <li>Gebruik maximaal één zoekterm per beschrijving</li>
        <li>Houd het natuurlijk en beschrijvend</li>
      </ul>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-red-500 mb-1">Vermijd</h4>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>Generieke teksten als "banner", "logo" of "header image"</li>
        <li>Dezelfde tekst voor meerdere afbeeldingen</li>
      </ul>
    </div>
  </div>
);

// --- Main Component ---

const SEOPlan = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("meta");
  const [showExcluded, setShowExcluded] = useState(false);
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');

  const strategySections: StrategySection[] = [
    { id: "meta", title: "Meta Optimalisatie", subtitle: "Aanbevolen aanpak voor titel & beschrijving", icon: Type, content: <MetaContent /> },
    { id: "h1", title: "H1 Strategie", subtitle: "Richtlijnen voor de hoofdtitel", icon: Heading1, content: <H1Content /> },
    { id: "h2", title: "H2 Strategie", subtitle: "Richtlijnen voor tussenkoppen", icon: Heading2, content: <H2Content /> },
    { id: "faq", title: "FAQ Strategie", subtitle: "Aanbevelingen voor veelgestelde vragen", icon: HelpCircle, content: <FAQContent /> },
    { id: "schema", title: "Schema Strategie", subtitle: "Gestructureerde data voor zoekmachines", icon: Code, content: <SchemaContent /> },
    { id: "alt", title: "ALT Text Strategie", subtitle: "Richtlijnen voor afbeeldingbeschrijvingen", icon: Image, content: <AltTextContent /> },
  ];

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">SEO Plan</h1>
            <p className="text-sm text-muted-foreground hidden sm:block">Overzicht van alle SEO guidance en strategische aanbevelingen</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <Label htmlFor="show-excluded" className="text-xs text-muted-foreground">Toon uitgesloten</Label>
              <Switch id="show-excluded" checked={showExcluded} onCheckedChange={setShowExcluded} />
            </div>
            <Select value={language} onValueChange={(v: 'nl' | 'en') => setLanguage(v)}>
              <SelectTrigger className="w-[60px] sm:w-[70px] text-xs h-8">
                <Globe className="w-3 h-3 sm:mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nl">NL</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
            <ThemeToggle />
          </div>
        </div>

        {/* Page Banner */}
        <div className="mb-6">
          <PageBanner
            label="SEO Plan"
            title="SEO Plan"
            description="Overzicht van alle SEO guidance en strategische aanbevelingen"
            icon={<Target className="w-4 h-4 text-white" />}
          />
        </div>

        <div className="space-y-6">
          
          {/* Score Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {mockScores.map((score) => {
              const Icon = score.icon;
              return (
                <GradientCard key={score.label}>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[hsl(var(--kk-violet))]" />
                        <span className="text-xs sm:text-sm font-medium text-foreground leading-tight">{score.label}</span>
                      </div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="w-6 h-6 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center shrink-0 transition-colors">
                            <Info className="w-3.5 h-3.5 text-muted-foreground" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent side="bottom" className="max-w-[240px] p-3">
                          <p className="text-xs text-muted-foreground">{score.tooltip}</p>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <p className={`text-2xl sm:text-3xl font-bold ${getScoreColor(score.score, score.max)}`}>
                      {score.score}/{score.max}
                    </p>
                    <Progress value={(score.score / score.max) * 100} className={`h-1.5 mt-2 ${getScoreBarColor(score.score, score.max)}`} />
                    <p className="text-xs text-muted-foreground mt-1.5">{getStatusLabel(score.score, score.max)}</p>
                  </div>
                </GradientCard>
              );
            })}
          </div>

          {/* Strategy Sections */}
          <div className="space-y-3">
            {strategySections.map((section) => {
              const isExpanded = expandedSection === section.id;
              const Icon = section.icon;
              return (
                <GradientCard key={section.id} className="animate-fade-in">
                  <div 
                    className="p-4 sm:p-5 cursor-pointer"
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[hsl(var(--kk-violet)/0.1)] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[hsl(var(--kk-violet))]" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-semibold text-foreground">{section.title}</h3>
                          <p className="text-xs text-muted-foreground">{section.subtitle}</p>
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="px-4 sm:px-5 pb-5 animate-fade-in">
                      <div className="border-t border-border/50 pt-4">
                        {section.content}
                      </div>
                    </div>
                  )}
                </GradientCard>
              );
            })}
          </div>

          {/* Priorities & Actions */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
              Prioriteiten & Acties
            </h2>
            <div className="space-y-3">
              {mockPriorities.map((p) => {
                const impactConfig = getImpactBadge(p.impact);
                const effortConfig = getEffortBadge(p.effort);
                return (
                  <GradientCard key={p.id} className="animate-fade-in">
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[hsl(var(--kk-violet))] flex items-center justify-center shrink-0">
                            <span className="text-xs font-bold text-white">{p.id}</span>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-foreground uppercase">{p.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <Badge className={`text-[10px] border-0 ${impactConfig.className}`}>{impactConfig.label}</Badge>
                          <Badge className={`text-[10px] border-0 ${effortConfig.className}`}>{effortConfig.label}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground ml-11">{p.description}</p>
                    </div>
                  </GradientCard>
                );
              })}
            </div>
          </div>

        </div>
    </DashboardLayout>
  );
};

export default SEOPlan;
