"use client";

import { cn } from "@/lib/utils";
import { getROIAction } from "@/server/actions/bet/roi-action";
import { BetStrategy } from "@prisma/client";
import { useEffect, useState } from "react";

export const StatsROI = ({ className }: { className?: string }) => {
  const [roi, setROI] = useState<string | null>(null);

  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    //TODO: Store strategy
    getROIAction({ strategy: BetStrategy.Foule_v1_0 }).then(setROI);
  }, []);
  const roiToDisplay = roi ? `(${roi}%)` : "Nan%";
  return <div className={cn("", className)}>{roiToDisplay}</div>;
};
