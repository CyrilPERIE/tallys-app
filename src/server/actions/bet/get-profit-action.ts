"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy, BetType } from "@prisma/client";

//TODO: add time period filter
export const getProfitAction = async ({ strategy, betType, period }: { strategy?: BetStrategy, betType?: BetType[], period?: string }) => {
    const betService = new BetService();
    const profit = await betService.aggregate({
        where: {
            strategy,
            betType: {
                in: betType,
            },
            updatedAt: {
                gte: period ? new Date(period) : undefined,
            },
        },
        _sum: {
            profit: true,
        },
    });
    return profit._sum?.profit ?? 0;
}