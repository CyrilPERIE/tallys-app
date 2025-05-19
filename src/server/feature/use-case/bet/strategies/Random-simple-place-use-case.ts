import { BetService } from "@/server/services/internal/bet-service";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { CourseIdentifiers } from "@/lib/types/pmu";
import { BetStrategy } from "@prisma/client";
export const RandomSimplePlaceUseCase = async (
  courseIdentifiers: CourseIdentifiers
) => {
  const { pmuDate, reunionNum, courseNum } = courseIdentifiers;
  const pmuService = new PmuAPIService();
  const horse = await pmuService.getRandomHorseFromCourse(pmuDate, reunionNum, courseNum);
  const betService = new BetService();
  console.log("BetStrategy", BetStrategy.Random);
  const betCreated = await betService.create({
    courseId: courseIdentifiersToCourseId(courseIdentifiers),
    horseNums: horse,
    amount: 1,
    strategy: BetStrategy.Random,
  });
  return betCreated;
};
