"use client";

import { Column } from "@/components/ui/layout";
import { CourseIdentifiers } from "@/domain/entities/utils";
import { useEffect, useState } from "react";
import { courseIdToDisplay, amountToDisplay } from "@/lib/utils/label";
import { getMostProfitableRaceAction } from "@/server/actions/bet/get-most-profitable-race-action";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";

export const StatsMostProfitableRace = () => {
  const { strategyFilter, betTypeFilter, periodFilter } = useFiltersStore((state) => state);

  const [profitToDisplay, setProfitToDisplay] = useState<string | null>(null);
  const [course, setCourse] = useState<CourseIdentifiers | null>(null);

  useEffect(() => {
    getMostProfitableRaceAction({ strategy: strategyFilter, betType: betTypeFilter, period: getPeriod(periodFilter) }).then(
      (mostProfitableRace) => {
        setCourse(courseIdToDisplay(mostProfitableRace.courseId));
        setProfitToDisplay(amountToDisplay(mostProfitableRace.profit));
      }
    );
  }, [strategyFilter, betTypeFilter, periodFilter]);

  if (!course) return null;
  return (
    <Column className="items-center justify-center gap-2">
      <p className="text-2xl font-bold">{profitToDisplay}</p>
      <div className="flex flex-col text-slate-500">
        <p>
          <span>{course.reunionNum}</span>
          <span> - </span>
          <span>{course.courseNum}</span>
        </p>
        <p>{course.pmuDate}</p>
      </div>
    </Column>
  );
};
