"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { Column } from "@/components/ui/layout";
import { amountToDisplay } from "@/lib/utils/label";
import { useFiltersStore } from "@/stores/filters/provider";
import { Skeleton } from "@/components/ui/skeleton";

export const StatsBestMonth = ({ className }: { className?: string }) => {
  const { data, isLoading, error } = useFiltersStore((state) => state);

  if (!data || isLoading || error)
    return (
      <Column className={cn("items-center justify-center gap-2", className)}>
        <Skeleton className="h-4 w-3/5 animate-pulse" />
        <Skeleton className="h-4 w-3/5 animate-pulse" />
      </Column>
    );

  const bestMonthProfit = data.mostProfitableMonth.profit;
  const bestMonthKey = data.mostProfitableMonth.key;

  if(data)return (
    <Column className={cn("items-center justify-center gap-2", className)}>
      <p className="text-2xl font-bold">{amountToDisplay(bestMonthProfit)}</p>
      <p className="text-slate-500">{bestMonthKey}</p>
    </Column>
  );
};
