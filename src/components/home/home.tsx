"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { RaceDisplayTable } from "@/components/home/race-display-table/race-display-table";
import { RaceSelection } from "@/components/home/race-selection";
import { Row } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { testAction } from "@/server/actions/test";
import { setProfit } from "@/server/actions/setProfit";
export default function Home({ className }: { className?: string }) {
  const handleClick = async () => {
      await testAction();
      // await setProfit();
  };
  return (
    <Row className={cn("items-center justify-center gap-4", className)}>
      <RaceDisplayTable className="h-full flex-1 items-center justify-center bg-red-500" />
      <RaceSelection className="h-full items-center justify-center bg-blue-500 w-xl" />
      <Button onClick={handleClick}>Test</Button>
    </Row>
  );
}
