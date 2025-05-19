"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy } from "@prisma/client";

//TODO: add time period filter
export const getProfitAction = async ({ strategy }: { strategy: BetStrategy }) => {
    const betService = new BetService();
    const profit = await betService.aggregate({
        where: {
            strategy,
        },
        _sum: {
            profit: true,
        },
    });
    return profit._sum?.profit ?? 0;
}