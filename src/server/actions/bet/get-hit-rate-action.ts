"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStatus, BetStrategy, BetType } from "@prisma/client";

//TODO: add time period filter
export const getHitRateAction = async ({ strategy, betType, period }: { strategy?: BetStrategy, betType: BetType[], period: Date }) => {
    const betService = new BetService();
    const betsWon = await betService.findAll({
        where: {
            betStatus: BetStatus.WON,
            strategy,
            betType: {
                in: betType,
            },
            updatedAt: {
                gte: period,
            },
        },
    });
    const betsLost = await betService.findAll({
        where: {
            betStatus: BetStatus.LOST,
            strategy,
            betType: {
                in: betType,
            },
            updatedAt: {
                gte: period,
            },
        },
    });
    const hitRate = betsWon.length / (betsWon.length + betsLost.length);
    return (hitRate * 100).toFixed(2).replace(".", ",");
}
