import { CourseIdentifiers } from "@/lib/types/pmu";
import { BetStrategy, BetType } from "@prisma/client";
import {
  courseIdentifiersToCourseId,
  getFavoriteCombination,
} from "@/lib/utils/pmu";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { BetService } from "@/server/services/internal/bet-service";

export const FavorisUseCase = async (courseIdentifiers: CourseIdentifiers) => {
  const pmuService = new PmuAPIService();
  const rapports = await pmuService.getRapports(courseIdentifiers);
  if (!rapports) return;
  const favoriteCombination = getFavoriteCombination(rapports);
  if (favoriteCombination.length === 0) return;
  const betService = new BetService();
  await betService.create({
    courseId: courseIdentifiersToCourseId(courseIdentifiers),
    horseNums: favoriteCombination,
    amount: 1,
    strategy: BetStrategy.Favoris,
  });
};
