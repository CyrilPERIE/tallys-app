import { Column } from "@/components/ui/layout";
import { amountToDisplay, courseIdToDisplay } from "@/lib/utils/label";

type MostProfitableRaceProps = {
  courseId: string;
  profit: number;
};

export const StatsMostProfitableRace = () => {
  const mostProfitableRace: MostProfitableRaceProps = {
    courseId: "06032022R1C1",
    profit: 53.28,
  };
  const { date, race, course } = courseIdToDisplay(mostProfitableRace.courseId);
  const profitToDisplay = amountToDisplay(mostProfitableRace.profit);
  return (
    <Column className="items-center justify-center gap-2">
      <p className="text-2xl font-bold">{profitToDisplay}</p>
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
