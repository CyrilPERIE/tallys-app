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
  if (!highestOddsWin._max?.odds || !highestOddsWin._max?.courseId) {
    return {
      odds: 0,
      courseId: "",
    };
  }
  return {
    odds: highestOddsWin._max.odds,
    courseId: highestOddsWin._max.courseId,
  };
};
