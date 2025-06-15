import { Bet } from "@prisma/client";
import prisma from "@/lib/prisma/prisma";
import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

type createProps = Pick<Bet, "amount" | "courseId" | "horseNums" | "strategy" | "betType">;
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

    async aggregate(args: Prisma.Subset<Prisma.BetAggregateArgs<DefaultArgs>, Prisma.BetAggregateArgs<DefaultArgs>>) {
        return await prisma.bet.aggregate(args);
    }
}