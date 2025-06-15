"use client";

import { cn } from "@/lib/utils";
import { useFiltersStore } from "@/stores/filters/provider";

export const StatsHitRate = ({ className }: { className?: string }) => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;
  const hitRate = data.hitRate
  const _hitRateToDisplay = hitRate ? `${hitRate}%` : "Nan%";

  return (
    <div className={cn("text-2xl font-bold", className)}>
      {_hitRateToDisplay}
    </div>
  );
};
