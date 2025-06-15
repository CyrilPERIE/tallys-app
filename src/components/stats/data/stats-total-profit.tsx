"use client";

import { cn } from "@/lib/utils";
import { amountToDisplay } from "@/lib/utils/label";
import { useFiltersStore } from "@/stores/filters/provider";

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
