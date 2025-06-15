import { CourseIdentifiers } from "@/domain/entities/utils";
import { betByCourseUseCase } from "@/server/feature/use-case/bet/bet-by-course-use-case";

export const betAction = async (courseIdentifiers: CourseIdentifiers) => {
    await betByCourseUseCase(courseIdentifiers, "random");
    await betByCourseUseCase(courseIdentifiers, "Foule_v1_0");
    await betByCourseUseCase(courseIdentifiers, "Favoris");
}
