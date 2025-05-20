"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStatus, BetStrategy, BetType } from "@prisma/client";

//TODO: add time period filter
export const getCountRatioAction = async ({ strategy, betType, period }: { strategy?: BetStrategy, betType?: BetType[], period?: string }) => {
    const betService = new BetService();
    const bets = await betService.findAll({
        where: {
            strategy,
            betType: {
                in: betType,
            },
            updatedAt: {
                gte: period ? new Date(period) : undefined,
            },
        },
    });
    const totalBetCount = bets.length;
    const totalWinBetCount = bets.filter((bet) => bet.betStatus === BetStatus.WON).length;
    return { totalBetCount, totalWinBetCount };
}
