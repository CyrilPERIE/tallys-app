import { texts } from "@/lib/constants/texts";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardInfo, CardTitle } from "@/components/ui/card";
import { Column, Row } from "@/components/ui/layout";
import { StatsROI } from "@/components/stats/data/stats-roi";
import { StatsTotalProfit } from "@/components/stats/data/stats-total-profit";

export const StatsProfitCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <Row className="items-start">
          <CardTitle className="flex-1">{texts.stats.profit.title}</CardTitle>
          <CardInfo>{texts.stats.profit.description}</CardInfo>
        </Row>
      </CardHeader>
      <CardContent className="h-full">
        <Column className="items-center justify-center gap-1 h-full">
          <StatsTotalProfit />
          <StatsROI className="text-slate-500" />
        </Column>
      </CardContent>
    </Card>
  );
};
