import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";
import Image from "next/image";

export default function LogoName({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Pencil className="w-4 h-4" />
            <h1>E-PMU</h1>
        </div>
    )
}
