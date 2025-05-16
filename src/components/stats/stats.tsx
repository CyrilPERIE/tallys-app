import { cn } from "@/lib/utils";
import { Column, Row, Section, SectionTitle } from "@/components/ui/layout";
import {
  StatsHitRate,
  StatsROI,
  StatsCumulativeProfit,
  StatsLastBet,
  StatsTotalProfit,
  StatsPeriod,
  StatsHighlights,
} from "@/components/stats";
export default function Stats({ className }: { className?: string }) {
  return (
    <Column className={cn("", className)}>
      <StatsPeriod className="mb-4" />
      <Row className="flex-1">
        <Column className="flex-1">
          <Row className="flex-1 max-h-40">
            <Section className="flex-1 max-w-40 flex flex-col justify-center items-center">
              <SectionTitle className="mb-2">Profit</SectionTitle>
              <StatsTotalProfit />
              <StatsROI className="text-slate-500" />
            </Section>
            <StatsHitRate className="bg-violet-500 flex-1 max-w-40" />
            <StatsHighlights className="bg-violet-500 flex-1 max-w-40" />
          </Row>
          <StatsCumulativeProfit className="bg-blue-500 flex-1" />
        </Column>
        <StatsLastBet className="w-2xl bg-yellow-500" />
      </Row>
    </Column>
  );
}
