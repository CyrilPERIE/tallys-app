import { cn } from "@/lib/utils"

export const RaceSelection = ({ setCourseId, className }: { setCourseId: (courseId: string) => void, className?: string }) => {
    return <div className={cn("flex flex-col gap-4", className)}>
        <p>Sélectionnez une course</p>
    </div>
}
