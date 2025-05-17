import { Bet } from "@/domain/entities/bet";
import { TableRow, TableCell } from "@/components/ui/table";
import { computeProfit, amountToDisplay } from "@/lib/utils/pmu-to-domain";
import { LoaderCircle } from "lucide-react";

export const BetTableRow = ({ bet }: { bet: Bet }) => {
  const { horse, amount, status, date, race, profit } = bet;
  const _amountToDisplay = amountToDisplay(amount);
  const _computeProfit = computeProfit(bet);
  const profitColor = _computeProfit > 0 ? "text-green-500" : "text-red-500";
  return (
    <TableRow>
      <TableCell>{date.toLocaleDateString()}</TableCell>
      <TableCell>{_amountToDisplay}</TableCell>
      <TableCell>{race.name}</TableCell>
      <TableCell>{horse.name}</TableCell>
      <TableCell className={profitColor}>{status === "PENDING" ? <ProfitStatusPending /> : amountToDisplay(_computeProfit)}</TableCell>
    </TableRow>
  );
};

const ProfitStatusPending = () => {
  return (
    <div className="flex gap-1 text-gray-500 animate-pulse">
        <LoaderCircle className="w-4 h-4 animate-spin" />
    </div>
  );
};
