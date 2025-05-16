"use client";

import { cn } from "@/lib/utils";
import { Column, Row } from "@/components/ui/layout";
import {
  StatsHitRate,
  StatsROI,
  StatsCumulativeProfit,
  StatsLastBet,
  StatsTotalProfit,
  StatsPeriod,
  StatsHighlights,
} from "@/components/stats";
import { useState } from "react";
import { PeriodLabel } from "@/components/stats/stats-periods";

export default function Stats({ className }: { className?: string }) {
  const [period, setPeriod] = useState<PeriodLabel>("3M");

  return (
    <Column className={cn("", className)}>
      <StatsPeriod period={period} setPeriod={setPeriod} className="mb-4" />
      <Row className="flex-1">
        <Column className="flex-1">
          <Row className="flex-1 max-h-40">
            <StatsTotalProfit className="bg-red-500 flex-1 max-w-40" />
            <StatsHitRate className="bg-violet-500 flex-1 max-w-40" />
            <StatsROI className="bg-violet-500 flex-1 max-w-40" />
            <StatsHighlights className="bg-violet-500 flex-1 max-w-40" />
          </Row>
          <StatsCumulativeProfit className="bg-blue-500 flex-1" />
        </Column>
        <StatsLastBet className="w-2xl bg-yellow-500" />
      </Row>
    </Column>
  );
}
