import { cn } from "@/lib/utils"

export const RaceDisplayTableLoading = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <p>RaceDisplayTableLoading</p>
        </div>
    )
}