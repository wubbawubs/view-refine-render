import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Pencil } from "lucide-react";

interface SEOPlanSection {
  label: string;
  content: string;
  charCount?: number;
  isList?: boolean;
  listItems?: string[];
}

interface PagePlan {
  slug: string;
  type: string;
  status: "ready" | "approved";
  sections: SEOPlanSection[];
}

const MOCK_PLANS: PagePlan[] = [
  {
    slug: "/",
    type: "home",
    status: "ready",
    sections: [
      {
        label: "H1",
        content:
          "De H1 moet in één keer duidelijk maken wat KlikKlaarWeb doet en voor wie, met de primaire zoekterm centraal. Houd de stijl kort en beschrijvend, vergelijkbaar met bestaande koppen, maar concreter over de dienst.",
        charCount: 211,
      },
      {
        label: "Meta Title",
        content:
          "Titel en meta description moeten duidelijk maken dat KlikKlaarWeb betaalbare, professionele websites levert met een helder proces en transparante tarieven. Omdat concurrenten geen duidelijk patroon volgen, is er ruimte om op te vallen met een concrete belofte en sterke call-to-action.",
        charCount: 285,
      },
      {
        label: "Meta Description",
        content:
          "Titel en meta description moeten duidelijk maken dat KlikKlaarWeb betaalbare, professionele websites levert met een helder proces en transparante tarieven. Omdat concurrenten geen duidelijk patroon volgen, is er ruimte om op te vallen met een concrete belofte en sterke call-to-action.",
        charCount: 285,
      },
      {
        label: "H2's",
        content: "",
        isList: true,
        listItems: [
          "Hero-sectie (boven de vouw) met H1 en korte intro, zonder H2.",
          "H2: Hoe het werkt – stappenplan van idee tot live website, inclusief doorlooptijd.",
          "H2: Onze diensten – overzicht van webdesign, bouw, onderhoud en eventuele extra's.",
          "H2: Betaalbare website laten maken – korte uitleg van aanpak en meerwaarde, met primaire zoekterm.",
          "H2: Portfolio – selectie projecten met korte toelichting per case.",
          "H2: Transparante tarieven – pakketten of voorbeeldprijzen en wat inbegrepen is.",
          "H2: Veelgestelde vragen – 5–8 kernvragen rond kosten, techniek en samenwerking.",
          "H2: Neem contact op – duidelijke call-to-action met keuze uit contactopties.",
        ],
      },
      {
        label: "Intro",
        content:
          "De sectie 'Veelgestelde vragen' staat al als H2, maar er zijn nog geen vragen ingevuld. Dit is een kans om concrete twijfels rond kosten, doorlooptijd, techniek en samenwerking te beantwoorden en zo long-tail zoekopdrachten en featured snippets te winnen.",
        charCount: 255,
      },
    ],
  },
];

interface StepReviewPlansProps {
  onPrevious: () => void;
  onContinue: () => void;
}

const StepReviewPlans = ({ onPrevious, onContinue }: StepReviewPlansProps) => {
  const [plans, setPlans] = useState<PagePlan[]>(MOCK_PLANS);
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  const [showRawData, setShowRawData] = useState(false);

  const selectedPlan = plans.find((p) => p.slug === selectedSlug);
  const allApproved = plans.every((p) => p.status === "approved");

  const approvePlan = (slug: string) => {
    setPlans((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, status: "approved" } : p))
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Review & Approve SEO Plans</h2>

      {/* Page selector */}
      <div className="space-y-1.5">
        <p className="text-sm font-medium text-foreground">Selecteer pagina:</p>
        <Select value={selectedSlug} onValueChange={setSelectedSlug}>
          <SelectTrigger>
            <SelectValue placeholder="-- Selecteer een pagina --" />
          </SelectTrigger>
          <SelectContent>
            {plans.map((p) => (
              <SelectItem key={p.slug} value={p.slug}>
                {p.slug} ({p.type})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* SEO Plan Details */}
      {selectedPlan && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">SEO Plan Details</h3>
            <Button size="sm" variant="outline" className="gap-1.5">
              <Pencil className="w-3.5 h-3.5" />
              Bewerken
            </Button>
          </div>

          {selectedPlan.sections.map((section) => (
            <Collapsible key={section.label} defaultOpen>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{section.label}:</span>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm" className="h-6 text-xs gap-1 px-2">
                        <ChevronDown className="w-3 h-3" />
                        Details
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  {section.charCount && (
                    <span className="text-xs text-muted-foreground">
                      {section.charCount} tekens
                    </span>
                  )}
                </div>
                <CollapsibleContent>
                  {section.isList && section.listItems ? (
                    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground bg-muted/30 rounded-lg p-4">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-foreground bg-muted/30 rounded-lg p-4">
                      {section.content}
                    </p>
                  )}
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}

          {selectedPlan.status !== "approved" && (
            <Button onClick={() => approvePlan(selectedPlan.slug)}>
              Approve SEO Plan
            </Button>
          )}
          {selectedPlan.status === "approved" && (
            <Badge className="bg-green-500 hover:bg-green-600">Approved ✓</Badge>
          )}

          {/* Raw data toggle */}
          <Collapsible open={showRawData} onOpenChange={setShowRawData}>
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-foreground">Volledige SEO Plan Data</h4>
                <CollapsibleTrigger asChild>
                  <Button size="sm" variant="secondary" className="gap-1">
                    <ChevronDown className="w-3 h-3" />
                    Toon volledige data
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <pre className="mt-3 text-xs bg-muted/50 rounded-lg p-4 overflow-x-auto text-foreground">
                  {JSON.stringify(selectedPlan, null, 2)}
                </pre>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      )}

      {/* Pagina Status table */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-3">
        <h3 className="font-semibold text-foreground">Pagina Status</h3>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 items-center px-4 py-2.5 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
            <span>Slug</span>
            <span>Status</span>
            <span>Actie</span>
          </div>
          {plans.map((p) => (
            <div
              key={p.slug}
              className="grid grid-cols-3 items-center px-4 py-3 border-b border-border last:border-b-0"
            >
              <span className="text-sm text-foreground">{p.slug}</span>
              <Badge
                variant="secondary"
                className={
                  p.status === "approved"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                }
              >
                {p.status === "approved" ? "APPROVED" : "READY"}
              </Badge>
              {p.status !== "approved" ? (
                <Button size="sm" onClick={() => approvePlan(p.slug)}>
                  Approve
                </Button>
              ) : (
                <span className="text-sm text-muted-foreground">✓</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious}>
          ⬅ Vorige
        </Button>
        {allApproved && (
          <Button onClick={onContinue}>
            Volgende ➡
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepReviewPlans;
