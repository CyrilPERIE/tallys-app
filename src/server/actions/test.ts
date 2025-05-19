"use server";

import { CourseIdentifiers } from "@/lib/types/pmu";
import { Foule_v1_0SimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Foule_v1_0-simple-place-use-case";
import { RandomSimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Random-simple-place-use-case";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
const pmuDates = [
  "01052025",
  "02052025",
  "03052025",
  "04052025",
  "05052025",
  "06052025",
  "07052025",
  "08052025",
  "09052025",
  "10052025",
  "11052025",
  "12052025",
  "13052025",
  "14052025",
  "15052025",
  "16052025",
  "17052025",
  "18052025",
];

export const testAction = async () => {
  const pmuService = new PmuAPIService();
  const programmes = await pmuService.getCoursesByPmuDates(pmuDates);
  for (const programme in programmes) {
    const reunions = programmes[programme];
    for (const reunion in reunions) {
      const courses = reunions[reunion];
      for (const course of courses) {
        const courseIdentifiers: CourseIdentifiers = {
          pmuDate: programme,
          reunionNum: reunion,
          courseNum: course,
        };
        const bet = await Foule_v1_0SimplePlaceUseCase(courseIdentifiers);
        const bet2 = await RandomSimplePlaceUseCase(courseIdentifiers);
      }
    }
  }
};
