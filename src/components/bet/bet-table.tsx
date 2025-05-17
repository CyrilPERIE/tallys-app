import { cn } from "@/lib/utils";
import { BetsMock } from "@/lib/mock/data";
import { BetTableRow } from "@/components/bet/bet-table-row";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableBody,
  TableHead,
} from "@/components/ui/table";

const BetTableHeadLabel = ["Date", "Montant parié", "Course", "Cheval", "Profit"];
export const BetTable = ({ className }: { className?: string }) => {
  const bets = BetsMock;
  return (
    <div className={cn("", className)}>
      <Table>
        <TableCaption>Derniers paris</TableCaption>
        <TableHeader>
          <TableRow>
            {BetTableHeadLabel.map((label) => (
              <TableHead key={label} className="text-center">{label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bets.map((bet) => (
            <BetTableRow key={bet.id} bet={bet} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
