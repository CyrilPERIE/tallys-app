import { cn } from "@/lib/utils"
import { RaceDisplayTableEmpty } from "@/components/home/race-display-table/race-display-table-empty"

export const RaceDisplayTable = ({ courseId, className }: { courseId: string | null, className?: string }) => {
    if (!courseId) {
        return <RaceDisplayTableEmpty className={className} />
    }
    return (
        <div className={cn("", className)}>
            <p>Course {courseId}</p>
        </div>
    )
}