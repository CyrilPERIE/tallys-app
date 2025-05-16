import { cn } from "@/lib/utils";

export const RaceDisplayTableError = ({ className }: { className?: string }) => {
    return (
        <div className={cn("", className)}>
            <p>Error</p>
        </div>
    )
}