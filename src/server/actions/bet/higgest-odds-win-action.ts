"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy } from "@prisma/client";

export const getHiggestOddsWinAction = async ({ strategy }: { strategy: BetStrategy }) => {
  const betService = new BetService();
  const highestOddsWin = await betService.aggregate({
    where: {
      strategy,
    },
    _max: {
      odds: true,
      courseId: true,
    },
  });
  console.log(highestOddsWin);
  return {
    odds: highestOddsWin._max?.odds,
    courseId: highestOddsWin._max?.courseId,
  };
};
