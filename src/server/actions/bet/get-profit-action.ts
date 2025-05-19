"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy } from "@prisma/client";

//TODO: add time period filter
export const getProfitAction = async ({ strategy }: { strategy: BetStrategy }) => {
    const betService = new BetService();
    const bets = await betService.findAll({
        where: {
            strategy,
        },
    });
    const profit = bets.reduce((acc, bet) => acc + (bet.profit ?? 0), 0);
    return profit;
}