"use client";

import { cn } from "@/lib/utils";
import { BetTableRow } from "@/components/bet/bet-table-row";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import { useFiltersStore } from "@/stores/filters/provider";
import { useEffect, useState } from "react";
import { getLatestBetsAction } from "@/server/actions/bet/get-latest-bets-action";
import { Bet } from "@prisma/client";
import { getPeriod } from "@/components/stats/filters/stats-periods-filter";

const BetTableHeadLabel = ["Date", "Montant parié", "Course", "Cheval", "Profit"];

export const BetTable = ({ className }: { className?: string }) => {
  const { strategyFilter, betTypeFilter, periodFilter } = useFiltersStore(state => state);
  const [bets, setBets] = useState<Bet[]>([]);

  //TODO: voir pour ne pas faire de useEffect
  useEffect(() => {
    getLatestBetsAction({ strategy: strategyFilter, betType: betTypeFilter, period: getPeriod(periodFilter) }).then(setBets);
  }, [strategyFilter, betTypeFilter, periodFilter]);

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
