"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useFiltersStore } from "@/stores/filters/provider";

export const StatsBetCountRatio = ({ className }: { className?: string }) => {
  const { data, isLoading, error } = useFiltersStore((state) => state);

  if (!data || isLoading || error)
    return <Skeleton className={cn("h-4 w-3/5 animate-pulse", className)} />;

  const totalWinBetCount = data.countRatio.totalWinBetCount;
  const totalBetCount = data.countRatio.totalBetCount;

  if (data)
    return (
      <div className={cn("", className)}>
        ({totalWinBetCount}/{totalBetCount})
      </div>
    );
};
