import { BetStatus } from "@prisma/client";

import { BetService } from "@/server/services/internal/bet-service";
import {
  courseIdentifiersToCourseId,
  courseIdToCourseIdentifiers,
} from "@/lib/utils/pmu";
import { placeResultGain } from "@/lib/utils/bet";
import { CourseIdentifiers } from "@/domain/entities/utils";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";

export const setProfitAction = async (courseIdentifiers: CourseIdentifiers) => {
  const pmuService = new PmuAPIService();
  const isRaceOver = await pmuService.isRaceOver(courseIdentifiers);
  if (!isRaceOver) return;
  const betService = new BetService();
  const bets = await betService.findAll({
    where: {
      betStatus: BetStatus.PENDING,
      courseId: courseIdentifiersToCourseId(courseIdentifiers),
    },
  });
  for (const bet of bets) {
    const courseIdentifiers = courseIdToCourseIdentifiers(bet.courseId);
    if (!courseIdentifiers || bet.horseNums.length === 0) continue;
    const betGain = await placeResultGain(
      bet.horseNums[0],
      bet.amount,
      courseIdentifiers
    );
    if (betGain.isRaceOver) {
      const { betStatus, gain, odds } = betGain;
      const profit = gain
        ? +(gain - bet.amount).toFixed(2)
        : -bet.amount.toFixed(2);
      await betService.update(bet.id, {
        betStatus,
        gain: gain,
        profit: profit,
        odds: odds,
      });
    }
  }
};
