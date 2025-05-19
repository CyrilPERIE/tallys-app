"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy } from "@prisma/client";

export const getMostProfitableRaceAction = async ({ strategy }: { strategy: BetStrategy }) => {
  const betService = new BetService();
  const mostProfitableRace = await betService.aggregate({
    where: {
      strategy,
    },
    _max: {
      profit: true,
      courseId: true,
    },
  });
  if (!mostProfitableRace._max?.profit || !mostProfitableRace._max?.courseId) {
    return {
      profit: 0,
      courseId: "",
    };
  }
  return {
    profit: mostProfitableRace._max.profit,
    courseId: mostProfitableRace._max.courseId,
  };
};
