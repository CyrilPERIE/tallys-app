import { cn } from "@/lib/utils";
import { Column, Row } from "@/components/ui/layout";
import {
  StatsProfitCard,
  StatsHitRateCard,
  StatsBestMonthCard,
  StatsMostProfitableRaceCard,
  StatsHiggestOddsWinCard,
} from "@/components/stats";
import { StatsPeriod } from "@/components/stats/stats-periods";
import { StatsCumulativeProfit } from "@/components/stats/stats-cumulative-profit-graph";
import { BetTable } from "@/components/bet";


export default function Stats({ className }: { className?: string }) {
  return (
    <Column className={cn("", className)}>
      <StatsPeriod className="mb-4" />
      <Row className="flex-1">
        <Column className="flex-1">
          <Row className="">
            <StatsProfitCard className="flex-1 min-w-44" />
            <StatsHitRateCard className="flex-1 min-w-44" />
            <StatsHiggestOddsWinCard className="flex-1 min-w-44" />
            <StatsMostProfitableRaceCard className="flex-1 min-w-44" />
            <StatsBestMonthCard className="flex-1 min-w-44" />
          </Row>
          <StatsCumulativeProfit className="bg-blue-500 flex-1" />
        </Column>
        <BetTable className="w-xl bg-white rounded-lg p-5" />
      </Row>
    </Column>
  );
}
