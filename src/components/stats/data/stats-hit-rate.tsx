"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getHitRateAction } from "@/server/actions/bet/get-hit-rate-action";
import { BetStrategy } from "@prisma/client";
export const StatsHitRate = ({ className }: { className?: string }) => {
  const [hitRate, setHitRate] = useState<string | null>(null);

  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    //TODO: Store strategy
    getHitRateAction({ strategy: BetStrategy.Foule_v1_0 }).then(setHitRate);
  }, []);

  const _hitRateToDisplay = hitRate ? `${hitRate}%` : "Nan%";

  return (
    <div className={cn("text-2xl font-bold", className)}>
      {_hitRateToDisplay}
    </div>
  );
};
