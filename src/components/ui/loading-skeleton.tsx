import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const KeywordsTableSkeleton = () => {
  return (
    <Card className="glass-card p-8 shadow-luxury animate-slide-up rounded-2xl border border-white/20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center justify-between py-4 border-b border-kk-gray-100/30">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-16" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export const CardSkeleton = () => {
  return (
    <Card className="p-6 lg:p-8 shadow-card animate-fade-in rounded-2xl border border-border bg-card">
      <Skeleton className="h-8 w-48 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-10 w-32" />
    </Card>
  );
};

export const KPICardSkeleton = () => {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-border shadow-card smooth-hover">
      <div className="h-1 w-full bg-gradient-to-r from-kk-violet via-kk-fuchsia to-kk-orange"></div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Skeleton className="w-12 h-12 rounded-xl" />
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>
        <Skeleton className="h-4 w-24 mb-3" />
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </Card>
  );
};

export const TableSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 py-3">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/4" />
        </div>
      ))}
    </div>
  );
};
