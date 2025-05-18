import { cn } from "@/lib/utils"

export const RaceSelection = ({ className }: { className?: string }) => {
    return <div className={cn("", className)}>
        <p>Sélectionnez une course</p>
    </div>
}
