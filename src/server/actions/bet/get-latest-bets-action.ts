"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy, BetType } from "@prisma/client";

export const getLatestBetsAction = async ({ strategy, betType, period }: { strategy: BetStrategy, betType?: BetType[], period: Date }) => {
    const betService = new BetService();
    const bets = await betService.findAll({
        where: {
            strategy,
            betType: {
                in: betType,
            },
            updatedAt: {
                gte: period,
            },
        },
        orderBy: {
            updatedAt: "desc"
        },
        take: 20
    });
    return bets;
}
