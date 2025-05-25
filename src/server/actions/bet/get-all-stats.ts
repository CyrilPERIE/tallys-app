import { BetStrategy, BetType } from "@prisma/client";
import { getMostProfitableRaceAction } from "./get-most-profitable-race-action";
import { getProfitAction } from "./get-profit-action";
import { getMostProfitableMonthAction } from "./get-most-profitable-month-action";
import { getHitRateAction } from "./get-hit-rate-action";
import { getCountRatioAction } from "./count-ratio-action";
import { getHiggestOddsWinAction } from "./get-higgest-odds-win-action";
import { getLatestBetsAction } from "./get-latest-bets-action";
import { getROIAction } from "./roi-action";
export const getAllStatsAction = async ({
  strategy,
  betType,
  period,
}: {
  strategy: BetStrategy;
  betType?: BetType[];
  period: Date;
}) => {
  const profit = await getProfitAction({ strategy, betType, period });
  const mostProfitableRace = await getMostProfitableRaceAction({
    strategy,
    betType,
    period,
  });
  const roi = await getROIAction({ strategy, betType, period });
  const mostProfitableMonth = await getMostProfitableMonthAction({
    strategy,
    betType,
    period,
  });
  const hitRate = await getHitRateAction({ strategy, betType, period });
  const countRatio = await getCountRatioAction({ strategy, betType, period });
  const highestOddsWin = await getHiggestOddsWinAction({
    strategy,
    betType,
    period,
  });
  const latestBets = await getLatestBetsAction({ strategy, betType, period });
  return {
    profit,
    roi,
    mostProfitableRace,
    mostProfitableMonth,
    hitRate,
    countRatio,
    highestOddsWin,
    latestBets,
  };
};
