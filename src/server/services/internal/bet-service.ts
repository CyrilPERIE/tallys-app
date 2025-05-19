import { Bet, BetStrategy } from "@prisma/client";
import prisma from "@/lib/prisma/prisma";

type createProps = Pick<Bet, "amount" | "courseId" | "horseNums" | "strategy">;
export class BetService {
    async create(data: createProps) {
        return await prisma.bet.create({ data });
    }
}