"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { Column } from "@/components/ui/layout";
import { amountToDisplay, getMonthLabel } from "@/lib/utils/label";
import { useState } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { useEffect } from "react";

export const StatsBestMonth = ({ className }: { className?: string }) => {
  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;

  const bestMonthProfit = data.mostProfitableMonth.profit;
  const bestMonthKey = data.mostProfitableMonth.key;

  return (
    <Column className={cn("items-center justify-center gap-2", className)}>
      <p className="text-2xl font-bold">{amountToDisplay(bestMonthProfit)}</p>
      <Row className="text-slate-500">
        <p>
          <span>{bestMonthKey}</span>
        </p>
      </Row>
    </Column>
  );
};
