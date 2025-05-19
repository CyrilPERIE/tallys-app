"use server";

import { CourseIdentifiers } from "@/lib/types/pmu";
import { Foule_v1_0SimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Foule_v1_0-simple-place-use-case";
import { RandomSimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Random-simple-place-use-case";

export const testAction = async () => {
  const courseIdentifiers: CourseIdentifiers = {
    pmuDate: "17052025",
    reunionNum: "1",
    courseNum: "1",
  };
  const bet = await Foule_v1_0SimplePlaceUseCase(courseIdentifiers);
  const bet2 = await RandomSimplePlaceUseCase(courseIdentifiers);
};
