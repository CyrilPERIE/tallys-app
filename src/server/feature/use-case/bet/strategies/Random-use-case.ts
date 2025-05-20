"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { CourseIdentifiers } from "@/domain/entities/utils";
import { BetStrategy, BetType } from "@prisma/client";
import { getBetSpecification } from "@/domain/entities/bet";
export const RandomUseCase = async (
  courseIdentifiers: CourseIdentifiers,
  amount: number = 1
): Promise<void> => {
  const pmuService = new PmuAPIService();
  const betService = new BetService();
  for (const betType of Object.values(BetType) as BetType[]) {
    const betSpecification = getBetSpecification(betType);
    const isBetAvailable = await pmuService.isBetAvailable(
      courseIdentifiers,
      betType
    );
    if (!isBetAvailable) continue;
    const horse = await pmuService.getRandomParticipantFromCourse(
      courseIdentifiers,
      betSpecification.countHorseNumber
    );

    if (horse.length === 0) continue;
    const betCreated = await betService.create({
      courseId: courseIdentifiersToCourseId(courseIdentifiers),
      horseNums: horse,
      amount,
      strategy: BetStrategy.Random,
      betType,
    });
  }
};
