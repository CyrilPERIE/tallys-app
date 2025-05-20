import { BetType } from "@prisma/client";

type BetSpecifications = {
  countHorseNumber: number;
  maxCountHorseNumber?: number;
  baseBetAmount: number;
  isAlwaysAvailable: boolean;
};

type BetsSpecificationsMap = {
  [key in BetType]?: Partial<BetSpecifications>;
};

const defaultBetSpecification: BetSpecifications = {
  countHorseNumber: 1,
  baseBetAmount: 1,
  isAlwaysAvailable: false,
};

const BetSpecifications: BetsSpecificationsMap = {
  [BetType.E_SIMPLE_PLACE]: {
    isAlwaysAvailable: true,
  },
  [BetType.SIMPLE_PLACE_INTERNATIONAL]: {
    isAlwaysAvailable: true,
  },
  [BetType.E_SIMPLE_GAGNANT]: {
    isAlwaysAvailable: true,
  },
  [BetType.SIMPLE_GAGNANT_INTERNATIONAL]: {
    isAlwaysAvailable: true,
  },
  [BetType.E_DEUX_SUR_QUATRE]: {
    countHorseNumber: 2,
    baseBetAmount: 3,
  },
  [BetType.E_COUPLE_PLACE]: {
    countHorseNumber: 2,
    baseBetAmount: 1,
  },
  [BetType.E_COUPLE_GAGNANT]: {
    countHorseNumber: 2,
    baseBetAmount: 1,
  },
  [BetType.E_COUPLE_ORDRE]: {
    countHorseNumber: 2,
    baseBetAmount: 1,
  },
  [BetType.E_TRIO]: {
    baseBetAmount: 1,
    isAlwaysAvailable: true,
  },
  [BetType.E_TIERCE]: {
    countHorseNumber: 3,
  },
  [BetType.E_QUARTE_PLUS]: {
    countHorseNumber: 4,
    baseBetAmount: 1.5,
  },
  [BetType.E_SUPER_QUATRE]: {
    countHorseNumber: 4,
  },
  [BetType.E_QUINTE_PLUS]: {
    countHorseNumber: 5,
    baseBetAmount: 2,
  },
  [BetType.E_PICK5]: {
    countHorseNumber: 5,
  },
  [BetType.E_MULTI]: {
    countHorseNumber: 4,
    maxCountHorseNumber: 7,
    baseBetAmount: 3,
  },
  [BetType.E_MINI_MULTI]: {
    countHorseNumber: 4,
    maxCountHorseNumber: 6,
    baseBetAmount: 3,
  },
};

export const getBetSpecification = (betType: BetType): BetSpecifications => {
  return {
    ...defaultBetSpecification,
    ...BetSpecifications[betType],
  };
};
