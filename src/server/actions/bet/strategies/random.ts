import { BetService } from "@/server/services/internal/bet-service";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const randomStrategySimplePlace = async (
  courseIdentifiers: CourseIdentifiers
) => {
  const { date, race, course } = courseIdentifiers;
  const pmuService = new PmuAPIService();
  const horse = await pmuService.getRandomHorseFromCourse(date, race, course);
  const betService = new BetService();
  const betCreated = await betService.create({
    courseId: courseIdentifiersToCourseId(courseIdentifiers),
    horseNums: [horse],
    amount: 1,
  });
  return betCreated;
};
