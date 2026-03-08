import { useState } from "react";
import { ArrowLeft, ArrowRight, Pencil, CheckCircle2, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Optimization {
  type: string;
  before?: string;
  after: string;
}

interface PageOpt {
  slug: string;
  status: "ready" | "approved";
  optimizations: Optimization[];
}

const MOCK_OPTS: PageOpt[] = [
  {
    slug: "/",
    status: "ready",
    optimizations: [
      {
        type: "H1",
        before: "Betaalbare en professionele websites — snel online",
        after: "Val online op met een betaalbare website die voor je werkt, speciaal voor zelfstandigen en kleine bedrijven",
      },
      {
        type: "FAQ",
        after: JSON.stringify([
          { question: "Hoe weet ik wat een betaalbare website voor mijn bedrijf kost?", answer: "Je krijgt vooraf een vaste prijs op basis van jouw wensen en aantal pagina's." },
          { question: "Wanneer is mijn nieuwe website ongeveer klaar?", answer: "Gemiddeld 3 tot 5 weken, afhankelijk van snelheid van jouw feedback." },
        ]),
      },
      {
        type: "Alt Text",
        before: "Kerkelijke Maaltijdcoördinatie",
        after: "Team bespreekt ontwerp voor betaalbare website laten maken",
      },
      {
        type: "Schema",
        after: '{"@context":"https://schema.org","@type":"Organization","name":"Klikklaar Web","url":"https://klikklaarweb.nl/"}',
      },
      {
        type: "Meta Title",
        before: "KlikKlaarWeb | Professionele Websites",
        after: "Betaalbare website laten maken voor kleine bedrijven",
      },
      {
        type: "Meta Description",
        before: "KlikKlaarWeb — Professionele websites voor ondernemers, snel online, betaalbaar en volledig ontzorgd.",
        after: "Laat een betaalbare website maken die past bij jouw kleine bedrijf of organisatie. Duidelijke structuur, moderne uitstraling en makkelijk zelf aan te passen.",
      },
      {
        type: "H2",
        before: "Hoe het werkt | Over KlikKlaarWeb | Onze diensten | Portfolio | Transparante tarieven | Veelgestelde vragen | Neem contact op",
        after: "Hoe we jouw website bouwen: stappenplan van eerste idee tot live gang | Welke webdesign diensten je krijgt: ontwerp, bouw, onderhoud en extra opties | Betaalbare website laten maken met duidelijke aanpak en meetbare meerwaarde",
      },
    ],
  },
];

interface StepReviewOptsProps {
  onPrevious: () => void;
  onContinue: () => void;
}

const StepReviewOpts = ({ onPrevious, onContinue }: StepReviewOptsProps) => {
  const [pages, setPages] = useState<PageOpt[]>(MOCK_OPTS);
  const [selectedSlug, setSelectedSlug] = useState<string>("");

  const selectedPage = pages.find((p) => p.slug === selectedSlug);
  const allApproved = pages.every((p) => p.status === "approved");

  const approve = (slug: string) => {
    setPages((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, status: "approved" } : p))
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <ArrowRightLeft className="w-5 h-5 text-[hsl(var(--kk-violet))]" />
          Review & Approve Optimizations
        </h2>
        <p className="text-sm text-muted-foreground">Vergelijk de voor- en na-optimalisaties en keur ze goed.</p>
      </div>

      <div className="space-y-1.5">
        <p className="text-sm font-medium text-foreground">Selecteer pagina:</p>
        <Select value={selectedSlug} onValueChange={setSelectedSlug}>
          <SelectTrigger className="max-w-sm">
            <SelectValue placeholder="-- Selecteer een pagina --" />
          </SelectTrigger>
          <SelectContent>
            {pages.map((p) => (
              <SelectItem key={p.slug} value={p.slug}>
                {p.slug} ({p.status})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedPage && (
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 space-y-4">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] opacity-50" />
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">Optimalisaties</h3>
            <Button size="sm" variant="outline" className="gap-1.5">
              <Pencil className="w-3.5 h-3.5" />
              Bewerken
            </Button>
          </div>

          <div className="space-y-4">
            {selectedPage.optimizations.map((opt, i) => (
              <div
                key={i}
                className="border-l-[3px] border-[hsl(var(--kk-violet))] pl-4 py-3 space-y-2 rounded-r-lg bg-[hsl(var(--kk-violet)/0.02)]"
              >
                <p className="font-semibold text-foreground text-sm flex items-center gap-2">
                  {opt.type}
                  {opt.before && (
                    <Badge variant="secondary" className="text-[10px] font-normal">voor → na</Badge>
                  )}
                </p>
                {opt.before && (
                  <div className="text-sm text-muted-foreground bg-destructive/5 rounded-lg px-3 py-2 border border-destructive/10">
                    <span className="text-[10px] font-semibold text-destructive uppercase tracking-wider">Voor</span>
                    <p className="mt-0.5">{opt.before}</p>
                  </div>
                )}
                <div className="text-sm text-foreground bg-[hsl(var(--kk-success)/0.05)] rounded-lg px-3 py-2 border border-[hsl(var(--kk-success)/0.1)]">
                  <span className="text-[10px] font-semibold text-[hsl(var(--kk-success))] uppercase tracking-wider">Na</span>
                  {opt.after.length > 200 ? (
                    <pre className="mt-1 text-xs whitespace-pre-wrap break-all font-mono">{opt.after}</pre>
                  ) : (
                    <p className="mt-0.5">{opt.after}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {selectedPage.status !== "approved" ? (
            <Button
              onClick={() => approve(selectedPage.slug)}
              className="gap-2 bg-gradient-to-r from-[hsl(var(--kk-violet))] to-[hsl(var(--kk-fuchsia))] hover:opacity-90 text-white border-0"
            >
              <CheckCircle2 className="w-4 h-4" />
              Approve optimalisaties
            </Button>
          ) : (
            <Badge className="bg-[hsl(var(--kk-success)/0.12)] text-[hsl(var(--kk-success))] border border-[hsl(var(--kk-success)/0.2)]">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
              Approved
            </Badge>
          )}
        </div>
      )}

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Vorige
        </Button>
        {allApproved && (
          <Button onClick={onContinue} className="gap-2">
            Volgende <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepReviewOpts;
