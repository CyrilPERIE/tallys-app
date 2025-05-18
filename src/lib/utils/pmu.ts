import { Bet } from "@prisma/client";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const courseIdentifiersToCourseId = (
  courseIdentifiers: CourseIdentifiers
) => {
  const { pmuDate, reunionNum, courseNum } = courseIdentifiers;
  return `${pmuDate}${reunionNum}${courseNum}`;
};

export const computeProfit = (bet: Bet) => {
  const { amount, profit } = bet;
  return profit || profit === 0 ? profit - amount : 0;
};
