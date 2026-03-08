import { useState } from "react";
import { ArrowLeft, ArrowRight, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";
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
      <h2 className="text-xl font-bold text-foreground">Review & Approve Optimizations</h2>

      <div className="space-y-1.5">
        <p className="text-sm font-medium text-foreground">Selecteer pagina:</p>
        <Select value={selectedSlug} onValueChange={setSelectedSlug}>
          <SelectTrigger>
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
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
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
                className="border-l-4 border-primary pl-4 py-3 space-y-1"
              >
                <p className="font-semibold text-foreground">{opt.type}</p>
                {opt.before && (
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Voor:</span> {opt.before}
                  </p>
                )}
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Na:</span>{" "}
                  {opt.after.length > 200 ? (
                    <code className="text-xs bg-muted/50 rounded p-1 block mt-1 whitespace-pre-wrap break-all">
                      {opt.after}
                    </code>
                  ) : (
                    opt.after
                  )}
                </p>
              </div>
            ))}
          </div>

          {selectedPage.status !== "approved" ? (
            <Button onClick={() => approve(selectedPage.slug)}>
              Approve optimalisaties voor deze pagina
            </Button>
          ) : (
            <Badge className="bg-green-500 hover:bg-green-600">Approved ✓</Badge>
          )}
        </div>
      )}

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

export default StepReviewOpts;
