"use client";

import { cn } from "@/lib/utils";
import { amountToDisplay } from "@/lib/utils/label";
import { getProfitAction } from "@/server/actions/bet/get-profit-action";
import { useEffect, useState } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";

export const StatsTotalProfit = ({ className }: { className?: string }) => {
  const [totalProfit, setTotalProfit] = useState<number | null>(null);
  const { strategyFilter, betTypeFilter, periodFilter } = useFiltersStore((state) => state);
  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    getProfitAction({ strategy: strategyFilter, betType: betTypeFilter, period: getPeriod(periodFilter) }).then(setTotalProfit);
  }, [strategyFilter, betTypeFilter, periodFilter]);

  const totalProfitToDisplay = totalProfit
    ? amountToDisplay(totalProfit)
    : "Nan€";
  return (
    <div className={cn("text-2xl font-bold", className)}>
      {totalProfitToDisplay}
    </div>
  );
};
