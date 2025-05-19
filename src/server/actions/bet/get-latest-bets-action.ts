"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy } from "@prisma/client";

export const getLatestBetsAction = async (strategy: BetStrategy) => {
    const betService = new BetService();
    const bets = await betService.findAll({
        where: {
            strategy: strategy
        },
        orderBy: {
            updatedAt: "desc"
        },
        take: 20
    });
    return bets;
}
