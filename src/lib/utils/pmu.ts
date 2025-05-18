import { Bet } from "@prisma/client";
import { _MONTH_MAP } from "@/lib/constants/constants";
import { CourseIdentifiers } from "@/lib/types/pmu";

export const courseIdToDomain = (courseId: string) => {
  const date = courseId.slice(0, 8);
  const race = courseId.slice(8, 10);
  const course = courseId.slice(10, 12);
  return {
    date: datePmuToDomain(date),
    race: race,
    course: course,
  };
};

export const courseIdentifiersToCourseId = (courseIdentifiers: CourseIdentifiers) => {
  const { date, race, course } = courseIdentifiers;
  return `${date}${race}${course}`;
};

export const computeProfit = (bet: Bet) => {
  const { amount, profit } = bet;
  return profit || profit === 0 ? profit - amount : 0;
};

export const datePmuToDomain = (date: string) => {
  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 8);
  return `${day} ${_MONTH_MAP[month as keyof typeof _MONTH_MAP]} ${year}`;
};
