"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { RaceDisplayTable } from "@/components/home/race-display-table/race-display-table";
import { RaceSelection } from "@/components/home/race-selection";
import { Row } from "@/components/ui/layout";

export default function Home({ className }: { className?: string }) {
    return (
        <Row className={cn("items-center justify-center gap-4", className)}>
            <RaceDisplayTable className="h-full flex-1 items-center justify-center bg-red-500" />
            <RaceSelection  className="h-full items-center justify-center bg-blue-500 w-xl" />
        </Row>
    );
}
