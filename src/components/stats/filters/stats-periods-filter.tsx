"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PeriodLabel } from "@/stores/filters/store";
import { useFiltersStore } from "@/stores/filters/provider";

type Period = {
  label: PeriodLabel;
  period: Date;
};
const now = new Date();

export const getPeriod = (label: PeriodLabel) => {
  const period = periods.find((p) => p.label === label);
  if (period) {
    return period.period;
  }
  return new Date("1900-01-01");
};

const periods: Period[] = [
  {
    label: "3M",
    period: new Date(now.getFullYear(), now.getMonth() - 3, now.getDate(), 0, 0, 0, 0),
  },
  {
    label: "6M",
    period: new Date(now.getFullYear(), now.getMonth() - 6, now.getDate(), 0, 0, 0, 0),
  },
  {
    label: "YTD",
    period: new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0),
  },
  {
    label: "1Y",
    period: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate(), 0, 0, 0, 0),
  },
  {
    label: "MAX",
    period: new Date("1900-01-01"),
  },
];

export const StatsPeriodFilter = ({ className }: { className?: string }) => {
  const { periodFilter, updatePeriodFilter } = useFiltersStore(
    (state) => state
  );
  const handlePeriodClick = (label: PeriodLabel) => {
    const period = periods.find((p) => p.label === label);
    if (period) {
      updatePeriodFilter(label);
    }
  };
  const isActive = (label: PeriodLabel) => label === periodFilter;

  return (
    <Row className={cn("", className)}>
      {periods.map((_period) => {
        const active = isActive(_period.label);
        return (
          <div key={_period.label} className="relative">
            {active && (
              <motion.div
                layoutId="nav-period-pill"
                className="absolute inset-0 bg-slate-100 rounded-full z-0"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <Button
              variant="ghost"
              className={cn(
                "cursor-pointer relative z-10 rounded-full py-2 px-4 transition-colors duration-200 hover:bg-transparent",
                active
                  ? "text-black font-semibold underline"
                  : "text-muted-foreground"
              )}
              key={_period.label}
              onClick={() => handlePeriodClick(_period.label)}
            >
              {_period.label}
            </Button>
          </div>
        );
      })}
    </Row>
  );
};
