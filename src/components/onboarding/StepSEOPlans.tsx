import { useState, useEffect } from "react";
import { CheckCircle2, Loader2, XCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface PageStatus {
  slug: string;
  audit: "pending" | "running" | "done" | "failed";
  seoPlan: "pending" | "running" | "done" | "failed";
  status: "pending" | "running" | "done" | "failed";
}

interface StepSEOPlansProps {
  onPrevious: () => void;
  onContinue: () => void;
}

const MOCK_PAGES: PageStatus[] = [
  { slug: "/", audit: "running", seoPlan: "running", status: "running" },
  { slug: "/diensten", audit: "pending", seoPlan: "pending", status: "pending" },
  { slug: "/over-ons", audit: "pending", seoPlan: "pending", status: "pending" },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "done":
      return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    case "running":
      return <Loader2 className="w-4 h-4 animate-spin text-primary" />;
    case "failed":
      return <XCircle className="w-4 h-4 text-destructive" />;
    default:
      return <span className="w-4 h-4 rounded-full bg-muted inline-block" />;
  }
};

const StepSEOPlans = ({ onPrevious, onContinue }: StepSEOPlansProps) => {
  const [pages, setPages] = useState<PageStatus[]>(MOCK_PAGES);
  const [progress, setProgress] = useState(10);

  // Simulate polling progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 1500);

    // Simulate pages completing
    const timeout1 = setTimeout(() => {
      setPages((prev) =>
        prev.map((p) =>
          p.slug === "/" ? { ...p, audit: "done", seoPlan: "done", status: "done" } : p
        )
      );
    }, 3000);

    const timeout2 = setTimeout(() => {
      setPages((prev) =>
        prev.map((p) =>
          p.slug === "/diensten"
            ? { ...p, audit: "done", seoPlan: "running", status: "running" }
            : p
        )
      );
    }, 4500);

    const timeout3 = setTimeout(() => {
      setPages((prev) =>
        prev.map((p) => ({ ...p, audit: "done", seoPlan: "done", status: "done" }))
      );
      setProgress(100);
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const doneCount = pages.filter((p) => p.status === "done").length;
  const runningCount = pages.filter((p) => p.status === "running").length;
  const failedCount = pages.filter((p) => p.status === "failed").length;
  const allDone = doneCount === pages.length;

  const overallStatus = allDone ? "COMPLETED" : failedCount > 0 ? "ERROR" : "IN PROGRESS";

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">SEO Plan Generatie</h2>

      {/* Status cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="rounded-lg border border-border p-3 space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase">Overall Status</p>
          <Badge
            variant={allDone ? "default" : "secondary"}
            className={allDone ? "bg-green-500 hover:bg-green-600" : ""}
          >
            {overallStatus}
          </Badge>
        </div>
        <div className="rounded-lg border border-border p-3 space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase">Ready</p>
          <p className="text-lg font-semibold text-foreground">
            {doneCount}/{pages.length}
          </p>
        </div>
        <div className="rounded-lg border border-border p-3 space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase">Running</p>
          <p className="text-lg font-semibold text-foreground">{runningCount}</p>
        </div>
        <div className="rounded-lg border border-border p-3 space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase">Failed</p>
          <p className="text-lg font-semibold text-foreground">{failedCount}</p>
        </div>
      </div>

      {/* Progress bar */}
      <Progress value={Math.min(progress, 100)} className="h-2" />

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-[1fr_80px_80px_120px_80px] items-center px-4 py-2.5 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground">
          <span>Slug</span>
          <span>Audit</span>
          <span>SEO Plan</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
        {pages.map((page) => (
          <div
            key={page.slug}
            className="grid grid-cols-[1fr_80px_80px_120px_80px] items-center px-4 py-3 border-b border-border last:border-b-0"
          >
            <span className="text-sm text-foreground">{page.slug}</span>
            <StatusIcon status={page.audit} />
            <StatusIcon status={page.seoPlan} />
            <div className="flex items-center gap-1.5">
              <StatusIcon status={page.status} />
              <span className="text-sm capitalize text-foreground">{page.status}</span>
            </div>
            <span className="text-sm text-muted-foreground">-</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button variant="outline" onClick={onPrevious} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Vorige
        </Button>
        {allDone && (
          <Button onClick={onContinue} className="gap-2">
            Volgende <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepSEOPlans;
