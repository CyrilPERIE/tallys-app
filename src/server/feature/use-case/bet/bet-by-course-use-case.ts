import { CourseIdentifiers } from "@/domain/entities/utils";
import { BetStrategy } from "@prisma/client";
import { RandomSimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Random-simple-place-use-case";
import { Foule_v1_0SimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Foule_v1_0-simple-place-use-case";

const strategies = {
  random: {
    name: BetStrategy.Random,
    useCase: RandomSimplePlaceUseCase,
  },
  gpt: {
    name: BetStrategy.Foule_v1_0,
    useCase: Foule_v1_0SimplePlaceUseCase,
  },
};

export const betByCourseUseCase = async (
  courseIdentifiers: CourseIdentifiers,
  strategy: keyof typeof strategies
) => {
  await strategies[strategy].useCase(courseIdentifiers);
};
