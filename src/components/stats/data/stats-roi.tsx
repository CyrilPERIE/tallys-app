"use client";

import { cn } from "@/lib/utils";
import { getROIAction } from "@/server/actions/bet/roi-action";
import { useFiltersStore } from "@/stores/filters/provider";
import { useEffect, useState } from "react";

export const StatsROI = ({ className }: { className?: string }) => {
  const [roi, setROI] = useState<string | null>(null);
  const { strategyFilter } = useFiltersStore((state) => state);

  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    getROIAction({ strategy: strategyFilter }).then(setROI);
  }, [strategyFilter]);
  const roiToDisplay = roi ? `(${roi}%)` : "Nan%";
  return <div className={cn("", className)}>{roiToDisplay}</div>;
};
