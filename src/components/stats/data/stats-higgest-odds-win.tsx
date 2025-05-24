"use client";

import { Column } from "@/components/ui/layout";
import { courseIdToDisplay, datePmuToDisplay } from "@/lib/utils/label";
import { getHiggestOddsWinAction } from "@/server/actions/bet/get-higgest-odds-win-action";
import { useState, useEffect } from "react";
import { useFiltersStore } from "@/stores/filters/provider";
import { CourseIdentifiers } from "@/domain/entities/utils";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";

export const StatsHiggestOddsWin = () => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;

  const highestOddsWin = data.highestOddsWin.odds.toFixed(2).replace(".", ",")
  const course = courseIdToDisplay(data.highestOddsWin.courseId)

  return (
    <Column className="items-center justify-center gap-2">
      <p className="text-2xl font-bold">{highestOddsWin}</p>
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
