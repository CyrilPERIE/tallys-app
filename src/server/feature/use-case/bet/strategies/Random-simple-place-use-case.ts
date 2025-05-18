import { BetService } from "@/server/services/internal/bet-service";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const randomStrategySimplePlaceUseCase = async (
  courseIdentifiers: CourseIdentifiers
) => {
  const { pmuDate, reunionNum, courseNum } = courseIdentifiers;
  const pmuService = new PmuAPIService();
  const horse = await pmuService.getRandomHorseFromCourse(pmuDate, reunionNum, courseNum);
  const betService = new BetService();
  const betCreated = await betService.create({
    courseId: courseIdentifiersToCourseId(courseIdentifiers),
    horseNums: [horse],
    amount: 1,
  });
  return betCreated;
};
