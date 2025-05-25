"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { StatsPeriodFilter } from "@/components/stats/filters/stats-periods-filter";
import { StatsStrategyFilter } from "@/components/stats/filters/stats-strategy-filter";
import { StatsBetTypeFilter } from "@/components/stats/filters/stats-bet-type-filter";

export const StatsFilters = ({ className }: { className?: string }) => {
  return (
    <Row
      className={cn(
        "justify-start gap-4 bg-white sm:rounded-full py-2 px-4 sm:items-center flex-col sm:flex-row items-start",
        className
      )}
    >
      <StatsStrategyFilter className="bg-white rounded-full py-2 px-4 cursor-pointer" />
      <StatsPeriodFilter className="rounded-full border border-gray-300 py-2 px-4 cursor-pointer" />
      <StatsBetTypeFilter className="rounded-full border border-gray-300 py-2 px-4 cursor-pointer flex-1" />
    </Row>
  );
};
