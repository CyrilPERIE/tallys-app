"use client";

import { BetStrategy } from "@prisma/client";
import { useFiltersStore } from "@/stores/filters/provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const StatsStrategyFilter = ({ className }: { className?: string }) => {
  const { strategyFilter, updateStrategyFilter } = useFiltersStore((state) => state);

  return (
    <Select value={strategyFilter} onValueChange={updateStrategyFilter}>
      <SelectTrigger className={cn("", className)}>
        <SelectValue placeholder="Select a strategy" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(BetStrategy).map((strategy) => (
          <SelectItem
            className="cursor-pointer"
            key={strategy}
            value={strategy}
          >
            {strategy}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
