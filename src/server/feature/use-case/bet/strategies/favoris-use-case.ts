"use server";

import { CourseIdentifiers } from "@/domain/entities/utils";
import { BetStrategy, BetType } from "@prisma/client";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { BetService } from "@/server/services/internal/bet-service";

export const FavorisUseCase = async (
  courseIdentifiers: CourseIdentifiers,
  amount: number = 1
) => {
  try {
    const pmuService = new PmuAPIService();
    const betService = new BetService();
    for (const betType of Object.values(BetType) as BetType[]) {
      const isBetAvailable = await pmuService.isBetAvailable(
        courseIdentifiers,
        betType
      );
      if (!isBetAvailable) continue;

      const favoriteCombination = await pmuService.getFavoriteCombination(
        courseIdentifiers,
        betType
      );
      if (!favoriteCombination) continue;
      await betService.create({
        courseId: courseIdentifiersToCourseId(courseIdentifiers),
        horseNums: favoriteCombination,
        amount,
        strategy: BetStrategy.Favoris,
        betType,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
