import { getAllStatsAction } from "@/server/actions/bet/get-all-stats";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { strategy, betType, period } = await request.json();
  if (!strategy || !period) {
    return NextResponse.json({ error: "Strategy and period are required" }, { status: 400 });
  }
  const stats = await getAllStatsAction({ strategy, betType, period });
  return NextResponse.json(stats);
}
