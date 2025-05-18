import { CourseIdentifiers } from "@/lib/types/pmu";
import { courseIdentifiersToCourseId } from "@/lib/utils/pmu";
import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy } from "@prisma/client";
import { randomStrategySimplePlaceUseCase } from "@/server/feature/use-case/bet/strategies/Random-simple-place-use-case";

const strategies = {
  random: {
    name: BetStrategy.Random,
    useCase: randomStrategySimplePlaceUseCase,
  },
};

export const betByCourseUseCase = async (
  courseIdentifiers: CourseIdentifiers,
  strategy: keyof typeof strategies
) => {
  await strategies[strategy].useCase(courseIdentifiers);
};
