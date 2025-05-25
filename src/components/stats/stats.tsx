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
        <StatsFilters className="w-full" />
      </Row>
      <Row className="pb-4 flex-1 flex-col sm:flex-row">
        <Column className="flex-1">
          <Row className="overflow-x-auto sm:flex-wrap sm:overflow-visible pb-4 sm:pb-0">
            <StatsProfitCard className="min-w-3xs min-h-3xs flex-1 sm:flex-none" />
            <StatsHitRateCard className="min-w-3xs min-h-3xs flex-1 sm:flex-none" />
            <StatsHiggestOddsWinCard className="min-w-3xs min-h-3xs flex-1 sm:flex-none" />
            <StatsMostProfitableRaceCard className="min-w-3xs min-h-3xs flex-1 sm:flex-none" />
            <StatsBestMonthCard className="min-w-3xs min-h-3xs flex-1 sm:flex-none" />
          </Row>
          <Row>
            <StatsCumulativeProfit className="bg-blue-500 flex-1" />
          </Row>
        </Column>
        <Column>
          <Row className="items-center justify-center">
            <BetTable className="overflow-y-auto bg-white rounded-lg p-5" />
          </Row>
        </Column>
      </Row>
    </Column>
  );
}
