"use client";

import { cn } from "@/lib/utils";
import { amountToDisplay } from "@/lib/utils/label";
import { getProfitAction } from "@/server/actions/bet/get-profit-action";
import { useEffect, useState } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";

export const StatsTotalProfit = ({ className }: { className?: string }) => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;

  const totalProfitToDisplay = amountToDisplay(data.profit)

  return (
    <div className={cn("text-2xl font-bold", className)}>
      {totalProfitToDisplay}
    </div>
  );
};
