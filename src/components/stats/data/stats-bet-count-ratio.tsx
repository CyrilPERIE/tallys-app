import { cn } from "@/lib/utils";

export const StatsBetCountRatio = ({className}: {className?: string}) => {
    const totalBetCount = 100;
    const totalWinBetCount = 50;
    return <div className={cn("", className)}>({totalWinBetCount}/{totalBetCount})</div>;
}
        