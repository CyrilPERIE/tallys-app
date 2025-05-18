"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { RaceDisplayTable } from "@/components/home/race-display-table/race-display-table";
import { RaceSelection } from "@/components/home/race-selection";
import { Row } from "@/components/ui/layout";
import { simulateByDaysAction } from "@/server/actions/openai/simulate-by-days-action";

const pmuDates = [
    "01052025",
    "02052025",
    "03052025",
    "04052025",
    "05052025",
    "06052025",
    "07052025",
    "08052025",
    "09052025",
    "10052025",
    "11052025",
    "12052025",
    "13052025",
    "14052025",
    "15052025",
    "16052025",
    "17052025",
    "18052025",
  ];

export default function Home({ className }: { className?: string }) {
    const [courseId, setCourseId] = useState<string | null>(null);
    return (
        <Row className={cn("items-center justify-center gap-4", className)}>
            <RaceDisplayTable courseId={courseId} className="h-full flex-1 items-center justify-center bg-red-500" />
            <RaceSelection setCourseId={setCourseId} className="h-full items-center justify-center bg-blue-500 w-xl" />
            <button onClick={() => simulateByDaysAction(pmuDates)}>Simulate</button>
        </Row>
    );
}
