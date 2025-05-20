"use client";

import { cn } from "@/lib/utils";
import { getCountRatioAction } from "@/server/actions/bet/count-ratio-action";
import { useEffect, useState } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";
export const StatsBetCountRatio = ({ className }: { className?: string }) => {
  const [totalBetCount, setTotalBetCount] = useState<number | null>(null);
  const [totalWinBetCount, setTotalWinBetCount] = useState<number | null>(null);
  const { strategyFilter, betTypeFilter, periodFilter } = useFiltersStore((state) => state);

  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    getCountRatioAction({ strategy: strategyFilter, betType: betTypeFilter, period: getPeriod(periodFilter) }).then(
      ({ totalBetCount, totalWinBetCount }) => {
        setTotalBetCount(totalBetCount);
        setTotalWinBetCount(totalWinBetCount);
      }
    );
  }, [strategyFilter, betTypeFilter, periodFilter]);

  return (
    <div className={cn("", className)}>
      ({totalWinBetCount}/{totalBetCount})
    </div>
  );
};
