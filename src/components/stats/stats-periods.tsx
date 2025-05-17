"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PeriodLabel } from "@/stores/periods/store";
import { usePeriodStore } from "@/stores/periods/provider";

type Period = {
  label: PeriodLabel;
  action: () => void;
};

const periods: Period[] = [
  {
    label: "3M",
    action: () => {
      console.log("3M");
    },
  },
  {
    label: "6M",
    action: () => {
      console.log("6M");
    },
  },
  {
    label: "YTD",
    action: () => {
      console.log("YTD");
    },
  },
  {
    label: "1Y",
    action: () => {
      console.log("1Y");
    },
  },
  {
    label: "MAX",
    action: () => {
      console.log("MAX");
    },
  },
];

export const StatsPeriod = ({ className }: { className?: string }) => {
  const { period, updatePeriod } = usePeriodStore((state) => state);
  const handlePeriodClick = (label: PeriodLabel) => {
    const period = periods.find((p) => p.label === label);
    if (period) {
      period.action();
      updatePeriod(label);
    }
  };
  const isActive = (label: PeriodLabel) => label === period;

  return (
    <Row
      className={cn(
        "justify-start gap-6 bg-white rounded-full py-2 px-4",
        className
      )}
    >
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
