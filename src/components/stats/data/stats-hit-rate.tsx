"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getHitRateAction } from "@/server/actions/bet/get-hit-rate-action";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";
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
