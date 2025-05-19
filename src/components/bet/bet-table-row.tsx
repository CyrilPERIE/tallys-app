import { Bet, BetStatus } from "@prisma/client";
import { TableRow, TableCell } from "@/components/ui/table";
import { amountToDisplay, dateToDisplay } from "@/lib/utils/label";
import { LoaderCircle } from "lucide-react";
import { computeProfit } from "@/lib/utils/pmu";
import { courseIdToCourseIdentifiers } from "@/lib/utils/pmu";
export const BetTableRow = ({
  bet,
  className,
}: {
  bet: Bet;
  className?: string;
}) => {
  const amount = bet.amount;
  const status = bet.betStatus;
  const horse = bet.horseNums.join(", ");
  const date = new Date(bet.updatedAt);
  const race = bet.courseId!;
  const {pmuDate, reunionNum, courseNum} = courseIdToCourseIdentifiers(race)!;
  const _amountToDisplay = amountToDisplay(amount);
  const _computeProfit = computeProfit(bet);
  const isStatusPending = status === BetStatus.PENDING;
  const profitColor = _computeProfit > 0 ? "text-green-500" : "text-red-500";
  return (
    <TableRow className={className}>
      <TableCell className="text-center">{dateToDisplay(date)}</TableCell>
      <TableCell className="text-center">{_amountToDisplay}</TableCell>
      <TableCell className="text-center hover:underline">
        <a target="_blank" rel="noopener noreferrer" href={`https://www.pmu.fr/turf/${pmuDate}/R${reunionNum}/C${courseNum}`}>{race}</a>
      </TableCell>
      <TableCell className="text-center">{horse}</TableCell>
      <TableCell className={`text-center ${profitColor}`}>
        {isStatusPending ? (
          <ProfitStatusPending />
        ) : (
          amountToDisplay(_computeProfit)
        )}
      </TableCell>
    </TableRow>
  );
};

const ProfitStatusPending = () => {
  return (
    <div className="text-gray-500 animate-pulse flex justify-center items-center gap-2">
      <LoaderCircle className="w-4 h-4 animate-spin" />
    </div>
  );
};
