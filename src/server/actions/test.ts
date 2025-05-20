"use server";
//TODO: DELETE OR MOVE
import { CourseIdentifiers } from "@/domain/entities/utils";
import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { betByCourseUseCase } from "../feature/use-case/bet/bet-by-course-use-case";

const dateToPmuDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}${month}${year}`;
};

export const testAction = async () => {
  const startDate = new Date("2024-05-01");
  const endDate = new Date("2024-05-18");
  const pmuDates = [];
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    pmuDates.push(dateToPmuDate(date));
  }
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
        await betByCourseUseCase(courseIdentifiers, "random");
        await betByCourseUseCase(courseIdentifiers, "Foule_v1_0");
        await betByCourseUseCase(courseIdentifiers, "Favoris");
      }
    }
  }
};
