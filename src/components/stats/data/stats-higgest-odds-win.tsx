"use client";

import { Column } from "@/components/ui/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { courseIdToDisplay } from "@/lib/utils/label";
import { useFiltersStore } from "@/stores/filters/provider";

export const StatsHiggestOddsWin = () => {
  const { data, isLoading, error } = useFiltersStore((state) => state);

  if (!data || isLoading || error)
    return (
      <Column className="items-center justify-center gap-2">
        <Skeleton className="h-4 w-3/5 animate-pulse" />
        <Skeleton className="h-4 w-3/5 animate-pulse" />
        <Skeleton className="h-4 w-3/5 animate-pulse" />
      </Column>
    );

  const highestOddsWin = data.highestOddsWin.odds.toFixed(2).replace(".", ",");
  const course = courseIdToDisplay(data.highestOddsWin.courseId);

  if (data)
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
