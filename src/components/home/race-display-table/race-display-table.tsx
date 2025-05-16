import { cn } from "@/lib/utils"
import { RaceDisplayTableEmpty } from "./race-display-table-empty"

export const RaceDisplayTable = ({ courseId, className }: { courseId: string | null, className?: string }) => {
    if (!courseId) {
        return <RaceDisplayTableEmpty className={className} />
    }
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <p>Course {courseId}</p>
        </div>
    )
}