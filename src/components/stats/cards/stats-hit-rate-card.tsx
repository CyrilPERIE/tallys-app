import { cn } from "@/lib/utils";
import { texts } from "@/lib/constants/texts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardInfo,
} from "@/components/ui/card";
import { Row } from "@/components/ui/layout";
import { StatsHitRate } from "@/components/stats/data/stats-hit-rate";
export const StatsHitRateCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <Row className="items-start">
          <CardTitle className="flex-1">{texts.stats.hitRate.title}</CardTitle>
          <CardInfo>{texts.stats.hitRate.description}</CardInfo>
        </Row>
      </CardHeader>
      <CardContent className="flex items-center justify-center h-full">
        <StatsHitRate />
      </CardContent>
    </Card>
  );
};
