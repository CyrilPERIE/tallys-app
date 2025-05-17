"use server";

import { BetService } from "@/server/services/bet-service";

export const createBet = async (amount: number) => {
    const betService = new BetService();
    const betCreated = await betService.createBet(amount);
    return betCreated;
}

