import { cn } from "@/lib/utils";
import { Column, Row } from "@/components/ui/layout";
import {
  StatsProfitCard,
  StatsHitRateCard,
  StatsBestMonthCard,
  StatsMostProfitableRaceCard,
  StatsHiggestOddsWinCard,
} from "@/components/stats";
import { StatsFilters } from "@/components/stats/filters/stats-filters";
import { StatsCumulativeProfit } from "@/components/stats/stats-cumulative-profit-graph";
import { BetTable } from "@/components/bet";

export default function Stats({ className }: { className?: string }) {
  return (
    <Column className={cn("", className)}>
      <Row className="mb-4">
        <StatsFilters className="w-full"/>
      </Row>
      <Row className="pb-4 flex-1">
        <Column className="flex-1">
          <Row>
            <StatsProfitCard className="flex-1" />
            <StatsHitRateCard className="flex-1" />
            <StatsHiggestOddsWinCard className="flex-1" />
            <StatsMostProfitableRaceCard className="flex-1" />
            <StatsBestMonthCard className="flex-1" />
          </Row>
          <Row className="">
            <StatsCumulativeProfit className="bg-blue-500 flex-1" />
          </Row>
        </Column>
        <Column>
          <Row>
            <BetTable className="overflow-y-auto bg-white rounded-lg p-5" />
          </Row>
        </Column>
      </Row>
    </Column>
  );
}
