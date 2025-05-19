"use client";

import { cn } from "@/lib/utils";
import { amountToDisplay } from "@/lib/utils/label";
import { getProfitAction } from "@/server/actions/bet/get-profit-action";
import { useEffect, useState } from "react";
import { useFiltersStore } from "@/stores/filters/provider";

export const StatsTotalProfit = ({ className }: { className?: string }) => {
  const [totalProfit, setTotalProfit] = useState<number | null>(null);
  const { strategyFilter } = useFiltersStore((state) => state);
  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    getProfitAction({ strategy: strategyFilter }).then(setTotalProfit);
  }, [strategyFilter]);

  const totalProfitToDisplay = totalProfit
    ? amountToDisplay(totalProfit)
    : "Nan€";
  return (
    <div className={cn("text-2xl font-bold", className)}>
      {totalProfitToDisplay}
    </div>
  );
};
