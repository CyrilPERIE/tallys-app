"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { RaceDisplayTable } from "@/components/home/race-display-table/race-display-table";
import { RaceSelection } from "@/components/home/race-selection";
import { Row } from "@/components/ui/layout";

export default function Home({ className }: { className?: string }) {
    const [courseId, setCourseId] = useState<string | null>(null);
    return (
        <Row className={cn("items-center justify-center gap-4", className)}>
            <RaceDisplayTable courseId={courseId} className="size-full items-center justify-center bg-red-500" />
            <RaceSelection setCourseId={setCourseId} className="size-full items-center justify-center bg-blue-500 w-2xl" />
        </Row>
    );
}
