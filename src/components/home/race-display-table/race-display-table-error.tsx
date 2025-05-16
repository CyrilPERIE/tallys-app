import { cn } from "@/lib/utils";

export const RaceDisplayTableError = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <p>Error</p>
        </div>
    )
}