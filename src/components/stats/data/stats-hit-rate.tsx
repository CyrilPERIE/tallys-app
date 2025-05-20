"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getHitRateAction } from "@/server/actions/bet/get-hit-rate-action";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";
export const StatsHitRate = ({ className }: { className?: string }) => {
  const [hitRate, setHitRate] = useState<string | null>(null);
  const { strategyFilter, betTypeFilter, periodFilter } = useFiltersStore(
    (state) => state
  );

  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    getHitRateAction({
      strategy: strategyFilter,
      betType: betTypeFilter,
      period: getPeriod(periodFilter),
    }).then(setHitRate);
  }, [strategyFilter, betTypeFilter, periodFilter]);

  const _hitRateToDisplay = hitRate ? `${hitRate}%` : "Nan%";

  return (
    <div className={cn("text-2xl font-bold", className)}>
      {_hitRateToDisplay}
    </div>
  );
};
