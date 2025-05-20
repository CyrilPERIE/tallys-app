"use server";

import { CourseIdentifiers } from "@/domain/entities/utils";
import { Foule_v1_0SimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Foule_v1_0-simple-place-use-case";
import { RandomSimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Random-simple-place-use-case";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { FavorisUseCase } from "../feature/use-case/bet/strategies/favoris-use-case";
import { RapportsDefinitifsResponse } from "@/domain/entities/pmu/rapport";

const dateToPmuDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}${month}${year}`;
};

export const testAction = async () => {
  // const startDate = new Date("2024-03-01");
  // const endDate = new Date("2024-05-18");
  // const pmuDates = [];
  // for (
  //   let date = startDate;
  //   date <= endDate;
  //   date.setDate(date.getDate() + 1)
  // ) {
  //   pmuDates.push(dateToPmuDate(date));
  // }
  const pmuService = new PmuAPIService();
  // const programmes = await pmuService.getCoursesByPmuDates(pmuDates);
  // for (const programme in programmes) {
  //   const reunions = programmes[programme];
  //   for (const reunion in reunions) {
  //     const courses = reunions[reunion];
  //     for (const course of courses) {
  //       const courseIdentifiers: CourseIdentifiers = {
  //         pmuDate: programme,
  //         reunionNum: reunion,
  //         courseNum: course,
  //       };
  //       // await Foule_v1_0SimplePlaceUseCase(courseIdentifiers);
  //       // await RandomSimplePlaceUseCase(courseIdentifiers);
  //       await FavorisUseCase(courseIdentifiers);
  //     }
  //   }
  // }
  const courseIdentifiers: CourseIdentifiers = {
    pmuDate: "17052025",
    reunionNum: "1",
    courseNum: "1",
  };
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,2));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,2));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,2));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,3));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,3));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,3));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,30));
  console.log(await pmuService.getRandomParticipantFromCourse(courseIdentifiers,30));
};
