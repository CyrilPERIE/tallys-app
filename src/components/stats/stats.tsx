import { StatsLastBet } from "@/components/stats/stats-last-bet-list";
import { StatsCumulativeProfit } from "@/components/stats/stats-cumulative-profit-graph";
import { StatsTotalProfit } from "@/components/stats/stats-total-profit";
import { cn } from "@/lib/utils";

export default function Stats({ className }: { className?: string }) {
    return (
        <div className={cn("", className)}>
            <StatsLastBet />
            <StatsCumulativeProfit />
            <StatsTotalProfit />
        </div>
    );
}
