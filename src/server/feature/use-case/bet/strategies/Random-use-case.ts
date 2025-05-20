import { BetService } from "@/server/services/internal/bet-service";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { CourseIdentifiers } from "@/domain/entities/utils";
import { BetStrategy } from "@prisma/client";
import { z } from "zod";

export const RandomUseCase = async (
  courseIdentifiers: CourseIdentifiers
) => {
  const pmuService = new PmuAPIService();
  const horse = await pmuService.getRandomParticipantFromCourse(
    courseIdentifiers
  );
  if (horse.length === 0) return null;
  const betService = new BetService();
  const betCreated = await betService.create({
    courseId: courseIdentifiersToCourseId(courseIdentifiers),
    horseNums: horse,
    amount: 1,
    strategy: BetStrategy.Random,
  });
  return betCreated;
};
