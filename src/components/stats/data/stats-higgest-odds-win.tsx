import { Column, Row } from "@/components/ui/layout";
import { amountToDisplay } from "@/lib/utils/label";
import { courseIdToDomain } from "@/lib/utils/pmu";

type highestOddsWinProps = {
  courseId: string;
  odds: number;
};

export const StatsHiggestOddsWin = () => {
  const highestOddsWin: highestOddsWinProps = {
    courseId: "19112024R4C3",
    odds: 19.6,
  };
  const { date, race, course } = courseIdToDomain(highestOddsWin.courseId);
  const oddsToDisplay = amountToDisplay(highestOddsWin.odds);
  return (
    <Column className="items-center justify-center gap-2">
      <p className="text-2xl font-bold">{oddsToDisplay}</p>
      <div className="flex flex-col text-slate-500">
        <p>
          <span>{race}</span>
          <span> - </span>
          <span>{course}</span>
        </p>
        <p>{date}</p>
      </div>
    </Column>
  );
};
