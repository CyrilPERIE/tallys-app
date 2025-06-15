"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useFiltersStore } from "@/stores/filters/provider";

export const StatsHitRate = ({ className }: { className?: string }) => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  if (!data || isLoading || error) return <Skeleton className={cn("h-4 w-3/5 animate-pulse", className)} />;

  const hitRate = data.hitRate
  const _hitRateToDisplay = hitRate ? `${hitRate}%` : "Nan%";

  if (data) return (
    <div className={cn("text-2xl font-bold", className)}>
      {_hitRateToDisplay}
    </div>
  );
};
