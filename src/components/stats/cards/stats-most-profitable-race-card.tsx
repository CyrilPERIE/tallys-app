import { texts } from "@/lib/constants/texts";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardInfo,
  CardTitle,
} from "@/components/ui/card";
import { Row } from "@/components/ui/layout";
import { StatsMostProfitableRace } from "@/components/stats/data";

export const StatsMostProfitableRaceCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <Row className="items-start">
          <CardTitle>{texts.stats.highestOddsWin.title}</CardTitle>
          <CardInfo>{texts.stats.highestOddsWin.description}</CardInfo>
        </Row>
      </CardHeader>
      <CardContent>
        <StatsMostProfitableRace />
      </CardContent>
    </Card>
  );
};
