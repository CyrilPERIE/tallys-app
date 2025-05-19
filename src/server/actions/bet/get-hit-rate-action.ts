"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStatus, BetStrategy } from "@prisma/client";

export const getHitRateAction = async ({ strategy }: { strategy: BetStrategy }) => {
    const betService = new BetService();
    const betsWon = await betService.findAll({
        where: {
            betStatus: BetStatus.WON,
            strategy,
        },
    });
    const betsLost = await betService.findAll({
        where: {
            betStatus: BetStatus.LOST,
            strategy,
        },
    });
    const hitRate = betsWon.length / (betsWon.length + betsLost.length);
    return (hitRate * 100).toFixed(2).replace(".", ",");
}
