"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { Column } from "@/components/ui/layout";
import { amountToDisplay, getMonthLabel } from "@/lib/utils/label"; 
import { useState } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { useEffect } from "react";
import { getMostProfitableMonthAction } from "@/server/actions/bet/get-most-profitable-month-action";

export const StatsBestMonth = ({ className }: { className?: string }) => {
  const [bestMonth, setBestMonth] = useState<{ key: string, profit: number } | null>(null);
  const { strategyFilter } = useFiltersStore((state) => state);

  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    getMostProfitableMonthAction({ strategy: strategyFilter }).then(setBestMonth);
  }, [strategyFilter]);
  return (
    <Column className={cn("items-center justify-center gap-2", className)}>
      <p className="text-2xl font-bold">{amountToDisplay(bestMonth?.profit ?? 0)}</p>
      <Row className="text-slate-500">
        <p>
          <span>{bestMonth?.key}</span>
        </p>
      </Row>
    </Column>
  );
};
