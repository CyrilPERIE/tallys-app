import { cn } from "@/lib/utils";
import { texts } from "@/lib/constants/texts";
//TODO: Course la plus rentable
//TODO: Plus grosse côte gagnante
//TODO: Meilleur mois
type mostProfitableCourseProps = {
    courseId: string;
    profit: number;
}
type highestOddsWinProps = {
    courseId: string;
    odds: number;
}
type BestMonthProps = {
    month: string;
    year: string;
    profit: number;
}
export const StatsHighlights = ({ className }: { className?: string }) => {
    const mostProfitableCourse: mostProfitableCourseProps = {
        courseId: "06032022R1C1",
        profit: 53.28
    }
    const highestOddsWin: highestOddsWinProps = {
        courseId: "19112024R4C3",
        odds: 19.6
    }
    const bestMonth: BestMonthProps = {
        month: "1",
        year: "2024",
        profit: 947.53
    }
    return (
        <div className={cn("", className)}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <p>{texts.stats.highlights.mostProfitableCourse.title}</p>
                    <p>{mostProfitableCourse.courseId}</p>
                    <p>{mostProfitableCourse.profit}</p>
                </div>
            </div>
        </div>
    )
}