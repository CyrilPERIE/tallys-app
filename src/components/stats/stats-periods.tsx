"use client";

import { cn } from "@/lib/utils";
import { Row } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const periodLabels = ["3M", "6M", "1Y", "YTD", "MAX"] as const;
export type PeriodLabel = (typeof periodLabels)[number];

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
    label: "1Y",
    action: () => {
      console.log("1Y");
    },
  },
  {
    label: "YTD",
    action: () => {
      console.log("YTD");
    },
  },
  {
    label: "MAX",
    action: () => {
      console.log("MAX");
    },
  },
];

type StatsPeriodProps = {
  period: PeriodLabel;
  setPeriod: (period: PeriodLabel) => void;
  className?: string;
};

export const StatsPeriod = ({
  period,
  setPeriod,
  className,
}: StatsPeriodProps) => {
  const handlePeriodClick = (label: PeriodLabel) => {
    const period = periods.find((p) => p.label === label);
    if (period) {
      period.action();
      setPeriod(label);
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
