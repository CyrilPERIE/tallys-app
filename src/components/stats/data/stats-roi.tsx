"use client";

import { cn } from "@/lib/utils";
import { getROIAction } from "@/server/actions/bet/roi-action";
import { useFiltersStore } from "@/stores/filters/provider";
import { useEffect, useState } from "react";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";
export const StatsROI = ({ className }: { className?: string }) => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;

  const roi = data.roi
  const roiToDisplay = roi ? `(${roi}%)` : "Nan%";
  
  return <div className={cn("", className)}>{roiToDisplay}</div>;
};
