"use client";

import { cn } from "@/lib/utils";
import { getCountRatioAction } from "@/server/actions/bet/count-ratio-action";
import { useEffect, useState } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";
export const StatsBetCountRatio = ({ className }: { className?: string }) => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;

  const totalWinBetCount = data.countRatio.totalWinBetCount
  const totalBetCount = data.countRatio.totalBetCount

  return (
    <div className={cn("", className)}>
      ({totalWinBetCount}/{totalBetCount})
    </div>
  );
};
