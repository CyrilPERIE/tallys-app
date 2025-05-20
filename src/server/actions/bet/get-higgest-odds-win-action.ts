"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy, BetType } from "@prisma/client";

export const getHiggestOddsWinAction = async ({ strategy, betType, period }: { strategy?: BetStrategy, betType?: BetType[], period?: string }) => {
  const betService = new BetService();
  const highestOddsWin = await betService.aggregate({
    where: {
      strategy,
      betType: {
        in: betType,
      },
      updatedAt: {
        gte: period ? new Date(period) : undefined,
      },
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
