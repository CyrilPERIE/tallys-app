"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStatus, BetStrategy } from "@prisma/client";

//TODO: add time period filter
export const getCountRatioAction = async ({ strategy }: { strategy: BetStrategy }) => {
    const betService = new BetService();
    const bets = await betService.findAll({
        where: {
            strategy,
        },
    });
    const totalBetCount = bets.length;
    const totalWinBetCount = bets.filter((bet) => bet.betStatus === BetStatus.WON).length;
    return { totalBetCount, totalWinBetCount };
}
