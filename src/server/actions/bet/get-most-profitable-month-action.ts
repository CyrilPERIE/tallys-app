"use server";

import { BetService } from "@/server/services/internal/bet-service";
import { BetStrategy } from "@prisma/client";
import { courseIdToCourseIdentifiers, extractItemsFromPmuDate } from "@/lib/utils/pmu";
import { getMonthLabel } from "@/lib/utils/label";

export const getMostProfitableMonthAction = async ({ strategy }: { strategy: BetStrategy }) => {
    const betService = new BetService();
    const bets = await betService.findAll({
        where: {
            strategy,
        },
    });

    const goupBy: Record<string, number> = {}
    for (const bet of bets) {
        const profit = bet.profit ?? 0
        const { pmuDate, reunionNum, courseNum } = courseIdToCourseIdentifiers(bet.courseId)!
        const { year, month } = extractItemsFromPmuDate(pmuDate)
        const key = `${year}-${getMonthLabel(month)}`
        if (!goupBy[key]) {
            goupBy[key] = 0
        }
        goupBy[key] += profit
    }
    const mostProfitableMonth = Object.entries(goupBy).reduce((acc, [key, value]) => {
        if (value > acc.profit) {
            return { key, profit: value }
        }
        return acc
    }, { key: "", profit: -Infinity })
    return mostProfitableMonth
}
