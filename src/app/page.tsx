"use client";

import Stats from "@/components/stats/stats";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";
import { useEffect } from "react";
import { usePostAllStatsQuery } from "@/components/stats/hooks/use-get-all-stats-query";
export default function StatsPage() {
  const {
    periodFilter,
    betTypeFilter,
    strategyFilter,
    updateData,
    updateIsLoading,
    updateError,
  } = useFiltersStore((state) => state);
  const { data, isLoading, error } = usePostAllStatsQuery({
    strategy: strategyFilter,
    betType: betTypeFilter,
    period: getPeriod(periodFilter),
  });

  useEffect(() => {
    if (data) {
      updateData(data);
    }
    updateIsLoading(isLoading);
    updateError(error);
  }, [data, isLoading, error]);

  return <Stats className="max-w-[1808px]" />;
}
