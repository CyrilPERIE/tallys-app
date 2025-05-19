"use client";

import { cn } from "@/lib/utils";
import { getCountRatioAction } from "@/server/actions/bet/count-ratio-action";
import { useEffect, useState } from "react";
import { BetStrategy } from "@prisma/client";

export const StatsBetCountRatio = ({className}: {className?: string}) => {
    const [totalBetCount, setTotalBetCount] = useState<number | null>(null);
    const [totalWinBetCount, setTotalWinBetCount] = useState<number | null>(null);

    //TODO: add loading state + voir pour ne pas faire de useEffect
    useEffect(() => {
        //TODO: Store strategy
        getCountRatioAction({ strategy: BetStrategy.Foule_v1_0 }).then(({ totalBetCount, totalWinBetCount }) => {
            setTotalBetCount(totalBetCount);
            setTotalWinBetCount(totalWinBetCount);
        });
    }, []);

    return <div className={cn("", className)}>({totalWinBetCount}/{totalBetCount})</div>;
}
        