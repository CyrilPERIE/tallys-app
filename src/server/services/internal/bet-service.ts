import { Bet } from "@prisma/client";
import prisma from "@/lib/prisma/prisma";
import { Prisma } from "@prisma/client";

type createProps = Pick<Bet, "amount" | "courseId" | "horseNums" | "strategy">;
type findAllWhereProps = {where?: Prisma.BetWhereInput};
type findAllOrderByProps = {orderBy?: Prisma.BetOrderByWithRelationInput};
type findAllTakeProps = {take?: number};
type findAllProps = findAllWhereProps & findAllOrderByProps & findAllTakeProps;
export class BetService {
    async create(data: createProps) {
        return await prisma.bet.create({ data });
    }

    async findAll(props?: findAllProps) {
        return await prisma.bet.findMany({ where: props?.where, orderBy: props?.orderBy, take: props?.take });
    }
    
    async update(id: number, data: Partial<Bet>) {
        return await prisma.bet.update({ where: { id }, data });
    }
}