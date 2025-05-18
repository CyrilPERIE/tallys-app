import { Bet } from "@prisma/client";
import { _MONTH_MAP } from "@/lib/constants/constants";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const courseIdentifiersToCourseId = (
  courseIdentifiers: CourseIdentifiers
) => {
  const { date, race, course } = courseIdentifiers;
  return `${date}${race}${course}`;
};

export const computeProfit = (bet: Bet) => {
  const { amount, profit } = bet;
  return profit || profit === 0 ? profit - amount : 0;
};
