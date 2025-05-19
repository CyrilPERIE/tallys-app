import { Bet } from "@prisma/client";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const courseIdentifiersToCourseId = (
  courseIdentifiers: CourseIdentifiers
) => {
  const { pmuDate, reunionNum, courseNum } = courseIdentifiers;
  return `${pmuDate}R${reunionNum}C${courseNum}`;
};

export const courseIdToCourseIdentifiers = (
  courseId: string
): CourseIdentifiers | null => {
  const matches = courseId.match(/\d+/g);
  const [pmuDate, reunionNum, courseNum] = matches ?? [];
  if (!pmuDate || !reunionNum || !courseNum) return null;
  return { pmuDate, reunionNum, courseNum };
};

export const computeProfit = (bet: Bet) => {
  const { amount, profit } = bet;
  return profit || profit === 0 ? profit - amount : 0;
};

export const horseNumsToCombination = (horseNums: number | Bet["horseNums"]): string => {
  if (typeof horseNums === "number") return horseNums.toString();
  return horseNums.join("-");
};
