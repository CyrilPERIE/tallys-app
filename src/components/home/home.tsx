"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { RaceDisplayTable } from "./race-display-table/race-display-table";
import { RaceSelection } from "./race-selection";

export default function Home({ className }: { className?: string }) {
    const [courseId, setCourseId] = useState<string | null>(null);
    return (
        <div className={cn("flex items-center justify-center flex-row gap-4", className)}>
            <RaceDisplayTable courseId={courseId} className="size-full items-center justify-center bg-red-500" />
            <RaceSelection setCourseId={setCourseId} className="size-full items-center justify-center bg-blue-500 w-2xl" />
        </div>
    );
}
