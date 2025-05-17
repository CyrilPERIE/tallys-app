import { Bet } from "@/domain/entities/bet";
import { TableRow, TableCell } from "@/components/ui/table";
import { computeProfit, amountToDisplay, dateToDomain } from "@/lib/utils/pmu-to-domain";
import { LoaderCircle } from "lucide-react";

export const BetTableRow = ({ bet, className }: { bet: Bet, className?: string }) => {
  const { horse, amount, status, date, race, profit } = bet;
  const _amountToDisplay = amountToDisplay(amount);
  const _computeProfit = computeProfit(bet);
  const isStatusPending = status === "PENDING";
  const profitColor = _computeProfit > 0 ? "text-green-500" : "text-red-500";
  return (
    <TableRow className={className}>
      <TableCell className="text-center">{dateToDomain(date)}</TableCell>
      <TableCell className="text-center">{_amountToDisplay}</TableCell>
      <TableCell className="text-center">{race.name}</TableCell>
      <TableCell className="text-center">{horse.name}</TableCell>
      <TableCell className={`text-center ${profitColor}`}>{isStatusPending ? <ProfitStatusPending /> : amountToDisplay(_computeProfit)}</TableCell>
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
