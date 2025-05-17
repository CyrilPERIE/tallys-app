import { cn } from "@/lib/utils";
import { texts } from "@/lib/constants/texts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardInfo,
} from "@/components/ui/card";
import { Column, Row } from "@/components/ui/layout";
import { StatsHitRate, StatsBetCountRatio } from "@/components/stats/data";
export const StatsHitRateCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <Row className="items-start">
          <CardTitle className="flex-1">{texts.stats.hitRate.title}</CardTitle>
          <CardInfo>{texts.stats.hitRate.description}</CardInfo>
        </Row>
      </CardHeader>
      <CardContent className="h-full">
        <Column className="gap-0 items-center justify-center h-full">
          <StatsHitRate />
          <StatsBetCountRatio className="text-slate-500" />
        </Column>
      </CardContent>
    </Card>
  );
};
