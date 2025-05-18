"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { Bet } from "@prisma/client";

export const createBetUseCase = async ({courseId, horseNums, amount = 1}: Pick<Bet, "amount" | "courseId" | "horseNums">) => {
    const betService = new BetService();
    const betCreated = await betService.create({amount, courseId, horseNums});
    return betCreated;
}
