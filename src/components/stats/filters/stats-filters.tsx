"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { StatsPeriodFilter } from "./stats-periods-filter";
import { StatsStrategyFilter } from "./stats-strategy-filter";

export const StatsFilters = ({ className }: { className?: string }) => {
  return (
    <Row
      className={cn(
        "justify-start gap-4 bg-white rounded-full py-2 px-4 items-center",
        className
      )}
    >
      <StatsStrategyFilter className="bg-white rounded-full py-2 px-4 cursor-pointer" />
      <StatsPeriodFilter className="rounded-full border border-gray-300 py-2 px-4 cursor-pointer" />
    </Row>
  );
};
