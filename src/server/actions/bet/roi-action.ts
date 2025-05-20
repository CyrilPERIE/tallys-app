"use server";

import { getProfitAction } from "./get-profit-action";
import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy, BetType } from "@prisma/client";

//TODO: add time period filter
export const getROIAction = async ({ strategy, betType, period }: { strategy: BetStrategy, betType: BetType[], period: Date }) => {
  const betService = new BetService();
  const bets = await betService.findAll({
    where: {
      strategy,
    },
  });
  const amountSpend = bets.reduce((acc, bet) => acc + (bet.amount ?? 0), 0);
  const profit = await getProfitAction({ strategy, betType, period });
  const roi = (profit / amountSpend) * 100;
  const roiToDisplay = roi.toFixed(2).replace(".", ",");
  return roiToDisplay;
};
