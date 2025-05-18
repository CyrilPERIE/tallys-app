import { Bet } from "@prisma/client";
import prisma from "@/lib/prisma/prisma";

export class BetService {
    async create(data: Pick<Bet, "amount" | "courseId" | "horseNums">) {
        return await prisma.bet.create({ data });
    }
}