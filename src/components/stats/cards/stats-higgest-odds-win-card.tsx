import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardInfo,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { texts } from "@/lib/constants/texts";
import { Row } from "@/components/ui/layout";
import { StatsHiggestOddsWin } from "@/components/stats/data";

export const StatsHiggestOddsWinCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <Row className="items-start">
          <CardTitle>{texts.stats.highestOddsWin.title}</CardTitle>
          <CardInfo>{texts.stats.highestOddsWin.description}</CardInfo>
        </Row>
      </CardHeader>
      <CardContent className="h-full">
        <StatsHiggestOddsWin />
      </CardContent>
    </Card>
  );
};
