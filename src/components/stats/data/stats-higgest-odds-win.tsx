"use client";

import { Column } from "@/components/ui/layout";
import { courseIdToDisplay, datePmuToDisplay } from "@/lib/utils/label";
import { getHiggestOddsWinAction } from "@/server/actions/bet/higgest-odds-win-action";
import { useState, useEffect } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { CourseIdentifiers } from "@/lib/types/pmu";


export const StatsHiggestOddsWin = () => {
  const strategyFilter = useFiltersStore((state) => state.strategyFilter);

  const [oddsToDisplay, setOddsToDisplay] = useState<string | null>(null);
  const [course, setCourse] = useState<CourseIdentifiers | null>(null);

  useEffect(() => {
    getHiggestOddsWinAction({ strategy: strategyFilter }).then((highestOddsWin) => {
      setCourse(courseIdToDisplay(highestOddsWin.courseId));
      setOddsToDisplay(highestOddsWin.odds.toFixed(2));
    });
  }, [strategyFilter]);

  if (!course) return null;

  return (
    <Column className="items-center justify-center gap-2">
      <p className="text-2xl font-bold">{oddsToDisplay}</p>
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
