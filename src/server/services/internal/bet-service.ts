import { Bet, BetStrategy } from "@prisma/client";
import prisma from "@/lib/prisma/prisma";
import { Prisma } from "@prisma/client";

type createProps = Pick<Bet, "amount" | "courseId" | "horseNums" | "strategy">;
type findAllProps = {where?: Prisma.BetWhereInput};
export class BetService {
    async create(data: createProps) {
        return await prisma.bet.create({ data });
    }

    async findAll(where?: findAllProps) {
        return await prisma.bet.findMany({ where: where?.where });
    }
    
    async update(id: number, data: Partial<Bet>) {
        return await prisma.bet.update({ where: { id }, data });
    }
}