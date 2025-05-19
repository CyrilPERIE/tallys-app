"use client";

import { cn } from "@/lib/utils";
import { amountToDisplay } from "@/lib/utils/label";
import { getProfitAction } from "@/server/actions/bet/get-profit-action";
import { useEffect, useState } from "react";
import { BetStrategy } from "@prisma/client";

export const StatsTotalProfit = ({ className }: { className?: string }) => {
  const [totalProfit, setTotalProfit] = useState<number | null>(null);

  //TODO: add loading state + voir pour ne pas faire de useEffect
  useEffect(() => {
    //TODO: Store strategy
    getProfitAction({ strategy: BetStrategy.Foule_v1_0 }).then(setTotalProfit);
  }, []);

  const totalProfitToDisplay = totalProfit ? amountToDisplay(totalProfit) : "Nan€";
  return (
    <div className={cn("text-2xl font-bold", className)}>
      {totalProfitToDisplay}
    </div>
  );
};
