import { Bet } from "@prisma/client";
import { CourseIdentifiers } from "@/domain/entities/utils";

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

export const extractItemsFromPmuDate = (pmuDate: string) => {
  const day = pmuDate.slice(0, 2);
  const month = pmuDate.slice(2, 4);
  const year = pmuDate.slice(4, 8);
  return { day, month, year };
};

export const computeProfit = (bet: Bet) => {
  const { amount, profit } = bet;
  return profit || profit === 0 ? profit - amount : 0;
};

export const horseNumsToCombination = (
  horseNums: number | Bet["horseNums"]
): string => {
  if (typeof horseNums === "number") return horseNums.toString();
  return horseNums.join("-");
};
