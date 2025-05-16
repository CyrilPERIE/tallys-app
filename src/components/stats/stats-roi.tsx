import { cn } from "@/lib/utils";

export const StatsROI = ({ className }: { className?: string }) => {
    const roi = "+3,27"
    return (
        <div className={cn("", className)}>
            ({roi}%)
        </div>
    )
}