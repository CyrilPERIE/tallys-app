import { CourseIdentifiers } from "@/domain/entities/utils";
import { NextResponse } from "next/server";
import { betAction } from "@/server/actions/bet/bet-action";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const pmuDate = searchParams.get("pmuDate");
    const reunionNum = searchParams.get("reunionNum");
    const courseNum = searchParams.get("courseNum");

    if (!pmuDate || !reunionNum || !courseNum) {
        return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    const courseIdentifiers: CourseIdentifiers = {
        pmuDate,
        reunionNum,
        courseNum
    }
    await betAction(courseIdentifiers);
    return NextResponse.json({ message: "Bets placed" });
}
