"use client";

import { Column } from "@/components/ui/layout";
import { amountToDisplay, courseIdToDisplay } from "@/lib/utils/label";
import { getHiggestOddsWinAction } from "@/server/actions/bet/higgest-odds-win-action";
import { useState, useEffect } from "react";
import { useFiltersStore } from "@/stores/filters/provider";

type highestOddsWinProps = {
  courseId: string;
  odds: number;
};

export const StatsHiggestOddsWin = () => {
  const strategyFilter = useFiltersStore((state) => state.strategyFilter);

  const [oddsToDisplay, setOddsToDisplay] = useState<string | null>(null);
  const [courseId, setCourseId] = useState<string | null>(null);

  useEffect(() => {
    getHiggestOddsWinAction({ strategy: strategyFilter }).then((highestOddsWin) => {
      console.log(highestOddsWin);
      if (!highestOddsWin.courseId || !highestOddsWin.odds) return;
      setCourseId(highestOddsWin.courseId);
      setOddsToDisplay(highestOddsWin.odds.toFixed(2));
    });
  }, [strategyFilter]);

  if (!courseId || !oddsToDisplay) return null;

  return (
    <Column className="items-center justify-center gap-2">
      <p className="text-2xl font-bold">{oddsToDisplay}</p>
      <div className="flex flex-col text-slate-500">
        <p>
          <span>{courseIdToDisplay(courseId).race}</span>
          <span> - </span>
          <span>{courseIdToDisplay(courseId).course}</span>
        </p>
        <p>{courseIdToDisplay(courseId).date}</p>
      </div>
    </Column>
  );
};
