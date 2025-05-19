import { PmuAPIService } from "@/server/services/external/pmu-api-service";
import { CourseIdentifiers } from "@/lib/types/pmu";
import { BetStatus } from "@prisma/client";

type BetGain = {
  isRaceOver: boolean;
  gain?: number;
  betStatus?: BetStatus;
}

export const placeResultGain = async (combination: number, amount: number, courseIdentifiers: CourseIdentifiers): Promise<BetGain> => {
  const pmuService = new PmuAPIService();
  const rapportsDefinitifsList = await pmuService.getRapportsDefinitifs(courseIdentifiers);
  if (typeof rapportsDefinitifsList === "string") {
    return {
      isRaceOver: false
    }
  }
  const rapportsDefinitifs = rapportsDefinitifsList.find((rapport) => rapport.typePari === "E_SIMPLE_PLACE" || rapport.typePari === "SIMPLE_PLACE_INTERNATIONAL");
  if (!rapportsDefinitifs) {
    return {
      isRaceOver: false
    }
  }
  const ourCombination = rapportsDefinitifs.rapports.find((rapport) => rapport.combinaison.includes(combination));
  if (!ourCombination) {
    return {
      isRaceOver: true,
      gain: 0,
      betStatus: BetStatus.LOST
    }
  }
  const dividende = ourCombination.dividendePourUnEuro;
  const cote = dividende / 100;
  return {
    isRaceOver: true,
    gain: amount * cote,
    betStatus: BetStatus.WON
  }
};

export const isGagnantSuccess = async (pronostics: number, {pmuDate, reunionNum, courseNum}: CourseIdentifiers) => {
  const pmuService = new PmuAPIService();
  const results = await pmuService.getResults({pmuDate, reunionNum, courseNum});
  return results[0].includes(pronostics);
};
