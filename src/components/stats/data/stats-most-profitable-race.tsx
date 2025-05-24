"use client";

import { Column } from "@/components/ui/layout";
import { CourseIdentifiers } from "@/domain/entities/utils";
import { useEffect, useState } from "react";
import { courseIdToDisplay, amountToDisplay } from "@/lib/utils/label";
import { getMostProfitableRaceAction } from "@/server/actions/bet/get-most-profitable-race-action";
import { useFiltersStore } from "@/stores/filters/provider";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";

export const StatsMostProfitableRace = () => {

  const { data, isLoading, error } = useFiltersStore((state) => state);

  //TODO: Add skeleton
  if (!data || isLoading || error) return null;

  const profitToDisplay = amountToDisplay(data.mostProfitableRace.profit)
  const course = courseIdToDisplay(data.mostProfitableRace.courseId)

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
