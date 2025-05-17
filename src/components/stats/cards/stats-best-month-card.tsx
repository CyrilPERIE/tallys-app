import { Card, CardContent, CardHeader, CardInfo, CardTitle } from "@/components/ui/card";
import { Row } from "@/components/ui/layout";
import { StatsBestMonth } from "@/components/stats/data";
import { texts } from "@/lib/constants/texts";
import { cn } from "@/lib/utils";

export const StatsBestMonthCard = ({ className }: { className?: string }) => {
    return (
        <Card className={cn("", className)}>
            <CardHeader>
                <Row className="items-start">
                    <CardTitle>{texts.stats.bestMonth.title}</CardTitle>
                    <CardInfo>{texts.stats.bestMonth.description}</CardInfo>
                </Row>
            </CardHeader>
            <CardContent className="h-full">
                <StatsBestMonth className="h-full" />
            </CardContent>
        </Card>
    )
}