import { CourseIdentifiers } from "@/domain/entities/utils";
import { BetStrategy } from "@prisma/client";
import { RandomUseCase } from "@/server/feature/use-case/bet/strategies/Random-use-case";
import { Foule_v1_0SimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Foule_v1_0-simple-place-use-case";
import { FavorisUseCase } from "./strategies/favoris-use-case";

const strategies = {
  random: {
    name: BetStrategy.Random,
    useCase: RandomUseCase,
  },
  Foule_v1_0: {
    name: BetStrategy.Foule_v1_0,
    useCase: Foule_v1_0SimplePlaceUseCase,
  },
  Favoris: {
    name: BetStrategy.Favoris,
    useCase: FavorisUseCase,
  },
};

export const betByCourseUseCase = async (
  courseIdentifiers: CourseIdentifiers,
  strategy: keyof typeof strategies
) => {
  await strategies[strategy].useCase(courseIdentifiers);
};
