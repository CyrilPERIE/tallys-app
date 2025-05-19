"use client";

import { Column } from "@/components/ui/layout";
import { amountToDisplay, courseIdToDisplay, datePmuToDisplay } from "@/lib/utils/label";

type MostProfitableRaceProps = {
  courseId: string;
  profit: number;
};

export const StatsMostProfitableRace = () => {
  const mostProfitableRace: MostProfitableRaceProps = {
    courseId: "06032022R1C1",
    profit: 53.28,
  };
  const { pmuDate, reunionNum, courseNum } = courseIdToDisplay(mostProfitableRace.courseId);
  const profitToDisplay = amountToDisplay(mostProfitableRace.profit);
  return (
    <Column className="items-center justify-center gap-2">
      <p className="text-2xl font-bold">{profitToDisplay}</p>
      <div className="flex flex-col text-slate-500">
        <p>
          <span>{reunionNum}</span>
          <span> - </span>
          <span>{courseNum}</span>
        </p>
        <p>{pmuDate}</p>
      </div>
    </Column>
  );
};
